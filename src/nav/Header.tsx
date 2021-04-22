import React from "react";
import { NavSwitchWidth } from "../utils/constants";
import useWindowDimensions from "../utils/useWindowDimensions";
import { NavButtonsSet } from "./NavButtonsSet";

export const Header: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <header className="p-3 shadow-lg sticky dark:bg-gray-700">
      <nav className="flex justify-around content-center items-center max-w-2xl">
      <h3 className="text-gray-900 dark:text-white">Navigation</h3>
        {width > NavSwitchWidth ? (
          <NavButtonsSet/>
        ) : (
          <></>
        )}
        
      </nav>
    </header>
  );
};
