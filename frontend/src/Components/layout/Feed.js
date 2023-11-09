import React from "react";

import { Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getAllCars } from "../../Api";
import Cars from "../car/Cars";
import Slider from "../slider/Slider";
import Homepage from "../Homepage";

const Feed = (props) => {
  localStorage.setItem("redirectURL", window.location.href);
  const { isLoading, isError, error, data, isSuccess } = useQuery(
    "car",
    getAllCars
  );
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error! {error.message}</div>;
  } else if (isSuccess)
    return (
      <>
        <Homepage />
        <Grid
          padding={"10px"}
          item
          sm={12}
          xs={12}
          md={6}
          lg={4}
          sx={{
            width: { lg: "76%", md: "72%", sm: "72%", xs: "90%" },
            margin: '0px auto'
          }}
        >
          <Typography variant="h3" align="center">
            Products
          </Typography>
          <Grid flex={7} container spacing={2} pt={1}>
            {data.map((car, i) => {
              return <Cars key={car.id} car={car} />;
            })}
          </Grid>
        </Grid>
      </>
    );
};

export default Feed;
