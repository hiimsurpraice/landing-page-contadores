import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react"
import Contabilidad from "../../../assets/contabilidad.jpg"

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
      
            <Box pt="6">
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