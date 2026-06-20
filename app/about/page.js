    import Navbar from '../components/Navbar'
    import Footer from '../components/Footer'
    import styles from '../components/PageLayout.module.css'

    export default function About() {
    return (
        <div className={styles.page}>
        <Navbar />
        <div className={styles.container}>
            <h1 className={styles.heading}>About gamezone.dev</h1>
            <p className={styles.subheading}>// the story behind the games</p>

            <p className={styles.paragraph}>
            gamezone.dev is run by Mohsin, an independent game developer who builds browser games from scratch. Every game on this site is hand-coded — no templates, no engines pretending to be something they're not, just real development work shipped one project at a time.
            </p>

            <p className={styles.paragraph}>
            The goal is simple: make games that load instantly in a browser, with no installs, no accounts, and no friction. Just open the link and play.
            </p>

            <h2 className={styles.sectionTitle}>What you'll find here</h2>
            <p className={styles.paragraph}>
            A growing collection of browser-playable games across genres — racing, puzzle, action, and arcade. Alongside the games, this site also shares dev breakdowns and behind-the-scenes notes on how each project was built.
            </p>

            <h2 className={styles.sectionTitle}>Why build games this way</h2>
            <p className={styles.paragraph}>
            Most casual games today are locked behind app stores, ads, or accounts before you even get to play. Mohsin builds these games to be the opposite — instant, lightweight, and free to play directly in the browser.
            </p>

            <h2 className={styles.sectionTitle}>Get in touch</h2>
            <p className={styles.paragraph}>
            Have feedback on a game, found a bug, or just want to say hi? Head over to the contact page — every message is read personally.
            </p>
        </div>
        <Footer />
        </div>
    )
    }