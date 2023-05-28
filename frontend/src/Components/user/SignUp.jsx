import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/system";
import React, { useState } from "react";
// import icons

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { useQueryClient, useMutation } from "react-query";
import { addUser } from "../../Api";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errors, setErrors] = useState("");
  const [sending, setSending] = useState(false);

  const queryClient = useQueryClient();
  const add = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });

  // validation using formik and yup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phone: "",
      image: "",
      password: "",
      userType: "",
    },
    onSubmit: (values) => {
      // state for disable the send button
      setSending(true);
      try {
        let data = new FormData();
        for (let i = 0; i < values.image.length; i++) {
          data.append("image", values.image[i], values.image[i].name);
        }
        data.append("firstName", values.firstName);
        data.append("lastName", values.lastName);
        data.append("userName", values.userName);
        data.append("email", values.email);
        data.append("phone", values.phone);
        data.append("password", values.password);
        data.append("userType", values.userType);
        add.mutate(data);

        setSending(false);
      } catch (error) {
        setErrors(error);
        setSending(false);
      }
      formik.values.name = "";
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "First Name at must be 15 characters")
        .min(3, "First Name at last be 3 characters")
        .required("First Name is required"),
      lastName: Yup.string()
        .max(15, "Last Name at must be 15 characters")
        .min(3, "Last Name at last be 3 characters")
        .required("Last Name is required"),
      userName: Yup.string()
        .max(15, "User Name at must be 15 characters")
        .min(3, "User Name at last be 3 characters")
        .required("User Name is required"),
      email: Yup.string().email("Invalid emial").required("Email is required"),
      phone: Yup.string()
        .max(12, "Phone number at must be 12 numbers")
        .min(10, "Phone number at last be 10 numbers")
        .required("Phone number is required"),
      password: Yup.string()
        .min(6, "Password at last be 6 characters")
        .max(12, " Password at must be 12 characters")
        .required("Password is required"),
      userType: Yup.string().required(" User Type is required"),
      image: Yup.string().required("image is required"),
    }),
  });

  // define state for visible and unVisible icons in text field

  const [firstNameIcon, setFirstNameIcon] = useState(true);
  const [lastNameIcon, setLastNameIcon] = useState(true);
  const [userNameIcon, setUserNameIcon] = useState(true);
  const [emailIcon, setEmailIcon] = useState(true);
  const [phoneIcon, setPhoneIcon] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState(true);

  return (
    <Grid container item>
      <Box
        sx={{ width: 600, margin: "0px auto" }}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PersonAddIcon sx={{ fontSize: "40px" }} />
          <Typography variant="h5">Sign Up</Typography>
          <Typography color={"red"} fontSize={"12px"}>
            {errors}
          </Typography>
        </Box>
        <Box>
          <form
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            method="psot"
            encType="multipart/form-data"
          >
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="First Name"
              type="text"
              {...formik.getFieldProps("firstName")}
              onFocus={() => {
                setFirstNameIcon(false);
              }}
              onBlur={() => {
                setFirstNameIcon(true);
              }}
              InputProps={{
                startAdornment: (
                  <>
                    {firstNameIcon ? (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ) : (
                      ""
                    )}
                  </>
                ),
              }}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Typography color={"red"} fontSize={"12px"}>
                {" "}
                {formik.errors.firstName}{" "}
              </Typography>
            ) : null}
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="Last Name"
              type="text"
              name="lastName"
              {...formik.getFieldProps("lastName")}
              onFocus={() => {
                setLastNameIcon(false);
              }}
              onBlur={() => {
                setLastNameIcon(true);
              }}
              InputProps={{
                startAdornment: (
                  <>
                    {lastNameIcon ? (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ) : (
                      ""
                    )}
                  </>
                ),
              }}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <Typography color={"red"} fontSize={"12px"}>
                {" "}
                {formik.errors.lastName}{" "}
              </Typography>
            ) : null}
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="userName"
              type="numbNer"
              name="userName"
              {...formik.getFieldProps("userName")}
              onFocus={() => {
                setUserNameIcon(false);
              }}
              onBlur={() => {
                setUserNameIcon(true);
              }}
              InputProps={{
                startAdornment: (
                  <>
                    {userNameIcon ? (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ) : (
                      ""
                    )}
                  </>
                ),
              }}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <Typography color={"red"} fontSize={"12px"}>
                {" "}
                {formik.errors.userName}{" "}
              </Typography>
            ) : null}
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="Email"
              type="email"
              {...formik.getFieldProps("email")}
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
            {formik.touched.email && formik.errors.email ? (
              <Typography color={"red"} fontSize={"12px"}>
                {" "}
                {formik.errors.email}{" "}
              </Typography>
            ) : null}

            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="Phone"
              type="tel"
              name="phone"
              {...formik.getFieldProps("phone")}
              onFocus={() => {
                setPhoneIcon(false);
              }}
              onBlur={() => {
                setPhoneIcon(true);
              }}
              InputProps={{
                startAdornment: (
                  <>
                    {phoneIcon ? (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ) : (
                      ""
                    )}
                  </>
                ),
              }}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <Typography color={"red"} fontSize={"12px"}>
                {" "}
                {formik.errors.phone}{" "}
              </Typography>
            ) : null}
            <TextField
              sx={{ width: 600, mt: 1.5 }}
              type="file"
              accept="image/*"
              size="small"
              name="image"
              id="image"
              onChange={(e) =>
                formik.setFieldValue("image", e.currentTarget.files[0])
              }
            />
            {formik.touched.image && formik.errors.image ? (
              <Typography color={"red"} fontSize={"12px"}>
                {" "}
                {formik.errors.image}{" "}
              </Typography>
            ) : null}
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="password"
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
                      <InputAdornment position="start">
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
                {" "}
                {formik.errors.password}{" "}
              </Typography>
            ) : null}
            <FormControl
              label="user Type"
              size="small"
              id="userType"
              sx={{ mt: 1.5 }}
              fullWidth
            >
              <InputLabel>User Type</InputLabel>
              <Select
                name="userType"
                id="userType"
                {...formik.getFieldProps("userType")}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="normal user">normal user</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.userType && formik.errors.userType ? (
              <Typography color={"red"} fontSize={"12px"}>
                {" "}
                {formik.errors.userType}{" "}
              </Typography>
            ) : null}

            <Button
              variant="outlined"
              sx={{ width: 297, mt: 1.5, borderRadius: 0 }}
              startIcon={<RestartAltIcon />}
              type="reset"
            >
              Reset
            </Button>
            <Button
              variant="contained"
              sx={{ width: 297, ml: 0.5, mt: 1.5, borderRadius: 0 }}
              endIcon={<SendIcon />}
              type="submit"
              disabled={sending}
            >
              Submet
            </Button>
          </form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              mt: 2.5,
            }}
          >
            <Typography>I regestred alredy</Typography>
            <Typography>/</Typography>
            <Link to="/signin/">
              <Typography sx={{ textDecoration: "underline", color: "blue" }}>
                Sign in
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignUp;
