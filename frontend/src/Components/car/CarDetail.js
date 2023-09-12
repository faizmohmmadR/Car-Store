import {
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getcar } from "../../Api";
import { useQuery } from "react-query";

const CarDetail = () => {
  localStorage.setItem('redirectURL',window.location.href)
  const { id } = useParams();
  const [showFullText, setShowFullText] = useState(false);

  const { isLoading, isError, error, data } = useQuery(["getcar"], () => {
    return getcar(id);
  });
  if (isLoading) {
    return <Typography>is Loading</Typography>;
  } else if (isError) {
    return <Typography>{error.message}</Typography>;
  } else {
    let description = data.description;
    const toggleShowFullText = () => {
      setShowFullText(!showFullText);
    };
    const compresedText = description.slice(0, 20);
    console.log(data)
    return (
      <Grid container item lg={12} xs={12} md={12} sm={12}>
        <Grid sx={{ width: "60vw", margin: "0px auto" }}>
          <Card>
            <CardMedia
              component="img"
              // src={`${process.env.PUBLIC_URL}/assets/images/pic1.jpg`}
              src={data.image}
            />
          </Card>
          <Grid
            item
            marginTop={1}
            lg={12}
            xs={12}
            md={12}
            sm={12}
            width={"100%"}
            mt={1}
          >
            <Typography variant="h5" padding={2} align="center">
              Car information
            </Typography>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>State</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Seeling State
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Engin Type
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Car Number Pallite
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Address</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>User</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.price}</TableCell>
                      <TableCell>{data.carState}</TableCell>
                      <TableCell>{data.carSellState}</TableCell>
                      <TableCell>{data.enginType}</TableCell>
                      <TableCell>{data.numberPalit}</TableCell>
                      <TableCell>{data.address}</TableCell>
                      <TableCell>{data.user}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          <Grid
            item
            marginTop={2}
            lg={12}
            xs={12}
            md={12}
            sm={12}
            marginBottom={5}
          >
            <Typography variant="h5" padding={2} align="center">
              Car description
            </Typography>
            <Paper sx={{ minHeight: 100 }}>
              <Typography sx={{ float: "left", padding: 1 }}>
                {showFullText ? description : compresedText}
              </Typography>
              <Typography
                sx={{
                  padding: 1,
                  fontSize: 17,
                  ":hover": { cursor: "pointer" },
                }}
                onClick={toggleShowFullText}
              >
                ....
              </Typography>
            </Paper>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  bgcolor: "blue",
                  color: "white",
                  ":hover": { bgcolor: "darkblue" },
                }}
              >
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

export default CarDetail;
