'use client'

import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  Stack,
  Tooltip,
  useClipboard,
  FlexProps,
} from '@chakra-ui/react'

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'


import {
  FiMenu,
} from 'react-icons/fi'

import { PiBowlFoodLight } from "react-icons/pi";
import { GiSewingMachine } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { GiBeerBottle } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";
import { FaCat } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import { GiMountaintop } from "react-icons/gi";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { GiColombianStatue } from "react-icons/gi";

import { GiStakeHammer } from "react-icons/gi";




import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { HiOutlineMail } from 'react-icons/hi';  
import { RiMapPinLine } from "react-icons/ri";


const LinkItems = [
  { name: 'Home', icon: PiBowlFoodLight, href: '/#' },
  { name: 'Food Menu', icon: GiSewingMachine, href: '/food' },
  { name: 'Drinks Menu', icon: GiEarthAfricaEurope, href: 'https://www.afropocene.com/' },
  { name: 'About', icon: FaCameraRetro, href: '/about' },
  { name: 'Order Online - Glovo', icon: GiBeerBottle, href: 'https://glovoapp.com/ug/en/kampala/yujo-izakaya-kpa/' },
  { name: 'Order Online - Eatz', icon: GiColombianStatue, href: 'https://eats.biz/yujo' },
  { name: 'Book a Table', icon: VscLaw, href: 'https://www.linkedin.com/company/silicon-advocates/' },

]

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', lg: 'none' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', lg:'flex' }} onOpen={onOpen} />
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
        <Flex h={{base:"16", md: "24",lg:"10"}} alignItems="center" mx="8" justifyContent="space-between">
          {/* <CloseButton display={{ base: 'flex'}} onClick={onClose} color='white' size='9xl' mt={{lg:20}} /> */}
          <CloseIcon w={7} h={7} mt={{base:2, lg: 10}} color={'white'} onClick={onClose} mt={{base: 6}} />
        
        </Flex>
        <Box mt={12}>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} href={link.href}>
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
      href={href}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'red.700',
          color: 'white',
        }}
        {...rest}>

        <Text 
        fontFamily={'navBarFont'}
        color='white'
        fontSize={{base:'xl',md:'xl', lg: '4xl'}}
        >
          {children}
        </Text>
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0 }}
      px={{ base: 4 }}
      height="20"
      alignItems="center"
      // bg={'red.600'}
      justifyContent="flex-start"
      {...rest}>

      {/* <IconButton
        variant="ghost"
        color='white' 
        size='6xl' 
        // mt={{lg:20}}
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      /> */}

      <HamburgerIcon 
        w={8} 
        h={8}
        aria-label="open menu" 
        onClick={onOpen}

        color={'white'} />

    </Flex>
  )
}