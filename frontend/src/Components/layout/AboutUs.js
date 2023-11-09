import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Container>
      <Typography align="center" variant="h4" mt={3} gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3} padding="10px">
        <Grid item xs={12} sm={6} padding='20px'>
          <Paper sx={{ height: "40vh", padding: "10px" }}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" gutterBottom>
              At Car Store, our mission is to provide our customers with the
              best car buying experience possible. We strive to offer a wide
              selection of high-quality vehicles at competitive prices, while
              also providing exceptional customer service and support.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ height: "40vh", padding: "10px" }}>
            <Typography variant="h5" gutterBottom>
              Our History
            </Typography>
            <Typography variant="body1" gutterBottom>
              Car Store was founded in 2005 by John Smith, a car enthusiast who
              wanted to create a dealership that focused on providing customers
              with a stress-free and enjoyable car buying experience. Since
              then, we have grown to become one of the most trusted and
              respected dealerships in the area.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
