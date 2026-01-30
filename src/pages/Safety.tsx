import { ArrowLeft, Shield, MapPin, Users, AlertTriangle, Phone, Eye, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '@/config/branding';

export default function Safety() {
  const navigate = useNavigate();

  const safetyTips = [
    {
      icon: MapPin,
      title: "Meet in Public Places",
      description: "Always meet in well-lit, busy public locations like shopping centers, coffee shops, or police station parking lots.",
      tips: [
        "Choose locations with security cameras",
        "Avoid private residences for first meetings",
        "Consider meeting during daylight hours"
      ]
    },
    {
      icon: Users,
      title: "Bring Someone With You",
      description: "Having a friend or family member accompany you adds an extra layer of safety.",
      tips: [
        "Let someone know where you're going",
        "Share your live location with a trusted contact",
        "Arrange check-in times"
      ]
    },
    {
      icon: Eye,
      title: "Verify Before Meeting",
      description: "Take time to verify the other person and item before agreeing to meet.",
      tips: [
        "Review their profile and item photos carefully",
        "Ask for additional photos if needed",
        "Video call before meeting if possible"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Trust Your Instincts",
      description: "If something feels off, don't proceed. Your safety is more important than any exchange.",
      tips: [
        "Cancel if communication becomes aggressive",
        "Leave immediately if you feel unsafe",
        "Don't share personal information prematurely"
      ]
    },
    {
      icon: Phone,
      title: "Keep Communication on Platform",
      description: "Use in-app messaging until you're comfortable with the other person.",
      tips: [
        "Avoid sharing phone numbers until necessary",
        "Keep records of all communications",
        "Report suspicious behavior immediately"
      ]
    },
    {
      icon: MessageCircle,
      title: "Report Suspicious Activity",
      description: "Help keep our community safe by reporting concerning behavior.",
      tips: [
        "Use the report button on profiles and items",
        "Provide details to help our review team",
        "Block users who make you uncomfortable"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Safety Guidelines</h1>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/10 to-background py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your Safety Matters</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {APP_NAME} is designed to connect people for item exchanges. While most interactions 
            are positive, please follow these guidelines to stay safe when meeting in person.
          </p>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
        {safetyTips.map((tip, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <tip.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                  <CardDescription>{tip.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tip.tips.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}

        {/* Emergency Notice */}
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
              <div>
                <p className="font-semibold text-destructive">In Case of Emergency</p>
                <p className="text-sm text-muted-foreground mt-1">
                  If you ever feel in immediate danger, contact your local emergency services immediately. 
                  Your personal safety should always be your top priority.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="text-center text-sm text-muted-foreground py-4">
          <p>
            {APP_NAME} provides a platform for connecting users but is not responsible 
            for the actions of individual users. Please exercise caution and good judgment 
            in all interactions.
          </p>
        </div>
      </div>
    </div>
  );
}
