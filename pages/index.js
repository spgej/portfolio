import Head from 'next/head'
import { Image } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from "/components/Navbar"
import { Button, ButtonGroup, Divider, Stack } from '@chakra-ui/react'
import Footer from "/components/Footer"
import { Box } from '@chakra-ui/react'
import { VscDeviceMobile } from "react-icons/vsc"
import { GiBreakingChain, GiAerialSignal, GiTablet } from "react-icons/gi"


export default function Home() {
  return (
    <>
      <Navbar />

        <div className="fourth-container">
            <header className="App-header">
                <Image src="/images/FOURTH_PAGE_ICON.svg" className="App-logo" alt="logo-border" />
                {/* <img src="/images/FOURTH_PAGE_ICON.svg" className="App-logo-2" alt="logo" /> */}
                <h1 className="cta">Fourth Page</h1>
                <h6 className="subheading">Web Development</h6>
                <ButtonGroup size="md" variant="outline" isAttached>
                  <Link href="/Portfolio" passHref>
                    <Button
                    _hover={{
                      color:"#32DBA3",
                      borderColor: "#32DBA3",
                      boxShadow: "0 1px 12px green"
                    }}
                  >portfolio</Button>
                  </Link>
                  <Button onClick={() => window.location = 'mailto:samuel@fourthpage.com?subject=New_Project'}
                       _hover={{
                      color:"#32DBA3",
                      borderColor: "#32DBA3",
                      boxShadow: "0 1px 12px green"
                    }}
                  >contact</Button>
                </ButtonGroup>
            </header>
        </div>
    <div className={styles.container}>
      <Head>
        <title>Fourth Page Web Development</title>
        <meta name="description" content="Fourth Page Web Development. Create your digital presence, get found and look good." />
        <meta property="og:url" content="https://www.fourthpage.com" />
        <meta property="og:title" content="Fourth Page Web Development" />
        <meta property="og:description" content="Create your digital presence. Get started today." />
        <meta property="og:image" content="/images/opimg.png" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
    </div>
    <Box w="100%" h="auto" m="auto" textAlign="center" bg="border" color="#b8d3d6">
        <h1 style={{maxWidth:"1000px", margin:"auto", fontSize:"22px", padding:"20px"}}>Create your digital presence</h1>
    </Box>
    <Box h="auto" w="100%" bg="background" display="flex" flexDirection="column" padding="100px 0 200px">
          <Box className="reason-box">
                  <Box w="140px" margin="auto">
                  <GiAerialSignal
                    size="100px"
                    style={{
                      margin:"20px",
                      color:"#b8d3d6",
                      
                    }}
                   />
                  </Box>
                  <p className="reason-description">at <span className="reason-emphasis">Fourth Page</span> we <span className="reason-emphasis">make sure</span> your website gets found by using modern <span className="reason-emphasis">search engine optimization</span> tools</p>
          </Box>
          <Box className="reason-box">
                  <Box w="140px" margin="auto">
                  <GiBreakingChain
                    size="100px"
                    style={{
                      margin:"20px",
                      color:"#b8d3d6"
                    }}
                   />
                  </Box>
                  <p className="reason-description"><span className="reason-emphasis">Break free</span> from premade templates and work with us to craft <span className="reason-emphasis">custom components</span> for your website </p>
          </Box>
          <Box className='reason-box'>
                  <Box w="140px" margin="auto">
                  <VscDeviceMobile
                    size="100px"
                    style={{
                      margin:"20px",
                      color:"#b8d3d6"
                    }}
                   />
                  </Box>
                  <p className="reason-description">around <span className="reason-emphasis">70 percent</span> of internet traffic is on mobile devices. we ensure your website is <span className="reason-emphasis">optimized</span> for not just desktop, but everything else</p>
          </Box>
          <ButtonGroup size="lg" variant="outline" margin="20px auto" color="white" paddingBottom="75px">
          <Button onClick={() => window.location = 'mailto:samuel@fourthpage.com?subject=New_Project'} _hover={{
                      color:"#32DBA3",
                      borderColor: "#32DBA3",
                      boxShadow: "0 1px 12px green"
                    }}>Get Started</Button>
          </ButtonGroup>
    </Box>
   
    <Footer />
    </>
  )
}
