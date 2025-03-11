import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import UserManagement from "./components/UserManagement";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}> 
      <Sidebar />
      <Box
        sx={{
          marginLeft: { xs: "60px", sm: "200px" }, 
          flexGrow: 1,
          padding: "20px",
        }}
      >
        <UserManagement />
      </Box>
    </Box>
  );
};

export default App;
