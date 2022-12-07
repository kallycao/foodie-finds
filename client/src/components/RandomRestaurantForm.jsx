import * as React from 'react';
import axios from 'axios';
import FoodOptions from './FoodOptions.jsx';
import RestaurantModal from './RestaurantModal.jsx';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  Input,
  VStack,
  Box,
  Button,
  Heading,
  Center,
  HStack,
  Flex,
} from '@chakra-ui/react';
const { useState } = React;

const RandomRestaurantForm = ({ currInfo, handleAdd }) => {
  const initialPref = {
    term: '',
    location: '',
    open_now: false,
  };

  const [preference, setPreference] = useState(initialPref);

  const [restaurantList, setRestaurantList] = useState([]);

  const handleRandom = (e) => {
    e.preventDefault();
    const { term, location, open_now } = preference;
    axios
      .get(`/restaurants?term=${term}&location=${location}&open_now=${open_now}`)
      .then((res) => {
        shuffleList(res.data);
        setPreference(initialPref);
      })
      .catch((err) => console.log('Unable to retrieve restaurants', err));
  };
  const handleOpenNow = () => {
    preference.open_now
      ? setPreference({ ...preference, open_now: false })
      : setPreference({ ...preference, open_now: true });
  };
  const shuffleList = (currList) => {
    let list = currList.map((currPlace) => {
      let details = {
        name: currPlace.name,
        display_phone: currPlace.display_phone,
        location: currPlace.location.display_address[currPlace.location.display_address.length - 1],
        image_url: currPlace.image_url,
        rating: currPlace.rating,
        price: currPlace.price,
        url: currPlace.url,
        rating: currPlace.rating,
      };
      return details;
    });
    let shuffled = [...list].sort(() => Math.random() - 0.5);
    setRestaurantList(shuffled);
  };
  return (
    <Box align="center">
      <form onSubmit={(e) => handleRandom(e)}>
        <VStack spacing="5px">
          <HStack>
            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input
                htmlSize={20}
                width="auto"
                placeholder="City, State or Zip Code"
                value={preference.location}
                onChange={(e) => setPreference({ ...preference, location: e.target.value })}
              />
            </FormControl>

            <FormControl>
              <Checkbox value={preference.open_now} onChange={handleOpenNow}>
                Open Now
              </Checkbox>
            </FormControl>
          </HStack>
          <FormControl>
            <FoodOptions setPreference={setPreference} preference={preference} />
          </FormControl>
          <Button bg={'brand.100'} color="white" type="submit">
            Let's Eat!
          </Button>
        </VStack>
      </form>

      <RestaurantModal restaurantList={restaurantList} handleAdd={handleAdd} />
    </Box>
  );
};
export default RandomRestaurantForm;
