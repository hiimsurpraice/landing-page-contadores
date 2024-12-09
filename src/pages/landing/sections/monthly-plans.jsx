import { Box, Flex, Heading, SimpleGrid  } from "@chakra-ui/react"
// import { ServiceCard } from "../../../components/serviceCard"
import { PlanCard } from "../../../components/planCard";

export const MonthlyPlans = () => {

    const plans = [
        {
          title: "PLAN BASICO PYME",
          price: "1,6 UF / Mensuales",
          description: "PARA EMPRESAS CON VENTAS MENSUALES DE HASTA $8.000.000.-",
        },
        {
          title: "PLAN MEDIANA EMPRESA",
          price: "3 UF / Mensuales",
          description:
            "PARA EMPRESAS CON VENTAS MENSUALES DESDE $9.000.000 - $19.000.000.-",
        },
        {
          title: "PLAN EMPRESA GRANDE",
          price: "8 UF / Mensuales",
          description:
            "PARA EMPRESAS CON VENTAS MENSUALES SUPERIORES A $20.000.000.-",
        },
      ];

    return (
        <Box id="plans" borderWidth="1px"
        borderRadius="lg"
        p="6"
        mx="auto" >
        <Flex justifyContent="center" alignItems="center">
            <Heading fontSize={20} color="blue.900" mb="50px">
                PLANES MENSUALES
            </Heading>
        </Flex>
        <Box w="full" py="10">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
            {plans.map((plan, index) => (
            <PlanCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
            />
            ))}
        </SimpleGrid>
        </Box>
    </Box>
)
}