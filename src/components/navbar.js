'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

import NextLink from 'next/link'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box >
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={'solid'}
        align={'center'}
        >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}> 
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={8} h={8} color={'white'} /> : <HamburgerIcon w={8} h={8} color={'white'} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            rounded
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>


          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* Empty Stack */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity zIndex={9999}>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('red.50', 'gray.200')
  const linkHoverColor = useColorModeValue('black', 'red')
  const popoverContentBgColor = useColorModeValue('red.50', 'gray.800')

  return (
    <Stack direction={'row'} spacing={12} mt={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NextLink href={navItem.href ?? '#'} >
                <Button
                  // as="a"
                  p={4}
                  // href={navItem.href ?? '#'}
                  fontSize={'xl'}
                  fontWeight={600}
                  color={linkColor}
                  variant ='ghost'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                  fontFamily={'bubblyNavBarFont'}
                  >
                  {navItem.label}
                </Button>
              </NextLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                m={4}
                bg={'red.50'}

                // rounded={'xl'}
                // minW={'sm'}
                >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      // rounded={'md'}
      _hover={{ bg: useColorModeValue('red.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'red.900' }}
            fontWeight={500}
            fontFamily='bubblyNavBarFont'
            fontSize='xl'
            
            >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'red.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Box >
      <Stack bg={useColorModeValue('blackAlpha.800', 'gray.800')} p={4} display={{ md: 'none' }} >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </Box>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}
    >
      <Flex
        py={2}        
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
        >
        <Text fontWeight={600}  
        fontSize={'xl'} 
        as="a"
        href={href}
        color={useColorModeValue('white', 'gray.200')}      
        fontFamily={'bubblyNavBarFont'} > 
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color='white'
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={8}
            h={8}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }} zIndex={999}>
        <Stack
          // mt={2}
          pl={4}
          fontFamily='bubblyNavBarFont'
          color='white'
          align={'start'}
          fontSize={'xl'}
          >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href} >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/#',
    
  },
  {
    label: 'Food Menu',
    href: '/food',
    
  },
  {
    label: 'Drinks Menu',
    href: '/drinks',

  },
  {
    label: 'About',
    href: '/about',

  },
  {
    label: 'Order from Us',
    children: [
      {
        label: 'Glovo',
        href: 'https://glovoapp.com/ug/en/kampala/yujo-izakaya-kpa/',
      },
      {
        label: 'Eatz',
        href: 'https://eats.biz/yujo',
      },
    ],
  },
]