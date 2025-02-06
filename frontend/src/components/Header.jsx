import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        {/* Logo and Name */}
        <Box display="flex" alignItems="center">
          <img
            src="/logo.png"
            alt="MicroData Logo"
            style={{ height: 25, marginRight: 10 }}
          />
        </Box>

        {/* Navigation Links */}
        <Box flexGrow={1} />

        <Box>
          <Button sx={{ color: "#fff", margin: "0 10px", textTransform: "none" }}>Home</Button>
          <Button sx={{ color: "#fff", margin: "0 10px", textTransform: "none" }}>Microrganismos</Button>
          <Button sx={{ color: "#fff", margin: "0 10px", textTransform: "none" }}>Pontos de Coleta</Button>
          <Button sx={{ color: "#fff", margin: "0 10px", textTransform: "none" }}>Limites de Contagem</Button>
          <Button sx={{ color: "#fff", margin: "0 10px", textTransform: "none" }}>Resultados de Coleta</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;