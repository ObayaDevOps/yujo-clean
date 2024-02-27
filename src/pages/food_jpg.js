import { useToast, Box, Flex } from '@chakra-ui/react'
import { useEffect } from "react";

import Navbar from '../components/navbar'
import ImageSlider from '../components/imageSlider'

export default function FoodMenu() {

// https://stackoverflow.com/questions/36382249/embed-pdf-in-mobile-browsers
    return (
      <Box bg={'black'} minHeight={'99vh'}>
        <Navbar />

        <Flex mt={'5vh'}>
          <ImageSlider />
        </Flex>

      </Box>      
    )
  }
