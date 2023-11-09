import {
  Badge,
  Box,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Avatar,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "antd";

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Header = () => {
  //   const data = props.data;
  let username = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
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

  const Icon = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Typography
        variant="h5"
        onClick={() => {
          navigat("/");
        }}
        sx={{ ":hover": { cursor: "pointer", color: "blue" } }}
      >
        Car-Store
      </Typography>

      <Badge sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" mr={1}>
          {username.username}
        </Typography>
        <Avatar
          sx={{ width: "30px", height: "30px" }}
          src="#"
          onClick={(e) => setOpen(true)}
        />
      </Badge>
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
    </div>
  );
};

export default Header;
