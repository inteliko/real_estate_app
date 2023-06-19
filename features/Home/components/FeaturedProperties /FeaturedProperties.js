import PropertySlider from "./components/PropertySlider";

const { Box, Text } = require("@chakra-ui/react");

const FeaturedProperties = ({featuredProperties}) => {
    
    return(
        <Box backgroundColor="black">
            <Box maxWidth="1280px"
            margin="0 auto"
            color="gray.600"
            paddingY={{base: "3rem", sm: "6rem"}} >
                <Text fontSize={{base: "4xl" , sm:"5xl"}}
                lineHeight="shorter"
                fontWeight="#fff"
                paddinggX="2rem"
                textAlign="center"
                color="whiteAlpha.900">
                    Discovered Our <strong>Featured Properties </strong> 
                </Text>
                <Text 
                fontSize="2xl"
                fontWeight="red"
                marginTop="0rem"
                marginBottom="3rem"
                paddingY="1rem"
                textAlign="center"
                color="blue.100"
                > 
                    A selection of our best Properties
                </Text>
                <PropertySlider featuredProperties={featuredProperties} /> 
            </Box>

        </Box>
    );
}

export default FeaturedProperties;