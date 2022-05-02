import React from 'react'
import { Box } from '@chakra-ui/layout'
import { FaStore } from "react-icons/fa";

const Webstack = () => {
  return (
    <Box className="stack-box" bg="background" h="80vh" color="white">
        <Box style={{
          textAlign: "center",
          fontFamily: "Nexa Light",
          textTransform: "lowercase",

        }}>
        <h1 style={{fontSize:"2rem"}}>Front-End</h1>
        <FaStore className="icon" size="120px" style={{
          margin: "auto",
          color: "#15181D"

        }} />
        <p>HTML, CSS, JavaScript, React, Chakra-UI, Next.js</p>
        </Box>
    </Box>
  )
}

export default Webstack