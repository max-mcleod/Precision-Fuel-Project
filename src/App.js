import React from "react";
import { Flex, Box, Button, Text } from "rebass";
import BsArrowRepeat from "@meronex/icons/bs/BsArrowRepeat";
import BsStarFill from "@meronex/icons/bs/BsStarFill";
import FiCheck from "@meronex/icons/fi/FiCheck";
import IosCalculator from "@meronex/icons/ios/IosCalculator";
import RiShoppingCartFill from "@meronex/icons/ri/RiShoppingCartFill";
import ProductDescriptionSection from "./components/ProductDescriptionSection";

import Header from "./Header";
import Footer from "./Footer";
import "./App.scss";
import leaf from "./assets/images/leaf-solid.svg"
import cow from "./assets/images/cow-solid.svg"
import wheat from "./assets/images/wheat-awn-solid.svg"
import recycle from "./assets/images/recycle-seven.svg"
import gel from "./assets/images/PF30Gel-1.png";
import bowden from "./assets/images/adam-bowden.webp";
import calc from "./assets/images/calc.svg";
import gf from "./assets/images/gf.svg";
import informed from "./assets/images/informed.svg";
import informedSmall from "./assets/images/informed-small.svg"
import vegan from "./assets/images/vegan.svg";
import natural from "./assets/images/natural.svg";

import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

