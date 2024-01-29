import '@/styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

//fonts - https://github.com/chakra-ui/chakra-ui/discussions/7235
import { Bagel_Fat_One, Concert_One, Chewy, Sniglet, Russo_One, Poor_Story,Permanent_Marker,Nanum_Brush_Script, Itim } from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer' 




import { extendTheme } from '@chakra-ui/react'

const headingFont = Permanent_Marker({ subsets: [ 'latin' ], weight: ['400'] })
const bubblyNavBarFont = Itim({ subsets: [ 'latin' ], weight: ['400'] })
const bodyFont = Poor_Story({ subsets: [ 'latin' ], weight: ['400'] })

const theme = extendTheme({
  fonts: {
    headingFont: headingFont.style.fontFamily,
    bodyFont: bodyFont.style.fontFamily,
    bubblyNavBarFont: bubblyNavBarFont.style.fontFamily
  },
})


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>

      )
}
