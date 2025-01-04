import { Box, Button, Flex, Icon, Img, Link, Text, VStack } from "@chakra-ui/react"
import Contabilidad from "../../../assets/contabilidad.jpg"
import { FaWhatsapp } from "react-icons/fa"

export const Intro = () => {
    return (
        <Box w="full" bg="blue.900">
        <Flex justifyContent="center" alignItems="center" pb="30px">
          <VStack spacing={4}>
          <Img 
          src={Contabilidad} 
          maxWidth={{ base: "full", md: "450px" }} // Ancho máximo responsivo
          height="auto"
          objectFit="cover"
          borderRadius="md"
        /> 
            <Text color="whiteAlpha.900" fontSize={{ base: "lg", sm: "xl", md: "2xl" }} fontWeight="medium" textAlign="center">
              Pedro Pinilla Perez, <Text as="span" fontWeight="bold">ppinilla1879@hotmail.com</Text>
            </Text>
            <Text color="whiteAlpha.900" fontSize={{ base: "lg", sm: "xl", md: "2xl" }} fontWeight="medium" textAlign="center">
              Andres Vergara Vergara, <Text as="span" fontWeight="bold">andre4254@hotmail.com</Text>
            </Text>
            <Box mt={{ base: 4, md: 0 }}>
        <Link href="https://wa.me/56995155172" isExternal>
          <Button
            size="lg"
            bg="green.500"
            color="white"
            _hover={{ bg: "green.600" }}
            leftIcon={<Icon as={FaWhatsapp} boxSize={5} />}
            shadow="lg"
            px={5}
          >
            Contáctanos en WhatsApp
          </Button>
        </Link>
      </Box>
            <Box>
              <Text color="whiteAlpha.900" fontSize={{ base: "xl", sm: "2xl", md: "3xl" }} fontWeight="bold" textAlign="center">
                Asesorías Contable y Tributaria para Empresas
              </Text>
              <Text color="whiteAlpha.900" fontSize={{ base: "xl", sm: "2xl", md: "3xl" }} fontWeight="bold" textAlign="center">
                Contabilidad para PYMES
              </Text>
              <Text color="whiteAlpha.900" fontSize={{ base: "xl", sm: "2xl", md: "3xl" }} fontWeight="bold" textAlign="center">
                Servicios de Contabilidad para pymes, empresas nacionales
              </Text>
            </Box>
          </VStack>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
        
        </Flex>
      </Box>
)
}