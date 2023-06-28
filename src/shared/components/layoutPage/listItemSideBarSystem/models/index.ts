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
  };
  