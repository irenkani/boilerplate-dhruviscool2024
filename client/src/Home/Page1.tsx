import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavigateFunction, useNavigate } from 'react-router-dom';
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
  background: #80414f;
  border-radius: 5px;
  border: 2px solid #bf4f74;
  color: #ffffff;
  margin: 0 1em;
  padding: 0.25em 1em;
  height: 5em;
  width: 15em;
  font-size: 1em;
  font-family: 'Press Start 2P', system-ui;
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

function Page1() {
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

  const handleAddTrait = async () => {
    const newAdminStatus = await selfUpgrade(user.email as string);
    if (newAdminStatus) {
      dispatch(toggleAdmin());
      setAdmin(true);
    }
  };

  const message = `Page 1`;

  return (
    <ScreenGrid>
      {/* <GridExample>
          <NavBar>NavBar</NavBar>
          <Main>Main</Main>
          <SideBar>SideBar</SideBar>
          <ContentBox>
              <Content1>Content1</Content1>
              <Content2>Content2</Content2>
              <Content3>Content3</Content3>
          </ContentBox>
          <Footer>Footer</Footer>
        </GridExample>  */}
      <Grid
        item
        container
        justifyContent="flex-end"
        alignItems="flex-start"
        padding={5}
      >
        <Button>Add Toxic Person</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={1}
      >
        <Typography
          fontFamily="Press Start 2P"
          alignContent="flex-start"
          fontSize={80}
        >
          {message}
        </Typography>
      </Grid>
      {/* <Grid item>
          <Typography variant="h2">Welcome to the Admin Dashboard</Typography>
        </Grid> */}
      {/* <Grid item container justifyContent="center">
        </Grid> */}
    </ScreenGrid>
  );
}

export default Page1;
