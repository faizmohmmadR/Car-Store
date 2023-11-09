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
  Container,
  Grid,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import DehazeIcon from "@mui/icons-material/Dehaze";

import Cars from "../car/Cars";
import MobileSidebar from "./MobileSidebar";

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

const NavBar = ({ data, mode, setMode }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const token = localStorage.getItem("token");
  const username = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const [openSidBar, setOpenSideBar] = useState(false);
  const [search, setSearch] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const navigat = useNavigate();

  const handleLoguot = () => {
    localStorage.removeItem("token");
    navigat("/");
    setOpen(false);
    return null;
  };

  const onSearch = (searchTertm) => {
    setOpenSearch(true);
  };

  return (
    <AppBar position="sticky">
      <Container>
        <StyleToolBar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="h5"
              sx={{
                display: { sm: "block", xs: "none" },
                pr: 2,
                ":hover": { cursor: "pointer" },
              }}
            >
              CarStore
            </Typography>
          </Link>
          <DehazeIcon
            onClick={(e) => setOpenSideBar(true)}
            sx={{ display: { xs: "block", md: "none", sm: "none" }, mr: 2 }}
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
              width: { lg: "45vw", md: "60vw", sm: "55vw", xs: "70vw" },
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
                  width: { lg: "45vw", md: "60vw", sm: "55vw", xs: "70vw" },
                  borderRadius: 1.5,
                }}
                inputProps={{
                  sx: {
                    "&::placeholder": {
                      color: "black",
                      opacity: 1, // otherwise firefox shows a lighter color
                    },
                  },
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

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon>
              {!token ? (
                <Box width={"15%"} component="div"></Box>
              ) : (
                <>
                  <Switch
                    {...label}
                    onClick={(e) =>
                      setMode(mode === "light" ? "dark" : "light")
                    }
                  />
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
            <UserBox onClick={(e) => setOpen(true)} sx={{ ml: 1 }}>
              <Avatar sx={{ width: "30px", height: "30px" }} src="#" />
            </UserBox>

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
              <MenuItem
                onClick={() => {
                  navigat("/signup/");
                }}
              >
                Regester
              </MenuItem>

              {!token ? (
                <MenuItem
                  onClick={() => {
                    navigat("/signin/");
                  }}
                >
                  Login
                </MenuItem>
              ) : (
                <MenuItem onClick={handleLoguot}>Logout</MenuItem>
              )}
            </Menu>
            <Typography
              sx={{ display: {lg: 'block', md: "block", sm: "none", xs: "none" } }}
            >
              {username.username}
            </Typography>
          </Grid>
          <Menu
            aria-labelledby="demo-positioned-button"
            open={openSidBar}
            onClose={(e) => {
              setOpenSideBar(false);
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{ mt: 5 }}
          >
            <MenuItem
              sx={{ height: "20vh", width: "50vw" }}
              onClick={(e) => {
                setOpenSideBar(false);
              }}
            >
              <SideBar />
            </MenuItem>
            <Switch
              {...label}
              sx={{ ml: 4 }}
              onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </Menu>

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
            bgcolor={"background.default"}
            color={"text.primary"}
          >
            <Paper
              sx={{
                width: 650,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "0px auto",
              }}
            >
              <Typography align="right">
                <CloseIcon
                  onClick={() => {
                    setOpenSearch(false);
                    setSearch("");
                  }}
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "50px",
                    position: "fixed",
                  }}
                />
              </Typography>

              <Box
                component="div"
                sx={{ width: 300, margin: "0px auto", mt: 2 }}
              >
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
        </StyleToolBar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
