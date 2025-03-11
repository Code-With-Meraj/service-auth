import React, { useState } from "react";
import { Box, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar: React.FC = () => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <HomeIcon />, link: "#" },
    { name: "About", icon: <InfoIcon />, link: "#" },
    { name: "Contacts", icon: <ContactsIcon />, link: "#" },
    { name: "Settings", icon: <SettingsIcon />, link: "#" },
  ];

  return (
    <Box
      sx={{
        width: { xs: "70px", sm: "220px" }, 
        backgroundColor: "#2c3e50",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "10px",
        transition: "width 0.3s ease",
        
      }}
    >
      {/* Navigation Menu */}
      <List sx={{ width: "100%", color: "white" }}>
        {menuItems.map((item) => (
          <ListItem
            component="button" 
            key={item.name}
            onClick={() => setActive(item.name)}
            sx={{
              backgroundColor: active === item.name ? "#34495e" : "transparent",
              "&:hover": { backgroundColor: "#1abc9c" },
              borderRadius: "5px",
              marginBottom: "10px",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "left",
              width: "100%",
              border: "none",
              cursor: "pointer",
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} sx={{ display: { xs: "none", sm: "block" } }} />
          </ListItem>
        ))}
      </List>

      {/* Logout Button */}
      <Button
        variant="contained"
        color="error"
        sx={{
          width: "100%",
          marginBottom: "10px",
        }}
        startIcon={<LogoutIcon />}
      >
        <span style={{ display: window.innerWidth < 600 ? "none" : "inline" }}>Logout</span>
      </Button>
    </Box>
  );
};

export default Sidebar;
