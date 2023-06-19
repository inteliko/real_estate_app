import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import Link from "next/link";

import { HiHomeModern } from 'react-icons/hi2'
import { navigationLinks } from "../../NavigationConsts";

const NavigationMoible = () =>{
    return (<Box color='blue.600' padding="2rem" backgroundColor="white" display={{base: "block", md:"none" }}
    >
    
      <Flex justifyContent="space-between" alignItems="center" >
        <Link href= "/">
      <Box display="flex" gap="2" alignItems="center" >
        <HiHomeModern size="30"/>
        
        <Text fontSize="2xl" fontWeight="black" >Bangla Village</Text>
      </Box>
      </Link>
      <Menu>
        <MenuButton  as={IconButton}
         aria-lael="Options"
         icon={<HamburgerIcon />}
         variant="outline"
          />
        <MenuList>
            { navigationLinks.map((item) => (
                <NavigationLinks key={item.title} {...item} />
            ))}
        </MenuList>
      </Menu>


      </Flex>
      </Box>
   
    
    
    
    );
}

export default NavigationMoible



const NavigationLinks = ({title, link, icon}) => {
    return (
      <Link href={link}>
        <MenuItem  alignItems="center" gap="0.5rem">
  
          {icon}
          {title}
  
        </MenuItem>
        </Link>
  
    );
  };