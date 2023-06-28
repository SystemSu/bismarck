import ClearIcon from "@mui/icons-material/Clear";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import { list } from "./item";
import { ModelSystemSiceBarPage } from "./models";

export const SideBarPage: React.FC<ModelSystemSiceBarPage> = ({
  isOpen,
  setIsOpen,
}) => {
  const handlerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Drawer
      open={isOpen}
      anchor="left"
      onClose={handlerClick}
      sx={{
        display: {
          xs: "flex",
          sm: "none",
        },
      }}
      PaperProps={{
        sx: {
          bgcolor: "#2A3856",
          color: "white",
          width: "100%",
          rowGap: "50px",
        },
      }}
    >
      <Stack flexDirection={"row"}>
        <Stack flexGrow={1}>
          <Typography
            variant="h6"
            color="white"
            sx={{ p: "5px", margin: "10px" }}
          >
            LegalInnova
          </Typography>
        </Stack>
        <Stack alignItems={"flex-end"}>

          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={handlerClick}
            sx={{ border: "1px solid white", p: "5px", margin: "10px" }}
          >
            <ClearIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Stack>
        {list.map((x) => (
          <List key={x.id}>
            <Link
              to={x.path}
              style={{ textDecoration: "none", color: "white", width: "100%" }}
              onClick={handlerClick}
            >
              <ListItem divider>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText
                    primary={x.title}
                    sx={{ textAlign: "center" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        ))}
      </Stack>
    </Drawer>
  );
};
