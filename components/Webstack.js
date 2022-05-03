import React from 'react'
import { Box } from '@chakra-ui/layout'
import { FaStore } from "react-icons/fa";

const Webstack = () => {
  return (
    <Box className="container-box" style={{width: "100%"}}>
    <Box className="stack-box" bg="background" color="white" style={{maxWidth: "900px", margin:"auto"}}>
        <Box className="stack-box-content">
        <h1 style={{fontSize:"1.5rem"}}>Front-End</h1>
        <FaStore className="icon" size="120px" style={{
          margin: "auto",
          color: "#15181D",
          margin: "20px auto"

        }} />
        <p>HTML, CSS, JavaScript, React, Chakra-ui, Next.js</p>
        </Box>
        <Box className="stack-box-content">
        <h1 style={{fontSize:"1.5rem"}}>Back-End</h1>
        <FaStore className="icon" size="120px" style={{
          margin: "auto",
          color: "#15181D",
          margin: "20px auto"

        }} />
        <p>Node.js, MongoDB, SQL</p>
        </Box>
        <Box className="stack-box-content">
        <h1 style={{fontSize:"1.5rem"}}>Workspace</h1>
        <FaStore className="icon" size="120px" style={{
          margin: "auto",
          color: "#15181D",
          margin: "25px auto"

        }} />
        <p>MacOS, Windows, VSCode, Git, Terminal</p>
        </Box>
    </Box>
    </Box>
  )
}

export default Webstack