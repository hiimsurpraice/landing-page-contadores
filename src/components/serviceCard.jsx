/* eslint-disable react/prop-types */
import { Box, Heading, List, ListItem, VStack } from "@chakra-ui/react"

export const ServiceCard = ({title, services }) => {
    return (
        <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={{ base: "4", sm: "6" }} 
        boxShadow="md"
        _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
        transition="all 0.2s ease-in-out"
        mx="auto"
        >
        <VStack spacing="4" align="start">
            <Heading fontSize="lg" color="blue.900" alignSelf="center">
            {title}
            </Heading>
            <List spacing="2" pl="4">
            {services.map((service, index) => (
                <ListItem key={index} fontSize={{ base: "sm", sm: "md", md: "lg" }} color="gray.600">
                .. {service}
                </ListItem>
            ))}
            </List>
        </VStack>
        </Box>
        )
}