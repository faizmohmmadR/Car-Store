import React from "react";
import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";

const AddCarButton = () => {
  const token = localStorage.getItem("token");
  const navigat = useNavigate();
  return (
    <Tooltip
      title="Add Car"
      sx={{
        position: "fixed",
        bottom: 40,
        left: { xs: "calc(10% )", md: 20 },
      }}
      onClick={() => {
        {
          token ? navigat("/add") : navigat("/signin/");
        }
      }}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default AddCarButton;
