import React, { useState } from 'react';
import '../index.css';
import TextField from "@mui/material/TextField";
import ScreenGrid from "../components/ScreenGrid";
import Button from "@mui/material/Button";
import { Typography, Grid, Paper } from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { addPerson } from './HomePage';

function AddToxic() {
    const defaultValues = {
        firstName: '',
        lastName: '',
        toxictrait1: '',
        toxictrait2: '',
        toxictrait3: '',
        toxictrait4: '',
        toxictrait5: ''
    };

    const setValue = (field: string, value: string) => {
        setValueState((prevState) => ({
          ...prevState,
          ...{ [field]: value },
        }));
    };
    const [values, setValueState] = useState(defaultValues);

    const navigator = useNavigate();
    const handleHomePage = async () => {
        navigator('/home', { replace: true });
      };

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

    return(
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
          Add Toxic Person
        </Typography>
      
      </Grid>
            <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            padding={5}
            >
                <TextField 
                value = {values.firstName} 
                variant="outlined" 
                required
                label="First Name"
                onChange={(e) => setValue('firstName', e.target.value)}
                style = {{width: 500}}
                />
            </Grid>

            <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingBottom={5}
            >
                <TextField 
                value = {values.lastName} 
                variant="outlined" 
                required
                label="Last Name"
                onChange={(e) => setValue('lastName', e.target.value)}
                style = {{width: 500}}
                />
            </Grid>
            
            <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingBottom={5}
            >
                <TextField 
                value = {values.toxictrait1} 
                variant="outlined" 
                required
                label="Toxic Trait 1"
                onChange={(e) => setValue('toxictrait1', e.target.value)}
                style = {{width: 500}}
                />
            </Grid>

            <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingBottom={5}
            >
                <TextField 
                value = {values.toxictrait2} 
                variant="outlined" 
                required
                label="Toxic Trait 2"
                onChange={(e) => setValue('toxictrait2', e.target.value)}
                style = {{width: 500}}
                />
            </Grid>
            
            <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingBottom={5}
            >
                <TextField 
                value = {values.toxictrait3} 
                variant="outlined" 
                required
                label="Toxic Trait 3"
                onChange={(e) => setValue('toxictrait3', e.target.value)}
                style = {{width: 500}}
                />
            </Grid>

            <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingBottom={5}
            >
                <TextField 
                value = {values.toxictrait4} 
                variant="outlined" 
                required
                label="Toxic Trait 4"
                onChange={(e) => setValue('toxictrait4', e.target.value)}
                style = {{width: 500}}
                />
            </Grid>
            
            <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingBottom={5}
            >
                <TextField 
                value = {values.toxictrait5} 
                variant="outlined" 
                required
                label="Toxic Trait 5"
                onChange={(e) => setValue('toxictrait5', e.target.value)}
                style = {{width: 500}}
                />
            </Grid>
            
            <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingBottom={15}
            >
                <Button onClick={() => {addPerson(
                    values.firstName,
                    values.lastName,
                    values.toxictrait1,
                    values.toxictrait2,
                    values.toxictrait3,
                    values.toxictrait4,
                    values.toxictrait5)}}>
                Save
                </Button>
            </Grid>
            
        </ScreenGrid>
    );
}

export default AddToxic;