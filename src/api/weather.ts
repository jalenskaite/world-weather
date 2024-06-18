import {weatherApi} from "@/services/weatherApi";
import { Weather, WeatherCoord, WeatherRequestParams } from "@/types/weather";

export interface GetWeatherRequest extends WeatherRequestParams, WeatherCoord {}

export const getWeather = async (
  params: GetWeatherRequest
): Promise<Weather | null> => {
  try {
    const response = await weatherApi.get<Weather>("/weather", {
      params,
    });
    return response.data;
  } catch (error) {
    throw error
  }
};
