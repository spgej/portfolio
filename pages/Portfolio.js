import Navbar from "/components/Navbar"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import Footer from "/components/Footer"
import Logo from "/components/Logo"
import { Image } from '@chakra-ui/react'

export default function Dev() {
    return (
        <>
           <Navbar/>
            <main className={styles.main}>
        <h1 className="cta">Portfolio</h1>

        <Image src="/images/FOURTH_PAGE_ICON.svg" className="App-logo" alt="logo-border" />

        <div className={styles.grid}>
          <Link href="/NASA/App">
          <a className={styles.card}>
          <Image
            src="/images/nasaapodpic.png"
            width="300px"
            margin="0"
            height="185px"
            borderRadius="4px"
            objectFit="cover"
            alt="Nasa Photogography Website"
           />
          </a>
          </Link>

          <a href="https://www.pashagrill.com" className={styles.card}>
          <Image
            src="/images/pashapic.png"
            width="300px"
            margin="0"
            height="185px"
            borderRadius="4px"
            objectFit="cover"
            alt="Nasa Photogography Website"
           />

          </a>

          <a
            href="https://www.samuel-page.com"
            className={styles.card}
          >
          <Image
            src="/images/personalsite.png"
            width="300px"
            margin="0"
            height="185px"
            borderRadius="4px"
            objectFit="cover"
            alt="Samuel Page Website"
           />          </a>

          <a
            href="https://infinite-spire-12624.herokuapp.com/"
            className={styles.card}
          >
           <Image
            src="/images/ignsite.png"
            width="300px"
            margin="0"
            height="185px"
            borderRadius="4px"
            objectFit="cover"
            alt="Nasa Photogography Website"
           />
          </a>
        </div>
      </main>
      <Footer />
        </>
    )
}