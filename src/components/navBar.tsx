import * as React from 'react';
import {Link} from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Stack,
  Text,
  Center,
} from '@chakra-ui/react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NftCard from './NFTCard';
import Profile from '../pages/Profile';
export default function NavBar() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text
                fontWeight={'bold'}
                px={6}
                colorScheme={'red'}
                color={'brand.100'}
                >
                    <Link to="/">
                    AvatarMinto
                    </Link>
              </Text>


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <div className="bg-yellow-600 py-4">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <ConnectButton />
          </div>
        </div>
      </div>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Link  to="/profile">
                      <p>Username</p>
                      </Link>
                  </Center>
                  <br />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}