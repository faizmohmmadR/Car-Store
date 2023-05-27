import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import AddCarButton from "./Components/AddCarButton";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Grid
            item
            sm={12}
            xs={12}
            md={6}
            lg={4}
            sx={{ width: { lg: "76%", md: "72%", sm: "72%", xs: "90%" } }}
          >
            <div id="detail">
              <Outlet />
            </div>
          </Grid>
        </Stack>
        <AddCarButton />
      </Box>
    </ThemeProvider>
  );
}
export default App;
