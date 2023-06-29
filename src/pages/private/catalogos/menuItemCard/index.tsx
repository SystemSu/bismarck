import { ModelCardMenuInfo } from "@/shared/components/BuscadorCatalogo/models";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
export const ListaCatalogo: ModelCardMenuInfo[] = [
  {
    id: 1,
    title: "Estado",
    Buttom: (
      <Tooltip title={"Seleccionar"}>
        <Link to={"estado"}>
          <IconButton aria-label="">
            <AdsClickIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    ),
  },
  {
    id: 2,
    title: "Area",

    Buttom: (
      <Tooltip title={"Seleccionar"}>
        <Link to={"estado"}>
          <IconButton aria-label="">
            <AdsClickIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    ),
  },

  {
    id: 3,
    title: "Tipo de Interes",

    Buttom: (
      <Tooltip title={"Seleccionar"}>
        <Link to={"estado"}>
          <IconButton aria-label="">
            <AdsClickIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    ),
  },
  {
    id: 4,
    title: "Tipo de Identificacion",

    Buttom: (
      <Tooltip title={"Seleccionar"}>
        <Link to={"estado"}>
          <IconButton aria-label="">
            <AdsClickIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    ),
  },
  {
    id: 5,
    title: "Estudio",

    Buttom: (
      <Tooltip title={"Seleccionar"}>
        <Link to={"estado"}>
          <IconButton aria-label="">
            <AdsClickIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    ),
  },
  {
    id: 6,
    title: "Cargo",
    Buttom: (
      <Tooltip title={"Seleccionar"}>
        <Link to={"estado"}>
          <IconButton aria-label="">
            <AdsClickIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    ),
  },

  {
    id: 7,
    title: "Cajero",
    Buttom: (
      <Tooltip title={"Seleccionar"}>
        <Link to={"estado"}>
          <IconButton aria-label="">
            <AdsClickIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    ),
  },
  {
    id: 8,
    title: "Divisa",
    Buttom: (
      <Tooltip title={"Seleccionar"}>
        <Link to={"estado"}>
          <IconButton aria-label="">
            <AdsClickIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    ),
  },
];
