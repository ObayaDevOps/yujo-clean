import '@/styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

//fonts - https://github.com/chakra-ui/chakra-ui/discussions/7235
import { Poor_Story,Permanent_Marker, Jost } from 'next/font/google'
import Footer from '../components/footer' 

import { extendTheme } from '@chakra-ui/react'

//https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9
import { Global, css } from '@emotion/react'
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

const headingFont = Permanent_Marker({ subsets: [ 'latin' ], weight: ['400'] })
const navBarFont = Jost({ subsets: [ 'latin' ], weight: ['400'] })
const bodyFont = Poor_Story({ subsets: [ 'latin' ], weight: ['400'] })

const theme = extendTheme({
  fonts: {
    headingFont: headingFont.style.fontFamily,
    bodyFont: bodyFont.style.fontFamily,
    navBarFont: navBarFont.style.fontFamily
  },
})


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />

      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>

      )
}
