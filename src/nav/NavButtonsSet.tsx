import React from "react";
import { NavButton } from "./NavButton";
import { AppRoutes } from "./routes";

export const NavButtonsSet = (): JSX.Element => (
  <>
    <NavButton text="Places" color="green" route={AppRoutes.Places}/>
    <NavButton
    text="Bonjour"
    color="blue"
    route={AppRoutes.Bonjour}
    />
    <NavButton
    text="Aurevoir"
    color="yellow"
    route={AppRoutes.Aurevoir}
    />
  </>
);
