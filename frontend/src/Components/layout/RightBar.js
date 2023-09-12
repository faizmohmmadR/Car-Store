import React from "react";
import { Box } from "@mui/system";

const RightBar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box mt={7} position="fixed"></Box>
    </Box>
  );
};

export default RightBar;
