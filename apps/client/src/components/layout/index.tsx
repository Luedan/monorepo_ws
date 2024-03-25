"use client";

import type { TMenu, BreadcrumbInterface } from "./type";

import { useState } from "react";
import { ToastContainer } from "react-toastify";

import { Aside } from "./aside";
import { Header } from "./header";
import { Breadcrumb } from "./breadcrumbs";
import { MainMenu } from "./menu";
import { useLocation } from "react-router-dom";

function findBreadcrumbs(pathname: string, menu: TMenu): BreadcrumbInterface[] | null {
  for (const item of menu) {
    if (item.path === pathname) {
      return item.breadcrumbs || null;
    }

    if (item.children) {
      const breadcrumbs = findBreadcrumbs(pathname, item.children);

      if (breadcrumbs) {
        return breadcrumbs;
      }
    }
  }

  return null;
}

export function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = useLocation().pathname;

  const menuBreads = findBreadcrumbs(pathname, MainMenu);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <ToastContainer />
      <Aside isSidebarOpen={isSidebarOpen} pathname={pathname} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header / Navbar */}
        {/* <Header session={session} toggleSidebar={toggleSidebar} /> */}
        {/* Breadcrumb section */}
        <Breadcrumb routes={menuBreads || []} />
        {/* Main content */}
        <main className="flex-1 overflow-y-auto px-4 py-2">{children}</main>
      </div>
    </div>
  );
}
