import React from 'react'
import {
    Button,
    FormControl,
    MenuItem,
    Select,
    TextField,
    Typography,
    InputLabel,
    Grid,
    Paper,
  } from "@mui/material";
import { Box } from '@mui/system';

const Footer = () => {
  return (
    <div>
      <Grid container >
        <Grid item lg={12}>
            <Box sx={{backgroundColor: 'black',color: 'white',height: '100%',position: 'relative',top: '30%'}}>
                Footer
            </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
