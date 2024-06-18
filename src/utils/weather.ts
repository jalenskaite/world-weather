import { WeatherUnits } from "@/types/weather";

export const getUnitPrefix = (units: WeatherUnits) =>
  units === "metric" ? "C" : "F";
