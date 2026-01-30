import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '@/config/branding';

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Terms of Service</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8 prose prose-sm dark:prose-invert">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: January 30, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using {APP_NAME}, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our service.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use {APP_NAME}. By using our service, 
          you represent and warrant that you meet this age requirement.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials 
          and for all activities that occur under your account. You agree to notify us 
          immediately of any unauthorized use of your account.
        </p>

        <h2>4. User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Post false, misleading, or fraudulent content</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Use the platform for any illegal purposes</li>
          <li>Attempt to circumvent security measures</li>
          <li>Create multiple accounts to evade restrictions</li>
        </ul>

        <h2>5. Prohibited Items</h2>
        <p>The following items are strictly prohibited from being listed on {APP_NAME}:</p>
        <ul>
          <li><strong>Illegal Items:</strong> Any items prohibited by local, state, or federal law</li>
          <li><strong>Weapons:</strong> Firearms, ammunition, explosives, or dangerous weapons</li>
          <li><strong>Drugs:</strong> Illegal drugs, controlled substances, or drug paraphernalia</li>
          <li><strong>Stolen Property:</strong> Any items obtained through theft or illegal means</li>
          <li><strong>Counterfeit Goods:</strong> Fake or replica branded items</li>
          <li><strong>Hazardous Materials:</strong> Toxic, flammable, or otherwise dangerous substances</li>
          <li><strong>Adult Content:</strong> Pornographic or sexually explicit materials</li>
          <li><strong>Personal Information:</strong> Documents containing others' personal data</li>
          <li><strong>Living Creatures:</strong> Animals or any living organisms</li>
        </ul>

        <h2>6. Exchange Transactions</h2>
        <p>
          {APP_NAME} facilitates connections between users for item exchanges. We are not a party 
          to any exchange transaction and do not guarantee the quality, safety, or legality 
          of items exchanged. Users are solely responsible for verifying items before completing exchanges.
        </p>

        <h2>7. Dispute Resolution</h2>
        <p>
          In the event of a dispute between users, we encourage direct communication to 
          resolve issues. {APP_NAME} may, at its discretion, provide mediation assistance 
          but is not obligated to do so.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          {APP_NAME} is provided "as is" without warranties of any kind. We are not liable 
          for any damages arising from your use of the platform, including but not limited 
          to direct, indirect, incidental, or consequential damages.
        </p>

        <h2>9. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account at any time for 
          violation of these terms or for any other reason at our sole discretion.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of {APP_NAME} after 
          changes constitutes acceptance of the new terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          For questions about these Terms of Service, please contact us through the app 
          or visit our website.
        </p>
      </div>
    </div>
  );
}
