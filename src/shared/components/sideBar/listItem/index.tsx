import BadgeSharpIcon from "@mui/icons-material/BadgeSharp";
import GroupIcon from '@mui/icons-material/Group';
import PaidIcon from '@mui/icons-material/Paid';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
export const navLinks = [
  {
    id: 1,
    title: "Gestion de empleado",
    icon: <BadgeSharpIcon fontSize="medium" />,
    
    
    lista: [
      {
        id: 2,
        title: "Crear empleado",
        path: "viewEmpleado",
        icon: <AddCircleOutlineIcon fontSize="small" />,
      },
      {
        id: 3,
        title: "Consultar",
        path: "consutaEmpleado",
        icon: <FormatListNumberedIcon fontSize="small" />,
      },
    ],
  },
  {
    id: 4,
    title: "Gestion de cliente",
    icon: <GroupIcon fontSize="medium" />,
    lista: [
      {
        id: 5,
        title: "Registro de cliente",
        path: "gestionEmpleado",
        icon: <BadgeSharpIcon fontSize="small" />,
      },
      {
        id: 6,
        title: "consulta",
        path: "gestionEmpleado",
        icon: <BadgeSharpIcon fontSize="small" />,
      },
    ],
  },
  {
    id: 7,
    title: "Gesrion de caja",
    icon: <PaidIcon fontSize="medium" />,
    lista: [
      {
        id: 8,
        title: "Registro de caja",
        path: "gestionEmpleado",
        icon: <BadgeSharpIcon fontSize="small" />,
      },
      {
        id: 9,
        title: "consulta caja",
        path: "gestionEmpleado",
        icon: <BadgeSharpIcon fontSize="small" />,
      },
    ],
  },
  {
    id: 10,
    title: "Gestion del sistema",
    icon: <SettingsSuggestIcon fontSize="medium" />,
    lista: [
      {
        id: 11,
        title: "Catalogos",
        path: "catalogo",
        icon: <TextSnippetIcon fontSize="small" />,
      },
      {
        id: 12,
        title: "Configuraciones del sistema",
        path: "config",
        icon: <BadgeSharpIcon fontSize="small" />,
      },
    ],
  },
];
