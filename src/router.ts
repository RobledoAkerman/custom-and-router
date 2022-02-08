import { initPageBienvenida } from "./pages/bienvenida";
import { initPageDatos } from "./pages/datos";
import { initPageGracias } from "./pages/gracias";

const routes = [
  //rutas para cada acción posible
  {
    path: /\/welcome/,
    component: initPageBienvenida,
  },
  {
    path: /\/step-1/,
    component: initPageDatos,
  },
  {
    path: /\/thankyou/,
    component: initPageGracias,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  //Montamos las rutas
  function handleRoute(route) {
    //Ejecuta el cambio de operación
    console.log("handleroute recibio una nueva ruta", route);

    for (const r of routes) {
      //Para ejecutar la accion correspondiente
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function (event) {
    handleRoute(location.pathname);
  };
}
