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
import React, { useEffect, useState } from "react";
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
import { useQueryClient, useMutation } from "react-query";
import { addUser } from "../../Api";
import axios from "axios";
const Regisrer = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setImage] = useState();
  const [users , setUser] = useState([])

  


  const handleSubmit = async (e) => {
    const res = await axios.post('https://reqres.in/api/users',{first_name,last_name,email,avatar})
    console.log(res)

    setEmail("");
    setFirstName("");
    setLastName("");
    setImage("");

  };

  const handleReset = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setImage("");
  };

  useEffect(()=>{
    const getUser = async () =>{
      const result = await axios.get('https://reqres.in/api/users')
      setUser(result.data.data)
    }
    getUser()
  },[])

  // define state for visible and unVisible icons in text field

  const [firstNameIcon, setFirstNameIcon] = useState(true);
  const [lastNameIcon, setLastNameIcon] = useState(true);
  const [emailIcon, setEmailIcon] = useState(true);
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
              value={first_name}
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
              value={last_name}
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
              size="small"
              sx={{ mt: 1.5, width: 600 }}
              type="file"
              accept="image/jpeg,image/png,image/gif"
              onChange={(e) => setImage({ avatar: e.target.files[0] })}
              style={{ marginTop: 10 }}
            />
            <Button type="submit" variant="outlined">Submit</Button>
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
      <Box>
      {users.map((user,i)=>(
        <>
        <li>{user.first_name} --- {user.last_name}</li>
        <p>{user.email}</p>
        </>
      ))}
      </Box>
    </Grid>
  );
};

export default Regisrer;
