import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
// impor icons

import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
const Regisrer = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [sending, setSending] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const id = useParams();
  //get redurec url
  const redirectURL = localStorage.getItem("redirectURL");
  // add page url
  const addPageUrl = "http://localhost:3000/Add";
  // carDetail page url
  const carDetailUrl = `http://localhost:3000/detail/${id}`;
  // user profile page url
  const userProfileUrl = "http://localhost:3000/userProfile/";

  // define state for visible and unVisible icons in the text box
  const [emailIcon, setEmailIcon] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState(true);
  const [personAddIcon, setPersonAddIcon] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    console.log(formData);
    const respose = await axios
      .post("http://localhost:8000/api/registe/", formData)
      .catch((error) => {
        setErrors("there is some error");
      });
  };

  return (
    <Grid item lg={12} md={12} sm={12} xs={12}>
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
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              sx={{ mt: 2, width: 600 }}
              size="small"
              label="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onFocus={() => {
                setPersonAddIcon(false);
              }}
              onBlur={() => {
                setPersonAddIcon(true);
              }}
              InputProps={{
                startAdornment: (
                  <>
                    {personAddIcon ? (
                      <InputAdornment position="start">
                        <PersonAddIcon />
                      </InputAdornment>
                    ) : (
                      ""
                    )}
                  </>
                ),
              }}
            />
            <TextField
              sx={{ mt: 2, width: 600 }}
              size="small"
              label="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={() => {
                setEmailIcon(false);
              }}
              onBlur={() => {
                setEmailIcon(true);
              }}
              InputProps={{
                startAdornment: (
                  <>
                    {emailIcon ? (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ) : (
                      ""
                    )}
                  </>
                ),
              }}
            />
            <TextField
              sx={{ mt: 2, width: 600 }}
              size="small"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={() => {
                setPasswordIcon(false);
              }}
              onBlur={() => {
                setPasswordIcon(true);
              }}
              InputProps={{
                startAdornment: (
                  <>
                    {passwordIcon ? (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ) : (
                      ""
                    )}
                  </>
                ),
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

export default Regisrer;
