import React from "react";

import { Container, Typography, Grid, Link } from "@mui/material";
import styled from "@emotion/styled";

const useStyles = styled((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Car Store
            </Typography>
            <Typography variant="body2" color="textSecondary">
              "Welcome to our car store website where companies can showcase
              their vehicles with detailed descriptions and images. Browse
              through our collection of cars and find the perfect one for you.
              Contact us for any inquiries or to post your own vehicle on our
              platform. Drive away with your dream car today!"
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Cars</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              12 Main Street
              <br />
              Anytown, USA 12345
              <br />
              +93-778587455
              <br />
              <a href="#" target="_self">
                faizmohammadramdel@gmail.com
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center">
          {"© "}
          {new Date().getFullYear()}
          {" Car Store. All rights reserved."}
        </Typography>
      </Container>
    </footer>
  );
}
