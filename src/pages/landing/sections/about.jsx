import { Box, Flex, List, ListItem, Text, VStack } from "@chakra-ui/react"


export const About = () => {
    return (
        <Box id="about" borderRadius="lg"
        p="6"
        mx="auto">
        <Flex justifyContent="center" alignItems="center" pb="80px">
            <VStack>
                <Box>
                    <Text fontSize={20} color="blue.700">
                        La asesoría Contable, Laboral y Tributaria es esencial para toda empresa que necesite mantenerse
                        al día con sus obligaciones legales y financieras. Conoce nuestros servicios especializados para
                        ayudar a las empresas a cumplir con todas sus obligaciones contables, laborales y fiscales de
                        manera eficiente y precisa, te brindamos asesoramiento para optimizar la gestión financiera y
                        mejorar la rentabilidad de tu negocio.
                        <br />
                        <br />
                        <br />
                        Consulta por nuestros planes flexibles de contabilidad diseñado para:
                        <br />
                        <br />
                        <Box pl={{ base: "20px", md: "40px" }}>
            <List spacing={6}>
              <ListItem  color="blue.700" lineHeight="1.8">
                - Empresas que requieren{" "}
                <Text as="b">
                  servicio de contabilidad trimestral, balance anual, declaraciones juradas de renta.
                </Text>
              </ListItem>

              <ListItem  color="blue.700" lineHeight="1.8">
                - Empresas que solo requieren servicio de{" "}
                <Text as="b">
                  contabilidad trimestral sin balance anual, declaraciones juradas ni declaración de renta.
                </Text>
              </ListItem>

              <ListItem color="blue.700" lineHeight="1.8">
                - Empresas que requieren{" "}
                <Text as="b">llevar por cuenta propia la contabilidad trimestral</Text> (otorgamos asesoría
                correspondiente), con la opción de tomar nuestro plan que considera impuesto a la renta, que incluye
                balance anual, declaraciones juradas y declaración de renta.
              </ListItem>
            </List>
          </Box>
                    </Text>
                </Box>
            </VStack>
        </Flex>
            
        </Box>
    )
}