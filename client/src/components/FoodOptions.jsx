import * as React from 'react';
import FoodIcons from './FoodIcons.jsx';
import {
  Button,
  Text,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Collapse,
} from '@chakra-ui/react';

const { useState } = React;

const FoodOptions = ({ setPreference, preference }) => {
  const [search, setSearch] = useState(false);

  const handleCustomSearch = () => {
    setSearch(!search);
  };
  const { isOpen, onToggle } = useDisclosure();
  const [displaySearch, setDisplaySearch] = useState(false);

  const handleOptions = () => {
    if (displaySearch) {
      onToggle();
      setPreference({ ...preference, term: '' });
      setDisplaySearch(false);
    }
  };

  const handleCustom = () => {
    if (!displaySearch) {
      onToggle();
      setPreference({ ...preference, term: '' });
      setDisplaySearch(true);
    }
  };
  console.log('food options', preference);
  return (
    <Box width="60%">
      <Text>
        Select one from the
        <Button colorScheme="gray" onClick={handleOptions} margin="2">
          menu
        </Button>
        below or click
        <Button colorScheme="gray" onClick={handleCustom} margin="2">
          customize
        </Button>
        to personalize your search!
      </Text>

      <Collapse in={isOpen} animateOpacity>
        <Box>
          <FormControl isRequired>
            <FormLabel>Custom Search</FormLabel>
            <Input
              placeholder="What are you craving?"
              value={preference.term}
              onChange={(e) => setPreference({ ...preference, term: e.target.value })}
            />
          </FormControl>
        </Box>
      </Collapse>
      <Collapse in={!isOpen} animateOpacity>
        <Box>
          <FoodIcons setPreference={setPreference} preference={preference} />
        </Box>
      </Collapse>
    </Box>
  );
};
export default FoodOptions;
