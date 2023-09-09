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
  FormGroup,
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
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addCar, getAddress } from "../Api";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Add = () => {
  const [name, setName] = useState("");
  const [description, setDecription] = useState("");
  const [price, setPrice] = useState("");
  const [enginType, setEnginType] = useState("");
  const [numberPalit, setNumberPalit] = useState("");
  const [carState, setCarState] = useState("");
  const [carSellState, setCarSellStat] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");

  // const token = localStorage.getItem('teken')
  // use quireClient form caching data
  localStorage.setItem("redirectURL", window.location.href);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState("");
  const queryClient = useQueryClient();
  const add = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries("cars");
    },
  });
  console.log(add);
  const { isLoading, isError, error, data } = useQuery("address", getAddress);

  const submit = (e) => {
    e.preventDefualt();
  };

  const handleSubmit = async () => {
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
    formData.append("carSellState", carSellState);
    formData.append("user", user);
    formData.append("address", address);

    await axios({
      method: "POST",
      url: `http://localhost:8000/api/car`,
      data: formData,
    }).then((response) => {
      console.log(response.data);
      window.location = "/";
    });
  };

  // define and set useState for visible and un visible icons on the text fields
  const [nameIcon, setNameIcon] = useState(true);
  const [descriptionIcon, setDescriptionIcon] = useState(true);
  const [priceIcon, setPriceIcon] = useState(true);
  const [enginTypeIcon, setEnginTypeIcon] = useState(true);
  const [numberPalitIcon, setNumberPalitIcon] = useState(true);
  const [userIcon, setUserIcon] = useState(true);
  const [addressIcon, setAddressIcon] = useState(true);
  const token = localStorage.getItem("token");
  return (
    <Grid Container>
      <Paper>
        <Box sx={{ ml: 3, mt: 8 }} textAlign="center">
          <Typography
            variant="h4"
            borderBottom={"1px solid gray"}
            width={"150px"}
            sx={{ margin: "0px auto" }}
          >
            Add Car
          </Typography>
          <Typography sx={{ color: "red", fontSize: "12px" }}>
            {errors}
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={() => {
                setNameIcon(false);
              }}
              onBlur={() => {
                setNameIcon(true);
              }}
            />

            <TextField
              fullWidth
              size="small"
              accept="image/*"
              name="image"
              style={{ marginTop: 5 }}
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <TextField
              multiline
              rows={1}
              sx={{ mt: 1.5 }}
              fullWidth
              label="Discription"
              size="small"
              type="text"
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
            />
            <TextField
              sx={{ mt: 1.5 }}
              fullWidth
              label="price"
              size="small"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              onFocus={() => {
                setPriceIcon(false);
              }}
              onBlur={() => {
                setPriceIcon(true);
              }}
            />

            <TextField
              sx={{ mt: 1.5 }}
              fullWidth
              label="Engin Type"
              size="small"
              type="text"
              value={enginType}
              onChange={(e) => {
                setEnginType(e.target.value);
              }}
              // formik for handle forms
              onFocus={() => {
                setEnginTypeIcon(false);
              }}
              onBlur={() => {
                setEnginTypeIcon(true);
              }}
            />
            <TextField
              sx={{ mt: 1.5 }}
              fullWidth
              label="Car Number Palit"
              size="small"
              type="text"
              value={numberPalit}
              onChange={(e) => {
                setNumberPalit(e.target.value);
              }}
              // formik for handle forms
              onFocus={() => {
                setNumberPalitIcon(false);
              }}
              onBlur={() => {
                setNumberPalitIcon(true);
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
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Used">Used</MenuItem>
                <MenuItem value="New">New</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mt: 1.5 }} fullWidth size="small">
              <InputLabel>Seeling state</InputLabel>
              <Select
                label="carState"
                value={carSellState}
                onChange={(e) => {
                  setCarSellStat(e.target.value);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Sold">Sold</MenuItem>
                <MenuItem value="seeling">Seleing</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ mt: 1.5 }}
              fullWidth
              label="user"
              size="small"
              type="number"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
              onFocus={() => {
                setUserIcon(false);
              }}
              onBlur={() => {
                setUserIcon(true);
              }}
            />
            <TextField
              sx={{ mt: 1.5 }}
              fullWidth
              label="address"
              size="small"
              type="number"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              onFocus={() => {
                setAddressIcon(false);
              }}
              onBlur={() => {
                setAddressIcon(true);
              }}
            />
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
                disabled={sending}
                onSubmit={handleSubmit}
              >
                Submet
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Grid>
  );
};
export default Add;
