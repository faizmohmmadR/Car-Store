import React from "react";
import { Box } from "@mui/system";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import PagesIcon from "@mui/icons-material/Pages";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Link, useNavigate } from "react-router-dom";
const MobileSidebar = ({ mode, setMode }) => {
  const navigat = useNavigate();
  return (
    <Box
      component="div"
      sx={{
        width: "15vw",
      }}
    >
      <List
        sx={{ color: { xs: "gray", lg: "white", sm: "white", md: "white" } }}
      >
        <ListItem disablePadding>
          <ListItemButton component="a">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              onClick={() => {
                navigat("/");
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a">
            <ListItemIcon>
              <PagesIcon />
            </ListItemIcon>
            <ListItemText
              primary="AboutUS"
              onClick={() => {
                navigat("/aboutus/");
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="store">
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText
              primary="ContactUS"
              onClick={() => {
                navigat("/contuctus/");
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a">
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                navigat("/userProfile/");
              }}
              primary="Profile"
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: { xs: "none" } }}>
          <ListItemButton component="a">
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch
              onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MobileSidebar;
