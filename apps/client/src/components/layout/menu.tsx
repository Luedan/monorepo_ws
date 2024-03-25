import type { TMenu } from "./type";

import { HomeIcon, LockClosedIcon, UserGroupIcon, CubeIcon } from "@heroicons/react/24/outline";

export const MainMenu: TMenu = [
  {
    title: "Inicio",
    Icon: () => <HomeIcon className="h-6 w-6" />,
    path: "/dashboard",
    breadcrumbs: [{ path: "/dashboard", name: "Inicio" }],
  },
  {
    title: "Productos",
    Icon: () => <CubeIcon className="h-6 w-6" />,
    children: [
      {
        title: "Lista de Productos",
        path: "/dashboard/products",
        breadcrumbs: [
          { path: "/dashboard", name: "Inicio" },
          { path: "/dashboard/products", name: "Productos" },
        ],
      },
      {
        title: "Crear Productos",
        path: "/dashboard/products/create",
        breadcrumbs: [
          { path: "/dashboard", name: "Inicio" },
          { path: "/dashboard/products", name: "Productos" },
          { path: "/dashboard/products/create", name: "Crear Productos" },
        ],
      },
    ],
  },
  {
    title: "Clientes",
    Icon: () => <UserGroupIcon className="h-6 w-6" />,
    children: [
      {
        title: "Lista de Clientes",
        path: "/dashboard/customers",
        breadcrumbs: [
          { path: "/dashboard", name: "Inicio" },
          { path: "/dashboard/customers", name: "Clientes" },
        ],
      },
      {
        title: "Crear Clientes",
        path: "/dashboard/customers/create",
        breadcrumbs: [
          { path: "/dashboard", name: "Inicio" },
          { path: "/dashboard/customers", name: "Clientes" },
          { path: "/dashboard/customers/create", name: "Crear Clientes" },
        ],
      },
    ],
  },
  {
    title: "Usuarios",
    Icon: () => <LockClosedIcon className="h-6 w-6" />,
    children: [
      {
        title: "Lista de usuarios",
        path: "/dashboard/users",
        breadcrumbs: [
          { path: "/dashboard", name: "Inicio" },
          { path: "/dashboard/users", name: "Usuarios" },
        ],
      },
      {
        title: "Crear usuario",
        path: "/dashboard/users/create",
        breadcrumbs: [
          { path: "/dashboard", name: "Inicio" },
          { path: "/dashboard/users", name: "Usuarios" },
          { path: "/dashboard/users/create", name: "Crear usuario" },
        ],
      },
    ],
  },
];
