import Navbar from "../../components/Navbar"
import styles from "../../styles/Home.module.css"
import Link from "next/link"
import Footer from "../../components/Footer"
import Logo from "../../components/Logo"

export default function Dev() {
    return (
        <>
           <Navbar/>
            <main className={styles.main}>
        <h1 className="cta">Portfolio</h1>

        <img src="/images/FOURTH_PAGE_ICON.svg" className="App-logo" alt="logo-border" />

        <div className={styles.grid}>
          <Link href="/NASA/App">
          <a className={styles.card}>
            <h2 className="card-head">NASA Pictures</h2>
            <p>Astronomy Picture of the Day built using React.js and the NASA APOD API.</p>
          </a>
          </Link>

          <a href="https://www.pashagrill.com" className={styles.card}>
            <h2 className="card-head">Pasha Grill</h2>
            <p>Authentic Turkish Cuisine in Beavercreek, Ohio.</p>
          </a>

          <a
            href="https://www.samuel-page.com"
            className={styles.card}
          >
            <h2 className="card-head">Personal Site</h2>
            <p>Previous personal site built using HTML, CSS, Bootstrap.</p>
          </a>

          <a
            href="https://infinite-spire-12624.herokuapp.com/"
            className={styles.card}
          >
            <h2 className="card-head">Tech Journalism</h2>
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