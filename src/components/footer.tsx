import React from 'react';  
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  
  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <div></div>
          <Text style={{textAlign: "center"}}> <a href="https://buy.stripe.com/cN201y3VJdJ5328dQS"
                     className='bottomLinkText '
                     target='_blank'>
                      🔥 Get Source Code
                  </a><br/>
          <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='mailto:hello@cvbox.org'
                        className='boldText '>
                        @contact us
                    </a></Text>
          <Stack direction={'row'} spacing={6}>
          </Stack>
        </Container>
      </Box>
    );
  }