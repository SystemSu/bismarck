import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavbarMenu: React.FC<modelNavbarMenu> = ({ list }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange_ = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    if (expanded == panel) handleChange_(panel, false);
  };

  const navigate = useNavigate();
  const to = (ruta: string) => {
    navigate(ruta);
  };

  return (
    <List
      sx={{
        background: "#2A3856",
        fontSize: "20px",
        width: "100%",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      dense
    >
      {list.map((x) => (
        <div key={x.id}>
          <ListItemButton
            onClick={() => handleChange(x.title, true)}
            dense
            sx={{
              borderRadius: 10,
              ":hover": {
                bgcolor: "#4E5A73",
                transition: ".6s",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }} key={x.id}>
              <InboxIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={x.title} />
            {expanded === x.title ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>

          <Collapse
            in={expanded === x.title ? true : false}
            timeout={500}
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
                    borderRadius: 10,
                    display: "flex",
                    justifyContent: "flex-end",
                    ml: 4,
                    ":hover": {
                      bgcolor: "#4E5A73",
                      transition: ".6s",
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
