import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import { Box, createTheme, Grid, Paper, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import AddCarButton from "./Components/AddCarButton";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAllCars } from "./Api";
import "./App.css";
import Home from "./Components/layout/Home";

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
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Grid>
              <SideBar setMode={setMode} mode={mode} />
            </Grid>
            <Grid
              item
              sm={12}
              xs={12}
              md={6}
              lg={4}
              sx={{ width: { lg: "76%", md: "72%", sm: "72%", xs: "90%" } }}
            >
              <div id="detail">
                <Outlet data={data} />
              </div>
            </Grid>
          </Stack>
          <AddCarButton />
        </Box>
      </ThemeProvider>
    );
}
export default App;
