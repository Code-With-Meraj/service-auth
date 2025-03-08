import React from "react";
import { Box, Typography } from "@mui/material";


const MainBar = () => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Typography variant="body1">This is the main content area.</Typography>
    </Box>
  );
};

export default MainBar;
