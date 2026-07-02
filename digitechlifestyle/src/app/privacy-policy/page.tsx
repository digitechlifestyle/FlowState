import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — DigiTech Lifestyle",
  description: "How DigiTech Lifestyle collects, uses, and protects your personal data. GDPR-compliant privacy policy for UK readers.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 20px 80px" }}>

      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px" }}>
        DigiTech Lifestyle
      </p>
      <h1 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.1, margin: "0 0 16px" }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.75, maxWidth: "640px", margin: "0 0 48px" }}>
        DigiTech Lifestyle is committed to protecting your privacy. This policy explains what personal data we collect, why we collect it, how we use it, and your rights under UK GDPR. Please read it carefully.
      </p>

      <div style={{ display: "grid", gap: "20px" }}>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>1. Who We Are</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            DigiTech Lifestyle is an independent UK publication operated by Joe Robertson. The website is available at digitechlifestyle.com. For privacy enquiries, you can contact us via our <Link href="/contact" style={{ color: "var(--amber)" }}>contact page</Link>.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            Joe Robertson is the data controller for personal data collected through this website. We are based in the United Kingdom and this policy is written to comply with UK GDPR and the Data Protection Act 2018.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>2. What Data We Collect</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 12px" }}>
            We collect the following categories of personal data, depending on how you interact with our website:
          </p>
          <div style={{ display: "grid", gap: "10px" }}>
            {[
              { label: "Email address", detail: "When you subscribe to our newsletter, download a free resource, or submit a contact form. Email is required to send you content you have requested." },
              { label: "Name (optional)", detail: "If you provide your first name when subscribing, we use it to personalise emails. It is never required." },
              { label: "Analytics data", detail: "Page views, session duration, device type, browser, operating system, and approximate location (country/city level) via Google Analytics 4. This data is aggregated and anonymised." },
              { label: "IP address", detail: "Automatically collected by our hosting provider (Hostinger) and analytics tools as part of standard server logging. We do not store or process IP addresses ourselves." },
              { label: "Cookie identifiers", detail: "Google Analytics sets first-party cookies to distinguish users across sessions. No personally identifiable information is stored in these cookies." },
            ].map((item) => (
              <div key={item.label} style={{ padding: "12px 14px", background: "var(--bg-tint-amber)", borderRadius: "8px", borderLeft: "3px solid var(--amber)" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", margin: "0 0 4px" }}>{item.label}</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "12px 0 0" }}>
            We do not collect sensitive personal data (such as financial information, government ID numbers, health data, or payment card details) at any point.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>3. How We Use Your Data</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 12px" }}>We use your data only for the purposes listed below, and only where we have a lawful basis to do so under UK GDPR:</p>
          <div style={{ display: "grid", gap: "10px" }}>
            {[
              { purpose: "To send you newsletters and content updates", basis: "Consent — you opted in by subscribing" },
              { purpose: "To deliver free resource downloads you requested", basis: "Contract — fulfilling what you requested" },
              { purpose: "To respond to contact form enquiries", basis: "Legitimate interests — responding to communications" },
              { purpose: "To analyse website traffic and improve content", basis: "Legitimate interests — understanding what content is useful" },
              { purpose: "To comply with legal obligations", basis: "Legal obligation — where law requires us to retain records" },
            ].map((item) => (
              <div key={item.purpose} style={{ padding: "12px 14px", background: "var(--bg-tint-amber)", borderRadius: "8px", display: "grid", gap: "4px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)", margin: 0 }}>{item.purpose}</p>
                <p style={{ fontSize: "12px", color: "var(--amber)", margin: 0 }}>Lawful basis: {item.basis}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "12px 0 0" }}>
            We will never sell your personal data to third parties or use it for purposes other than those listed above without your explicit consent.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>4. Email Marketing (MailerLite)</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            We use <strong style={{ color: "var(--fg)" }}>MailerLite</strong> to manage our email subscriber list and send newsletters. When you subscribe, your email address (and optional name) is stored on MailerLite&apos;s servers, which are located in the European Economic Area (EEA) and are GDPR-compliant.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            MailerLite may set tracking pixels within emails to measure open rates and click activity. This helps us understand which content is most useful to our readers. You can disable email tracking by turning off image loading in your email client.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            Every marketing email includes an unsubscribe link. You can unsubscribe at any time — your data will be removed from our active list within 72 hours. You can also request deletion by contacting us directly.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>5. Analytics (Google Analytics 4)</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            We use <strong style={{ color: "var(--fg)" }}>Google Analytics 4 (GA4)</strong> to understand how visitors use this website. GA4 collects anonymised data including pages visited, time on site, device type, browser, and general geographic location (country or city — never your precise address).
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            GA4 is configured with IP anonymisation enabled. Data is processed by Google LLC, which is certified under the EU-US Data Privacy Framework. We do not use Google Analytics data to personally identify you or to serve targeted advertising.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            You can opt out of Google Analytics tracking at any time by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber)" }}>Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>6. Cookies</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 12px" }}>
            Cookies are small text files stored in your browser. DigiTech Lifestyle uses the following cookies:
          </p>
          <div style={{ display: "grid", gap: "10px" }}>
            {[
              { name: "_ga, _ga_XXXXXXXX", type: "Analytics", purpose: "Set by Google Analytics 4 to distinguish users and track sessions. Expires after 2 years." },
              { name: "Session storage", type: "Functional", purpose: "Used by our newsletter unlock system to remember when you have subscribed during a browsing session. Not persistent." },
            ].map((cookie) => (
              <div key={cookie.name} style={{ padding: "12px 14px", background: "var(--bg-tint-amber)", borderRadius: "8px" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                  <code style={{ fontSize: "11px", background: "oklch(20% 0.02 78)", padding: "2px 6px", borderRadius: "4px", color: "var(--amber)" }}>{cookie.name}</code>
                  <span style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 700 }}>{cookie.type}</span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{cookie.purpose}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "12px 0 0" }}>
            You can control or delete cookies via your browser settings. Disabling cookies will not affect your ability to read content on this website, but may affect newsletter unlock functionality.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>7. Affiliate Links and Third-Party Partners</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            Some links on this website are affiliate links. When you click an affiliate link, you may be redirected through a third-party tracking system (such as those operated by Coinbase, Kraken, Ledger, Koinly, Writesonic, and others) before arriving at the partner&apos;s website. These third-party systems may set their own cookies to track referrals.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            We do not receive your personal data from these affiliate partners, only a commission if you make a qualifying purchase or sign-up. Each partner has their own privacy policy governing how they handle your data.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            For more details on how we handle affiliate relationships, see our <Link href="/affiliate-disclosure" style={{ color: "var(--amber)" }}>Affiliate Disclosure</Link>.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>8. Data Retention</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            We retain your personal data only for as long as necessary:
          </p>
          <ul style={{ margin: "10px 0 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
            {[
              "Email subscribers: retained for as long as you remain subscribed. Removed within 72 hours of unsubscribing.",
              "Contact form data: retained for up to 12 months to allow us to respond to and resolve any follow-up queries.",
              "Analytics data: retained in Google Analytics for 14 months (Google's default), after which it is automatically deleted.",
              "Server logs: retained by Hostinger for up to 30 days as standard server infrastructure logs.",
            ].map((item) => (
              <li key={item} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>9. Your Rights Under UK GDPR</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "0 0 12px" }}>
            As a UK resident, you have the following rights regarding your personal data:
          </p>
          <div style={{ display: "grid", gap: "8px" }}>
            {[
              { right: "Right to access", detail: "Request a copy of the personal data we hold about you." },
              { right: "Right to rectification", detail: "Ask us to correct inaccurate or incomplete data." },
              { right: "Right to erasure", detail: "Request deletion of your personal data (\"right to be forgotten\")." },
              { right: "Right to restrict processing", detail: "Ask us to limit how we use your data in certain circumstances." },
              { right: "Right to data portability", detail: "Receive your data in a structured, machine-readable format." },
              { right: "Right to object", detail: "Object to processing based on legitimate interests or for direct marketing." },
              { right: "Right to withdraw consent", detail: "Where processing is based on consent, withdraw it at any time without penalty." },
            ].map((item) => (
              <div key={item.right} style={{ padding: "10px 14px", background: "var(--bg-tint-amber)", borderRadius: "8px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--amber)", whiteSpace: "nowrap", paddingTop: "1px" }}>{item.right}</span>
                <span style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6 }}>{item.detail}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "14px 0 0" }}>
            To exercise any of these rights, contact us via our <Link href="/contact" style={{ color: "var(--amber)" }}>contact page</Link>. We will respond within 30 days. You also have the right to lodge a complaint with the <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber)" }}>Information Commissioner&apos;s Office (ICO)</a> at any time.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>10. Data Security</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            We take data security seriously. Our website is served over HTTPS (TLS encryption) at all times. Email subscriber data is stored by MailerLite, which implements industry-standard security measures including encryption at rest and in transit, access controls, and regular security audits.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: "10px 0 0" }}>
            No system is completely secure. If you become aware of any security concern relating to this website or your data, please contact us immediately via our <Link href="/contact" style={{ color: "var(--amber)" }}>contact page</Link>.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>11. Children&apos;s Privacy</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            DigiTech Lifestyle is intended for adults aged 18 and over. We do not knowingly collect personal data from children under 18. If you believe a child has submitted personal data to us, please contact us immediately and we will delete it promptly.
          </p>
        </div>

        <div style={{ padding: "22px 24px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", margin: "0 0 10px" }}>12. Changes to This Policy</h2>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
            We may update this Privacy Policy from time to time to reflect changes in law, technology, or our practices. When we make significant changes, we will update the &quot;Last updated&quot; date at the bottom of this page. We encourage you to review this policy periodically. Continued use of the website after changes constitutes acceptance of the updated policy.
          </p>
        </div>

      </div>

      <div style={{ marginTop: "40px", padding: "20px 24px", background: "oklch(73% 0.17 78 / 0.08)", border: "1px solid oklch(73% 0.17 78 / 0.25)", borderRadius: "12px" }}>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, margin: "0 0 10px" }}>
          Questions about how we handle your data? Get in touch — we aim to respond within 2 working days.
        </p>
        <Link href="/contact" style={{ fontSize: "13px", fontWeight: 700, color: "var(--amber)" }}>
          Contact DigiTech Lifestyle →
        </Link>
      </div>

      <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "32px", lineHeight: 1.6, opacity: 0.6 }}>
        Last updated: June 2026. DigiTech Lifestyle is an independent UK publication operated by Joe Robertson. Registered in England and Wales.
      </p>

    </main>
  );
}
