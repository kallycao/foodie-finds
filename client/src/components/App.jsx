import * as React from 'react';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './NavBar.jsx';
import CreateUserForm from './CreateUserForm.jsx';
import RandomRestaurantForm from './RandomRestaurantForm.jsx';
import WelcomePage from './WelcomePage.jsx';
import Favorites from './Favorites.jsx';
import background from '../assets/images/background2.png';
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
  Grid,
  GridItem,
  Wrap,
  extendTheme,
} from '@chakra-ui/react';

const { useState } = React;
const App = () => {
  const theme = extendTheme({
    colors: {
      brand: {
        100: '#dd636e',
      },
    },
  });
  const initialUser = { username: '', password: '' };
  const [user, setUser] = useState(initialUser);
  const [newUser, setNewUser] = useState(false);
  const initInfo = {
    username: '',
    _id: '',
  };
  const [currInfo, setCurrInfo] = useState(initInfo);
  const [userFavs, setUserFavs] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const handleLogout = () => {
    setPageCount(0);
    setUser(initialUser);
    setNewUser(false);
    setCurrInfo(initInfo);
    setUserFavs([]);
  };

  const handleAuth = () => {
    const { username, password } = user;
    if (newUser) {
      axios
        .post('/users', { username: username, password: password })
        .then((data) => {
          setCurrInfo({ username: data.username, _id: data._id });
        })
        .catch((err) => err);
      setNewUser(false);
      setPageCount(1);
    } else {
      axios
        .get(`/users?username=${user.username}`)
        .then((res) => {
          setCurrInfo({ username: res.data.username, _id: res.data._id });
          const id = res.data._id;
          return id;
        })
        .then((id) => {
          axios
            .get(`users/favorites?user_id=${id}`)

            .then((res) => {
              setUserFavs(res.data);
            })
            .catch((err) => err);
        })
        .catch((err) => console.log(err));
      setNewUser(false);
      setPageCount(1);
    }
  };

  const getFavorites = () => {
    axios
      .get(`users/favorites?user_id=${currInfo._id}`)
      .then((res) => {
        setUserFavs(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete('/users/favorites', { data: { _id: id } })
      .then(() => {
        getFavorites();
      })
      .catch((err) => console.log(err));
  };
  const handleAdd = (place) => {
    if (place.price === undefined) {
      place.price = '-';
    }
    const reqBody = {
      name: place.name,
      category: 'category',
      phone: place.display_phone,
      price: place.price,
      rating: place.rating,
      location: place.location,
      url: place.url,
      image_url: place.image_url,
      favorite: true,
    };
    axios
      .post('users/favorites', reqBody)
      .then(() =>
        getFavorites(
          {
            user_id: currInfo._id,
          },
          reqBody
        )
      )
      .catch((err) => err);
  };

  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={`"header" "main" "footer"`}
        gridTemplateRows={'10% 60% 30%'}
        gridTemplateColumns={'auto'}
        h="100vh"
        gap="1"
      >
        <GridItem pl="2" area={'header'}>
          <NavBar
            pageCount={pageCount}
            setPageCount={setPageCount}
            currInfo={currInfo}
            handleLogout={handleLogout}
          />
        </GridItem>

        <GridItem pl="2" area={'main'} alignItems="center">
          {pageCount === 0 ? (
            <CreateUserForm
              user={user}
              setUser={setUser}
              newUser={newUser}
              setNewUser={setNewUser}
              handleAuth={handleAuth}
              currInfo={currInfo}
              setCurrInfo={setCurrInfo}
            />
          ) : null}
          {pageCount === 1 ? (
            <RandomRestaurantForm currInfo={currInfo} handleAdd={handleAdd} />
          ) : null}
          {pageCount === 2 ? <Favorites userFavs={userFavs} handleDelete={handleDelete} /> : null}
        </GridItem>

        <GridItem area={'footer'} alignSelf="end" justifySelf="center">
          <WelcomePage />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
export default App;
