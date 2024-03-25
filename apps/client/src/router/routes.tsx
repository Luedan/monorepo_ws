import { createBrowserRouter, RouteObject } from "react-router-dom";
import { LayoutComponent } from "../components/layout/index";
import App from "../App";
import { lazy } from "react";

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
  {path: "/", Component: App},
  routeCreator({ path: "/dashboard", page: lazy(() => import("../pages/dashboard")) }),
]);
