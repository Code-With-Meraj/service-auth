import React from "react";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "100px",
        padding: "20px 10px",
        backgroundColor: "rgb(162, 203, 194)",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        borderRadius: "20px",
        marginTop: "10px", 
        marginLeft: "30px", 
        marginRight: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <HomeIcon sx={{ fontSize: 50, color: "blue" }} />
        <InfoIcon sx={{ fontSize: 50, color: "green" }} />
        <ContactsIcon sx={{ fontSize: 50, color: "red" }} />
      </Box>
    </Box>
  );
};

export default Sidebar;
