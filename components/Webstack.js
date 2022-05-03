import React from 'react'
import { Box } from '@chakra-ui/layout'
import { FaStore, FaServer, FaKeyboard, FaLaptopCode } from "react-icons/fa";


const Webstack = () => {
  return (
    <>
    <div className="stack-box" bg="background" color="white" style={{maxWidth: "900px", margin:"auto", height:"auto",}}>
        <Box className="stack-box-content">
        <h1 style={{fontSize:"1.5rem"}}>Front-End</h1>
        <FaLaptopCode className="icon" size="120px" style={{
          margin: "auto",
          color: "#15181D",
          margin: "5px auto"

        }} />
        <p>HTML, CSS, JavaScript, React, Chakra-ui, Next.js</p>
        </Box>
        <Box className="stack-box-content">
        <h1 style={{fontSize:"1.5rem"}}>Back-End</h1>
        <FaServer className="icon" size="120px" style={{
          margin: "auto",
          color: "#15181D",
          margin: "5px auto"

        }} />
        <p>Node.js, MongoDB, SQL</p>
        </Box>
        <Box className="stack-box-content">
        <h1 style={{fontSize:"1.5rem"}}>Workspace</h1>
        <FaKeyboard className="icon" size="120px" style={{
          margin: "auto",
          color: "#15181D",
          margin: "5px auto"

        }} />
        <p>MacOS, Windows, VSCode, Git, Terminal</p>
        </Box>
    </div>
    </>
  )
}

export default Webstack