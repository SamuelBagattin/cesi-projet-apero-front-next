import React from "react";
import { NavSwitchWidth } from "../utils/constants";
import useWindowDimensions from "../utils/useWindowDimensions";
import { NavButtonsSet } from "./NavButtonsSet";

export const Footer: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <footer className="p-3 shadow-lg sticky dark:bg-gray-700">
    <nav className="flex justify-around content-center items-center max-w-2xl">
      {width < NavSwitchWidth ? (
        <NavButtonsSet/>
      ) : (
        <></>
      )}
      
    </nav>
  </footer>
  )
};
