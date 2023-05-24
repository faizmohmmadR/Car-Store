import React, { useState } from "react";
import "./Cars.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import CarDetail from "./CarDetail";
import { Box } from "@mui/system";

const Feed = (props) => {
  const car = props.car;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (id) => {
    setIsFlipped(!isFlipped);
  };
  
  const token =   localStorage.getItem('token');
console.log(token)
  return (
    <Grid item sm={6} xs={12} md={6} lg={4}>
        <Card sx={{ height: "96%" }}>
          <Box  
          onClick={() =>{{!token ? (window.location = '/signin/')  : (window.location = '/detail/') }}}
          >
          <CardMedia
            className="pic"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
              transition: "transform 3s",
            }}
            component="img"
            height="194px"
            width="100vw"
            sx={{width: '100%'}}
            alt={car.name}
            src={car.image}
            onMouseOver={handleFlip}
            onMouseLeave={() => {
              setIsFlipped(false);
            }}
          />
          <CardContent sx={{ height: 70 }}>
            <Typography variant="h5">
              {car.name.length <= 17 ? car.name : `${car.name.slice(0, 17)}...`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {car.description.length <= 70
                ? car.description
                : `${car.description.slice(0, 70)}...`}
            </Typography>
          </CardContent>
          </Box>
          <CardActions
            disableSpacing
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "row",
            }}
          >
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Typography
              flex={2}
              sx={{ direction: "rtl" }}
              variant="h5"
              color="green"
            >
              {car.price}$
            </Typography>
          </CardActions>
        </Card>
    </Grid>
  );
};

export default Feed;