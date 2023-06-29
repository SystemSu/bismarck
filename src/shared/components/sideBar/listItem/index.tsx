import BadgeSharpIcon from "@mui/icons-material/BadgeSharp";


export const navLinks = [
  {
    id: 1,
    title: "Gestion de empleado",
    icon: <BadgeSharpIcon fontSize="small" />,
    
    
    lista: [
      {
        id: 2,
        title: "Registro de empleado",
        path: "registro",
        icon: <BadgeSharpIcon fontSize="small" />,
      },
      {
        id: 3,
        title: "consulta",
        path: "consutaEmpleado",
        icon: <BadgeSharpIcon fontSize="small" />,
      },
    ],
  },
  {
    id: 4,
    title: "Gestion de cliente",
    icon: <BadgeSharpIcon fontSize="small" />,
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
    icon: <BadgeSharpIcon fontSize="small" />,
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
    icon: <BadgeSharpIcon fontSize="small" />,
    lista: [
      {
        id: 11,
        title: "Catalogos",
        path: "catalogo",
        icon: <BadgeSharpIcon fontSize="small" />,
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
