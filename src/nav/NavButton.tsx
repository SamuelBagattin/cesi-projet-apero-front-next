import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "./routes";

export const NavButton: React.FC<{
  text: string;
  color: string;
  route: AppRoutes;
}> = ({ text, color, route }) => {
  return (
    <Link to={route} className="no-underline m-1">
      <div
        className={`rounded-full py-3 px-6 dark dark:text-white text-white w-20 flex justify-center items-center dark:bg-${color}-500 bg-${color}-800 dark:hover:bg-${color}-700 hover:bg-${color}-700 cursor-pointer select-none`}
      >
        {text}
      </div>
    </Link>
  );
};
