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

import { Form, Link } from "react-router-dom";
import { userSchema } from "../validation/Validation";
import { useQueryClient, useMutation } from "react-query";
import { addUser } from "../../Api";
const For = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState();
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [errors, setError] = useState([]);

  const queryClient = useQueryClient();

  const add = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });

  const eLength = errors.length;
  console.log(eLength);

  const handleSubmit = async (e) => {
    let data = new FormData();
    e.preventDefault();
    console.log(image);
    for (let i = 0; i < image.length; i++) {
      data.append("image", image[i], image[i].name);
    }

    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("userName", userName);
    data.append("email", email);
    data.append("phone", phone);
    data.append("password", password);
    data.append("userType", userType);
    const res =  add.mutate(data);
    console.log(res)

    setEmail("");
    setFirstName("");
    setPhone("");
    setLastName("");
    setUserName("");
    setImage("");
    setPassword("");
    setUserType("");
  };

  const handleReset = () => {
    setEmail("");
    setFirstName("");
    setPhone("");
    setLastName("");
    setUserName("");
    setImage("");
    setPassword("");
    setUserType("");
  };

  // define state for visible and unVisible icons in text field

  const [firstNameIcon, setFirstNameIcon] = useState(true);
  const [lastNameIcon, setLastNameIcon] = useState(true);
  const [userNameIcon, setUserNameIcon] = useState(true);
  const [emailIcon, setEmailIcon] = useState(true);
  const [phoneIcon, setPhoneIcon] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState(true);

  return (
    <Grid container>
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
        </Box>
        <Box>
          <Form encType="multipart/form-data" onSubmit={handleSubmit}>
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={() => {
                setFirstNameIcon(false);
              }}
              onPointerLeave={() => {
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
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => {
                setLastNameIcon(false);
              }}
              onPointerLeave={() => {
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
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              autoComplete
              size="small"
              label="userName"
              type="numbNer"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              onFocus={() => {
                setUserNameIcon(false);
              }}
              onPointerLeave={() => {
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
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => {
                setEmailIcon(false);
              }}
              onPointerLeave={() => {
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
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="Phone"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              onFocus={() => {
                setPhoneIcon(false);
              }}
              onPointerLeave={() => {
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
            <TextField
              size="small"
              sx={{ mt: 1.5, width: 600 }}
              type="file"
              accept="image/jpeg,image/png,image/gif"
              onChange={(e) => setImage({ image: e.target.files[0] })}
              style={{ marginTop: 10 }}
            />
            <TextField
              sx={{ mt: 1.5, width: 600 }}
              size="small"
              label="password"
              type="password"
              autoComplete="on"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={() => {
                setPasswordIcon(false);
              }}
              onPointerLeave={() => {
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
            <FormControl
              label="user Type"
              size="small"
              sx={{ mt: 1.5 }}
              fullWidth
            >
              <InputLabel>User Type</InputLabel>
              <Select
                value={userType}
                onChange={(e) => {
                  setUserType(e.target.value);
                }}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="normal user">normal user</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit">Submit</Button>
          </Form>
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

export default For;
