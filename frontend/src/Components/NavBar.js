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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React, { useState } from "react";
import {Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";

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
const NavBar = () => {
  const token = localStorage.getItem('token')
  const [searchIconVisible, setSearchIconVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [openSidBar, setOpenSideBar] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <AppBar position="fixed">
      <StyleToolBar>
        <Typography variant="h5" sx={{ display: { sm: "block", xs: "none" } }}>
          Shoping Cars
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
            width: "45vw",
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
                borderRadius: 1.5,
              }}
              onFocus={() => {
                setSearchIconVisible(false);
              }}
              onBlur={() => {
                setSearchIconVisible(true);
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
                    onClick={() => setSearch("")}
                  >
                    <SearchIcon sx={{ mr: 0, fontSize: 30 }} />
                  </Button>
                ),
              }}
            />
          </form>
        </Search>

        <Icon>
          {!token ? (<Box width={'15%'}></Box>) : (<>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsNoneIcon />
          </Badge>
          </>)}
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
          <Typography variant="span">Faiz</Typography>
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
        <Link to="/signin/" style={{ textDecoration: "none"}}>
          <MenuItem>Login</MenuItem>
        </Link>
            ) : (
        <Link  to = '/logout/' style={{textDecoration: 'none'}}>
        <MenuItem>Logout</MenuItem>
        </Link>
        )}
      </Menu>

      <Menu
        aria-labelledby="demo-positioned-button"
        open={openSidBar}
        onClose={(e) => setOpenSideBar(false)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      ></Menu>
    </AppBar>
  );
};

export default NavBar;
