import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import Link from "next/link"


const Navbar = () => {
  return (
        <Breadcrumb separator="" color="text" bg="border" fontFamily="Nexa Bold" textTransform="uppercase" padding="20px 5px" textAlign="center" margin="auto" w="100%">
          <BreadcrumbItem isCurrentPage>
            <Link href="/" passHref>
              <BreadcrumbLink padding="0 20px" _hover={{color:"#32DBA3"}}>home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/About" passHref>
              <BreadcrumbLink padding="0 20px" _hover={{color:"#32DBA3"}}>about</BreadcrumbLink>
            </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <Link href="/Portfolio" passHref>
              <BreadcrumbLink padding="0 20px" _hover={{color:"#32DBA3"}}>portfolio</BreadcrumbLink>
            </Link>
        </BreadcrumbItem>
        </Breadcrumb>
  )
}

export default Navbar