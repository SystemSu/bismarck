import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Button, useMediaQuery, useTheme } from "@mui/material";
import { navLinks } from "./item/index.ts";
import { Link } from "react-router-dom";
import { SideBarPage } from "../sideBarPage/index.tsx";
import { useState } from "react";
export const NavBar: React.FC<{}> = () => {
  const theme = useTheme();
  const celular = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState<boolean>(false);

  const handlerClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: celular ? "block" : "none" }}
              onClick={handlerClick}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Legalinnova
            </Typography>
            <Box display={celular ? "none" : "block"}>
              {navLinks.map((item) => (
                <Link key={item.id} to={item.path}>
                  <Button color="info" sx={{mr:1}} variant="text" >{item.title} </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <SideBarPage isOpen={open} setIsOpen={setOpen} />
    </>
  );
};
