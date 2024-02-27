import { Box, Spinner } from '@chakra-ui/react'

import SideBar from '../components/sidebar'

import Head from 'next/head'


export default function FoodMenu() {



// https://stackoverflow.com/questions/36382249/embed-pdf-in-mobile-browsers
    return (
      <Box bg={'red.600'} >
        <Head>
          <title>Food Menu | Yujo Izakaya</title>
          <meta name="description" content="Yujo Izakaya | Japanese Restaurant" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/yujo_icon.svg" />
        </Head>

        <Box mb='-10'>
          <SideBar />
        </Box>

        <Spinner />
        <object data="yujo_food_menu.pdf" type="application/pdf" frameBorder="0" width="100%" height="100%" >
            <embed src="https://drive.google.com/file/d/1yaYBi6NA20U1zyoRvqsX5840TmfFusL9/preview?usp=sharing" width="100%" height="1200px"/> 
        
            {/* <embed src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1709019930/yujo-food-menu-compressed.pdf" width="100%" height="1200px"/>  */}
        </object>  
      </Box>      
    )
  }
