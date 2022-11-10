import React, { useState, useCallback } from "react";
import { Flex, Box, Text } from "rebass";
import FiPlus from "@meronex/icons/fi/FiPlus";
import FiMinus from "@meronex/icons/fi/FiMinus";

const ProductDescriptionSection = ({ title, body }) => {
  const [show, setShow] = useState(false);
  const toggleShow = useCallback(() => {
    setShow((show) => !show);
  }, []);
  return (
    <Flex
      onClick={!show ? toggleShow : null}
      sx={{ flexDirection: "column", cursor: !show ? "pointer" : "auto" }}
      className={`product-description-dropdown-wrapper ${
        !show ? "closed" : "open"
      }`}
    >
      <Box mb={0}>
        <Flex
          py={[20, 30]}
          onClick={show ? toggleShow : null}
          className={`product-description-dropdown-item ${title
            .replace(" ", "-")
            .toLowerCase()} ${!show ? "closed" : "open"}`}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Text
            as="h4"
            variant="section"
            sx={{ pointerEvents: "none" }}
            fontSize={[18, 21]}
          >
            {title}
          </Text>
          {show ? (
            <FiMinus size="20" style={{ pointerEvents: "none" }} />
          ) : (
            <FiPlus size="20" style={{ pointerEvents: "none" }} />
          )}
        </Flex>
        {show ? (
          <Box
            sx={{
              a: { fontWeight: 500 },
              h3: {
                ":first-of-type": { marginTop: 0 },
                marginTop: "30px",
                fontSize: [18, 20],
              },
              cursor: "auto",
            }}
          >
            <Box className="product-description-dropdown-content">{body}</Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Flex>
  );
};

export default ProductDescriptionSection;
