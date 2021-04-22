import axios from "axios";
import React, { useEffect, useState } from "react";
import { PlaceCard } from "./PlaceCard";
import { Place } from "./PlaceModel";

export const PlacesPages: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  const refreshData = () => {
    axios
      .get<Place[]>("https://api.apero.samuelbagattin.com/places")
      .then((e) => setPlaces(e.data));
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div className="flex flex-row flex-wrap">
      {places.map((e) => (
        <PlaceCard key={e.id} place={e}/>
      ))}
    </div>
  );
};
