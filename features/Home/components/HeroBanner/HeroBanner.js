import {Box, Fade, Text} from "@chakra-ui/react"
import HeroForm from "../HeroForm";
const HeroBanner = () => {
    return (
    <Fade in > 
      <Box position='relative' 
      minHeight={{ base: "110vh", sm:"60vh"}}
      backgroundImage={`url('./hero/HeroBg1.jpg')`}
      
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed">

        <Box 
        position='absolute' 
        width="100%" height="100%" 
        opacity="0.5%" 
        backgroundColor="blue.100" />

        <Box display='flex'  
        flexDirection={{ base: "column", sm: "row"}}
        alignItems="center"
        justifyContent={{ base: "flex-start", sm: "space-between" }}
        maxWidth="1280px"
        position="absolute"
        color="whiteAlpha.900"
        fontWeight="light"
        left="0"
        right="0"
        bottom="0"
        top="0" 
        margin="0 auto"
        
        padding="2rem">
            <Box width={{base: "100%", sm: "50%"}}>
                <Text fontSize={{base: "5xl", sm: "4xl"}} 
                lineHeight="shorter"
                marginBottom="1.5rem">
                    Download our new <strong> Property buying guide </strong>  today... <br/> 
                </Text>
                <Text fontSize={{base:"lg", sm: "2xl" }} color="white"> 
                    We have created a step by step guide to help you find the right property for your needs.
                </Text>
            </Box>
            <Box width= {{base:"100%", sm:"auto"}} marginTop={{base:'2rem', sm: '0'}}> 
                <HeroForm /> 
            </Box>



           
        </Box>
      </Box>
      </Fade>
    );
};

export default HeroBanner;