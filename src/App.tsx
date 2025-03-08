import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";  
import MainBar from "./components/Main";  

const App = ()=> {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <MainBar />
    </Box>
  );
};

export default App;
