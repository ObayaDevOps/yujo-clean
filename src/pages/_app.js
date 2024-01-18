import '@/styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

//fonts - https://github.com/chakra-ui/chakra-ui/discussions/7235
import { Noto_Sans } from 'next/font/google'
import { extendTheme } from '@chakra-ui/react'

const noto = Noto_Sans({ subsets: [ 'latin' ], weight: ['400'] })
const theme = extendTheme({
  fonts: {
    noto: noto.style.fontFamily,
  },
})


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>

      )
}
