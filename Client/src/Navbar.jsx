import React from 'react';
import {AppBar, Typography, Toolbar, Button} from "@mui/material";
import {Link} from "react-router-dom";
import {Logout} from "./Logout";

export const Navbar = () => {
    const button={marginRight:"20px", fonySize:"1.2rem"}

    return (
        <AppBar sx={{bgcolor: '#333'}}>
            <Toolbar>
                <Typography variant="h4" sx={{flexGrow:1}}>Mern Auth</Typography>
                <Button style={button} color="success" variant="contained" to="/login" component={Link}>Login</Button>
                <Button style={button} color="secondary" variant="contained" to="/signup" component={Link}>Signup</Button>
                <Logout />
            </Toolbar>
        </AppBar>
    )
}