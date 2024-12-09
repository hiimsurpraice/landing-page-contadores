import { Box } from "@chakra-ui/react"
import { Intro } from "./sections/intro"
import { Services } from "./sections/services"
import { MonthlyPlans } from "./sections/monthly-plans"
import { GeneralInformation } from "./sections/general-information"
import { About } from "./sections/about"

export const Landing = () => {
    return (
    <Box bg="blackAlpha.200">
        <Intro />
        <About />
        <Services />
        <MonthlyPlans/>
        <GeneralInformation />
    </Box>)
}