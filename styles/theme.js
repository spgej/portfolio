import { extendTheme } from "@chakra-ui/react";

export const newTheme = extendTheme({
    colors: {
        background: "#282c34",
        text: "#eaeaea",
        border:"#15181D"
    },
    components: {
        Button: {
            baseStyle: {
                fontFamily: "Nexa Light"
            }
        }
    }
})