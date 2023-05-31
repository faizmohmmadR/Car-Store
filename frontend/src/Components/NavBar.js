import {
  AppBar,
  Avatar,
  Badge,
  styled,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  TextField,
  Paper,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { getAllCars } from "../Api";
import { useQuery } from "react-query";
import Cars from "./Cars";

const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  [theme.breakpoints.down("sm")]: {
    height: "40px",
    display: "flex",
    alignItems: "center",
  },
}));

const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = (props) => {
  console.log(props);
  let found = "There is no car!";
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [openSidBar, setOpenSideBar] = useState(false);
  const [search, setSearch] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const onSearch = (searchTertm) => {
    setOpenSearch(true);
  };

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
      <AppBar position="fixed">
        <StyleToolBar>
          <Typography
            variant="h5"
            sx={{ display: { sm: "block", xs: "none" } }}
          >
            CarStore
          </Typography>
          <DehazeIcon
            onClick={(e) => setOpenSideBar(true)}
            sx={{ display: { xs: "block", md: "none", sm: "none" } }}
          />
          <DirectionsCarIcon
            sx={{
              display: { xs: "none", md: "none", sm: "none" },
              mr: { xs: 10 },
            }}
          />
          <Search
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: {lg: "45vw",md: '60vw',sm: '55vw',xs: '70vw'},
            }}
          >
            <form autoComplete="off">
              <TextField
                type="search"
                size="small"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  opacity: 0.8,
                  width: "45vw",
                  height: { lg: "40px", sm: "40px", md: "40px", xs: "39px" },
                  width: {lg: "45vw",md: '60vw',sm: '55vw',xs: '70vw'},
                  borderRadius: 1.5,
                }}
                InputProps={{
                  endAdornment: (
                    <Button
                      position="end"
                      sx={{
                        borderLeft: "1px solid gray",
                        width: "3%",
                        paddingLeft: 2,
                      }}
                      onClick={() => onSearch(search)}
                    >
                      <SearchIcon sx={{ mr: 0, fontSize: 30 }} />
                    </Button>
                  ),
                }}
              />
            </form>
          </Search>

          <Icon>
            {!token ? (
              <Box width={"15%"} component="div"></Box>
            ) : (
              <>
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={2} color="error">
                  <NotificationsNoneIcon />
                </Badge>
              </>
            )}
            <Badge>
              <Avatar
                sx={{ width: "30px", height: "30px" }}
                src="#"
                onClick={(e) => setOpen(true)}
              />
            </Badge>
          </Icon>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar sx={{ width: "30px", height: "30px" }} src="#" />
          </UserBox>
        </StyleToolBar>
        <Menu
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>My account</MenuItem>
          <Link to="signup" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Regester</MenuItem>
          </Link>
          {!token ? (
            <Link to="/signin/:id/" style={{ textDecoration: "none" }}>
              <MenuItem>Login</MenuItem>
            </Link>
          ) : (
            <Link to="/logout/" style={{ textDecoration: "none" }}>
              <MenuItem>Logout</MenuItem>
            </Link>
          )}
        </Menu>
        <Modal
          open={openSidBar}
          onClose={(e) => {
            setOpenSideBar(false);
          }}
        >
          <Paper
            sx={{
              display: { xs: "block", sm: "none" },
              backgroundColor: "white",
              width: "250px",
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CloseIcon
                onClick={() => {
                  setOpenSideBar(false);
                }}
                sx={{
                  borderRadius: '50px',
                  backgroundColor: 'red',
                  ml: 26,
                  mt: 1,
                  fontSize: "25px",
                }}
              />
              <SideBar />
            </Box>
          </Paper>
        </Modal>
        <Modal
          open={openSearch}
          onClose={() => {
            setOpenSearch(false);
            
          }}
          sx={{
            overflowX: "hidden",
            overflowY: "auto",
            textAlign: "justify",
            position: "sticky",
            top: 70,
            position: "fixed",
          }}
        >
          <Paper
            sx={{
              width: 650,

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "0px auto",
              backgroundColor: "white",
            }}
          >
            <Typography align="end">
              <CloseIcon
                onClick={() => 
                  {
                    setOpenSearch(false)
                    setSearch('')
                  
                  }}
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "50px",
                  position: 'fixed',
                }}
              />
            </Typography>

            <Box component="div" sx={{ width: 300, margin: "0px auto", mt: 2 }}>
              {data
                .filter((item) => {
                  const searchTertm = search.toLowerCase();
                  const carName = item.name.toLowerCase();
                  return searchTertm && carName.startsWith(searchTertm);
                })
                .map((car) => (
                  <Paper key={car.id} sx={{ mt: 3 }}>
                    <Cars
                      onClick={() => {
                        onSearch(car.carName);
                      }}
                      key={car.id}
                      car={car}
                    />
                  </Paper>
                ))}
            </Box>
          </Paper>
        </Modal>
      </AppBar>
    );
};
export default NavBar;
