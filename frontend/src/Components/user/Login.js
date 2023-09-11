import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
// impor icons

import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import {useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState("");
  const [sending, setSending] = useState(false);
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  console.log("local")
  console.log(localStorage.getItem('token'))
  const id = useParams()
  //get redurec url 
  const redirectURL = localStorage.getItem('redirectURL')
  // add page url 
  const addPageUrl = 'http://localhost:3000/Add'
  // carDetail page url 
  const carDetailUrl = `http://localhost:3000/detail/${id}`
  // user profile page url 
  const userProfileUrl = 'http://localhost:3000/userProfile/'

  //  6bd51a5c70c884fec501580dd508599500f29dc7245f1591d332eef8739961c2


  // define state for visible and unVisible icons in the text box
  const [emailIcon, setEmailIcon] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState(true);
  console.log(localStorage.getItem('token'))

  return (
    <Grid item lg={12} md={12} sm={12} xs={12} fullWidth>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{
          width: 600,
          margin: "0px auto",
          mt: 7,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LockOpenIcon sx={{ fontSize: "40px" }} />
          <Typography variant="h6">Sign In</Typography>
        </Box>
        <Typography color={"red"} fontSize={"12px"}>
          {errors}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <form autoComplete="off" onSubmit={''}>
            <TextField
              sx={{ mt: 2, width: 600 }}
              size="small"
              label="username"
              type="text"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
              onFocus={() => {
                setEmailIcon(false);
              }}
              onBlur={() => {
                setEmailIcon(true);
              }}
            />
            <TextField
              sx={{ mt: 2, width: 600 }}
              size="small"
              label="Password"
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              onFocus={() => {
                setPasswordIcon(false);
              }}
              onBlur={() => {
                setPasswordIcon(true);
              }}

            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                mt: 2,
              }}
            >
              <Button
                variant="outlined"
                sx={{ width: 147, mr: 1 }}
                startIcon={<RestartAltIcon />}
                type="reset"
              >
                Reset
              </Button>
              <Button
                variant="contained"
                sx={{ width: 147, ml: 1 }}
                endIcon={<SendIcon />}
                type="submit"
                disabled={sending}
              >
                Submet
              </Button>
            </Box>
          </form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              mt: 3,
              ml: 4,
            }}
          >
            <Typography color={"blue"}>Forgot Your Password? </Typography>
            <Typography ml={1}>/</Typography>
            <Link to="/signup/">
              <Typography
                sx={{ textDecoration: "underline", color: "blue", ml: 1 }}
              >
                Sign Up
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Login;
