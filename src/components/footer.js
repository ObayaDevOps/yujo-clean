import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    Tooltip,
    useClipboard,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaInstagram } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import { FaPhone } from "react-icons/fa";

  import { IoMdPlanet } from 'react-icons/io';
  import { HiOutlineMail } from 'react-icons/hi';  

  import Image from 'next/image'
  import NextLink from 'next/link'
  // import africaIcon from '../../public/images/icon/africa.png'
  // import africaIconWhite from '../../public/images/icon/africa-white-icon.png'
  // import coffee from '../../public/images/icon/buy-me-a-coffee.png'
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2} fontFamily={'Space Mono'}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    const { hasCopied, onCopy } = useClipboard('reservations@yujo.ug');



    return (
      <Box
        bg={useColorModeValue('blackAlpha.900', 'gray.800')}
        pt={2}
        >


              <Stack direction={'row'} spacing={6} p={2} >
                {/* <SocialButton label={'Instagram'} href={'https://www.instagram.com/yujoizakaya/'}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={'Email'}  onClick={onCopy}>
                  <HiOutlineMail />
                </SocialButton>
                <SocialButton label={'Phone'} href={'0708109856'}>
                  <FaPhone />
                </SocialButton> */}

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

                    

                <Stack marginLeft='auto' marginRight='0' >
                  <Text
                  fontFamily={'bubblyNavBarFont'}
                  fontSize={'sm'}
                  color={'white'}
                  >
                  +256 708 109856
                  </Text>
                  <Text
                  fontFamily={'bubblyNavBarFont'}
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