export interface CityData {
  name: Cities;
  latitude: string;
  longitude: string;
  displayName: string;
}
export type Cities =
  | "melbourne"
  | "sydney"
  | "canberra"
  | "brisbane"
  | "goldCoast";
export const getCity = (latitude: number, longitude: number): Cities | null => {
  if (cityData.brisbane.latitude.includes(latitude.toString().split(".")[0])) {
    return "brisbane";
  }
  if (cityData.melbourne.latitude.includes(latitude.toString().split(".")[0])) {
    return "melbourne";
  }
  if (cityData.sydney.latitude.includes(latitude.toString().split(".")[0])) {
    return "sydney";
  }
  if (cityData.goldCoast.latitude.includes(latitude.toString().split(".")[0])) {
    return "goldCoast";
  }
  if (cityData.canberra.latitude.includes(latitude.toString().split(".")[0])) {
    return "canberra";
  }
  return null;
};
export const cityData: Record<Cities, CityData> = {
  melbourne: {
    name: "melbourne",
    latitude: "-37.813629",
    longitude: "144.963058",
    displayName: "melbourne",
  },
  sydney: {
    name: "sydney",
    latitude: "-33.872761",
    longitude: "151.205338",
    displayName: "sydney",
  },
  canberra: {
    name: "canberra",
    latitude: "-35.335293",
    longitude: "149.175968",
    displayName: "canberra",
  },
  brisbane: {
    name: "brisbane",
    latitude: "-27.470030",
    longitude: "153.022980",
    displayName: "brisbane",
  },
  goldCoast: {
    name: "goldCoast",
    latitude: "-28.002586",
    longitude: "153.414423",
    displayName: "gold coast",
  },
};
