import { useFocusOnPointerDown } from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/layout";
import styles from "/styles/Home.module.css"


const Footer = () => {

    const getDate = new Date();
    const currentYear = getDate.getFullYear();

    return (
        <>
            <div className={styles.footer}>
                <p>Fourth Page &copy; {currentYear} ALL RIGHTS RESERVED.</p>
            </div>
        </>
    )
}

export default Footer;