import React, { Fragment, useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Grid, Typography } from "@mui/material";

const Slider = (props) => {
  const data = props.data;
  let color = "white";
  const [current, setCurrent] = useState(0);
  const length = data.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevSlide) =>
        prevSlide === data.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "10%",
          backgroundColor: "gray",
          borderRadius: "50%",
          opacity: "0.7",
          width: { lg: "30px", md: "25px", sm: "22px", xs: "18px" },
          height: { lg: "30px", md: "25px", sm: "22px", xs: "18px" },
          display: { lg: "block", md: "block", sm: "block", xs: "none" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowBackIosIcon
          className="right-arrow"
          onClick={nextSlide}
          sx={{
            fontSize: { lg: "15px", md: "13px", sm: "11px", xs: "9px" },
            color: "white",
            ":hover": { cursor: "pointer" },
          }}
        />
      </Box>
      {data.map((image, index) => {
        return (
          <Fragment key={index}>
            {index === current && (
              <>
                <Grid
                  component="img"
                  sx={{
                    width: "100%",
                    height: {
                      lg: "90vh",
                      xs: "40vh",
                      md: "80vh",
                      sm: "60vh",
                    },
                    margin: "5px auto",
                  }}
                  src={image.image}
                />
                <Grid
                  sx={{
                    display: "flex",
                    position: "relative",
                    bottom: { lg: "30px", md: "25px", sm: "20px", xs: "18px" },
                  }}
                >
                  {data.map((name, index) => {
                    return (
                      <Grid display={"flex"} key={index + length}>
                        <Box sx={{ display: "none" }}>
                          {image.name == name.name
                            ? (color = "#5d6669")
                            : (color = "white")}
                        </Box>
                        <CircleIcon
                          sx={{ color: `${color}`, fontSize: "10px", ml: 0.4 }}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            )}
          </Fragment>
        );
      })}
      <Box
        sx={{
          position: "absolute",
          right: "10%",
          backgroundColor: "gray",
          borderRadius: "50%",
          opacity: "0.7",
          width: { lg: "30px", md: "25px", sm: "22px", xs: "18px" },
          height: { lg: "30px", md: "25px", sm: "22px", xs: "18px" },
          display: { lg: "block", md: "block", sm: "block", xs: "none" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowForwardIosIcon
          className="right-arrow"
          onClick={nextSlide}
          sx={{
            fontSize: { lg: "15px", md: "13px", sm: "11px", xs: "9px" },
            color: "white",
            ":hover": { cursor: "pointer" },
          }}
        />
      </Box>
      <Typography
        sx={{
          position: "absolute",
          right: {lg: "40%",md: "36%",sm: '30%',xs: '23%'},
          top: '10%',
          fontWeight: "bold",
          fontSize: { xs: "50px", lg: "60px", md: "60px", sm: "60px" },
          color: '#7b7a80'
        }}
      >
        Car Store
      </Typography>
    </Grid>
  );
};
export default Slider;
