import * as React from 'react';
import axios from 'axios';
import {
  Card,
  CardBody,
  Button,
  Image,
  Text,
  Center,
  Box,
  Badge,
  IconButton,
  SimpleGrid,
  Heading,
  CardFooter,
} from '@chakra-ui/react';
import yelp from '../assets/images/yelp.png';
import bin from '../assets/images/bin.png';
const { useState } = React;
const Favorites = ({ userFavs, handleDelete }) => {
  return (
    <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {userFavs.map((place, index) => (
        <Card maxW="sm" key={userFavs[index]._id} borderRadius="sm" size="sm" bg="white">
          <CardBody>
            <Image src={userFavs[index].image_url} alt={userFavs[index].name} objectFit="cover" />

            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="4" colorScheme="teal">
                {userFavs[index].price}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="md"
                textTransform="uppercase"
                ml="2"
              >
                {userFavs[index].location}
              </Box>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              letterSpacing="wide"
              textTransform="uppercase"
              noOfLines={2}
            >
              {userFavs[index].name}
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="md"
              textTransform="uppercase"
            >
              {userFavs[index].display_phone}
            </Box>
          </CardBody>

          <CardFooter>
            <Box mt="2" align="right">
              <IconButton as="a" target="_blank" href={userFavs[index].url} size="sm" mr="2">
                <Image src={yelp} alt="yelp" boxSize="8" />
              </IconButton>
              <IconButton
                mr="2"
                variant="ghost"
                value={userFavs[index]._id}
                onClick={(e) => handleDelete(userFavs[index]._id)}
              >
                <Image src={bin} alt="delete" boxSize="8" />
              </IconButton>
            </Box>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};
export default Favorites;
