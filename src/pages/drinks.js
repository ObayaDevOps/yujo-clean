import { useToast, Box } from '@chakra-ui/react'
import { useEffect } from "react";
import Head from 'next/head'


import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'


  export default function DrinksMenu() {

    return (
      <Box>
        <Head>
          <title>Drinks Menu | Yujo Izakaya</title>
          <meta name="description" content="Yujo Izakaya | Japanese Restaurant" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box mb='-10'>
          <SideBar />
        </Box>
        
        <object data="yujo_drinks_menu.pdf" type="application/pdf" frameborder="0" width="100%" height="100%" >
            <embed src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1709020974/yujo-drinks-menu-compressed.pdf" width="100%" height="1200px"/> 
        </object>  

        </Box>      
    )
  }
