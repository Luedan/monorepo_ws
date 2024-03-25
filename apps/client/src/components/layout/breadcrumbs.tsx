import clsx from "clsx";
import { Link } from "react-router-dom";

interface Route {
  path: string;
  name: string;
}

interface BreadcrumbProps {
  routes: Route[];
}

export function Breadcrumb({ routes }: BreadcrumbProps) {
  const title = routes[routes.length - 1]?.name;

  return (
    <nav className="flex flex-wrap justify-between p-4 text-sm text-gray-800">
      <h6 className="text-lg font-semibold uppercase">{title}</h6>
      <div className="flex">
        {routes.map((route, index) => (
          <div
            key={`${route.name}_${Math.random() * 999}`}
            className="flex items-center justify-normal"
          >
            <Link to={route.path}>
              <span
                className={clsx("hover:text-black", {
                  "text-black": index === routes.length - 1,
                })}
              >
                {route.name}
              </span>
            </Link>
            {index < routes.length - 1 && <span className="mx-2">/</span>}
          </div>
        ))}
      </div>
    </nav>
  );
}
