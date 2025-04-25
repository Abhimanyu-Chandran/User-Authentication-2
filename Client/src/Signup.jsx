import React, {useState} from 'react';
import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Signup = () => {
    const heading = {fontSize: "2.5rem", fontWeight: "600"};
    const paperStyle = {padding: "2rem", margin: "100px auto", borderRadius: "1rem", boxShadow: "10px 10px 10px"};
    const row = {
        display: "flex", marginTop: "2rem"
    };
    const btnStyle = {
        marginTop: "2rem", fontSize: "1.2rem", fontWeight: "700", backgroundColor: "blue", borderRadius: "0.5rem"
    };
    const [_name, setName] = useState("");
    const [_email, setEmail] = useState("");
    const [_password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSignup = (e) => {
        e.preventDefault();
        axios.post(" http://localhost:5175/signup", {_name, _email, _password})
            .then(result => {
                if (result.status === 201) {
                    console.log("User created Successful!");
                    navigate("/login");
                }
            })
            .catch
        {
            err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email");
                } else {
                    console.log(err);
                }
            }
        }
    }

    return (<Grid align="center">
        <Paper style={paperStyle} sx={{
            width: {
                xs: "80vw", sm: "50vw", md: "40vw", lg: "30vw", xl: "20vw",
            }, height: '60vh'
        }}>
            <Typography style={heading}>Signup</Typography>
            <form onSubmit={handleSignup}>

                <TextField onChange={(e) => setName(e.target.value)} name="name" required
                           sx={{label: {fontWeight: '700', fontSize: "1.3rem"}}} style={row} label="Enter Name:"
                           type="text"></TextField>

                <TextField onChange={(e) => setEmail(e.target.value)} name="email" required
                           sx={{label: {fontWeight: '700', fontSize: "1.3rem"}}} style={row} label="Enter Email:"
                           type="email"></TextField>

                <TextField onChange={(e) => setPassword(e.target.value)} name="password" required
                           sx={{label: {fontWeight: '700', fontSize: "1.3rem"}}} style={row} label="Enter Password:"
                           type="password"></TextField>

                <Button type="submit" variant="contained" style={btnStyle}>Signup</Button>
            </form>
        </Paper>
    </Grid>)
}