import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
// impor icons
import { InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
const SignIn = () => {
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
  const navigate = useNavigate()
  const [errors, setErrors] = useState("");
  const [sending, setSending] = useState(false);
  const formik = useFormik({
    initialValues: {
     username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setSending(true);
        const result = await axios.post("http://localhost:8000/api/login", values);
        console.log(values)
        setSending(false);
        localStorage.setItem("token", result.data.token);
        if(redirectURL === userProfileUrl){
          navigate('/userProfile/')
        }else if(redirectURL === addPageUrl){
          navigate('/add/')
        }else if(redirectURL === carDetailUrl){
          navigate(`/detail/${id}/`)
        }else{
          navigate('/')
        }
        
      } catch (error) {
        setErrors("username or password is not correct!");
        setSending(false);
      }
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("username is required"),
      password: Yup.string()
        .max(16, "password cant be more than 16 chracters")
        .min(6, "password cant be less than 6 characters")
        .required("Password is required"),
    }),
  });

  // define state for visible and unVisible icons in the text box
  const [emailIcon, setEmailIcon] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState(true);

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
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
              sx={{ mt: 2, width: 600 }}
              size="small"
              label="username"
              type="text"
              {...formik.getFieldProps("username")}
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
                      <InputAdornment position='start'>
                        <EmailIcon />
                      </InputAdornment>
                    ) : (
                      ""
                    )}
                  </>
                ),
              }}
            />
            {formik.touched.email &&
              (formik.errors.email ? (
                <Typography color={"red"} fontSize={"12px"}>
                  {formik.errors.email}
                </Typography>
              ) : null)}
            <TextField
              sx={{ mt: 2, width: 600 }}
              size="small"
              label="Password"
              type="password"
              {...formik.getFieldProps("password")}
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
                      <InputAdornment position='start'>
                        <LockIcon />
                      </InputAdornment>
                    ) : (
                      ""
                    )}
                  </>
                ),
                endAdornment: (
                  <InputAdornment>
                    <VisibilityIcon sx={{ ":hover": { cursor: "pointer" } }} />
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.password && formik.errors.password ? (
              <Typography color={"red"} fontSize={"12px"}>
                {formik.errors.password}
              </Typography>
            ) : null}
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

export default SignIn;
