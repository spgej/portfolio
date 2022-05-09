import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import Link from "next/link"


const Navbar = () => {
  return (
        <Breadcrumb separator="" color="text" bg="border" fontFamily="Nexa Bold" textTransform="uppercase" padding="1rem">
          <BreadcrumbItem isCurrentPage>
            <Link href="/">
              <BreadcrumbLink padding="0 20px" _hover={{color:"#32DBA3"}}>home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/About">
              <BreadcrumbLink padding="0 20px" _hover={{color:"#32DBA3"}}>about</BreadcrumbLink>
            </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <Link href="/Portfolio">
              <BreadcrumbLink padding="0 20px" _hover={{color:"#32DBA3"}}>portfolio</BreadcrumbLink>
            </Link>
        </BreadcrumbItem>
        </Breadcrumb>
  )
}

export default Navbar