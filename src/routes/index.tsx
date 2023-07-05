import { Estado } from "@/pages/private/catalogos/estado";
import { ListaCatalogo } from "@/pages/private/catalogos/ListCatalogo";
import { ViewEmployee } from "@/pages/private/Employee/components/view";
import { Home } from "@/pages/public/home";
import { Login } from "@/pages/public/login";
import { BuscadorCatalogo } from "@/shared/components/BuscadorCatalogo";
import { Layout } from "@/shared/components/layout";
import { LayoutPage } from "@/shared/components/layoutPage";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "sistema",
    element: <Layout />,
    children: [
      ///gestion del sistema

      {
        path: "catalogo",
        element: <BuscadorCatalogo titleMenu={'Lista Catalogo'} list={ListaCatalogo}/>,
      },
      {
        path: "catalogo/:estado",
        element: <Estado />,
      },
      //empleado

      {
        path: "viewEmpleado",
        element: <ViewEmployee />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>error</h1>,
    errorElement: <h1>error s</h1>,
  },
]);

/*

     {
          path: "catalogo/:estado",
          element: <RegistroEstado />,
        },

        */
