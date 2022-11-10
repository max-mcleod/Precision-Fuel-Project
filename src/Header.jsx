import React from "react";
import { Box, Flex } from "rebass";
import PFHLogoWhite from "./assets/PFHLogoWhite";

const Header = () => {
  return (
    <Box px={4} sx={{ bg: "#101010" }}>
      <Flex className="logo-image" py={"10px"}>
        <PFHLogoWhite height="40" />
      </Flex>
    </Box>
  );
};

export default Header;
