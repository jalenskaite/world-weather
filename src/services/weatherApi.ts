import { weatherApiKey, weatherApiUrl } from "@/config/env";
import { ApiError } from "@/errors/ApiError";
import axios from "axios";

export const weatherApi = axios.create({
  baseURL: weatherApiUrl,
  params: {
    appid: weatherApiKey,
    units: "metric",
  },
});

weatherApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      let errorMessage = "An unexpected error occurred";
      if (error.response) {
        switch (error.response.status) {
          case 404:
            errorMessage = "Weather data not found.";
            break;
          case 500:
            errorMessage = "Internal server error at the weather service.";
            break;
          default:
            errorMessage =
              error.response.data.message ||
              "An error occurred while fetching weather data.";
            break;
        }
      }
      throw new ApiError(
        errorMessage,
        error.response?.data,
        error.response?.status
      );
    } else {
      throw new ApiError("A network or unknown error occurred", null, 500);
    }
  }
);
