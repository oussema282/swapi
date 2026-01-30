import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '@/config/branding';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8 prose prose-sm dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: January 30, 2026</p>

        <h2>1. Introduction</h2>
        <p>
          {APP_NAME} ("we", "our", or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, and safeguard your information 
          when you use our service.
        </p>

        <h2>2. Information We Collect</h2>
        
        <h3>2.1 Information You Provide</h3>
        <ul>
          <li><strong>Account Information:</strong> Email address, display name, and password</li>
          <li><strong>Profile Information:</strong> Bio, location (optional), and profile photo</li>
          <li><strong>Item Listings:</strong> Photos, descriptions, and categories of items you list</li>
          <li><strong>Communications:</strong> Messages exchanged with other users</li>
        </ul>

        <h3>2.2 Information Collected Automatically</h3>
        <ul>
          <li><strong>Device Information:</strong> Device type, operating system, and browser</li>
          <li><strong>Usage Data:</strong> App interactions, features used, and time spent</li>
          <li><strong>Location Data:</strong> Approximate location for distance calculations (with permission)</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and maintain our service</li>
          <li>Match you with relevant items and users</li>
          <li>Process transactions and subscriptions</li>
          <li>Send important notifications about your account</li>
          <li>Improve our algorithms and user experience</li>
          <li>Ensure platform safety and prevent fraud</li>
        </ul>

        <h2>4. Information Sharing</h2>
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Other Users:</strong> Your profile and item information visible to matched users</li>
          <li><strong>Service Providers:</strong> Third parties who help operate our service</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
        </ul>
        <p>
          We do not sell your personal information to third parties.
        </p>

        <h2>5. Data Storage and Security</h2>
        <p>
          Your data is stored securely using industry-standard encryption. We implement 
          appropriate technical and organizational measures to protect against unauthorized 
          access, alteration, or destruction of your information.
        </p>

        <h2>6. Your Rights (GDPR)</h2>
        <p>If you are in the European Economic Area, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data</li>
          <li><strong>Portability:</strong> Receive your data in a portable format</li>
          <li><strong>Object:</strong> Object to certain processing of your data</li>
          <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
        </ul>

        <h2>7. Data Retention</h2>
        <p>
          We retain your information for as long as your account is active or as needed 
          to provide services. You may request deletion of your account and data at any time 
          through the app settings.
        </p>

        <h2>8. Cookies and Tracking</h2>
        <p>
          We use essential cookies to maintain your session and preferences. We do not 
          use third-party tracking cookies for advertising purposes.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          {APP_NAME} is not intended for users under 18 years of age. We do not knowingly 
          collect personal information from children.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of 
          significant changes through the app or via email.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          For privacy-related questions or to exercise your rights, please contact us 
          through the app or visit our website.
        </p>
      </div>
    </div>
  );
}
