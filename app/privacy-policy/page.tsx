import './privacy-policy.css';

export default function PrivacyPolicy() {
  return (
    <main className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p><strong>App Name:</strong> AI Lawyer - Legal Advice</p>
      <p><strong>Developer:</strong> AppFusion</p>
      <p><strong>Effective Date:</strong> February 08, 2026</p>

      <p>AppFusion ("we", "us", "our") is committed to protecting your privacy and personal information when you use our mobile application <strong>AI Lawyer - Legal Advice</strong> (the "App" or "Service"). This Privacy Policy explains how we collect, use, disclose, store, and protect your information.</p>

      <p>By downloading, installing, or using the App, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the App.</p>

      <h2>1. Information We Collect</h2>

      <h3>1.1. Information You Provide Voluntarily</h3>
      <ul>
        <li>Legal questions, case descriptions, or scenarios you enter when using the AI chat or consultation features (may include sensitive personal data such as names, phone numbers, ID numbers, addresses, case details, etc.).</li>
        <li>Account information (if registration is available): email, display name.</li>
        <li>Feedback, ratings, bug reports, or support requests you submit.</li>
      </ul>

      <h3>1.2. Information Collected Automatically</h3>
      <ul>
        <li>Device information: device type, Android version, model, manufacturer, language, time zone.</li>
        <li>IP address, network information (for performance analysis and security).</li>
        <li>App usage data: screens visited, session duration, features used, number of chats, crash logs (via tools like Firebase Crashlytics, if enabled).</li>
        <li>General analytics: active users, install source (Google Play), etc.</li>
      </ul>

      <h3>1.3. Information We Do NOT Collect</h3>
      <p>We do <span className="highlight">NOT</span> require or collect:</p>
      <ul>
        <li>Phone number, precise GPS location.</li>
        <li>Contacts, messages, photos, or personal files on your device (except if you voluntarily upload files for consultation, which we process temporarily and delete afterward).</li>
        <li>Payment information (handled entirely by Google Play for in-app purchases; we do not store it).</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information to:</p>
      <ul>
        <li>Provide, maintain, and improve the AI-powered legal consultation service.</li>
        <li>Process and respond to your legal queries (AI analyzes chat content).</li>
        <li>Detect, prevent, and fix bugs, fraud, or abuse of the App.</li>
        <li>Analyze usage patterns to enhance AI quality and user experience.</li>
        <li>Send app update notifications or new feature announcements (if you allow push notifications).</li>
        <li>Comply with legal obligations or requests from competent authorities.</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We do <span className="highlight">NOT sell</span> your personal information to third parties for advertising or commercial purposes.</p>
      <p>We may share information in the following cases:</p>
      <ul>
        <li>With third-party service providers (e.g., Google Firebase for analytics/crash reporting, external AI API providers such as OpenAI, Grok/xAI, etc.) — they are only permitted to use the data to assist us and must comply with strict confidentiality.</li>
        <li>When required by law, court order, or competent governmental authorities in Vietnam or internationally.</li>
        <li>To protect the legitimate rights of AppFusion, users, or the public (e.g., in cases involving serious illegal content).</li>
      </ul>

      <h2>4. Data Storage and Security</h2>
      <ul>
        <li>Chat/legal consultation data is stored temporarily to improve the AI model and support users (maximum retention usually 30–90 days, depending on configuration).</li>
        <li>Device and analytics data retained for up to 26 months (standard for Google Analytics/Firebase).</li>
        <li>We implement appropriate technical and organizational security measures (HTTPS encryption in transit, access restrictions, periodic audits) to protect data from unauthorized access, loss, or disclosure.</li>
      </ul>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request access to, correction of, or deletion of your personal data (where technically feasible).</li>
        <li>Withdraw consent (where processing is based on consent) — this may affect certain features.</li>
        <li>Request restriction or cessation of processing.</li>
        <li>Lodge a complaint with the competent data protection authority (in Vietnam: Ministry of Public Security or designated body).</li>
      </ul>

      <p>To exercise these rights, please contact us at:</p>
      <div className="contact">
        <strong>Email:</strong> hocong.bkq@gmail.com<br />
        <strong>Phone:</strong> +84 387 684 547
      </div>
      <p>We will respond as soon as possible, within a maximum of 72 hours for urgent deletion requests.</p>

      <h2>6. Third-Party Services</h2>
      <p>The App may use the following third-party services (please review their privacy policies):</p>
      <ul>
        <li>Google Play Services / Firebase: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></li>
        <li>Google Analytics for Firebase: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></li>
        <li>(If applicable) OpenAI API: <a href="https://openai.com/policies/privacy-policy">https://openai.com/policies/privacy-policy</a></li>
        <li>(If applicable) Other AI providers (Grok/xAI, Anthropic, etc.) — check their respective links.</li>
      </ul>

      <h2>7. Children</h2>
      <p>The App is not directed to, and we do not knowingly collect data from children under 16 years of age. If we discover we have collected data from a child under 16 without parental consent, we will delete it immediately.</p>

      <h2>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. The new version will be posted at <a href="https://appfusion.tech/privacy-policy">https://appfusion.tech/privacy-policy</a> and significant changes will be notified in the App. Your continued use of the App after changes constitutes acceptance of the updated policy.</p>

      <h2>9. Contact Us</h2>
      <div className="contact">
        <strong>Developer:</strong> AppFusion<br />
        <strong>Website:</strong> <a href="https://appfusion.tech">https://appfusion.tech</a><br />
        <strong>Email:</strong> hocong.bkq@gmail.com<br />
        <strong>Phone:</strong> +84 387 684 547
      </div>

      <p>Thank you for trusting and using <strong>AI Lawyer - Legal Advice</strong>!</p>
    </main>
  );
}
