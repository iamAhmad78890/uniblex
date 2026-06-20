import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../components/PageLayout.module.css'

export default function TermsOfService() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Terms of Service</h1>
        <p className={styles.subheading}>Last updated: June 2026</p>

        <p className={styles.paragraph}>
          By accessing and using gamezone.dev, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.
        </p>

        <h2 className={styles.sectionTitle}>Use of the site</h2>
        <p className={styles.paragraph}>
          gamezone.dev provides free browser-based games for personal, non-commercial use. You agree not to copy, redistribute, or reverse-engineer any game or content on this site without permission.
        </p>

        <h2 className={styles.sectionTitle}>User conduct</h2>
        <p className={styles.paragraph}>
          You agree not to use this site for any unlawful purpose, to disrupt site functionality, or to attempt unauthorized access to any part of the site or its underlying systems.
        </p>

        <h2 className={styles.sectionTitle}>Intellectual property</h2>
        <p className={styles.paragraph}>
          All games, code, graphics, and content on this site are the property of Mohsin unless otherwise stated, and are protected by copyright law.
        </p>

        <h2 className={styles.sectionTitle}>Third-party content</h2>
        <p className={styles.paragraph}>
          Some games featured on this site may be embedded from third-party sources. We are not responsible for the content, availability, or functionality of third-party games or services.
        </p>

        <h2 className={styles.sectionTitle}>Disclaimer</h2>
        <p className={styles.paragraph}>
          This site is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free access to games or content.
        </p>

        <h2 className={styles.sectionTitle}>Limitation of liability</h2>
        <p className={styles.paragraph}>
          gamezone.dev and Mohsin shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site.
        </p>

        <h2 className={styles.sectionTitle}>Changes to these terms</h2>
        <p className={styles.paragraph}>
          We reserve the right to update these Terms of Service at any time. Continued use of the site after changes constitutes acceptance of the updated terms.
        </p>

        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.paragraph}>
          Questions about these Terms? Reach out via the Contact page.
        </p>
      </div>
      <Footer />
    </div>
  )
}