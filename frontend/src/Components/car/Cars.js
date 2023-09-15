import React, { useState } from "react";
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
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Cars = (props) => {
  const navigat = useNavigate();
  const car = props.car;
  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleFlip = (id) => {
  //   setIsFlipped(!isFlipped);
  // };

  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <Grid item sm={6} xs={12} md={6} lg={4}>
      <Card
        sx={{
          height: "96%",
          ":hover": { transform: "scale(0.9,0.9)" },
          transition: "transform 1.5s",
        }}
      >
        <Box
          onClick={() => {
            {
              !token ? navigat("/signin/") : navigat(`/detail/${car.id}`);
            }
          }}
        >
          <CardMedia
            className="pic"
            // style={{
            //   transformStyle: "preserve-3d",
            //   transform: `rotateY(${isFlipped ? 180 : 0}deg)`?,
            //   transition: "transform 3s",
            // }}
            component="img"
            height="194px"
            width="100vw"
            sx={{
              width: "100%",
            }}
            alt={car.name}
            src={car.image}
            // onMouseOver={handleFlip}
            // onMouseLeave={() => {
            //   setIsFlipped(false);
            // }}
          />
          <CardContent sx={{ height: 70 }}>
            <Typography
              sx={{
                fontSize: {
                  lg: "20.28px",
                  md: "19px",
                  sm: "11.5px",
                  xs: "19px",
                },
              }}
            >
              {car.name.length <= 17 ? car.name : `${car.name.slice(0, 17)}...`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {car.description.length <= 70
                ? car.description
                : `${car.description.slice(0, 60)}...`}
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

export default Cars;
