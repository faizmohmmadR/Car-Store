import {
  Grid,
  Paper,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  TableHead,
  Card,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllCars, deleteCar } from "../../Api";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const token = localStorage.getItem('token')
  const queryClient = useQueryClient();
  const { isLoading, isError, error, data } = useQuery("car", getAllCars);
  const delet = useMutation(deleteCar, {
    onSuccess: () => {
      queryClient.invalidateQueries("car");
    },
  });
  if (isLoading) {
    return <div>Loading</div>;
  } else if (isError) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <Grid bgcolor={"background.default"} color={"text.primary"} fullWidth>
      {!token ? (window.location = '/signin/') : (
      <Grid container>
        <Grid lg={12} xs={12} sm={12} md={12}>
          <Card sx={{ margin: "0px auto", padding: 2, bgcolor: "gray" }}>
            <CardMedia
              sx={{
                borderRadius: "50%",
                width: 200,
                height: 200,
                margin: "0px auto",
              }}
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/images/myPic.JPG`}
            />
          </Card>
        </Grid>

        <Grid lg={12} xs={12} sm={12} md={12} item mt={"10px"} align="center">
          <Typography
            variant="h4"
            padding={1}
            borderBottom={"2px solid gray"}
            width={160}
          >
            Your Cars
          </Typography>
          <Paper fullWidth>
            <TableContainer component={Paper}>
              <Table area-aria-label="simple table" sx={{ display: "scroll" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>No</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Description
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Engin Type
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>State</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Selling State
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Posted Data
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>User</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Address</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Edit</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Delete</TableCell>
                  </TableRow>
                </TableHead>
                {data.map((car, i) => {
                  return (
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {i + 1}
                        </TableCell>
                        <TableCell>{car.name}</TableCell>
                        <TableCell>
                          {car.description.length > 20
                            ? `${car.description.slice(0, 20)}...`
                            : car.description}
                        </TableCell>
                        <TableCell>{car.price}$</TableCell>
                        <TableCell>{car.enginType}</TableCell>
                        <TableCell>{car.carState}</TableCell>
                        <TableCell>{car.carSellState}</TableCell>
                        <TableCell>
                          {car.createdAt.length > 11
                            ? `${car.createdAt.slice(0, 10)}`
                            : ""}
                        </TableCell>
                        <TableCell>{car.user}</TableCell>
                        <TableCell>{car.address}</TableCell>
                        <TableCell>
                          <Link to={`/update/${car.id}`}>
                          <Button>
                            <EditIcon
                              sx={{
                                color: "blue",
                                ":hover": { cursor: "pointer" },
                              }}
                            />
                          </Button>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Button>
                            <DeleteIcon
                              onClick={() =>{delet.mutate({ id: car.id })}}
                              sx={{
                                color: "red",
                                ":hover": { cursor: "pointer" },
                              }}
                            />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })}
              </Table>
            </TableContainer>
          </Paper>
          <Link to="/">
            <Button
              fullWidth
              onClick={() => {}}
              variant="outlined"
              sx={{ bgcolor: "blue", color: "white",":hover": {bgcolor: 'darkblue'} }}
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
      )}
    </Grid>
  );
};

export default UserProfile;
