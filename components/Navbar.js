import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import Link from "next/link"


const Navbar = () => {
  return (
        <Breadcrumb color="text" bg="border" fontFamily="Nexa Light" padding="1rem">
          <BreadcrumbItem isCurrentPage>
            <Link href="/">
              <BreadcrumbLink padding="0 20px">home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/About/Dev">
              <BreadcrumbLink padding="0 20px">dev</BreadcrumbLink>
            </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <Link href="/Portfolio/Examples">
              <BreadcrumbLink padding="0 20px">portfolio</BreadcrumbLink>
            </Link>
        </BreadcrumbItem>
        </Breadcrumb>
  )
}

export default Navbar