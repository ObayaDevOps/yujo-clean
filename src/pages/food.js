import { useToast, Box } from '@chakra-ui/react'
import { useEffect } from "react";

import Navbar from '../components/navbar'


export default function FoodMenu() {
  // /https://stackoverflow.com/questions/58314040/how-can-i-show-a-chakra-ui-toast-programmatically
  // const toast = useToast();
  // const id = 'test-toast'

  // useEffect(() => {
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



// https://stackoverflow.com/questions/36382249/embed-pdf-in-mobile-browsers
    return (
      <Box bg={'red.600'} minHeight={'100vh'}>
        <Navbar />

        <object data="yujo_food_menu.pdf" type="application/pdf" frameBorder="0" width="100%" height="100%" >
            {/* <embed src="https://drive.google.com/file/d/1yaYBi6NA20U1zyoRvqsX5840TmfFusL9/preview?usp=sharing" width="100%" height="1200px"/>  */}
        
            <embed src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1706598721/yujo-food.pdf" width="100%" height="1200px"/> 
        </object>  
      </Box>      
    )
  }
