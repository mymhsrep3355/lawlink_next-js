import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Stack,
  Checkbox,
  Text,
  Link,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ForgotPasswordModal } from './ForgotPasswordModal';

const Login = ({ setIsLoginPage }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Flex align="center" justify="center" h="75vh">
      <Box
        w={{ base: '100%', md: '500px' }}
        p={8}
        rounded="lg"
        boxShadow="lg"
        bg="white"
      >
        <Heading as="h2" size="xl" mb={6} textAlign="center" color="red.600">
          Welcome Back
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={MdEmail} color="red.500" />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  focusBorderColor="red.500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaLock} color="red.500" />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  focusBorderColor="red.500"
                  value={formData.password}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align="start"
              justify="space-between"
            >
              <Checkbox
                id="rememberMe"
                colorScheme="red"
                isChecked={formData.rememberMe}
                onChange={handleChange}
              >
                Remember me
              </Checkbox>
              <ForgotPasswordModal />
            </Stack>
            <Button
              mt={4}
              colorScheme="red"
              bg="red.600"
              color="white"
              _hover={{ bg: 'red.700' }}
              size="lg"
              type="submit"
              leftIcon={<FaUserAlt />}
            >
              Login
            </Button>
            <Stack direction={{ base: 'column', sm: 'row' }} align="center">
            <Text color="gray.600">Don&#39;t have an account?</Text>
              <Link color="red.500" onClick={() => setIsLoginPage(false)}>
                Sign up
              </Link>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
