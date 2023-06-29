import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        background: "#2A3856",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {list.map((x) => (
        <div key={x.id}>
          <ListItemButton
            onClick={() => handleChange(x.title, true)}
            sx={{
              borderRadius: 20,
              display: "flex",

              ":hover": {
                bgcolor: "#5279CB",
              },
            }}
            dense
          >
            <ListItemIcon sx={{ color: "white" }} key={x.id}>
              <InboxIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={x.title} />
            {expanded === x.title ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
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
                dense
                key={y.id}
                onClick={() => handleChange_(x.title, false)}
              >
                <ListItemButton
                  onClick={() => to(y.path)}
                  dense
                  sx={{
                    borderRadius: 20,
                    display: "flex",
                    ml: 4,

                    ":hover": {
                      bgcolor: "#5279CB",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>{y.icon}</ListItemIcon>
                  <ListItemText primary={y.title} />
                </ListItemButton>
              </List>
            ))}
          </Collapse>
        </div>
      ))}
    </List>
  );
};
