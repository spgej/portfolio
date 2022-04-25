import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fourth Page Web Development</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Portfolio</h1>
        <div className={styles.grid}>
          <Link href="/NASA/App">
          <a className={styles.card}>
            <h2>NASA Pictures &rarr;</h2>
            <p>Astronomy Picture of the Day built using React.js and the NASA APOD API.</p>
          </a>
          </Link>

          <a href="https://www.pashagrill.com" className={styles.card}>
            <h2>Pasha Grill &rarr;</h2>
            <p>Authentic Turkish Cuisine in Beavercreek, Ohio.</p>
          </a>

          <a
            href="https://www.samuel-page.com"
            className={styles.card}
          >
            <h2>Personal Site &rarr;</h2>
            <p>Developer information and technologies used.</p>
          </a>

          <a
            href="https://infinite-spire-12624.herokuapp.com/"
            className={styles.card}
          >
            <h2>Tech Journalism &rarr;</h2>
            <p>
              Recreation of IGN using Bootstrap, MongoDB, EJS. Deployed using Heroku.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
