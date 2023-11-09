import React from "react";
import {
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import Switch from '@mui/material/Switch';
import ModeNightIcon from "@mui/icons-material/ModeNight";
const label = { inputProps: { "aria-label": "Switch demo" } };

const DarkMode = ({ mode, setMode }) => {
  let x = 0;
  return (
    <Tooltip
      title="Dark Mode"
      sx={{
        position: "fixed",
        top: "45%",
        left: { xs: "calc(5%)", md: 0 },
        display: {xs: 'none',lg: 'block',md: 'block',sm: 'block'}
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a">
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch
              {...label}
              onClick={(e) => setMode(mode === "light" ? "dark" : "light") }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Tooltip>
  );
};

export default DarkMode;
