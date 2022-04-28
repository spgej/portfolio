import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import Link from "next/link"
import { Image } from '@chakra-ui/react'


const Navbar = () => {
  return (


        <Breadcrumb color="text" bg="background" fontFamily="Nexa Light" padding="30px">
          <BreadcrumbItem>
            <Link href="/">
              <BreadcrumbLink padding="0 20px">home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/">
              <BreadcrumbLink padding="0 20px">dev</BreadcrumbLink>
            </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <Link href="Portfolio/Examples">
              <BreadcrumbLink padding="0 20px">portfolio</BreadcrumbLink>
            </Link>
        </BreadcrumbItem>
        </Breadcrumb>

    
  )
}

export default Navbar