import Head from 'next/head'
import Image from 'next/image'

import { Box} from '@chakra-ui/react'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../util/cloudinaryImageRetreival';

import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'

import NextLink from 'next/link'


export default function Home() {
  return (
    <Box >
      <Head>
        <title>Yujo Izakaya</title>
        <meta name="description" content="Yujo Izakaya | Japanese Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/yujo_icon.svg" />
        
      </Head>
      
      <Box bg={'red.600'} minH={'98vh'} >

        {/* <Box>
          <Navbar />
        </Box> */}

        <Box>
          <SideBar />
        </Box>


        <Box position='relative' >
        {/* <AbsoluteCenter mt={{base: 40, md: 0}}> */}
        <Box position='absolute' top='80%' left='50%'
          transform={{base:'translate(-50%, 25vh)', md:'translate(-50%, 20vh)'}}  >
          <NextLink href='/about'>
            <Image
              // src={getCloudinaryImage('yujo9.svg')} 
              src={getCloudinaryImage('yujo9.svg')} 
              
              alt="Yujo Brand Logo"
              width={250}
              height= {250}
              priority={true}
              placeholder="blur"
              blurDataURL={getCloudinaryImageBlur('yujo9.svg')}
              />
              
            </NextLink>
            </Box>
        {/* </AbsoluteCenter> */}
        </Box>
        
      </Box>

    </Box>
  )
}
