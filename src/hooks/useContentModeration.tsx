import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ModerationResult {
  is_safe: boolean;
  action: 'allowed' | 'blocked' | 'flagged' | 'review_required';
  violation_type?: string;
  reason?: string;
  confidence?: number;
}

export function useContentModeration() {
  const [isChecking, setIsChecking] = useState(false);

  const checkImage = async (
    imageUrl: string, 
    contentType: 'item_photo' | 'avatar' = 'item_photo'
  ): Promise<ModerationResult> => {
    setIsChecking(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('content-moderator', {
        body: { image_url: imageUrl, content_type: contentType }
      });

      if (error) {
        console.error('Content moderation error:', error);
        // On error, allow but warn
        return {
          is_safe: true,
          action: 'flagged',
          reason: 'Unable to verify image - flagged for review'
        };
      }

      return data as ModerationResult;
    } catch (err) {
      console.error('Content moderation exception:', err);
      return {
        is_safe: true,
        action: 'flagged',
        reason: 'Unable to verify image - flagged for review'
      };
    } finally {
      setIsChecking(false);
    }
  };

  const moderateAndUpload = async (
    file: File,
    uploadFn: (file: File) => Promise<string>,
    contentType: 'item_photo' | 'avatar' = 'item_photo'
  ): Promise<{ success: boolean; url?: string; error?: string }> => {
    setIsChecking(true);

    try {
      // First upload to get URL
      const url = await uploadFn(file);
      
      // Then check with moderator
      const result = await checkImage(url, contentType);

      if (!result.is_safe) {
        // Delete the uploaded file if blocked
        // Note: The calling code should handle deletion if needed
        
        const violationMessage = result.violation_type 
          ? `This image cannot be uploaded: ${formatViolationType(result.violation_type)}`
          : 'This image cannot be uploaded due to content policy violation';
        
        toast.error(violationMessage, {
          description: 'Please upload a different photo that shows your item clearly.',
          duration: 5000
        });

        return {
          success: false,
          error: violationMessage
        };
      }

      if (result.action === 'review_required' || result.action === 'flagged') {
        // Allow but notify user
        toast.info('Image uploaded and pending review', {
          description: 'Your image has been uploaded but may be reviewed by our team.'
        });
      }

      return {
        success: true,
        url
      };
    } catch (err) {
      console.error('Moderate and upload error:', err);
      return {
        success: false,
        error: 'Failed to upload image'
      };
    } finally {
      setIsChecking(false);
    }
  };

  return {
    checkImage,
    moderateAndUpload,
    isChecking
  };
}

function formatViolationType(type: string): string {
  const labels: Record<string, string> = {
    nudity: 'inappropriate content',
    weapons: 'weapons or firearms',
    alcohol: 'alcohol',
    drugs: 'drug-related content',
    violence: 'violent content',
    hate_symbols: 'hate symbols'
  };
  return labels[type] || type;
}
