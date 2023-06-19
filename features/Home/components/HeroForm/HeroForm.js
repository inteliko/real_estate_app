import { Box, FormControl, Text, Input, Flex, Checkbox, Button } from "@chakra-ui/react";
import {useForm} from "react-hook-form";

const HeroForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => console.log(data);
    return (
    <Box width="100%"
    padding="2rem"
    borderRadius="sm"
    backgroundColor="white"
    color="gray.700"
    > 
    <Text fontSize="xl" fontWeight="bold"> 
    Free PDF Guide

    </Text>
    <Text fontSize="lg" > 
        Complete the form below to download your guide
    </Text>
    <form onSubmit={handleSubmit(onSubmit)} >
        <FormControl>
            <Input 
            marginTop="1.3rem"
            Id="name"
            type="text"
            placeholder="Name"
            {...register("name", {required: true})}
            />
            {errors.name &&(
                <Text color="red.500" fontSize="xs">
                {errors.name.type}
                </Text>
            ) }

            <Flex gap={{base:"0", sm: "1rem"}}
            flexDirection={{base: "column", sm: "row" }} > 

            <Input 
            marginTop="1.3rem"
            Id="email"
            type="email"
            placeholder="Email"
            {...register("email", {required: true})}
            />
            {errors.email &&(
                <Text color="red.500" fontSize="xs">
                {errors.email.type}
                </Text>
            ) }

           <Input 
            marginTop="1.3rem"
            Id="phone"
            type="phone"
            placeholder="Phone"
            {...register("phone", {required: true})}
            />
            {errors.phone &&(
                <Text color="red.500" fontSize="xs">
                {errors.phone.type}
                </Text>
            ) }
            </Flex>
            <Checkbox marginTop="1.3rem"
            Id="gdpr"
            type="checkbox"
            placeholder="GDPR"
            {...register("gdpr", {required:true})}>
                I consent to having this website store my submitted information.

            </Checkbox>

            {errors.gdpr &&(
                <Text color="red.500" fontSize="xs">
                {errors.gdpr.type}
                </Text>
            ) }


        </FormControl>
        <Button type="submit"
        colorScheme="blue"
        width="100%"
        fontSize="xl"
        padding="2rem"
        marginTop="2rem">
            Download Now
        </Button>
    </form>
    </Box>
    );
};



export default HeroForm;