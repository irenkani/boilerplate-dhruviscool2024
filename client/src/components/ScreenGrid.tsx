import React from 'react';
import { Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AnyChildren } from '../util/types/generic';

/**
 * This styles a the whole screen as a grid component, serves as a wrapper to ensure
 * that we know what role it plays, as well as height as the whole screen, spacing, and resizing
 * @param children The {@link AnyChildren} representing the components of the screen.
 * @returns
 */

const theme = createTheme({
  palette: {
    primary: {
      main: '#c40e0e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function ScreenGrid({ children }: AnyChildren) {
  return (
    <Grid
      container
      // xs={12}
      // height="100vh"
      // width="100vw"
      // style={{ height: '100vh', width: '100vw' }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        backgroundColor: '#c40e0e',
      }}
    >
      {children}
    </Grid>
  );
}

export default ScreenGrid;
