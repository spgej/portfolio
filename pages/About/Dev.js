import { Box } from '@chakra-ui/layout'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Webstack from '../../components/Webstack'
import { Image } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import Link from "next/link"




export default function Dev() {

    return (
        <Box className="fourth-container" bg="background" color="white">
            <Navbar />
            <main className="">
                <div className="dev-row">
                <Image 
                    src="/images/IMG_1459.JPG"
                    borderRadius="8px"
                    w="250px"
                    h="365"
                    m="30px"
                    alt="Samuel Page"
                    objectFit="cover"

                    />
                    <div className="dev-bio">
                        <h2 className="subheading" style={{fontSize:"50px", color:"#32DBA3"}}><span style={{
                            fontFamily:"Nexa Bold",
                            fontSize: "70px",
                            textTransform:"uppercase",
                            color:"#b8d3d6"
                        }}>hello.</span> I'm Samuel.</h2>
                        <p style={{textTransform:"lowercase", color:"#b8d3d6", fontFamily:"Nexa light", fontSize:"18px"}}> I started Fourth Page with the goal of helping local buisnesses create, or strengthen, their online presence during the pandemic. Whether you own a restaurant or podcast, Fourth Page is here to help you directly, speaking in terms you understand, to translate ideas into digital reality.</p>
                    </div>
                    
                </div>

                <Box h="auto" display="flex" flexDir="row" w="100vw" justifyContent="center" marginBottom="50px">
                <Link href="https://www.linkedin.com/in/samuel-page09/">
                <FaLinkedin className="icon" size="40px" style={{
                    margin:"10px",
                    color:"#b8d3d6",
                }} />
                </Link>
               <Link href="https://www.github.com/spgej">
               <FaGithubSquare className="icon" size="40px" style={{
                    margin: "10px",
                    color: "#b8d3d6",
                    
                }} />
               </Link>
                </Box>

                <Divider w="60%"/>
                 <Webstack />
            </main>
            
                <Footer />
        </Box>
    )
}
