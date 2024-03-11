import Head from 'next/head'
import Image from 'next/image'

import { Box} from '@chakra-ui/react'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../util/cloudinaryImageRetreival';

import SideBar from '../components/sidebar'

import NextLink from 'next/link'


export default function Home() {
  return (
    <Box >
      <Head>
        <title>Yujo Izakaya: Japanese Kitchen and Cocktail bar with some West Coast Flare</title>
        <meta name="description" content="Japanese Kitchen and Cocktail bar with some West Coast Flare" />
        <meta property="og:title" content="Yujo Izakaya" />
        <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1710195209/yujo4_eaxmbe.png" />
        <meta property="og:url" content="https://www.yujo.ug/" />


        <link rel="icon" href="/yujo_icon.svg" />
      </Head>

    
      
      <Box bg={'red.600'} minH={'98vh'} >

        <Box>
          <SideBar />
        </Box>


        <Box position='relative' >
        {/* <AbsoluteCenter mt={{base: 40, md: 0}}> */}
        <Box position='absolute' top='80%' left='50%'
          transform={{base:'translate(-50%, 15vh)', md:'translate(-50%, 20vh)'}}  >
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
