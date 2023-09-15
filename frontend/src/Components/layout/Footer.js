import React from "react";
import {
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div
      style={{
        paddingTop: "20px",
        marginTop: "20px",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Container>
        <Grid container spacing={3} direction="row" justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Car Store
            </Typography>
            <Typography variant="body2" gutterBottom>
              11 Main Street
              <br />
              Kandahar, AF 1302
              <br />
              Phone: (+93) 778587455
              <br />
              faizmohammadramdel@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="#fff">
              Home
            </Link>
            <br />
            <Link href="aboutus" color="#fff">
              About Us
            </Link>
            <br />
            <Link href="/contuctus/" color="#fff">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex" }}>
              <IconButton href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener noreferrer">
                <TwitterIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" mt={9}>
          {"© "}
          {new Date().getFullYear()}
          {" Car Store. All rights reserved."}
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
