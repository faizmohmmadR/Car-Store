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
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CarDetail = (props) => {
  console.log(props.data);

  let description =
    " This is a good product for all people, all people can buy it is powerfull and it has very little spend it also has different colors for your lovly chose This is a good product for all people, all people can buy it is powerfull and it has very little spend This si a good product for all people, all people can buy it is powerfull and it has very little spend";

  const [showFullText, setShowFullText] = useState(false);
  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const compresedText = description.slice(0, 20);
  return (
    <Container lg={12} xs={12} md={12} sm={12}>
      <Grid Container sx={{ width: "50vw", margin: "0px auto" }}>
        <Grid
          item
          sx={{
            width: "50vw",
            height: 300,
            backgroundColor: "gray",
            margin: "0px auto",
          }}
        >
          <Card>
            <CardMedia
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/images/pic1.jpg`}
            />
          </Card>
        </Grid>
        <Grid
          item
          marginTop={2}
          lg={12}
          xs={12}
          md={12}
          sm={12}
          width={"50vw"}
          mt={10}
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
                    <TableCell sx={{ fontWeight: "bold" }}>Address</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>User</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>Folder</TableCell>
                    <TableCell>20000$</TableCell>
                    <TableCell>New</TableCell>
                    <TableCell>Sold</TableCell>
                    <TableCell>Kabul</TableCell>
                    <TableCell>Faiz</TableCell>
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
          <Paper sx={{ minHeight: 200 }}>
            <Typography sx={{ float: "left", padding: 1 }}>
              {showFullText ? description : compresedText}
            </Typography>
            <Typography
              sx={{ padding: 1, fontSize: 17, ":hover": { cursor: "pointer" } }}
              onClick={toggleShowFullText}
            >
              ....
            </Typography>
          </Paper>
          <Link to='/' style={{textDecoration: 'none'}}>
          <Button variant="outlined" fullWidth sx={{bgcolor: 'blue',color: 'white',":hover": {bgcolor: 'darkblue'}}} >Back</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarDetail;
