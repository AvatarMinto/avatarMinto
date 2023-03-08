import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
    Spacer, 
    Image, 
    Text,
    Button
  } from '@chakra-ui/react';
  import { Link } from "react-router-dom";
  import image_1 from "../assets/image_1.svg"
  import image_2 from "../assets/image_2.svg"
  import image_3 from "../assets/image_3.svg"
  import image_4 from "../assets/image_4.svg"
  import image_5 from "../assets/image_5.svg"
  import image_6 from "../assets/image_6.svg"
  import image_7 from "../assets/image_7.svg"
  import Card from "./cards";
  const testimonials = [image_1, image_2, image_3, image_4, image_5, image_6, image_7 ];
  
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  
  interface TestimonialCardProps {
    avatar: string;
    index: number;
  }
  
  function TestimonialCard(props: TestimonialCardProps) {
    const { avatar, index } = props;
    return (
      <Flex
        boxShadow={'lg'}
        maxW={'640px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'80%'}
        rounded={'xl'}
        p={10}
        m={10}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          backgroundImage: backgrounds[index % 4],
        }}>
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-around'}>
            <img src={avatar} alt="Avatar" />
        </Flex>
      </Flex>
    );
  }
  
  export default function Avatars() {
    return (
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        overflow={'hidden'}>
          <Flex>
          <Box p='4'>
          <Text
            as={'span'}
            color={"brand.100"}
            textAlign={'left'}
            fontSize={'4xl'}
            py={10}
            ml={10}
            fontWeight={'bold   '}>
            Avatars
          </Text> 
          </Box>
          <Spacer />
          <Box p='4' >
          <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'brand.100'}
                _hover={{ bg: 'brand.200' }}>
                    <Link to="/all-avatars">
                      See more
                    </Link>
              </Button>
          </Box>
        </Flex>
        <Container maxW="100vw" centerContent>
        <SimpleGrid
          columns={{ base: 1, xl: 3 }}
          spacing={'10'}
          mt={5}
          mb={16}
          mr={12}
          mx={'auto'}
          overflow={'scroll'}>
            <Box display={"flex"} >

          {testimonials.map((cardInfo, index) => (
            <Card
            key={index}
            product={cardInfo}
            />
          ))}
            </Box>
        </SimpleGrid>
      </Container>
        <Box>
        </Box>
      </Flex>
    );
  }