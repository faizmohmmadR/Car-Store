import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
// impor icons
import { InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Validation(values) {
  const errors = {};
  const validUserName = /([a-zA-Z_](\d*)){2,55}/g;
  const validPassword = /[0-9a-zA-Z\D]{4,16}/;
  const validEmail = /[a-zA-Z0-9]{2,52}\@[[a-z]{2,8}]*\.[a-z]{2,8}/g;
  let usernameErrors = false;
  let passwordErrors = false;
  let emailErrors = false;
  if (values.username === "") {
    errors.username = "Username is required!";
  } else if (!validUserName.test(values.username)) {
    errors.username = "Invalid userName, The username must be between 2-55";
  } else {
    usernameErrors = true;
  }
  if (values.email === "") {
    errors.email = "email is required!";
  } else if (!validEmail.test(values.email)) {
    errors.email = "Invalid Email!, tri again!!";
  } else {
    emailErrors = true;
  }
  if (values.password === "") {
    errors.password = "Password is required!";
  } else if (!validPassword.test(values.password)) {
    errors.password = "Password should be between 4-16 characters!";
  } else {
    passwordErrors = true;
  }

  if (
    usernameErrors === true &&
    passwordErrors === true &&
    emailErrors === true
  ) {
    return true;
  } else {
    return errors;
  }
}
import axios from "axios";
import { useParams } from "react-router-dom";
import { fromPairs, result } from "lodash";
const Regisrer = () => {
  const id = useParams();
  const [success,setSuccess] = useState('')
  //get redurec url
  const redirectURL = localStorage.getItem("redirectURL");
  // add page url
  const addPageUrl = "http://localhost:3000/Add";
  // carDetail page url
  const carDetailUrl = `http://localhost:3000/detail/${id}`;
  // user profile page url
  const userProfileUrl = "http://localhost:3000/userProfile/";
  const navigate = useNavigate();
  // define state for visible and unVisible icons in the text box
  const [emailIcon, setEmailIcon] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState(true);
  // const [errors, setErrors] = useState();
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [resultError, setResultError] = useState("");

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleInput(e) {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validation = Validation(values);
    if (!(validation === true)) {
      setErrors(validation);
    } else {
      setValues("");
      setErrors("");
      setSending(true);
      const respose = await axios
        .post("http://localhost:8000/api/register", values).then((e)=>{
          setSuccess("uare registred! Succsessfully!!")
        })
        .catch((e) => {
          setResultError("something is wrong, Tray agin!");
        });
      setSending(false);
      navigate("/");
    }
  }

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
        <Typography>{success}</Typography>
        <Typography color={"red"} fontSize={"12px"}>
          {resultError}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              sx={{ mt: 2, width: 600 }}
              size="small"
              label="username"
              name="username"
              type="text"
              helperText={errors.username}
              error={errors.username}
              onChange={handleInput}
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
              label="email"
              name="email"
              type="email"
              helperText={errors.email}
              error={errors.email}
              onChange={handleInput}
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
              name="password"
              helperText={errors.password}
              error={errors.password}
              onChange={handleInput}
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
            <Link to="/signin/">
              <Typography
                sx={{ textDecoration: "underline", color: "blue", ml: 1 }}
              >
                Sign in
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Regisrer;
