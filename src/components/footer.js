import {
    Box,
    Stack,
    Text,

    Tooltip,
    useClipboard,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaInstagram } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';  
  import { RiMapPinLine } from "react-icons/ri";
  
  export default function Footer() {
    const { hasCopied, onCopy } = useClipboard('reservations@yujo.ug');



    return (
      <Box
        bg={useColorModeValue('blackAlpha.900', 'gray.800')}
        pt={2}
        zIndex={999}
        >


              <Stack direction={'row'} spacing={6} p={2} >
                <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                    closeOnClick={false}
                    hasArrow>
                    <IconButton
                      aria-label="email"
                      color={'red.50'}
                      variant="ghost"
                      size="lg"
                      fontSize="xl"
                      icon={<HiOutlineMail />}
                      _hover={{
                        bg: 'red.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>


                    <IconButton
                    as='a'
                      aria-label="Instagram"
                      variant="ghost"
                      color={'red.50'}
                      size="lg"
                      fontSize="xl"
                      href={'https://www.instagram.com/yujoizakaya/'}
                      icon={<FaInstagram />}
                      _hover={{
                        bg: 'red.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />

                  <IconButton
                    as='a'
                      aria-label="Maps"
                      variant="ghost"
                      color={'red.50'}
                      size="lg"
                      fontSize="xl"
                      href={'https://maps.app.goo.gl/RT3ZEuogVDjsqX818'}
                      icon={<RiMapPinLine />}
                      _hover={{
                        bg: 'red.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />

                    

                <Stack marginLeft='auto' marginRight='0' pb={2}>
                  <Text
                  fontFamily={'navBarFont'}
                  fontSize={'sm'}
                  color={'white'}
                  >
                  +256 708 109856
                  </Text>
                  <Text
                  fontFamily={'navBarFont'}
                  fontSize={'sm'}
                  color={'white'}

                  >
                  36 Kyadondo Rd, Kampala
                  </Text>
                </Stack>
                
              </Stack>


      </Box>
    );
  }