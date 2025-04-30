'use client'

import React, { ReactNode, useRef } from 'react'
import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'

import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'


import NextImage from 'next/image'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../util/cloudinaryImageRetreival';


import { PiBowlFoodLight } from "react-icons/pi";
import { GiSewingMachine } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { GiBeerBottle } from "react-icons/gi";

import { GiEarthAfricaEurope } from "react-icons/gi";
import { GiColombianStatue } from "react-icons/gi";



const LinkItems = [
  { name: 'Home', href: '/#' },
  { name: 'Food Menu', href: '/food' },
  { name: 'Drinks Menu',  href: '/drinks' },
  { name: 'About',  href: '/about' },
  // { name: 'Book a Table', icon: VscLaw, href: 'https://www.linkedin.com/company/silicon-advocates/' },
  { name: 'Order Online - Glovo', href: 'https://glovoapp.com/ug/en/kampala/yujo-izakaya-kpa/' },
  { name: 'Order Online - Eatz', href: 'https://eats.biz/yujo' },
  // { name: 'Book a Table', icon: VscLaw, href: 'https://www.linkedin.com/company/silicon-advocates/' },

]

export default function SimpleSidebar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const initialRef = useRef();
    const drawerContentRef = useRef(null);


  return (
    <Box>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', lg: 'none' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        initialFocusRef={drawerContentRef}

        // initialFocusRef={initialRef}
        _focus={{ border: 'none' }}
        trapFocus='false'
        size="full">
        <DrawerContent ref={drawerContentRef}>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', lg:'flex' }} onOpen={onOpen} showNavIcon={props.showNavIcon} />
      <Box ml={{ base: 0, lg: 0 }} p="4">
        {/* Content */}
        
      </Box>
    </Box>
  )
}


const SidebarContent = ({ onClose, ...rest }) => {

  return (
    <Box>
      <Box
        bg={'black'}
        w={{ base: 'full' }}
        pos="fixed"
        h="full"
        overflowY='auto'
        top='0'
        bottom='20'
        {...rest}>
        {/* <Flex h={{base:"16", md: "24",lg:"10"}} alignItems="center" mx="8" justifyContent="space-between">
          <CloseIcon w={7} h={7} mt={{base:2, lg: 10}} color={'white'} onClick={onClose} mt={{base: 6}} />
        
        </Flex> */}
        <Box mt={12}>
          <Flex h={{base:"16", md: "24",lg:"10"}} alignItems="center" mx="8" justifyContent="space-between" pb={8}>
            <CloseIcon w={7} h={7} mt={{base:-6, md: -4}} color={'white'} onClick={onClose} 
            //mt={{base: 6}}
            
            />
          </Flex>
          
          {LinkItems.map((link) => (
            <NavItem key={link.name} href={link.href}>
              {link.name}
            </NavItem>
          ))}
        </Box>
      </Box>    
    </Box>
    
  )
}


const NavItem = ({ icon, href, children, ...rest }) => {
  return (
    <Box
      as="a"
      href={href}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        borderColor='green'
        // role="group"
        // cursor="pointer"
        _hover={{
          bg: 'red.700',
          color: 'white',
        }}
        {...rest}>

        <Text 
        fontFamily={'navBarFont'}
        color='white'
        fontSize={{base:'2xl',md:'4xl', lg: '4xl'}}
        >
          {children}
        </Text>
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, showNavIcon, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0 }}
      px={{ base: 4 }}
      height="20"
      alignItems="center"
      // bg={'red.600'}
      justifyContent="flex-start"
      {...rest}>

      <IconButton
        variant="ghost"
        color='white' 
        size='lg' 
        // w={8} 
        // h={8}
        // mt={{lg:20}}
        onClick={onOpen}
        aria-label="open menu"
        icon={<HamburgerIcon  w={8} h={8} />}
        p={{base: 2, md: 6}}
        mb={2}
        rounded='none'
        _hover={{
          transform: 'scale(1.1)',
        }}
      />

        { showNavIcon && (
            
        
            <Flex flex={{ base: 1 }} ml={{base: -12, md:-16}} mb={2} justify={{ base: 'center' }}>
            <Box 
            // as='a' href='/#'
            >
                <NextImage
                  // src={"/neko-logo.svg"} 
                  src={getCloudinaryImage('yujo5-cropped-cropped_jnum1y.svg')} 
                  height={50} width={50}
                  alt={'Yujo logo'}
        
                ></NextImage>
              </Box>
              </Flex>
  
        )}

    </Flex>
  )
}