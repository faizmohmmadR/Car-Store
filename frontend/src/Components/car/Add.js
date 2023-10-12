import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import PlaceIcon from "@mui/icons-material/Place";
import PinIcon from "@mui/icons-material/Pin";
import React, { useState } from "react";
import Select from "@mui/material/Select";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useQuery, useQueryClient } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getAddress } from "../../Api";

const Add = () => {
  const navigat = useNavigate();
  // use quireClient form caching data
  let userID = JSON.parse(localStorage.getItem('user'))
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDecription] = useState("");
  const [price, setPrice] = useState("");
  const [enginType, setEnginType] = useState("");
  const [numberPalit, setNumberPalit] = useState("");
  const [carState, setCarState] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState(userID.id);
  const [address, setAddress] = useState("");

  // define and set useState for visible and un visible icons on the text fields
  const [nameIcon, setNameIcon] = useState(true);
  const [descriptionIcon, setDescriptionIcon] = useState(true);
  const [priceIcon, setPriceIcon] = useState(true);
  const [enginTypeIcon, setEnginTypeIcon] = useState(true);
  const [numberPalitIcon, setNumberPalitIcon] = useState(true);
  const [userIcon, setUserIcon] = useState(true);
  const [addressIcon, setAddressIcon] = useState(true);
  const [errors, setErrors] = useState({});
  // Get From data
  let formData = new FormData();
  if (image !== null) {
    formData.append("image", image);
  }
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("enginType", enginType);
  formData.append("numberPalit", numberPalit);
  formData.append("carState", carState);
  formData.append("user", user);
  formData.append("address", address);
  // Form validation Functions
  const validation = () => {
    let errors = {};
    let nameError = false;
    let descriptionError = false;
    let priceError = false;
    let enginTypeError = false;
    let numberPalitError = false;
    let userError = false;
    let addressError = false;
    if (name === "") {
      errors.name = "The car Name is required!";
    } else if (name.length <= 2) {
      errors.name = "The car Name must me between 2-55 characters!";
    } else if (name.length >= 55) {
      errors.name = "The car Name must me between 2-55 characters!";
    } else {
      nameError = true;
    }

    if (description === "") {
      errors.description = "The car description is required!";
    } else {
      descriptionError = true;
    }

    if (price === "") {
      errors.price = "The car price is required!";
    } else if (price.length <= 2 && price.length >= 50) {
      errors.price = "The car price must me between 2-10 numbers!";
    } else {
      priceError = true;
    }

    if (enginType === "") {
      errors.enginType = "The car enginType is required!";
    } else if (enginType.length <= 2 && enginType.length >= 50) {
      errors.enginType = "The car enginType must me between 2-50 characters!";
    } else {
      enginTypeError = true;
    }

    if (numberPalit === "") {
      errors.numberPalit = "The car numberPalit is required!";
    } else if (numberPalit.length <= 2 && numberPalit.length >= 55) {
      errors.numberPalit =
        "The car numberPalit must me between 2-55 characters!";
    } else {
      numberPalitError = true;
    }

    // if (user === "") {
    //   errors.user = "The user field is required!";
    // } else {
    //   userError = true;
    // }
    if (address === "") {
      errors.address = "The address field is required!";
    } else {
      addressError = true;
    }

    if (
      nameError === true &&
      descriptionError === true &&
      priceError === true &&
      enginTypeError === true &&
      numberPalitError === true &&
      // userError === true &&
      addressError === true
    ) {
      return true;
    } else {
      return errors;
    }
  };
  // Submiting the Form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validation();
    if (!(validate === true)) {
      setErrors(validate);
    } else {
      console.log("hiiiiiiiii");
      await axios({
        method: "POST",
        url: `http://localhost:8000/api/car/`,
        data: formData,
      }).then((response) => {
        navigat("/");
      });
    }
  };

  const { isLoading, isError, error, data, isSuccess } = useQuery(
    "address",
    getAddress
  );
  if (isLoading) {
    return <div>Loading..</div>;
  } else if (isError) {
    return <div>There is a error</div>;
  } else if (error) {
    return <div>Error</div>;
  } else {
    return (
      <Grid container margin={"0px auto"}>
        <Paper>
          <Box sx={{ margin: "0px auto", width: "80%" }} textAlign="center">
            <Typography
              variant="h4"
              borderBottom={"1px solid gray"}
              width={"200px"}
              margin={"0px auto"}
              pt={1}
            >
              Add Car
            </Typography>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              method="post"
              encType="multipart/form-data"
            >
              <TextField
                sx={{ mt: 1.5 }}
                fullWidth
                label="Car Name"
                size="small"
                type="text"
                name="name"
                value={name}
                helperText={errors.name}
                error={errors.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onFocus={() => {
                  setNameIcon(false);
                }}
                onBlur={() => {
                  setNameIcon(true);
                }}
                InputProps={{
                  startAdornment: (
                    <>
                      {nameIcon ? (
                        <InputAdornment position="start">
                          <DriveFileRenameOutlineIcon />
                        </InputAdornment>
                      ) : (
                        ""
                      )}
                    </>
                  ),
                }}
              />
              <Box component="img" src={image}></Box>
              <TextField
                fullWidth
                size="small"
                style={{ marginTop: 5 }}
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />

              <TextField
                multiline
                rows={3}
                sx={{ mt: 1.5 }}
                fullWidth
                label="Discription"
                size="small"
                type="text"
                helperText={errors.description}
                error={errors.description}
                value={description}
                onChange={(e) => {
                  setDecription(e.target.value);
                }}
                onFocus={() => {
                  setDescriptionIcon(false);
                }}
                onBlur={() => {
                  setDescriptionIcon(true);
                }}
                InputProps={{
                  startAdornment: (
                    <>
                      {descriptionIcon ? (
                        <InputAdornment position="start">
                          <DescriptionIcon />
                        </InputAdornment>
                      ) : (
                        ""
                      )}
                    </>
                  ),
                }}
              />
              <TextField
                sx={{ mt: 1.5 }}
                fullWidth
                label="price"
                size="small"
                type="number"
                helperText={errors.price}
                error={errors.price}
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                onFocus={() => {
                  setPriceIcon(false);
                }}
                onBlur={() => {
                  setPriceIcon(true);
                }}
                InputProps={{
                  startAdornment: (
                    <>
                      {priceIcon ? (
                        <InputAdornment position="start">
                          <PriceChangeIcon />
                        </InputAdornment>
                      ) : (
                        ""
                      )}
                    </>
                  ),
                }}
              />

              <TextField
                sx={{ mt: 1.5 }}
                fullWidth
                label="Engin Type"
                size="small"
                type="text"
                helperText={errors.enginType}
                error={errors.enginType}
                value={enginType}
                onChange={(e) => {
                  setEnginType(e.target.value);
                }}
                onFocus={() => {
                  setEnginTypeIcon(false);
                }}
                onBlur={() => {
                  setEnginTypeIcon(true);
                }}
                InputProps={{
                  startAdornment: (
                    <>
                      {enginTypeIcon ? (
                        <InputAdornment position="start">
                          <DirectionsCarFilledIcon />
                        </InputAdornment>
                      ) : (
                        ""
                      )}
                    </>
                  ),
                }}
              />

              <TextField
                sx={{ mt: 1.5 }}
                fullWidth
                label="Car Number Palit"
                size="small"
                type="text"
                helperText={errors.numberPalit}
                error={errors.numberPalit}
                value={numberPalit}
                onChange={(e) => {
                  setNumberPalit(e.target.value);
                }}
                onFocus={() => {
                  setNumberPalitIcon(false);
                }}
                onBlur={() => {
                  setNumberPalitIcon(true);
                }}
                InputProps={{
                  startAdornment: (
                    <>
                      {numberPalitIcon ? (
                        <InputAdornment position="start">
                          <PinIcon />
                        </InputAdornment>
                      ) : (
                        ""
                      )}
                    </>
                  ),
                }}
              />
              <FormControl sx={{ mt: 1.5 }} fullWidth size="small">
                <InputLabel>Car State</InputLabel>
                <Select
                  label="carState"
                  value={carState}
                  onChange={(e) => {
                    setCarState(e.target.value);
                  }}
                >
                  <MenuItem>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Used">Used</MenuItem>
                  <MenuItem value="New">New</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Address</InputLabel>
                <Select
                  sx={{ mt: 1.5 }}
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={address}
                  label="Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  onFocus={() => {
                    setAddressIcon(false);
                  }}
                  onBlur={() => {
                    setAddressIcon(true);
                  }}
                >
                  {data.map((address) => (
                    <MenuItem key={address.id} value={address.id}>{address.province}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <p style={{ fontSize: "13px", color: "red" }}>{errors.address}</p>

              <Box
                sx={{
                  mt: 1.5,
                  mb: 3,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                }}
                paddingBottom={5}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ mr: 1 }}
                  startIcon={<RestartAltIcon />}
                  type="reset"
                >
                  Reset
                </Button>

                <Button />
                <Button
                  fullWidth
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submet
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Grid>
    );
  }
};
export default Add;
