import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const AddCarButton = () => {
  return (
    <Link to="/Add">
      <Tooltip
        title="Add Car"
        sx={{
          position: "fixed",
          bottom: 40,
          left: { xs: "calc(10% )", md: 20 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </Link>
  );
};

export default AddCarButton;
