import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from "/components/Navbar"
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import Footer from "/components/Footer"
import Logo from '../components/Logo'


export default function Home() {
  return (
    <>
      <Navbar />

        <div className="fourth-container">
            <header className="App-header">
                <Logo />                
                <h1 className="cta">Fourth Page</h1>
                <h6 className="subheading">Web Development</h6>
                <ButtonGroup size="md" variant="outline" isAttached>
                  <Button>contact</Button>
                  <Button>portfolio</Button>
                </ButtonGroup>
            </header>
        </div>
    <div className={styles.container}>
      <Head>
        <title>Fourth Page Web Development</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      
    </div>
    <Footer />
    </>
  )
}
