import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    height: 25,
    marginRight: 10,
  },
  navLink: {
    color: "#fff",
    margin: "0 10px",
    textTransform: "none",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: "#000" }}>
      <Toolbar>
        {/* Logo e Nome */}
        <Box display="flex" alignItems="center">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo.png"} // Ou caminho específico
            alt="MicroData Logo"
            className={classes.logo}
          />
        </Box>

        {/* Links de Navegação */}
        <Box flexGrow={1} />

        <Box>
          <Button className={classes.navLink}>Home</Button>
          <Button className={classes.navLink}>Microrganismos</Button>
          <Button className={classes.navLink}>Pontos de Coleta</Button>
          <Button className={classes.navLink}>Limites de Contagem</Button>
          <Button className={classes.navLink}>Resultados de Coleta</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

//posso apagar e continua funcionando