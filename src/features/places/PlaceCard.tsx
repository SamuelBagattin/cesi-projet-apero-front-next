import { Place } from "./PlaceModel";
import React from "react";

export const PlaceCard: React.FC<{place: Place}> = (params: {place: Place}) => {
  return <div className="shadow-2xl p-5 m-3 dark:bg-gray-700 bg-gray-200 max-w-xs min-w-1/4 rounded-lg">Endroit : {params.place.nom}</div>;
};
