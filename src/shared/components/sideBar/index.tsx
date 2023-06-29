
import {
  Avatar,
  Divider,
  Drawer,
  Stack,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { navLinks } from "./listItem";
import { ModelSystemSiceBar } from "./model";
import { NavbarMenu } from "./navBarMenu";
export const SystemSideBar: React.FC<ModelSystemSiceBar> = ({
  isOpen,
  setIsOpen,
}) => {
  const theme = useTheme();
  const celular = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      open={isOpen }
      anchor="left"
      variant={celular ? "temporary" : "permanent"}
      onClose={() => setIsOpen(false)}
      PaperProps={{
        sx: {
          bgcolor: "#2A3856",
          color: "white",
        },
      }}
    >
      <Stack width={theme.spacing(33)} height={"100%"} direction={"column"} >
        <Stack alignItems={"center"} justifyContent={"center"} rowGap={1}>
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
        <Divider sx={{ bgcolor: "white" }} />

        <Stack alignItems={"center"} width={"100%"} flex={1} mt={2}>
          <NavbarMenu list={navLinks} setOpen={setIsOpen} />
        </Stack>
      </Stack>
    </Drawer>
  );
};