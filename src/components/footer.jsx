import { Box, Text, VStack, HStack, Link, Icon, Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
    return (
        <Box w="full" bg="gray.900" px="200px" py={10}>
            <VStack spacing={6} color="whiteAlpha.800" align="center">
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
                <Box>
                    <Link href="https://wa.me/56995155172" isExternal>
                        <Button 
                            size="lg" 
                            bg="green.500" 
                            color="white" 
                            _hover={{ bg: "green.600" }}
                            leftIcon={<Icon as={FaWhatsapp} boxSize={6} />}
                            shadow="lg"
                            px={6}
                        >
                            Contáctanos en WhatsApp
                        </Button>
                    </Link>
                </Box>
            </VStack>
        </Box>
    );
};
