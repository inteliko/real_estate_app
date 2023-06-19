import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import { HiHomeModern } from 'react-icons/hi2'
import { navigationLinks } from "../../NavigationConsts";


const NavigationDesktop = () =>{
    return(<Box color='white' paddingY="2rem" backgroundColor="black" display={{base: "none", md:"block" }}
    >
    
    <Box  maxwidth='1280px' margin="0" auto>
      <Flex justifyContent="space-between" alignItems="center" >
        <Link href= "/">
      <Box display="flex" gap="2" alignItems="center" >
        <HiHomeModern size="30"/>
        
        <Text fontSize="2xl" fontWeight="green" >Bangla Village</Text>
      </Box>
      </Link>
      <Flex gap="12" alignItems="center" fontSize="1xl" fontweight="medium"> 
      { navigationLinks.map((item) => (
        <NavigationLinks key={item.title}  {...item} />
      ))}
      <Button padding="1.5rem" colorScheme="twitter" fontSize='0.8rem' fontWeight='medium' > CREATE LISTING</Button> 
      </Flex>
      


      </Flex>
      </Box>
    </Box>
    
    
    
    );
        
      
};

export default NavigationDesktop

const NavigationLinks = ({title, link, icon}) => {
  return (
    <Link href={link}>
      <Flex  alignItems="center" gap="0.5rem">

        {icon}
        {title}

      </Flex>
      </Link>

  );
};