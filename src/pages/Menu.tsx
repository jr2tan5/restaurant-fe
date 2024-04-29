import React, { JSXElementConstructor } from "react";
import { Box, Text, Image, Center, VStack, HStack, Table, Heading, Tbody, Tr, Td } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import beef_noodle from "../assets/beef_noodle.jpg"

interface Dish {
    description: string
    chineseDescription: string
    price: string
}

const MenuTableData = ({ description, chineseDescription, price }: Dish) => {
    return (
        <Td>
            <HStack>
                <Text>{description}</Text>
                <Text>{price}</Text>
            </HStack>
        </Td>
    )
}

const WhiteDivider = () => {
    return (
        <Box bg="white"
            width={"100%"}
            height={"100px"} />
    )
}

const MenuPageHeader = () => {
    return (
        <Box bgImage={beef_noodle}
            bgPosition={"middle left"}
            bgSize={"cover"}
            width={"100%"}
            height={"225px"}>
            <NavigationBar />{ }
        </Box>
    )
}

const AppetizerBanner = () => {
    return (
        <Center>
            <Box
                display={"flex"}
                position={"relative"}
                width={"80%"}
                height={"500px"}
                alignItems={"justify"}>
                <Image src={beef_noodle} alt="Signature Beef Noodle" objectFit={"cover"} width={"100%"} height={"100%"} />
                <Box
                    position="absolute"
                    bottom="50px"  // Position from bottom
                    left="50px"    // Position from left
                    color="white"
                    fontSize="xl"
                    fontWeight="bold">
                    <Heading>Our Menu</Heading>
                    <Text>J Restaurant is all about showcasing the best of Southern Chinese Cuisine</Text>
                </Box>
            </Box>
        </Center>
    )
}

const AppetizerMenu = () => {
    return (
        <Center>
            <Box
                width={"80%"}
                position={"relative"}
            >
                <VStack>
                    <Heading
                        textAlign={"start"}>
                        Appetizer Specialty
                    </Heading>
                    <Table>
                        <Tbody>
                            <Tr>
                                <MenuTableData
                                    description="Signature Beef Noodle"
                                    chineseDescription=""
                                    price="$10"
                                /><MenuTableData
                                    description="Signature Pork Noodle"
                                    chineseDescription=""
                                    price="$10"
                                />
                                <MenuTableData
                                    description="Signature Chicken Noodle"
                                    chineseDescription=""
                                    price="$10"
                                />
                            </Tr>
                        </Tbody>
                    </Table>
                </VStack>
            </Box>
        </Center>
    )

}

const Menu = () => {
    return (
        <>
            <MenuPageHeader />
            <WhiteDivider />
            <AppetizerBanner />
            <WhiteDivider />
            <AppetizerMenu />
            <WhiteDivider />
        </>// To be completed
    );
}

export default Menu;