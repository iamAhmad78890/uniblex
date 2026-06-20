import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../components/PageLayout.module.css'

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.subheading}>Last updated: June 2026</p>

        <p className={styles.paragraph}>
          This Privacy Policy explains how gamezone.dev ("we", "our", "the site") collects, uses, and protects information when you visit and use this website.
        </p>

        <h2 className={styles.sectionTitle}>Information we collect</h2>
        <p className={styles.paragraph}>
          We collect minimal information. If you use the contact form, we collect your name, email address, and message content solely to respond to you. We do not require account creation to play games on this site.
        </p>

        <h2 className={styles.sectionTitle}>Cookies and analytics</h2>
        <p className={styles.paragraph}>
          This site may use cookies and similar tracking technologies to understand how visitors use the site and to improve performance. Third-party services, including advertising partners such as Google AdSense, may also place cookies on your device to serve relevant ads.
        </p>

        <h2 className={styles.sectionTitle}>Third-party advertising</h2>
        <p className={styles.paragraph}>
          We may use third-party advertising companies to serve ads when you visit this site. These companies may use information about your visits to this and other websites to provide advertisements about goods and services of interest to you. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet.
        </p>
        <p className={styles.paragraph}>
          You may opt out of personalized advertising by visiting Google's Ads Settings.
        </p>

        <h2 className={styles.sectionTitle}>Data security</h2>
        <p className={styles.paragraph}>
          We take reasonable measures to protect any information submitted through this site. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className={styles.sectionTitle}>Children's privacy</h2>
        <p className={styles.paragraph}>
          This site does not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can remove it.
        </p>

        <h2 className={styles.sectionTitle}>Changes to this policy</h2>
        <p className={styles.paragraph}>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
        </p>

        <h2 className={styles.sectionTitle}>Contact us</h2>
        <p className={styles.paragraph}>
          If you have questions about this Privacy Policy, please reach out via the Contact page.
        </p>
      </div>
      <Footer />
    </div>
  )
}