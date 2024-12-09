import { Box, Text, Heading, VStack } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export const PlanCard = ({ title, price, description }) => {
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
  <VStack spacing={{ base: "3", sm: "4" }} align="start">
    <Heading
      fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
      color="blue.900"
    >
      {title}
    </Heading>
    <Text
      fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
      fontWeight="bold"
      color="green.500"
    >
      {price}
    </Text>
    <Text
      fontSize={{ base: "sm", sm: "md", md: "lg" }}
      color="gray.600"
    >
      {description}
    </Text>
  </VStack>
</Box>
  )
}