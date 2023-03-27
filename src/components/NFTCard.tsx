import { Box, Button, Image, Text } from '@chakra-ui/react';
import { number, string } from 'yup';

const NftCard = (props:any) => {
    const { product, id } = props;
  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" margin={"10px"}>
      <Image src={product} alt="NFT" />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Text fontSize="2xl" fontWeight="semibold" mr={2}>
            figure {id}
          </Text>
          <Text fontSize="lg" color="gray.500">
            by Yoda
          </Text>
        </Box>
        <Text mt="2" color="gray.600">
          description
        </Text>
        <Box mt="4" display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight="bold" fontSize="xl">
           1.04 ETH
          </Text>
          <Button colorScheme='blue'>Sell</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NftCard;