import * as React from 'react';
import logo from '../assets/images/cutlery.png';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Heading,
  Spacer,
  ButtonGroup,
  Image,
} from '@chakra-ui/react';
const NavBar = ({ pageCount, setPageCount, currInfo, handleLogout }) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" padding="4">
      <Box p="2">
        <Image src={logo} alt="let's eat" w="12" color="#dd636e" />
      </Box>
      <Box p="2">
        <Heading size="lg">Let's Eat!</Heading>
      </Box>

      <Spacer />
      {pageCount !== 0 ? (
        <ButtonGroup gap="2">
          <Button
            colorScheme="gray"
            variant={pageCount === 1 ? 'solid' : 'outline'}
            onClick={() => setPageCount(1)}
          >
            Random Search
          </Button>
          <Button
            colorScheme="gray"
            variant={pageCount === 2 ? 'solid' : 'outline'}
            onClick={() => setPageCount(2)}
          >
            Favorites
          </Button>
          <Button colorScheme="gray" variant="outline" onClick={() => handleLogout()}>
            Log Out
          </Button>
        </ButtonGroup>
      ) : null}
    </Flex>
  );
};
export default NavBar;
