import { Box } from '@chakra-ui/layout'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Webstack from '../../components/Webstack'
import Logo from "../../components/Logo"
import styles from "../../styles/Home.module.css"
import { Image } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'



export default function Dev() {
    return (
        <Box bg="background" color="white">
            <Navbar />
            <main className="">
                <div className="dev-row">
                <Image 
                    src="/images/IMG_1459.JPG"
                    borderRadius="8px"
                    boxSize="250px"
                    m="20px"
                    alt="Samuel Page"
                    objectFit="cover"

                    />
                    <div className="dev-bio">
                        <h2 className="subheading" style={{fontSize:"40px"}}>hello. I'm Samuel.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    
                </div>
            </main>
            <Divider w="100px"/>
                 <Webstack />

                <Footer />
        </Box>
    )
}
