import React from "react";
import { Flex, Box, Button, Heading, Text } from "rebass";
import BsArrowRepeat from "@meronex/icons/bs/BsArrowRepeat";
import BsStarFill from "@meronex/icons/bs/BsStarFill";
import FiCheck from "@meronex/icons/fi/FiCheck";
import IosCalculator from "@meronex/icons/ios/IosCalculator";
import RiShoppingCartFill from "@meronex/icons/ri/RiShoppingCartFill";

import Header from "./Header";
import Footer from "./Footer";
import "./App.scss";
import gel from "./assets/PF30Gel-1.png";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

const Stars = () => {
  const stars = 5;
  return [...Array(stars)].map((e, i) => (
    <Box as="span" color="#c4d600" mr={1} height="20px" key={i}>
      <BsStarFill size="15" />
    </Box>
  ));
};

function App() {
  return (
    <Box className="App">
      <Header />
      <Box className="container" sx={{ margin: "0 auto" }}>
        <Box className="breadcrumb">
          Shop <span className="bar">/</span> Energy Gels{" "}
          <span className="bar">/</span> PF 30 Gel
        </Box>
      </Box>
      <Box className="container padded" sx={{ margin: "0 auto" }}>
        <Flex className="image-wrapper">
          <img src={gel} />
        </Flex>
        <Box className="wrapper">
          <h1>PF 30 Gel</h1>
          <Flex>
            <Button className="button">Drink Mix</Button>
            <Button className="button black">Gels</Button>
            <Button className="button">Chews</Button>
            <Button className="button">Sample Pack</Button>
          </Flex>
          <Box className="feature">
            <p>
              The most efficient way to get 30g of carbohydrate into your system
              fast. Our gels have a very mild, neutral taste reducing flavour
              fatigue during longer efforts.
            </p>
            <p>
              The texture is designed to reduce stickiness in the mouth and
              minimise the need to wash them down with fluid immediately.
            </p>
          </Box>
          <Box className="label">Product</Box>
          <Box mb={3}>
            <Button className="button outlined">PF 30 Gel</Button>
            <Button className="button">PF 30 Caff Gel</Button>
            <Button className="button">PF 30 Gel</Button>
          </Box>
          <Box className="label">Quantity</Box>
          <Box>
            <Button className="button outlined">4 Gels</Button>
            <Button className="button">15 Gels</Button>
            <Button className="button">30 Gels</Button>
          </Box>
          <Flex className="price-row" sx={{ justifyContent: "space-between" }}>
            <Box className="price">£8.99</Box>
            <Box className="stars">
              <Stars /> (500)
            </Box>
          </Flex>
          <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
            <Box className="warehouse">
              <Flex>
                <FiCheck size="16px" color="#16a512" />
                <Text ml={1}>
                  In stock at our UK warehouse, available for delivery
                </Text>
              </Flex>
            </Box>
            <Button className="button black add-to-cart">
              <Flex justifyContent="center">
                <Box mr={1}>
                  <RiShoppingCartFill />
                </Box>
                Add to cart
              </Flex>
            </Button>
            <Button className="button black qcc">
              <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
                <Box mr={1}>
                  <IosCalculator size="18" />
                </Box>
                How much fuel do I need?
              </Flex>
            </Button>
            <Button className="button black subscribe">
              <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
                <Box mr={1}>
                  <BsArrowRepeat fontSize="14px" />
                </Box>
                Subscribe & save
              </Flex>
            </Button>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
