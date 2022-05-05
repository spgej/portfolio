import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from "/components/Navbar"
import { Button, ButtonGroup, Divider, Stack } from '@chakra-ui/react'
import Footer from "/components/Footer"
import { Box } from '@chakra-ui/react'
import { FaBroadcastTower } from "react-icons/fa"


export default function Home() {
  return (
    <>
      <Navbar />

        <div className="fourth-container">
            <header className="App-header">
                <img src="/images/FOURTH_PAGE_ICON.svg" className="App-logo" alt="logo-border" />
                {/* <img src="/images/FOURTH_PAGE_ICON.svg" className="App-logo-2" alt="logo" /> */}
                <h1 className="cta">Fourth Page</h1>
                <h6 className="subheading">Web Development</h6>
                <ButtonGroup size="md" variant="outline" isAttached>
                  <Link href="/Portfolio/Examples">
                    <Button
                    _hover={{
                      color:"#32DBA3",
                      borderColor: "#32DBA3"
                    }}
                  >portfolio</Button>
                  </Link>
                  <Button
                       _hover={{
                      color:"#32DBA3",
                      borderColor: "#32DBA3"
                    }}
                  >contact</Button>
                </ButtonGroup>
            </header>
        </div>
    <div className={styles.container}>
      <Head>
        <title>Fourth Page Web Development</title>
        <meta name="description" content="" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
    </div>
    <Box h="800px" w="100vw" bg="background" padding="30px">
          <Box maxW="800px" h="auto" bg="background" margin="auto" justifyContent="center" alignItems="center" display="flex" flexDirection="row">
                  <Box w="auto" margin="auto">
                  <FaBroadcastTower
                    size="100px"
                    style={{
                      margin:"0 20px",
                      color:"#b8d3d6"
                    }}
                   />
                  </Box>
                  <p style={{
                    color:"#32DBA3",
                    fontFamily:"Nexa Light",
                    fontSize:"23px",
                    maxWidth:"550px",
                    textTransform:"lowercase",
                  }}>at <span style={{fontFamily:"Nexa Bold", textTransform:"uppercase", fontSize:"28px", color:"#b8d3d6"}}>Fourth Page</span> we <span style={{fontFamily:"Nexa Bold", textTransform:"uppercase", fontSize:"28px", color:"#b8d3d6"}} >make sure</span> your website gets found by using modern <span style={{fontFamily:"Nexa Bold", textTransform:"uppercase", fontSize:"28px", color:"#b8d3d6"}}>search engine optimization</span> tools</p>
          </Box>
          <Divider width="400px" margin="40px auto" />
    </Box>
    <Footer />
    </>
  )
}
