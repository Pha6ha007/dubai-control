import { createContext, useContext, useState, ReactNode } from "react";
import { sampleLocations, Location } from "@/data/locationsData";

interface LocationsContextType {
  locations: Location[];
  addLocation: (location: Omit<Location, "id" | "createdAt">) => Location;
  updateLocation: (id: string, data: Omit<Location, "id" | "createdAt">) => void;
}

const LocationsContext = createContext<LocationsContextType | undefined>(undefined);

export function LocationsProvider({ children }: { children: ReactNode }) {
  const [locations, setLocations] = useState<Location[]>(sampleLocations);

  const addLocation = (data: Omit<Location, "id" | "createdAt">): Location => {
    const newLocation: Location = {
      ...data,
      id: `loc-${Date.now()}`,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setLocations((prev) => [...prev, newLocation]);
    return newLocation;
  };

  const updateLocation = (id: string, data: Omit<Location, "id" | "createdAt">) => {
    setLocations((prev) =>
      prev.map((loc) => (loc.id === id ? { ...loc, ...data } : loc))
    );
  };

  return (
    <LocationsContext.Provider value={{ locations, addLocation, updateLocation }}>
      {children}
    </LocationsContext.Provider>
  );
}

export function useLocations() {
  const context = useContext(LocationsContext);
  if (context === undefined) {
    throw new Error("useLocations must be used within a LocationsProvider");
  }
  return context;
}
