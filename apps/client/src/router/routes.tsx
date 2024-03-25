import { createBrowserRouter, RouteObject } from "react-router-dom";
import { LayoutComponent } from "../components/layout/index";
import { lazy } from "react";
import Home from '../pages/home';

const routeCreator = ({
  path,
  page,
  ...opts
}: { path: string; page: React.ComponentType } & RouteObject) => {
  const Component = page;
  return {
    path,
    element: (
      <LayoutComponent>
        <Component />
      </LayoutComponent>
    ),
    ...opts,
  };
};

export const routes = createBrowserRouter([
  {path: "/", Component: Home},
  routeCreator({ path: "/dashboard", page: lazy(() => import("../pages/dashboard")) }),
]);
