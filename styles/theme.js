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
        },
        Divider: {
            baseStyle: {
                border: "solid 19px white",
                margin: "auto",
                borderWidth: "8px",
                borderRadius: "8px",
                borderColor: "#39aece"
            }

        }
    }
})