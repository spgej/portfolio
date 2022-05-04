import { extendTheme } from "@chakra-ui/react";

export const newTheme = extendTheme({
    colors: {
        background: "#282c34",
        text: "#b8d3d6",
        border:"#15181D"
    },
    components: {
        Button: {
            baseStyle: {
                fontFamily: "Nexa Bold",
                textTransform: "uppercase"
            },
        },
        Divider: {
            baseStyle: {
                border: "solid 19px white",
                margin: "auto",
                borderWidth: "8px",
                borderRadius: "8px",
                borderColor: "#32DBA3"
            }

        }
    }
})