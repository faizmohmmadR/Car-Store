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
  const [image, setImage] = useState("");
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

  // use formik and yup for forms validate and handle forms
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      enginType: "",
      numberPalit: "",
      carState: "",
      carSellState: "",
      user: "",
      address: "",
    },
    onSubmit: async (values) => {
      console.log(values.image);
      try {
        setSending(true);
        let data = new FormData();
        if (image !== null) {
          data.append("image", image);
        }
        data.append("name", values.name);
        data.append("description", values.description);
        data.append("price", values.price);
        data.append("enginType", values.enginType);
        data.append("numberPalit", values.numberPalit);
        data.append("carState", values.carState);
        data.append("carSellState", values.carSellState);
        data.append("user", values.user);
        data.append("address", values.address);
        await axios({
          method: "POST",
          url: "http://localhost:8000/api/car/",
          data: data,
        }).then((res) => {
          console.log(res.data);
        });
        setSending(false);
      } catch (error) {
        setErrors(error);
        setSending(false);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "The car name at last be more than 3 crachters")
        .max(20, "The car name at must be 20 crachters")
        .required(" The car name is required"),
      description: Yup.string()
        .min(20, "Description at last must be more than 20 charcters")
        .max(200, "desciption at must can be 200 chrachters")
        .required(
          "The car description is required it must be incluede all information abut car"
        ),
      price: Yup.number("Price must be integers").required("Price is required"),
      enginType: Yup.string()
        .min(50, "It cant be more than 50 charcters")
        .min(4, "It cant be less than 4 characters")
        .required("Engin Type is required"),
      numberPalit: Yup.string()
        .max(20, "Number palit cant be more than 20 characters")
        .min(5, "Number palit cant be less than 5 charcters")
        .required("Number palit is required"),
      carState: Yup.string().required("Car State is required"),
      carSellState: Yup.string().required("Car Seelling State is requred"),
      user: Yup.string()
        .max(20, "User name cant be more than 20 chracters")
        .min(1, "Use name cant be less than 3 charecters")
        .required("User is required"),
      address: Yup.string()
        .max(30, "Address cant be more than 30 charecters")
        .min(1, "Address cant be less than 5 charecters")
        .required("Address is required"),
    }),
  });

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
      {!token ? (
        (window.location = "/signin/:id/")
      ) : (
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
              onSubmit={formik.handleSubmit}
              autoComplete="off"
              method="post"
              encType="multipart/form-data"
            >
              <FormGroup>
                <TextField
                  sx={{ mt: 1.5 }}
                  fullWidth
                  label="Car Name"
                  size="small"
                  type="text"
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
                  // formik for handle forms
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name &&
                  (formik.errors.name ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.name}{" "}
                    </Typography>
                  ) : null)}
                <TextField
                  fullWidth
                  size="small"
                  accept="image/*"
                  name="image"
                  style={{ marginTop: 5 }}
                  type="file"
                  // formik for handle forms
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {formik.touched.image &&
                  (formik.errors.image ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.image}{" "}
                    </Typography>
                  ) : null)}
                <TextField
                  multiline
                  rows={1}
                  sx={{ mt: 1.5 }}
                  fullWidth
                  label="Discription"
                  size="small"
                  type="text"
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
                  // formik for handle forms
                  {...formik.getFieldProps("description")}
                />
                {formik.touched.description &&
                  (formik.errors.description ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.description}{" "}
                    </Typography>
                  ) : null)}
                <TextField
                  sx={{ mt: 1.5 }}
                  fullWidth
                  label="price"
                  size="small"
                  type="number"
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
                  // formik for handle forms
                  {...formik.getFieldProps("price")}
                />
                {formik.touched.price &&
                  (formik.errors.price ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.price}{" "}
                    </Typography>
                  ) : null)}

                <TextField
                  sx={{ mt: 1.5 }}
                  fullWidth
                  label="Engin Type"
                  size="small"
                  type="text"
                  // formik for handle forms
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
                  {...formik.getFieldProps("enginType")}
                />
                {formik.touched.enginType &&
                  (formik.errors.enginType ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.enginType}{" "}
                    </Typography>
                  ) : null)}
                <TextField
                  sx={{ mt: 1.5 }}
                  fullWidth
                  label="Car Number Palit"
                  size="small"
                  type="text"
                  // formik for handle forms
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
                  {...formik.getFieldProps("numberPalit")}
                />

                {formik.touched.numberPalit &&
                  (formik.errors.numberPalit ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.numberPalit}{" "}
                    </Typography>
                  ) : null)}

                <FormControl sx={{ mt: 1.5 }} fullWidth size="small">
                  <InputLabel>Car State</InputLabel>
                  <Select
                    label="carState"
                    {...formik.getFieldProps("carState")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Used">Used</MenuItem>
                    <MenuItem value="New">New</MenuItem>
                  </Select>
                </FormControl>
                {formik.touched.carState &&
                  (formik.errors.carState ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.carState}{" "}
                    </Typography>
                  ) : null)}

                <FormControl sx={{ mt: 1.5 }} fullWidth size="small">
                  <InputLabel>Seeling state</InputLabel>
                  <Select
                    label="carState"
                    {...formik.getFieldProps("carSellState")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Sold">Sold</MenuItem>
                    <MenuItem value="seeling">Seleing</MenuItem>
                  </Select>
                </FormControl>
                {formik.touched.carSellState &&
                  (formik.errors.carSellState ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.carSellState}{" "}
                    </Typography>
                  ) : null)}

                <TextField
                  sx={{ mt: 1.5 }}
                  fullWidth
                  label="user"
                  size="small"
                  type="number"
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
                  // formik for handle forms
                  {...formik.getFieldProps("user")}
                />
                {formik.touched.user &&
                  (formik.errors.user ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.user}{" "}
                    </Typography>
                  ) : null)}
                <TextField
                  sx={{ mt: 1.5 }}
                  fullWidth
                  label="address"
                  size="small"
                  type="number"
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
                  // formik for handle forms
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address &&
                  (formik.errors.address ? (
                    <Typography color={"red"} fontSize={"12px"}>
                      {" "}
                      {formik.errors.address}{" "}
                    </Typography>
                  ) : null)}
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
                    onReset={formik.handleReset}
                  >
                    Reset
                  </Button>

                  <Button />
                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit"
                    onSubmit={formik.handleSubmit}
                    disabled={sending}
                  >
                    Submet
                  </Button>
                </Box>
              </FormGroup>
            </form>
          </Box>
        </Paper>
      )}
    </Grid>
  );
};
export default Add;
