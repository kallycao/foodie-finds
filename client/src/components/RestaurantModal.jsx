import * as React from 'react';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Text,
  Center,
  Box,
  Badge,
  IconButton,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import yelp from '../assets/images/yelp.png';
import heart from '../assets/images/heart.png';
const { useState, useEffect } = React;
const RestaurantModal = ({ restaurantList, handleAdd }) => {
  const [count, setCount] = useState(0);
  const [currUser, setCurrUser] = useState('');

  useEffect(() => {
    if (restaurantList.length) {
      onOpen();
    }
  }, [restaurantList.length]);
  const handleNext = () => {
    setCount(count + 1);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {restaurantList.length ? (
        <Modal onOpen={onOpen} isOpen={isOpen} onClose={onClose} size="sm">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Box mt="2" maxW="sm" borderRadius="sm" overflow="hidden">
                <Image
                  borderRadius="md"
                  boxSize="sm"
                  objectFit="cover"
                  src={restaurantList[count].image_url}
                  alt={restaurantList[count].name}
                />
                <Box p="4">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="4" colorScheme="teal">
                      {restaurantList[count].price}
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="md"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {restaurantList[count].location}
                    </Box>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    letterSpacing="wide"
                    textTransform="uppercase"
                    noOfLines={1}
                  >
                    {restaurantList[count].name}
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="md"
                    textTransform="uppercase"
                  >
                    {restaurantList[count].display_phone}
                  </Box>
                  <Box mt="2">
                    <IconButton
                      mr="2"
                      variant="ghost"
                      onClick={() => handleAdd(restaurantList[count])}
                    >
                      <Image src={heart} alt="favorite" boxSize="8" />
                    </IconButton>
                    <IconButton
                      as="a"
                      target="_blank"
                      href={restaurantList[count].url}
                      size="sm"
                      mr="2"
                    >
                      <Image src={yelp} alt="yelp" boxSize="8" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
              {count === restaurantList.length - 1 ? null : (
                <Button colorScheme="red" variant="outline" onClick={() => handleNext()}>
                  Next
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default RestaurantModal;
