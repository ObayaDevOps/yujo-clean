import { Heading, Head, Flex,Stack, StackDivider, HStack, Text, Box,AbsoluteCenter, Container, VStack, SimpleGrid, Center, Button, AspectRatio, Alert, AlertIcon, useToast, useColorModeValue } from '@chakra-ui/react'
// import NextImage from 'next/image'

import Navbar from '../components/navbar'



export default function Order() {
    return (
        <Box bgColor={'red.600'} height={'100vh'}>
            <Navbar />

            <Container maxW={'6xl'} m={'auto'} >
                <Center>
                <VStack 
                  divider={<StackDivider borderColor='gray.200' />}
                  spacing={4}
                  align='stretch'
                  pt={20}
                
                >
                    <Flex bgColor={'red'} minH={'20vh'}>
                        Flex 1: Glovo
                    </Flex>

                    <Flex bgColor={'green'} minH={'20vh'}>
                        Flex 2: Bit.ly
                    </Flex>
                </VStack>
                </Center>
                
                


            </Container>
        </Box>
  
    )
}


