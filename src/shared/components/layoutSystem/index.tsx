import { Avatar, Box, Drawer, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { navLinks } from "../layoutPage/itemList";
import { NavbarMenu } from "../layoutPage/listItemSideBarSystem";

export const LayoutSystem: React.FC<{}> = () => {
  const theme = useTheme();
  const celular = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
    >
      <Box >
        <Drawer
          open={true}
          anchor="left"
          variant={celular?'temporary':"permanent"}
          PaperProps={{
            sx: {
              bgcolor: "#2A3856",
              color: "white",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
              width:theme.spacing(33)
            },
          }}
        >
       
            <Stack alignItems={"center"} justifyContent={"center"} >
              <Avatar alt="B" src="" sx={{ width: 50, height: 50, mt: 2 }} />

              <Typography
                mt={1}
                variant="body2"
                sx={{
                  textAlign: "center",

                  width: "100%",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  color: "white",
                }}
              >
                {"Bismarck Romero"}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",

                  width: "100%",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  color: "white",
                }}
              >
                {"Administrador del sistema"}
              </Typography>
            </Stack>

            <Stack alignItems={"center"} width={"100%"}  >
              <NavbarMenu list={navLinks} />
            </Stack>
          
        </Drawer>
      </Box>

      <Box height={"100%"} marginLeft={theme.spacing(33)}>
        <Outlet />
      </Box>
    </Box>
  );
};
