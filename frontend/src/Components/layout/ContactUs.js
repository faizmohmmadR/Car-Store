import React from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  styled,
} from "@mui/material";
const ContactUs = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography variant="body1" gutterBottom>
              1 st District
              <br />
              Kandahar, AF
            </Typography>
            <Typography variant="h6" gutterBottom>
              Phone
            </Typography>
            <Typography variant="body1" gutterBottom>
              (+93) 778587455
            </Typography>
            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
            <Typography variant="body1" gutterBottom>
              faizmohammadramdel@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "40vh",
            }}
          >
            <TextField
              fullWidth
              size="small"
              id="name"
              label="Name"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              size="small"
              id="email"
              label="Email"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              id="message"
              label="Message"
              size="small"
              multiline
              rows={4}
              variant="outlined"
              required
            />
            <Button fullWidth variant="contained" size="small" color="primary">
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