import Icon from "./components/Icon";
import IconToolTip from "./components/IconToolTip"


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
          <img src={gel} alt="PF 30 Gel" />
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
          {/* Box to contain content */}
          <Box mb={15} className="container-purple">
            {/* Flex to display elements inline */}
            <Flex>
              {/* Component made to minimise re-used code */}
              <Icon src={leaf} iconClass='white-icon header-icon' iconTitle='icon-title' tag='Vegan' />
              <Icon src={cow} iconClass='white-icon header-icon' iconTitle='icon-title' tag='Dairy Free' />
              <Icon src={wheat} iconClass='white-icon header-icon' iconTitle='icon-title' tag='Gluten Free' />
            </Flex>
          </Box>
          {/* Secondary container for additional content */}
          <Box ml={20} className='container-purple'>
            <Flex>
              <IconToolTip src={recycle} iconClass='header-icon' iconTitle='icon-title' tag='Recycle-7' />
              <IconToolTip src={informedSmall} iconClass='header-icon' iconTitle='icon-title' tag='Certified' />
            </Flex>
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
      <Box sx={{ height: 80, bg: "#420a98" }}></Box>
      <Box bg="#fff">
        <Box
          className="container padded"
          sx={{ maxWidth: 1360, margin: "0 auto" }}
        >
          <Flex className="desc-flex-wrapper">
            <Box className="text-block">
              <Text as="h2">
                Precision{` `}
                <Box as="span" sx={{ color: "#c4d600" }}>
                  Fuel
                </Box>
              </Text>
              <Text>
                <p>
                  Our{" "}
                  <u>
                    <b>Quick Carb Calculator™</b>
                  </u>{" "}
                  helps you understand{" "}
                  <u>
                    <b>how much fuel you need</b>
                  </u>{" "}
                  to perform at your best.
                </p>
                <p>
                  Our range of fuel makes it easy to hit those numbers by
                  telling you how much carbohydrate is in each serving right on
                  the front of the packaging. No complicated nutritional tables
                  to decipher, zero guesswork.
                </p>
                <p>
                  The all-natural PF 30 Gel can be used on its own during
                  shorter durations, or combined with other PF fueling products
                  or real foods when going longer. If you're someone who hasn't
                  gotten on well with gels previously, give ours a try, we'll
                  eat a flip-flop if you're not pleasantly surprised!
                </p>
              </Text>
              <Flex className="icons-wrap">
                <Box className="icon-box">
                  <img src={informed} className="icon" alt="Informed Sport" />
                  Informed Sport certified
                </Box>
                <Box className="icon-box">
                  <img
                    src={natural}
                    className="icon"
                    alt="Natural Ingredients"
                  />
                  All-natural (no artificial ingredients)
                </Box>
                <Box className="icon-box">
                  <img src={calc} className="icon" alt="QCC" />
                  Use the Carb Calculator to nail your fueling strategy
                </Box>
                <Box className="icon-box">
                  <img src={gf} className="icon" alt="2:1 Glucose Fructose" />
                  2:1 glucose to fructose ratio to aid carbohydrate uptake
                </Box>
                <Box className="icon-box">
                  <img src={vegan} className="icon" alt="Vegan" />
                  Vegan
                </Box>
              </Flex>
            </Box>
            <Box className="athlete-quote">
              <img src={bowden} className="bowden" alt="Adam Bowden" />
              <Box className="quote-text">
                "The PF 30 Gels are awesome! They're easy to consume on the bike
                and run, taste great and have a good consistency. With the PF
                range, I really feel like I'm able to get in the fuel I need
                much more effectively than in the past."
              </Box>
              <Box className="quote-author">
                Adam Bowden - IRONMAN 70.3 Dubai winner
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box sx={{ bg: "#fff" }}>
        <Box
          className="container padded"
          sx={{ maxWidth: 1360, margin: "0 auto" }}
        >
          <Flex width={"100%"} sx={{ flexDirection: "column" }}>
            <ProductDescriptionSection
              title={"Key Features"}
              body={
                <>
                  <ul>
                    <li>
                      Designed to help you start and stay fueled during efforts
                      lasting more than about 60 minutes
                    </li>
                    <li>Contains 30g of carbohydrate per serving</li>
                    <li>
                      Does not contain electrolytes, as they're designed to be
                      used alongside our Precision Hydration range
                    </li>
                    <li>
                      Typically used on its own during shorter efforts, or
                      combined with other Precision Fuel products, or real
                      foods, when going longer
                    </li>
                    <li>
                      Use the{" "}
                      <a href="https://www.precisionhydration.com/products/pf-30-gel/#thecarbcalculator">
                        Quick Carb Calculator™
                      </a>{" "}
                      to understand your fueling needs
                    </li>
                    <li>
                      2:1 glucose to fructose ratio to aid carbohydrate uptake
                    </li>
                    <li>Informed Sport certified</li>
                    <li>
                      Mild, neutral 'Original' flavour to reduce flavour fatigue
                    </li>
                    <li>No artificial ingredients</li>
                    <li>Vegan</li>
                    <li>Does not contain caffeine</li>
                  </ul>
                </>
              }
              key={1}
            />
            <ProductDescriptionSection
              title={"Directions"}
              body={
                <>
                  <p>
                    Tear open and squeeze the gel into your mouth in stages. Oh,
                    and don't be a numpty, dispose of the empty packet
                    responsibly...
                  </p>
                  <p>
                    For recycling directions, plastic number 7 is any type of
                    plastic that's sometimes recyclable and sometimes not.
                    It usually contains multiple plastics, some of which aren't
                    recyclable. Those with the “PLA” initials or the word
                    “compostable” near the recycling symbol are recyclable.
                  </p>
                  <p>
                    Use the Quick Carb Calculator™ to understand how much fuel
                    you need to perform at your best.
                  </p>
                  <p>
                    Store in a cool, dry place, out of the reach of young
                    children.
                  </p>
                  <p>
                    This product is a food supplement. Do not use as a
                    substitute for a varied diet.
                  </p>
                </>
              }
              key={2}
            />
            <ProductDescriptionSection
              title={"Nutritional Information"}
              body={
                <>
                  <p>
                    {`Energy: 120 Kcal / 512 Kj per 51g gel (236 Kcal / 1003 Kj per 100g)`}
                    <br />
                    {`Protein: < 0.1g per 51g gel (< 0.1g per 100g)`}
                    <br />
                    {`Fats: < 0.1g per 51g gel (< 0.1g per 100g)`}
                    <br />
                    {`Carbohydrates: 30g per 51g gel (59g per 100g)`}
                  </p>
                  <p>
                    Allergen information:
                    <br />
                    Gluten Free, Dairy Free, Wheat Free, Egg Free, Fish Free,
                    Crustacean Free, Mollusc Free, Nut Free, Sesame Free,
                    Celery Free, Mustard Free and GMO Free.
                  </p>
                </>
              }
              key={3}
            />
            <ProductDescriptionSection
              title={"Ingredients"}
              body={
                <p>
                  `Maltodextrin, Water, Fructose, Pectin, Acidity Regulator
                  (Citric Acid), Preservatives (Potassium Sorbate, Calcium
                  Lactate).`
                </p>
              }
              key={4}
            />
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
