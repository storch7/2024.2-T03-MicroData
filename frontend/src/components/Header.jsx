import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  logo: {
    height: 25,
    marginRight: 10,
  },
  navLink: {
    color: "#fff !important",
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

        {/* Links de Navegação */}
        <Box flexGrow={1} />

        <Box>
          <Button
            component={Link}
            to="/"
            className={classes.navLink}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/microorganism"
            className={classes.navLink}
          >
            Microrganismos
          </Button>
          <Button
            component={Link}
            to="/pontosavaliados"
            className={classes.navLink}
          >
            Pontos de Coleta
          </Button>
          <Button
            component={Link}
            to="/limites-contagem"
            className={classes.navLink}
          >
            Limites de Contagem
          </Button>
          <Button
            component={Link}
            to="/resultados-coleta"
            className={classes.navLink}
          >
            Resultados de Coleta
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
