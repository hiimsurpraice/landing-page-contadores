import { Flex, Heading, Link, Stack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      p="6"
      bg="blue.900"
      mx="auto"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex
        alignItems={{ base: "center", md: "flex-end" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Heading
          color="whiteAlpha.900"
          mb={{ base: "4", md: "0" }}
          mr={{ md: "60px" }}
          fontSize={{ base: "16px", md: "20px" }}
          letterSpacing="1.5px"
          textAlign={{ base: "center", md: "left" }}
        >
          CONTADORES A SU SERVICIO
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          color="whiteAlpha.700"
          spacing={{ base: "20px", md: "40px" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Link href="#about">Acerca de</Link>
          <Link href="#services">Servicios</Link>
          <Link href="#plans">Planes Mensuales</Link>
          <Link href="#information">Información General</Link>
        </Stack>
      </Flex>
    </Flex>
  );
};