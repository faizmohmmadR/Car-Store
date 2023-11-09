import React from "react";
import NavBar from "./layout/NavBar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import AddCarButton from "../Components/car/AddCarButton";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAllCars } from "../Api";
import Footer from "./layout/Footer";
import DarkMode from "./DarkMode";

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
          <NavBar data={data} setMode={setMode} mode={mode} />
          <Stack>
            <Outlet data={data} />
          </Stack>
          <AddCarButton />
          <Footer />
        </Box>
      </ThemeProvider>
    );
}
export default App;
