import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Typography, Grid, Paper, } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../util/redux/hooks';
import {
  logout as logoutAction,
  toggleAdmin,
  selectUser,
} from '../util/redux/userSlice';
import { logout as logoutApi, selfUpgrade } from './api';
import ScreenGrid from '../components/ScreenGrid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import '../index.css';


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
  margin: 0.2 2em;
  padding: 0.5em 1em;
  height: 4.5em;
  width: 12em;
  font-size: 1em;
  line-height: 1.5em;
  font-family: 'Press Start 2P', system-ui;
  text-shadow: 3px, 2px, 1px, #d6d6d6;
  &:hover {
    background-color: #51648f;
  }
`;


function Page1() {
  const message = `Page 1`;
  const navigator = useNavigate();
  

  const handleHomePage = async () => {
    navigator('/HomePage', { replace: true });
  };


  return (
    <ScreenGrid>
      <Grid
        item
        container
        justifyContent="flex-end"
        alignItems="flex-start"
        paddingTop={5}
        paddingRight={5}
        paddingBottom={2}
      >
        <Button onClick={handleHomePage}>BACK TO HOME</Button>
      </Grid>
      {/* <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={5}
      >
        <Typography variant="h1" alignContent="flex-start">
          {message}
        </Typography>
      </Grid> */}
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingBottom={2}
        paddingTop={0}
      >
        <Typography variant="h1" alignContent="flex-start">
          WILLARD
        </Typography>
      
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingBottom={2}
        paddingTop={0}
      >
        //insert image here
      
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingBottom={100}
        paddingTop={10}
      >
        <Typography variant="h5" alignContent="flex-start">
          "I need to think about it"
        </Typography>
      
      </Grid>
        
    </ScreenGrid>
  );
}

export default Page1;
