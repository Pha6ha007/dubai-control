export interface Location {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  createdAt: string;
}

export const sampleLocations: Location[] = [
  {
    id: "loc-1",
    name: "Marina Tower Residence",
    address: "Tower 23, Dubai Marina\nDubai, UAE",
    latitude: 25.0805,
    longitude: 55.1403,
    createdAt: "2024-01-05",
  },
  {
    id: "loc-2",
    name: "Business Bay Executive Office",
    address: "Bay Square, Building 1\nBusiness Bay, Dubai, UAE",
    latitude: 25.1865,
    longitude: 55.2622,
    createdAt: "2024-01-08",
  },
  {
    id: "loc-3",
    name: "Downtown Dubai Apartment",
    address: "Boulevard Point Tower A\nDowntown Dubai, UAE",
    latitude: 25.1972,
    longitude: 55.2744,
    createdAt: "2024-01-10",
  },
  {
    id: "loc-4",
    name: "JBR Beach Residence",
    address: "Sadaf 7, Jumeirah Beach Residence\nDubai, UAE",
    latitude: 25.0772,
    longitude: 55.1331,
    createdAt: "2024-01-12",
  },
  {
    id: "loc-5",
    name: "DIFC Corporate Suite",
    address: "Gate Building, Level 15\nDIFC, Dubai, UAE",
    latitude: 25.2133,
    longitude: 55.2810,
    createdAt: "2024-01-14",
  },
];
