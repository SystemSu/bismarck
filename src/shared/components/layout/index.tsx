import {
  Box,
  Stack,
  useMediaQuery,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SystemSideBar } from "../sideBar";
import MenuIcon from "@mui/icons-material/Menu";

export const Layout:React.FC<{}>=()=> {
  // control del sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  /////////////////
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const celular = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack height={"100vh"} direction={"row"} sx={{minWidth:375}}>
      <SystemSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Stack
        height={"100%"}
        marginLeft={theme.spacing(celular ? 0 : 33)}
        width={"100%"}
      >
        <Stack bgcolor={"#2A3856"} direction={"row"} height={"6%"}>
          {" "}
          {/*nav*/}
          <Stack
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
             
            }}
            flexGrow={1}
          >
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              color="info"
              sx={{ display: celular ? "block" : "none" }}
              size="small"
            >
              <MenuIcon />
            </IconButton>
          </Stack>
          <Stack flexGrow={1} justifyContent={"center"} textAlign={'center'}>
            <Typography variant={celular?'body1':'h6'} color="white" fontWeight={'bold'}>
              Legal Innova
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems:'flex-end'
              
            }}
            flexGrow={1} 
          >
            <Tooltip title="Opciónes">
              <IconButton
                id="opcion"
                aria-controls={open ? "opcion" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar alt="" src="#" sx={{ width: "30px", height: "30px" }} />
              </IconButton>
            </Tooltip>
            <Menu
              id="opcion"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleClose}>Ayuda</MenuItem>
              <MenuItem onClick={handleClose}>Cerrar</MenuItem>
            </Menu>
          </Stack>
        </Stack>

        <Box p={2} height={"100%"} bgcolor={"#EAF1FC"} sx={{overflow:'hidden'}}>
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  );
}
