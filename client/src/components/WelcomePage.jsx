import * as React from 'react';
import background from '../assets/images/aa.png';

import {
  Box,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  Heading,
  Center,
} from '@chakra-ui/react';

const WelcomePage = () => {
  return <Image src={background} alt="background" />;
};
export default WelcomePage;
