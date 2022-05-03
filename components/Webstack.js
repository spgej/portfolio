import React from 'react'
import { Box } from '@chakra-ui/layout'
import { FaStore, FaServer, FaKeyboard, FaLaptopCode } from "react-icons/fa";


const Webstack = () => {
  return (
    <div style={{
      maxWidth:"800px",
      margin: "auto"
    }}>
    <h2 style={{
      color:"#39aece",
      textAlign: "left",
      fontFamily: "Nexa Light",
      margin: "10px",
      paddingTop: "100px",
      fontSize: "50px",
      textTransform: "lowercase"

    }}>Webstack</h2>
    <div className="stack-box" bg="background" color="white" style={{maxWidth: "900px", margin:"auto", height:"auto",}}>
        <Box className="stack-box-content">
        <h1 className="stbxh">Front-End</h1>
        <FaLaptopCode className="icon" size="80px" style={{
          margin: "auto",
          color: "#b8d3d6",
          margin: "5px auto"

        }} />
        <p style={{paddingBottom:"10px"}}>HTML, CSS, JavaScript, React, Chakra-ui, Next.js</p>
        </Box>
        <Box className="stack-box-content">
        <h1 className="stbxh">Back-End</h1>
        <FaServer className="icon" size="80px" style={{
          margin: "auto",
          color: "#b8d3d6",
          margin: "5px auto"

        }} />
        <p style={{paddingBottom:"10px"}}>Node.js, MongoDB, SQL</p>
        </Box>
        <Box className="stack-box-content">
        <h1 className="stbxh">Workspace</h1>
        <FaKeyboard className="icon" size="80px" style={{
          margin: "auto",
          color: "#b8d3d6",
          margin: "5px auto"

        }} />
        <p style={{paddingBottom:"10px"}}>MacOS, Windows, VSCode, Git, Terminal</p>
        </Box>
    </div>
    </div>
  )
}

export default Webstack