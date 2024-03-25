"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { MainMenu } from "./menu";
import { Link, useNavigate } from "react-router-dom";

export function Aside({
  isSidebarOpen,
  toggleSidebar,
  pathname,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  pathname: string;
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const router = useNavigate();

  const toggleMenu = (path: string) => {
    setOpenMenu(openMenu === path ? null : path);
  };

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen ? (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-10 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        />
      ) : null}
      {/* Sidebar / Aside */}
      <aside
        className={`fixed bottom-0 z-20 flex min-h-screen w-64 flex-col bg-slate-800 text-white ${
          isSidebarOpen ? "left-0" : "-left-64"
        } transition-all duration-200 sm:relative sm:left-0`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-center">
          <h2 className="text-2xl font-semibold">LOGO</h2>
        </div>
        {/* Menu */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-2">
            <h2 className="cursor-default text-sm font-normal text-gray-500">Menu</h2>
          </div>
          <ul>
            {MainMenu.map((MenuItem) => (
              <li key={`${MenuItem.path}_${MenuItem.title}`} className="w-full">
                <div
                  aria-label={MenuItem.title}
                  className={clsx(
                    "flex w-full cursor-pointer items-center justify-between space-x-2 px-4 py-2 text-gray-300 transition-colors duration-200 hover:text-white",
                    {
                      "text-white": pathname === MenuItem.path,
                    },
                  )}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    if (MenuItem.children) {
                      toggleMenu(MenuItem.title || "");
                    } else {
                      if (MenuItem.path) router(MenuItem.path);
                    }
                  }}
                  onKeyUp={() => null}
                >
                  <div className="flex">
                    {MenuItem.Icon ? <MenuItem.Icon /> : null}
                    <span className="ml-3">{MenuItem.title}</span>
                  </div>
                  {MenuItem.children ? (
                    openMenu === MenuItem.title ? (
                      <ChevronDownIcon className="h-6 w-6" />
                    ) : (
                      <ChevronRightIcon className="h-6 w-6" />
                    )
                  ) : null}
                </div>
                {MenuItem.children && openMenu === MenuItem.title ? (
                  <ul className="pl-4">
                    {MenuItem.children.map((child) => (
                      <li key={`${child.path}_${child.title}`} className="w-full">
                        <Link
                          aria-label={child.title}
                          className={clsx(
                            "flex w-full items-center space-x-2 px-4 py-2 text-gray-400 transition-colors duration-200 hover:text-white", // Cambiamos el color del texto de los submenús a gris
                            {
                              "text-white": pathname === child.path,
                            },
                          )}
                          to={child.path}
                        >
                          <span>{child.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex h-14 flex-col items-center justify-center">
          <span className="text-sm font-extralight text-gray-500">© 2023 All Rights Reserved</span>
          <span className="text-sm font-extralight text-gray-500">Created by LuedanDev</span>
        </div>
      </aside>
    </>
  );
}
