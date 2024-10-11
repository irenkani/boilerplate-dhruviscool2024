import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Typography, Grid, Paper } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';
import Card from '@mui/material/Card';
import { useAppDispatch, useAppSelector } from '../util/redux/hooks';
import {
  logout as logoutAction,
  toggleAdmin,
  selectUser,
} from '../util/redux/userSlice';
import { logout as logoutApi, selfUpgrade } from './api';
import ScreenGrid from '../components/ScreenGrid';
import '../index.css';
import COLORS from '../assets/colors';

interface PromoteButtonProps {
  admin: boolean | null;
  handleSelfPromote: () => void;
  navigator: NavigateFunction;
}

/**
 * A button which, when clicked, will promote the user to admin. If the user is already admin, the button will be a link to the admin dashboard.
 * @param admin - a boolean indicating whether the user is an admin
 * @param handleSelfPromote - a function which promotes the user to admin
 * @param navigator - a function which navigates to a new page (passed in from parent function)
 */
/**
 * The HomePage of the user dashboard. Displays a welcome message, a logout button and a button to promote the user to admin if they are not already an admin. If the user is an admin, the button will navigate them to the admin dashboard. This utilizes redux to access the current user's information.
 */

const Button = styled.button`
  background: #4c9cc4;
  border-radius: 5px;
  border: 2px solid #335e9a;
  color: #ffffff;
  margin: 0 1em;
  padding: 0.25em 1em;
  height: 3em;
  width: 12em;
  font-size: 1em;
  font-family: 'Press Start 2P', system-ui;
  text-shadow: 3px, 2px, 1px, #d6d6d6;
  &:hover {
    background-color: #51648f;
  }
`;

const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

function HomePage() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const [admin, setAdmin] = useState(user.admin);
  const logoutDispatch = () => dispatch(logoutAction());
  const handleLogout = async () => {
    if (await logoutApi()) {
      logoutDispatch();
      navigator('/login', { replace: true });
    }
  };

  const handlePage1 = async () => {
    navigator('/page1', { replace: true });
  };
  const handlePage2 = async () => {
    navigator('/page2', { replace: true });
  };
  const handlePage3 = async () => {
    navigator('/page3', { replace: true });
  };

  const handleAddTrait = async () => {
    const newAdminStatus = await selfUpgrade(user.email as string);
    if (newAdminStatus) {
      dispatch(toggleAdmin());
      setAdmin(true);
    }
  };

  const message = `CHOOSE YOUR`;

  return (
    <ScreenGrid>
      <Grid
        item
        container
        justifyContent="flex-end"
        alignItems="flex-start"
        padding={3}
        style={{ backgroundColor: COLORS.pokemonNavy }}
      >
        <Button>ADD TOXIC PERSON</Button>
        <Button onClick={handleLogout}>LOGOUT</Button>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingTop={10}
      >
        <Typography variant="h1" alignContent="flex-start" paddingBottom={3}>
          {message}
        </Typography>
        <Box
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon logo"
          sx={{ height: '150px', width: 'auto' }}
        />
      </Grid>
      <Grid
        item
        container
        justifyContent="space-around"
        paddingTop={10}
        paddingBottom={0}
      >
        {/* Ditto */}
        <Box
          component="img"
          src="https://archives.bulbagarden.net/media/upload/thumb/2/25/0132Ditto.png/250px-0132Ditto.png"
          alt="Ditto"
          sx={{ height: '200px', width: 'auto' }}
        />
        {/* Slowpoke */}
        <Box
          component="img"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//079.png"
          alt="Slowpoke"
          sx={{ height: '200px', width: 'auto' }}
        />
        {/* Togepi */}
        <Box
          component="img"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//175.png"
          alt="Togepi"
          sx={{ height: '200px', width: 'auto' }}
        />
      </Grid>
      <Grid item container justifyContent="space-around" paddingBottom={10}>
        <Button onClick={handlePage1}>PAGE 1</Button>
        <Button onClick={handlePage2}>PAGE 2</Button>
        <Button onClick={handlePage3}>PAGE 3</Button>
      </Grid>
    </ScreenGrid>
  );
}

export default HomePage;
