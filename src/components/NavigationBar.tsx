import {
  HStack,
  Heading,
  Text,
  Box,
  Link as ChakraLink,
  LinkProps,
  Flex,
  Container,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, Route, NavLink, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.svg";
import Home from "../pages/index"
import Menu from "../pages/Menu"; // Import your page components
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

// Interface for navigation button props
interface NavButton {
  title: React.ReactNode;
  pageLink: string;
}

// Button component with typed props
const ButtonFeature = ({ title, pageLink }: NavButton): JSX.Element => {
  return (
    <Box p={5} filter="auto">
      <Heading fontSize="xl" color="white">
        <NavLink to={pageLink}>{title}</NavLink>
      </Heading>
    </Box>
  );
};

const NavigationBar = () => {
  return (
    <HStack justifyContent="space-between" padding="100px">
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <HStack spacing={20} color="white">
        
          <ButtonFeature title="Home" pageLink="/" /> {/* Link to the root path */}
          <ButtonFeature title="Menu" pageLink="/menu" />
          <ButtonFeature title="Gallery" pageLink="/gallery" />
          <ButtonFeature title="Contact Us" pageLink="/contact" />
          
      </HStack>
    </HStack>
  );
};

export default NavigationBar;