import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type modelContenidoModulo = {
  id: number;
  title: string;
  path: string;
  icon: JSX.Element;
};

type modelListLinkNav = {
  id: number;
  title: string;
  icon: JSX.Element;
  lista: modelContenidoModulo[];
};

type modelNavbarMenu = {
  list: modelListLinkNav[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavbarMenu: React.FC<modelNavbarMenu> = ({ list }) => {
  /* const dispatch = useAppDispatch();
  const handlerSetForm = (title: string) => {

    dispatch(setTitle({ title }));
    setItem("titleForm", title);
    setOpen(false);
  };
*/

  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange_ = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    if (expanded == panel) handleChange_(panel, false);
    // expanded == panel ? handleChange_(panel, false) : null;
  };

  const navigate = useNavigate();
  const to = (ruta: string) => {
    navigate(ruta);
  };

  return (
    <List
      disablePadding
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        background: "#1A509E",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {list.map((x) => (
        <div key={x.id}>
          <ListItemButton
            onClick={() => handleChange(x.title, true)}
            sx={{
              color: "white",
              display: "flex",

              columnGap: 2,
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                display: "flex",
                flexGrow: 1,
                columnGap: 2,
              }}
              key={x.id}
            >
              {x.icon}
              <ListItemText primary={x.title} />
            </ListItemIcon>
            <Stack>
              {expanded === x.title ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </Stack>
          </ListItemButton>

          <Collapse
            in={expanded === x.title ? true : false}
            timeout="auto"
            unmountOnExit
          >
            {x.lista.map((y) => (
              <List
                component="div"
                disablePadding
                key={y.id}
                onClick={() => handleChange_(y.title, false)}
              >
                <ListItemButton
                  onClick={() => to(y.path)}
                  dense
                  sx={{
                    color: "white",
                    display: "flex",
                    columnGap: 2,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "white",
                      display: "flex",
                      flexGrow: 1,
                      columnGap: 2,
                      pl: 2,
                    }}
                    key={y.id}
                  >
                    {y.icon}
                    <ListItemText primary={y.title} />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            ))}
          </Collapse>
        </div>
      ))}
    </List>
  );
};
