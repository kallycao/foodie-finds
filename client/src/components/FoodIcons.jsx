import * as React from 'react';

import fastfood from '../assets/images/hamburger.png';
import beef from '../assets/images/beef.png';
import boba from '../assets/images/bubble-tea.png';
import coffee from '../assets/images/latte.png';
import bakery from '../assets/images/croissant.png';
import chicken from '../assets/images/fried-chicken.png';
import vietnamese from '../assets/images/goi-cuon.png';
import icecream from '../assets/images/ice-cream.png';
import pizza from '../assets/images/pizza.png';
import breakfast from '../assets/images/pancakes.png';
import ramen from '../assets/images/ramen.png';
import healthy from '../assets/images/salad.png';
import vegan from '../assets/images/healthy-living.png';
import seafood from '../assets/images/shrimp.png';
import sushi from '../assets/images/sushi.png';
import mexican from '../assets/images/taco.png';
import thai from '../assets/images/thai-food.png';
import chinese from '../assets/images/dumpling.png';
import beer from '../assets/images/pint-of-beer.png';
import sandwich from '../assets/images/sandwich.png';
import fork from '../assets/images/fork.png';
import background from '../assets/images/bbackground.png';
import {
  IconButton,
  Image,
  Text,
  FormLabel,
  SimpleGrid,
  VStack,
  ButtonGroup,
  PseudoBox,
  useMergeRefs,
} from '@chakra-ui/react';

const { useState } = React;
const FoodIcons = ({ setPreference, preference, setSearch }) => {
  const foods = [
    bakery,
    breakfast,
    fastfood,
    pizza,
    sandwich,
    chicken,
    sushi,
    vietnamese,
    ramen,
    mexican,
    thai,
    chinese,
    seafood,
    beef,
    healthy,
    vegan,
    icecream,
    coffee,
    boba,
    beer,
  ];
  const foodNames = [
    'Bakery',
    'Breakfast',
    'Fast food',
    'Pizza',
    'Sandwich',
    'Chicken',
    'Sushi',
    'Vietnamese',
    'Ramen',
    'Mexican',
    'Thai',
    'Chinese',
    'Seafood',
    'Beef',
    'Healthy',
    'Vegan',
    'Ice cream',
    'Coffee',
    'Boba',
    'Beer',
  ];
  const [pick, setPick] = useState(30);

  const handlePick = (ind) => {
    setPreference({ ...preference, term: foodNames[ind] });
    setPick(ind);
  };

  return (
    <>
      <SimpleGrid columns={10} spacing="2" mt="2">
        {foods.map((food, index) => {
          return (
            <VStack spacing="1" key={food}>
              <IconButton boxShadow="md" isRound="true" boxSize="60px">
                <Image
                  src={food}
                  alt={foodNames[index]}
                  boxSize="60px"
                  className="food-icons"
                  type="image"
                  value={foodNames[index]}
                  onClick={() => handlePick(index)}
                />
              </IconButton>
              <FormLabel key={foodNames[index]} as={pick === index ? 'u' : ''}>
                {foodNames[index]}
              </FormLabel>
            </VStack>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default FoodIcons;
