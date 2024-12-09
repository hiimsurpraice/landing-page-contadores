import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { ServiceCard } from "../../../components/serviceCard"

export const Services = () => {
    
    const serviceData = [
        {
          title: "ASESORIAS CONTABLES",
          services: [
            "Declaración de Impuestos mensuales (F.29)",
            "Libros de Compra y Venta",
            "Honorarios",
            "Timbraje de documentos en el SII",
            "Pre-Balance Trimestral",
            "Balance General Tributario",
            "Declaración Anual de Renta",
          ],
        },
        {
          title: "ASESORIA LABORAL",
          services: [
            "Confección de Liquidación de Sueldo",
            "Preparación de cotizaciones en Previred",
            "Tramitación de Licencias Medicas",
            "Redacción de contratos de trabajo",
            "Control de registro de vacaciones",
            "Cálculo de finiquitos",
          ],
        },
        {
          title: "SERVICIOS ESPECIALES",
          services: [
            "Asesorias Tributarias",
            "Inicio de Actividades",
            "Términos de Giro",
            "Rectificación de Renta",
            "Domicilio Tributario",
            "Gestión de Patente Municipal",
            "Gestiones especiales en SII",
          ],
        },
      ];

    return (
    <Box id="services" borderWidth="1px"
    borderRadius="lg"
    p="6"
    mx="auto"
    >
        <Flex justifyContent="center" alignItems="center">
            <Heading fontSize={20} color="blue.900" mb="50px">
                NUESTROS SERVICIOS
            </Heading>
        </Flex>
        <Box w="full" py="10">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
            {serviceData.map((data, index) => (
            <ServiceCard key={index} title={data.title} services={data.services} />
            ))}
        </SimpleGrid>
        </Box>
    </Box>
)
}