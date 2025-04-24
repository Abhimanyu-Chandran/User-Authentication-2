import React from 'react';
import {Button} from '@mui/material'
export const Logout = () => {
    const button={marginRight:"20px", fonySize:"1.2rem"}


    return (
        <Button style={button} variant="contained" color="error">Logout</Button>
    )
}