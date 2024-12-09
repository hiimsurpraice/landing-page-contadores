import { Box, Text, VStack } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box w="full" bg="gray.900" px="200px" >
        <VStack spacing={4} color="whiteAlpha.800" align="center">
            <Text fontSize="lg">
                Todos los derechos reservados © 2024
            </Text>
            <Text fontSize="md" textAlign="center">
                Si tienes alguna pregunta o deseas más información, no dudes en contactarnos a: 
                <br />
                <Text as="span" color="blue.400">Ppinilla1879@hotmail.com</Text> 
                <br />
                <Text as="span" color="blue.400">Andre4254@hotmail.com</Text>
            </Text>
        </VStack>
    </Box>
)
}