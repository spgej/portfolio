import { Box } from '@chakra-ui/layout'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Webstack from '../../components/Webstack'
import { Image } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'



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
                    m="20px"
                    alt="Samuel Page"
                    objectFit="cover"

                    />
                    <div className="dev-bio">
                        <h2 className="subheading" style={{fontSize:"50px", color:"#39AECE"}}><span style={{
                            fontFamily:"Nexa Bold",
                            fontSize: "70px",
                            textTransform:"uppercase",
                            color:"#b8d3d6"
                        }}>hello.</span> I'm Samuel.</h2>
                        <p style={{textTransform:"lowercase", color:"#b8d3d6"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    
                </div>

                <Box h="auto" display="flex" flexDir="row" w="100vw" justifyContent="center" marginBottom="50px">
                <FaLinkedin className="icon" size="40px" style={{
                    margin:"10px",
                    color:"#b8d3d6",
                }} />
                <FaGithubSquare className="icon" size="40px" style={{
                    margin: "10px",
                    color: "#b8d3d6",
                    
                }} />
                </Box>

                <Divider w="60%"/>
                 <Webstack />
            </main>
            
                <Footer />
        </Box>
    )
}
