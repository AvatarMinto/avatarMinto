import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack
} from "@chakra-ui/react";

function Card(props:any) {
  const { product } = props;
  return (
        <Image
          margin="auto"
          src={product}
          alt="Avatar"
          width={'300px'}
        />
  );
}

export default Card;
