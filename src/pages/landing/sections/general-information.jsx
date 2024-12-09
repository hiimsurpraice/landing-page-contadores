import { Box, VStack, Text, List, ListItem, Icon } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"

export const GeneralInformation = () => {
    return (
        <Box id="information"
        borderWidth="1px"
        borderRadius="lg"
        p="6"
        boxShadow="md"
        mx="auto"
        textAlign="center" 
      >
  
  <Text fontSize="2xl" fontWeight="bold" color="blue.900" mb="4">
    Información General
  </Text>

  
  <VStack align="center" spacing={4}>
   
    <List spacing={4} w="full" maxW="600px">
      <ListItem fontSize="md" color="gray.700">
        <Icon as={CheckCircleIcon} color="green.500" mr="2" />
        Todos nuestros valores son ajustables anualmente, siempre te informaremos sobre nuevos precios con anticipación.
      </ListItem>
      <ListItem fontSize="md" color="gray.700">
        <Icon as={CheckCircleIcon} color="green.500" mr="2" />
        Balances, proceso de renta y reportes tributarios son servicios aparte con valores adicionales.
      </ListItem>
      <ListItem fontSize="md" color="gray.700">
        <Icon as={CheckCircleIcon} color="green.500" mr="2" />
        Si necesitas un pre-balance extra o anticipado, solicítalo por un valor desde 1.3 UF.
      </ListItem>
      <ListItem fontSize="md" color="gray.700">
        <Icon as={CheckCircleIcon} color="green.500" mr="2" />
        Si dentro del año, tienes crecimiento y comienzas a vender más del tramo correspondiente a tu plan, se realizará un nuevo presupuesto el cual debe ser aprobado, para poder continuar con el servicio.
      </ListItem>
      <ListItem fontSize="md" color="gray.700">
        <Icon as={CheckCircleIcon} color="green.500" mr="2" />
        Para dar de baja el servicio debe comunicarlo directamente a:
        <Text as="span" display="block" color="blue.600" fontWeight="medium">
          Ppinilla1879@hotmail.com
          <br />
          Andre4254@hotmail.com
        </Text>
      </ListItem>
      <ListItem fontSize="md" color="gray.700">
        <Icon as={CheckCircleIcon} color="green.500" mr="2" />
        Los términos de servicio deben ser avisados con 1 mes de anticipación. 
        <Text as="span" display="block" textAlign="justify" mt="2">
          (Si ud solicita la baja después del día 2 para ese mismo mes, se emitirá el último honorario/factura correspondiente a dicho mes, por los servicios que se realizan).
        </Text>
      </ListItem>
    </List>
  </VStack>
</Box>
)
}