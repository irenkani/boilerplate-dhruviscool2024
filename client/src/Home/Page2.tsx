import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavigateFunction, useNavigate, useLocation } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../util/redux/hooks';
import {
  logout as logoutAction,
  toggleAdmin,
  selectUser,
} from '../util/redux/userSlice';
import { logout as logoutApi, selfUpgrade } from './api';
import ScreenGrid from '../components/ScreenGrid';

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

<<<<<<< HEAD
const GridExample = styled.div`
  display: grid;
  width: 100vw;
  // height: 100%;
  color: white;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'nav nav nav nav'
    'sidebar main main main'
    'sidebar content content content'
    'sidebar footer footer footer';
  text-align: center;
  grid-gap: 0.25rem;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Press Start 2P", system-ui;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    padding: 0;
  }
`;

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

const NavBar = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`;
const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;
const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;
=======
>>>>>>> CardConstant



function Page2() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const [admin, setAdmin] = useState(user.admin);
  const logoutDispatch = () => dispatch(logoutAction());

  const location = useLocation();
  const { card } = location.state;


  const handleHomePage = async () => {
    navigator('/home', { replace: true });
  };


  return (
    <ScreenGrid>
<<<<<<< HEAD
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
=======
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
          {card.toxicPersonName}
        </Typography>
      </Grid>

>>>>>>> CardConstant
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingBottom={2}
        paddingTop={0}
      >
<<<<<<< HEAD
        <Typography variant="h1" alignContent="flex-start">
          RACHEL
=======
        <Box
          component="img"
          src={card.imageURL}
          alt={card.imageTitle}
          sx={{ height: '150px', width: 'auto' }}
        />
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
          "PAGE 2"
>>>>>>> CardConstant
        </Typography>
      
      </Grid>
<<<<<<< HEAD


      <Grid
        item
        container
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        padding={20}
        paddingLeft={30}
        paddingBottom={100}
        paddingTop={10}
      >
        <Typography variant="h5" alignContent="center">
          - Drinks coffee black
        </Typography>

        <Typography variant="h5" alignContent="center">
        - Has the attention span of a stereotypical goldfish
        </Typography>

        <Typography variant="h5" alignContent="center">
        - Loves gloomy/cloudy weather
        </Typography>

        <Typography variant="h5" alignContent="center">
        - Incapable of roasting marshmallows without setting them on fire
        </Typography>

        <Typography variant="h5" alignContent="center">
        - Puts peanut butter on everything
        </Typography>
      
      </Grid>
        
=======
>>>>>>> CardConstant
    </ScreenGrid>
  );
}

export default Page2;
