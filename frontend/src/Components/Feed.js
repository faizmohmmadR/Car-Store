import React from "react";
import Cars from "./Cars";
import { Grid } from "@mui/material";
import { useQuery } from "react-query";
import { getAllCars } from "../Api";

const Feed = () => {
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
      <Grid flex={7} container spacing={2} pt={8} pr={1}>
        {data.map((car, i) => {
          return <Cars key={car.id} car={car} />;
        })}
      </Grid>
    );
};

export default Feed;
