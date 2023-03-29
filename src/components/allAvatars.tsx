import React from "react";
import { SimpleGrid, Container, Box } from '@chakra-ui/react';
import image_1 from "../assets/image_1.svg"
import image_2 from "../assets/image_2.svg"
import image_3 from "../assets/image_3.svg"
import image_4 from "../assets/image_4.svg"
import image_5 from "../assets/image_5.svg"
import image_6 from "../assets/image_6.svg"
import image_7 from "../assets/image_7.svg"
import NFTCard from "../components/NFTCard";
import NavBar from "./navBar";
const testimonials = [image_1, image_2, image_3, image_4, image_5, image_6, image_7];

const AllAvatars = () => {
  return (
    <>
      <NavBar />
      <Container maxW="100vw" >
        <SimpleGrid
          columns={{ base: 1, xl: 4 }}>
          <Box display={"contents"} overflowX={'hidden'} >
            {testimonials.map((cardInfo, index) => (
              <NFTCard
                key={index}
                product={cardInfo}
                id={index}
                type="buy"
              />
            ))}
          </Box>
        </SimpleGrid>
      </Container>
    </>
  )
}

export default AllAvatars