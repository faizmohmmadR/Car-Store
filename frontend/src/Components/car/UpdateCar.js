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
import { useEffect } from "react";
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
import { useQueryClient } from "react-query";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateCar = () => {
  const navigat = useNavigate();
  const token = localStorage.getItem("teken");
  // use quireClient form caching data
  const quireClient = useQueryClient();
  const { id } = useParams();

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

  const loadData = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/car/${id}/`);
    console.log(data);
    setName(data.name);
    setDecription(data.description);
    setPrice(data.price);
    setEnginType(data.enginType);
    setNumberPalit(data.numberPalit);
    setCarState(data.carState);
    setCarSellStat(data.carSellState);
    setUser(data.user);
    setAddress(data.address);
  };

  useEffect(() => {
    loadData();
  }, []);

  // define and set useState for visible and un visible icons on the text fields
  const [nameIcon, setNameIcon] = useState(true);
  const [descriptionIcon, setDescriptionIcon] = useState(true);
  const [priceIcon, setPriceIcon] = useState(true);
  const [enginTypeIcon, setEnginTypeIcon] = useState(true);
  const [numberPalitIcon, setNumberPalitIcon] = useState(true);
  const [userIcon, setUserIcon] = useState(true);
  const [addressIcon, setAddressIcon] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefualt();
  };
  const handleUpdate = async () => {
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
      method: "PUT",
      url: `http://localhost:8000/api/car/${id}/`,
      data: formData,
    }).then((e)=>{
      navigat('/')
    });
  };
  return (
    <Grid container width={"65%"} margin={"0px auto"}>
      <Paper>
        <Box sx={{ margin: "0px auto", width: "80%" }} textAlign="center">
          <Typography
            variant="h4"
            borderBottom={"1px solid gray"}
            width={"200px"}
            margin={"0px auto"}
            pt={1}
          >
            Update Car
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
              // formik for handle forms
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
              // formik for handle forms
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
              // formik for handle forms
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
              // formik for handle forms
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

            <FormControl sx={{ mt: 1.5 }} fullWidth size="small">
              <InputLabel>Seeling state</InputLabel>
              <Select
                label="SellingState"
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
              // formik for handle forms
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
              InputProps={{
                startAdornment: (
                  <>
                    {userIcon ? (
                      <InputAdornment position="start">
                        <AccountCircle />
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
              label="address"
              size="small"
              type="number"
              // formik for handle forms
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
              InputProps={{
                startAdornment: (
                  <>
                    {addressIcon ? (
                      <InputAdornment position="start">
                        <PlaceIcon />
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
                onClick={handleUpdate}
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
export default UpdateCar;
