import { useToast, Box } from '@chakra-ui/react'
import { useEffect } from "react";
import Head from 'next/head'


import SideBar from '../components/sidebar'


  export default function DrinksMenu() {

    return (
      <Box bg={'red.600'} >
        <Head>
          <title>Drinks Menu | Yujo Izakaya</title>
          <meta name="description" content="Yujo Izakaya | Japanese Restaurant" />
          <link rel="icon" href="/yujo_icon.svg" />
        </Head>
        <Box mb='-10'>
          <SideBar />
        </Box>
        
        <object data="yujo_drinks_menu.pdf" type="application/pdf" frameborder="0" width="100%" height="100%" >
           <embed src="https://drive.google.com/file/d/1dV90hNwZ0u_uokOivhDj_8osMAP2Mp5O/preview?usp=sharing" width="100%" height="1200px"/> 


            {/* <embed src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1709020974/yujo-drinks-menu-compressed.pdf" width="100%" height="1200px"/>  */}
        </object>  

        </Box>      
    )
  }
