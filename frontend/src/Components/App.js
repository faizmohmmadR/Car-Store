import React from "react";
import SideBar from "./layout/SideBar";
import NavBar from "./layout/NavBar";
import {
  Box,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { Stack } from "@mui/system";
import AddCarButton from "../Components/car/AddCarButton";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAllCars } from "../Api";
import Slider from "./slider/Slider";
import Footer from "./layout/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  localStorage.setItem("redirectURL", window.location.href);
  const { isLoading, isError, error, data, isSuccess } = useQuery(
    "car",
    getAllCars
  );

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error! {error.message}</div>;
  } else if (isSuccess)
    return (
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <NavBar data={data} />
          <Container>
            <Stack
              direction="column"
              spacing={2}
              justifyContent="center"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                sm={12}
                xs={12}
                md={6}
                lg={4}
                sx={{
                  width: { lg: "76%", md: "72%", sm: "72%", xs: "90%" },
                }}
              >
                <div id="detail" style={{ margin: "0px auto" }}>
                  <Outlet data={data} />
                </div>
              </Grid>
            </Stack>
          </Container>
          <AddCarButton />
          <Footer />
        </Box>
      </ThemeProvider>
    );
}
export default App;
