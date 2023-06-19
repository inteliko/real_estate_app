import {Box, Flex, SimpleGrid, Text} from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import {services, about, ourOffice, workWithUs, ourOffices } from "./footerConsts"


const Footer = () => {
    return (
        <Box backgroundColor="blue.700">
            <Box maxWidth='1280px'
             margin= "0 quto"
             paddinggY= "2rem"
              paddingX={{base: "2rem", sm: "0"}}>
                <SimpleGrid columns='4' color='whiteAlpha.900'
                gap="1.7rem"
                minChildWidth="150px">
                    
                    <Flex flexDirection="column" >
                        <FooterHeader title="Services" />
                        {services.map((item) => (
                            <FooterLink key={item.name} {...item} />
                        ))}  
                    </Flex>

                    <Flex flexDirection="column" >
                        <FooterHeader title="About" />
                        {about.map((item) => (
                            <FooterLink key={item.name} {...item} />
                        ))}  
                    </Flex>

                    <Flex flexDirection="column" >
                        <FooterHeader title="Our Office" />
                        {ourOffices.map((item) => (
                            <FooterLink key={item.name} {...item} />
                        ))}  
                    </Flex>

                    <Flex flexDirection="column" >
                        <FooterHeader title="Work With Us" />
                        {workWithUs.map((item) => (
                            <FooterLink key={item.name} {...item} />
                        ))}  
                    </Flex>
                </SimpleGrid>


            </Box>
            <Box backgroundColor="blue.900" display="flex"
            padding="2rem"
            justifyContent="center"
            flexDirection="column"
            color="white"
            >

                <Box display="flex" gap="2" alignItems="center">
                    <HiHomeModern />
                    <Text fontSize="lg" fontWeight="light">
                        All Right Reserved @ Copyright By Banglavillage.net 
                    </Text>

                </Box>

                
            
    
            </Box>

        </Box>
       
    );
};

export default Footer;

const FooterLink = ({ name, link}) => {
    return(
        <Text>
            <Link href={link}>{name}</Link>
        </Text>
    );
};

const FooterHeader = ({ title }) => {
    return (
        <Text as="h4" fontWeight="light" fontSize="xl" marginottom="1rem">
            {title}
        </Text>
    )
}