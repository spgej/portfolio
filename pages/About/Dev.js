import { Box } from '@chakra-ui/layout'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Webstack from '../../components/Webstack'
import Logo from "../../components/Logo"
import styles from "../../styles/Home.module.css"



export default function Dev() {
    return (
        <>
        
            <Navbar />
      

                <div className={styles.main}>
                
                 <h1 className="cta">Stack</h1>
                 <Webstack />
                 <Logo />
                </div>
                
                <Footer />
        </>
    )
}
