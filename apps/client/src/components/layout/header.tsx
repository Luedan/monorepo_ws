import React from "react";
import { Link } from "react-router-dom";



export function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white p-4 shadow-sm sm:justify-end">
      <button
        className="rounded-md p-2 focus:outline-none sm:hidden"
        type="button"
        onClick={toggleSidebar}
      >
        {/* <BurgerMenuIcon /> */}
      </button>
      <div className="relative">
        <button
          className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {/* <UserIcon /> */}
        </button>
        {isOpen ? (
          <div className="absolute right-0 z-10 mt-2 w-48 overflow-hidden rounded-md bg-white py-2 shadow-xl dark:bg-slate-900">
            <div className="border-b border-gray-100 px-4 py-3 text-sm text-gray-900 dark:border-gray-800 dark:text-white">
              <div className="mb-1">{`Luis Atencia`}</div>
              <div className="truncate font-medium">Atencia@gmail.com</div>
            </div>
            <ul className="block">
              <li>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800"
                  to="#"
                >
                  Mi perfil
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800"
                  to="#"
                >
                  Configuraciones
                </Link>
              </li>
            </ul>
            <div className="w-full border-t border-gray-100 dark:border-gray-800">
              <button
                className="w-full px-4 py-2 text-start text-sm hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800"
                type="button"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
