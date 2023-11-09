import { Box, Grid, Typography, createTheme } from "@mui/material";
import React, { useState } from "react";
import SideBar from "./layout/SideBar";
const Homepage = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <Grid>
      <Box
        sx={{
          backgroundImage:
            "url(https://media.wired.com/photos/59545639ce3e5e760d52cc39/master/w_2560%2Cc_limit/376458_16_RX-VISION_H.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: { lg: "100vw", xs: "100vw" },
          height: { lg: "90vh", xs: "35vh", md: "90vh", sm: "80vh" },
          color: "white",
          display: "flex",
          // justifyContent: "space-between",
        }}
      >
        <SideBar setMode={setMode} mode={mode} />
        <Grid sx={{ margin: "6% auto" }}>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "2em", lg: "5em", md: "5em", sm: "4em" },
              mr: { lg: "20%" },
            }}
            variant="h1"
          >
            CAR STORE
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: "1em", lg: "1em", md: "1em", sm: "10px" },
              mt: 2,
            }}
            align="center"
          >
            We offer a wide selection of high-quality cars from top
            manufacturers.
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Homepage;
