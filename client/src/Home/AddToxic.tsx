import React, { useState } from 'react';
import '../index.css';
import TextField from "@mui/material/TextField";
import ScreenGrid from "../components/ScreenGrid";

function AddToxic() {
    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const setValue = (field: string, value: string) => {
        setValueState((prevState) => ({
          ...prevState,
          ...{ [field]: value },
        }));
    };
    const [values, setValueState] = useState(defaultValues);
    return(
        <ScreenGrid>
            <TextField 
                value = {values.firstName} 
                variant="outlined" 
                onChange={(e) => setValue('firstName', e.target.value)}
            />
        </ScreenGrid>
    );
}

export default AddToxic;