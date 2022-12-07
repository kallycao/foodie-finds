import * as React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Form,
  Image,
} from '@chakra-ui/react';
import logo from '../assets/images/cutlery.png';
const { useState } = React;

const CreateUserForm = ({
  user,
  setUser,
  newUser,
  setNewUser,
  handleAuth,
  currInfo,
  setCurrInfo,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    handleAuth();
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex
          minH={'100vh'}
          align={'start'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6} zIndex={2}>
            <Stack align={'center'}>
              <Heading fontSize={'3xl'}>{newUser ? 'Sign Up' : 'Sign In'}</Heading>
            </Stack>
            <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                </FormControl>
                <Stack spacing={5}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>{newUser ? '' : 'Forgot password?'}</Link>
                  </Stack>
                  <Button type="submit" bg={'brand.100'} color={'white'}>
                    {newUser ? 'Sign up' : 'Sign in'}
                  </Button>
                </Stack>
                <Stack spacing={4}>
                  <Button variant="link" onClick={() => setNewUser(true)}>
                    {newUser ? 'Sign in' : 'Create Account'}
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </>
  );
};

export default CreateUserForm;
