import { Estado } from "@/pages/private/catalogos/estado";
import { ListaCatalogo } from "@/pages/private/catalogos/menuItemCard";
import { Home } from "@/pages/public/home";
import { Login } from "@/pages/public/login";
import { CardMenu } from "@/shared/components/CardMenu";
import { LayoutPage } from "@/shared/components/layoutPage";
import { LayoutSystem } from "@/shared/components/layoutSystem";
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
    element: <LayoutSystem />,
    children: [
      ///gestion del sistema

      {
        path: "catalogo",
        element: <CardMenu titleMenu={'Lista Catalogo'} list={ListaCatalogo}/>,
      },
      {
        path: "catalogo/:estado",
        element: <Estado />,
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
