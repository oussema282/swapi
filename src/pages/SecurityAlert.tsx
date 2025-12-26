import { useState, useEffect, useRef } from "react";
import { AlertTriangle, Phone, X, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SUPPORT_PHONE = "+1 (800) 123-4567";

const SecurityAlert = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create and play alert sound
    if (soundEnabled && showPopup) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = "sine";
      gainNode.gain.value = 0.3;
      
      oscillator.start();
      
      // Beep pattern
      setTimeout(() => oscillator.stop(), 200);
      
      return () => {
        oscillator.stop();
        audioContext.close();
      };
    }
  }, [showPopup, soundEnabled]);

  const playAlertSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = "sine";
    gainNode.gain.value = 0.3;
    
    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
      audioContext.close();
    }, 200);
  };

  const handleCallSupport = () => {
    window.location.href = `tel:${SUPPORT_PHONE.replace(/\D/g, '')}`;
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Security Alert Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="border-destructive bg-destructive/10">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-6 w-6 animate-pulse" />
              Security Alert
            </DialogTitle>
            <DialogDescription className="text-foreground">
              We have detected a potential security issue with your account. 
              Please review your recent activity and contact our support team immediately if you notice any suspicious behavior.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button 
              variant="destructive" 
              onClick={handleCallSupport}
              className="w-full"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Support: {SUPPORT_PHONE}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowPopup(false)}
              className="w-full"
            >
              <X className="h-4 w-4 mr-2" />
              Dismiss Alert
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Page Content */}
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="border-destructive">
          <CardHeader className="bg-destructive/10">
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-6 w-6" />
              Security Alert Center
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {/* Alert Message */}
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
              <h3 className="font-semibold text-destructive mb-2">Important Security Notice</h3>
              <p className="text-sm text-muted-foreground">
                Your account security is our top priority. If you receive this alert, it means we've detected 
                unusual activity or a potential security threat. Please take immediate action to secure your account.
              </p>
            </div>

            {/* Sound Toggle */}
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <span className="font-medium">Alert Sound</span>
              <Button
                variant={soundEnabled ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSoundEnabled(!soundEnabled);
                  if (!soundEnabled) playAlertSound();
                }}
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="h-4 w-4 mr-2" />
                    Enabled
                  </>
                ) : (
                  <>
                    <VolumeX className="h-4 w-4 mr-2" />
                    Disabled
                  </>
                )}
              </Button>
            </div>

            {/* Contact Support Section */}
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
              <h3 className="font-semibold mb-2">Contact Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our security team is available 24/7 to assist you with any concerns.
              </p>
              <div className="flex items-center gap-2 text-lg font-mono font-bold text-primary">
                <Phone className="h-5 w-5" />
                {SUPPORT_PHONE}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button 
                variant="destructive" 
                size="lg"
                onClick={handleCallSupport}
                className="w-full"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Support Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowPopup(true)}
                className="w-full"
              >
                <AlertTriangle className="h-5 w-5 mr-2" />
                Show Alert Popup
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SecurityAlert;
