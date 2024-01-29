import { useToast, Box } from '@chakra-ui/react'
import { useEffect } from "react";

import Navbar from '../components/navbar'


  export default function DrinksMenu() {
// https://stackoverflow.com/questions/36382249/embed-pdf-in-mobile-browsers


  // /https://stackoverflow.com/questions/58314040/how-can-i-show-a-chakra-ui-toast-programmatically
  // const toast = useToast();
  // const id = 'test-toast'

  // useEffect(() => {
  //   // Show toast every 5 seconds.
  //     toast({
  //       title: "Use 'Back' to go Home",
  //       id,
  //       // description: `Time ${new Date()}`,
  //       status: "info",
  //       position: "bottom",
  //       duration: 12000,
  //       isClosable: true
  //     });

  // }, []); 
  // Passing in empty array so this will only get called on mount



    return (
      <Box bg={'red.600'}>
        <Navbar />
        <object data="mypdf.pdf" type="application/pdf" frameborder="0" width="100%" height="100%" >
            <embed src="https://drive.google.com/file/d/1dV90hNwZ0u_uokOivhDj_8osMAP2Mp5O/preview?usp=sharing" width="100%" height="1200px"/> 
        </object>  
        </Box>      
    )
  }
