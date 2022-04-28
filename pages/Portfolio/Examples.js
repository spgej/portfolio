import Navbar from "../../components/Navbar"
import styles from "../../styles/Home.module.css"
import Link from "next/link"
import Footer from "../../components/Footer"

export default function Dev() {
    return (
        <>
           <Navbar/>
            <main className={styles.main}>
        <h1 className="cta">Portfolio</h1>
        <img src="/images/logo-border.png" className="App-logo" alt="logo-border" />
                <img src="/images/logo.png" className="App-logo-2" alt="logo" />
        <div className={styles.grid}>
          <Link href="/NASA/App">
          <a className={styles.card}>
            <h2>NASA Pictures</h2>
            <p>Astronomy Picture of the Day built using React.js and the NASA APOD API.</p>
          </a>
          </Link>

          <a href="https://www.pashagrill.com" className={styles.card}>
            <h2>Pasha Grill</h2>
            <p>Authentic Turkish Cuisine in Beavercreek, Ohio.</p>
          </a>

          <a
            href="https://www.samuel-page.com"
            className={styles.card}
          >
            <h2>Personal Site</h2>
            <p>Developer information and technologies used.</p>
          </a>

          <a
            href="https://infinite-spire-12624.herokuapp.com/"
            className={styles.card}
          >
            <h2>Tech Journalism</h2>
            <p>
              Recreation of IGN using Bootstrap, MongoDB, EJS.
            </p>
          </a>
        </div>
      </main>
      <Footer />
        </>
    )
}