import React, { useState, useEffect, Children } from "react";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

// Import Images
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

// Component Objects
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import BookingDrawer from "./BookingDrawer";
import "../BackgroundAnimation.css";
import { px } from "framer-motion";

interface BackgroundProps {
  children?: React.ReactNode; // Explicitly type children as React.ReactNode
}

const Background = ({ children }: BackgroundProps) => {
  const images = [image1, image2, image3, image4]; // Array of imported images
  const [backgroundImage, setBackgroundImage] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [isZooming, setIsZooming] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % images.length);
      setIsZooming(true); // Start zoom animation when changing background image
    }, 5000); // Change image every 5 seconds
    setIntervalId(id);
    return () => clearInterval(id);
  }, []); // Run effect only once when component mounts due to empty bracket

  useEffect(() => {
    // Reset the background animation whenever the background image changes
    const backgroundElement = document.querySelector(".background-image");
    if (backgroundElement) {
      backgroundElement.classList.remove("zoom-animation");
      setTimeout(() => {
        backgroundElement.classList.add("zoom-animation");
      }, 10); // Delay for a short time to allow class removal to take effect before re-adding the class
    }
  }, [backgroundImage]);

  const changeBackgroundImage = (index: number) => {
    setBackgroundImage(index);
    setIsZooming(false); // Stop zoom animation when manually changing background image
    if (intervalId) {
      clearInterval(intervalId); // Clear the previous interval
    }
    const newIntervalId = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % images.length);
      setIsZooming(true); // Start zoom animation after manual change
    }, 10000);

    setIntervalId(newIntervalId); // Set new interval ID
  };

  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${images[backgroundImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        /* Add other background properties as needed */
        minHeight:
          "100vh" /* Ensure the background covers the entire viewport */,
        position: "relative", // Add position relative to contain the children
      }}
    >
      <NavigationBar /> {/* Render NavigationBar within the Background */}
      {children} {/* Render additional children */}
      <div
        className="background-buttons"
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          right: "3%",
        }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              changeBackgroundImage(index);
            }}
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: index === backgroundImage ? "white" : "gray",
              marginBottom: "10px",
              position: "relative",
              left: "90%",
              border: "none",
              cursor: "pointer",
              outline: "none",
            }}
          ></button>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: "5%",
          bottom: "15%",
        }}
      >
        <Stack>
          <Text color={"white"} fontSize={"x-large"}>
            Traditional, yet original style Teochew & Cantonese
          </Text>
          <Text
            color={"white"}
            fontSize={"xxx-large"}
            paddingBottom={"50px"}
            fontWeight="bold"
          >
            SOUTHERN CHINESE CUISINE
          </Text>
          <BookingDrawer />
        </Stack>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0%",
          right: "5%",
          width: "40%",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Background;
