import React from 'react'
import { Box } from '@chakra-ui/layout'

const Webstack = (props) => {
  return (
    <Box className="stack-box" bg="background" h="80vh" color="white">
        {props.content}
    </Box>
  )
}

export default Webstack