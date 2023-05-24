import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Box,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import Select from "@mui/material/Select";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllCars, updateCar } from "../Api";

const UpdateCar = () => {
  const queryClient = useQueryClient("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [enginType, setEnginType] = useState("");
  const [numberPalit, setNumberPalit] = useState("");
  const [carState, setCarState] = useState("");
  const [carSellState, setCarSellState] = useState("");
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");

  const update = useMutation(updateCar, {
    onSuccess: () => {
      queryClient.invalidateQueries("car");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    update.mutate({
      name,
      description,
      price,
      enginType,
      numberPalit,
      carState,
      carSellState,
      image,
      user,
      address,
    });
  };
  const { isLoading, isError, error, data } = useQuery("car,", getAllCars);
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <Box
      sx={{ width: 400, margin: "0px auto", mt: 4 }}
      textAlign="center"
      component="form"
    >
      {data.map((car) => {
        return (
          <FormGroup>
            <TextField
              sx={{ width: 300 }}
              label="Car Name"
              size="small"
              type="text"
              value={car.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              accept="image/*"
              type="file"
              value={image}
              onChange={(e) => {
                setImage(e.target.files[20]);
              }}
              multiple
            />
            <TextField
              multiline
              rows={3}
              sx={{ mt: 2, width: 300 }}
              label="Discription"
              size="small"
              type="text"
              value={car.description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <TextField
              sx={{ mt: 2, width: 300 }}
              label="price"
              size="small"
              type="number"
              value={car.price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />

            <TextField
              sx={{ mt: 2, width: 300 }}
              label="Engin Type"
              size="small"
              type="text"
              value={car.enginType}
              onChange={(e) => {
                setEnginType(e.target.value);
              }}
            />
            <TextField
              sx={{ mt: 2, width: 300 }}
              label="Car Number Palit"
              size="small"
              type="text"
              value={car.numberPalit}
              onChange={(e) => {
                setNumberPalit(e.target.value);
              }}
            />
            <TextField
              sx={{ mt: 2, width: 300 }}
              label="user"
              size="small"
              type="number"
              value={car.user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <TextField
              sx={{ mt: 2, width: 300 }}
              label="address"
              size="small"
              type="number"
              value={car.address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <Box sx={{ mr: 12, mt: 2 }}>
              <FormControl sx={{ minWidth: 148, mr: 1 }} size="small">
                <InputLabel>Car State</InputLabel>
                <Select
                  value={car.carState}
                  label="carState"
                  onChange={(e) => {
                    setCarState(e.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Used</MenuItem>
                  <MenuItem value={20}>New</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: 148 }} size="small">
                <InputLabel>Seeling state</InputLabel>
                <Select
                  value={car.carSellState}
                  label="carState"
                  onChange={(e) => {
                    setCarSellState(e.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Sold</MenuItem>
                  <MenuItem value={20}>Seleing</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ mr: 12, mt: 2 }}>
              <Button
                variant="outlined"
                sx={{ width: 148, mr: 1 }}
                startIcon={<RestartAltIcon />}
                type="reset"
              >
                Reset
              </Button>
              <Button
                variant="contained"
                sx={{ width: 148 }}
                endIcon={<SendIcon />}
                type="submit"
                onClick={handleSubmit}
              >
                Update
              </Button>
            </Box>
          </FormGroup>
        );
      })}
    </Box>
  );
};

export default UpdateCar;
