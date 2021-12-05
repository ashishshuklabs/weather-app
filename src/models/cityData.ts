export interface CityData {
  name: string;
  latitude: string;
  longitude: string;
}

export const cityData: Record<
  "melbourne" | "sydney" | "canberra" | "brisbane" | "goldCoast",
  CityData
> = {
  melbourne: {
    name: "melbourne",
    latitude: "-37.813629",
    longitude: "144.963058",
  },
  sydney: { name: "sydney", latitude: "-33.872761", longitude: "151.205338" },
  canberra: {
    name: "canberra",
    latitude: "-35.335293",
    longitude: "149.175968",
  },
  brisbane: {
    name: "brisbane",
    latitude: "-27.470030",
    longitude: "153.022980",
  },
  goldCoast: {
    name: "gold coast",
    latitude: "-28.002586",
    longitude: "153.414423",
  },
};
