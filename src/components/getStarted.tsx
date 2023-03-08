import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Text
  } from '@chakra-ui/react';
  
  interface StatsCardProps {
    title: string;
    stat: string;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        my={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('brand.200', 'brand.200')}
        rounded={'xl'}>
        <StatLabel fontSize={'xl'}  fontWeight={'bold'} isTruncated color={'brand.100'} as='u'>
          {title}
        </StatLabel>
        <StatNumber fontSize={'md'} fontWeight={'small'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function GetStarted() {
    return (
      <Box maxW="8xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} id='getStarted'>
        <Text 
            as={'span'} 
            color={"brand.100"}
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            mb={10}
            fontWeight={'bold'}>
            Avatarize yourself and have fun! 🤖💥
        </Text>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }} mt={10}>
          <StatsCard title={'Connect your wallet'} stat={"Ready to bring your Avatar to the big leagues? First things first, select your go-to wallet and prepare to link it to your Everyday Avatar. Simply hit the 'Connect Metamask' button located at the top right corner, and voila! You're now a certified baller in the world of digital assets. Need more wallet options? Check out our resource page and learn how to stack that crypto."} />
          <StatsCard title={'Make your own Avatar'} stat={"Alright, it's time to bring your wildest Avatar dreams to life! Choose from a wide variety of hairstyles and accessories to create a one-of-a-kind Everyday Avatar that screams 'you.' Once you've crafted your masterpiece, hit the 'Mint Now' button to seal the deal. It's like giving birth to a digital mini-you!."} />
          <StatsCard title={'Modify it at any time'} stat={"Not digging your Avatar's vibe? No problemo! Click 'Update' to give it a makeover by swapping out its components and accessories. You can do this as many times as you want without any restrictions. It is like having a magical closet that never runs out of options! Enjoy the fun! 😜"} />
          <StatsCard title={'Connect it to IPFS.'} stat={"Listen up, digital wizards! If you want to guarantee your Avatar lives on forever, it's time to work some blockchain magic and hit that 'Pin to IPFS' button. It's like giving your Avatar immortality, but without all the pesky vampire bites. And remember, each time you update your Avatar, just keep on pinning like it's going out of style. Let's keep those servers on their toes and show 'em who's boss! 🔥👾"} />
        </SimpleGrid>
      </Box>
    );
  }
  