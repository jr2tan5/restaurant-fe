import React from "react";
import { Box, Text, Image, Center, VStack, HStack } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import beef_noodle from "../assets/beef_noodle.jpg"

interface Dish {
    description: string
    chineseDescription: string
    price: string
}

const WhiteDivider = () => {
    return (
        <Box bg="white"
            width={"100%"}
            height={"100px"} />
    )
}

const MenuItem = ({ description, chineseDescription, price }: Dish) => {
    return (
        <HStack>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </HStack>
    )
}

const Menu = () => {
    return (
        <>
            <Box bgImage={beef_noodle}
                bgPosition={"middle left"}
                bgSize={"cover"}
                width={"100%"}
                height={"225px"}>
                <NavigationBar />{ }
                <Text>Menu</Text>
            </Box>
            <WhiteDivider />
            <Center>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    position={"relative"}
                    width={"80%"}
                    height={"500px"}
                    alignItems={"justify"}>
                    <Image src={beef_noodle} alt="Signature Beef Noodle" objectFit={"cover"} width={"100%"} height={"100%"} />
                    <Text
                        position="absolute"
                        bottom="50px"  // Position from bottom
                        left="50px"    // Position from left
                        color="white"
                        fontSize="xl"
                        fontWeight="bold"
                    >
                        Our Menu
                        <br />
                        J Restaurant is all about showcasing the best of Southern Chinese Cuisine
                    </Text>
                </Box>
            </Center>
            <WhiteDivider />
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
                position={"relative"}
                width={"80%"}
                height={"500px"}
                alignItems={"justify"}>
                <VStack
                    alignContent={"left"}>
                    <HStack>
                        <MenuItem
                            description="Signature Beef Noodle"
                            chineseDescription=""
                            price="$10"
                        />
                        <MenuItem
                            description="Signature Pork Noodle"
                            chineseDescription=""
                            price="$10"
                        />
                        <MenuItem
                            description="Spicy Beef Noodle"
                            chineseDescription=""
                            price="$10"
                        />

                    </HStack>
                    <HStack></HStack>
                    <HStack></HStack>
                    <HStack></HStack>
                </VStack>
            </Box>
        </>// To be completed
    );
}

export default Menu;