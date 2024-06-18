import { getWeather } from "@/api/weather";
import { ApiError } from "@/errors/ApiError";
import { LatLng } from "@/types/map";
import { Weather, WeatherUnits } from "@/types/weather";
import { create } from "zustand";

interface UseWeatherStore {
  data: Weather | null;
  error: ApiError | null;
  loading: boolean;
  loaded: boolean;
  fetchWeather: () => Promise<Weather | null>;
  clear: () => void;
  units: WeatherUnits;
  setUnits: (units: WeatherUnits) => void;
  popupLatLng: LatLng | null;
  setPopupLatLng: (latlng: LatLng) => void;
  isMoving: boolean;
  setIsMoving: (isMoving: boolean) => void;
}

export const useWeatherStore = create<UseWeatherStore>((set, get) => ({
  data: null,
  error: null,
  loading: false,
  loaded: false,
  units: "metric",
  popupLatLng: null,
  isMoving: false,

  clear: () => set({ data: null, error: null, loading: false, loaded: false }),

  fetchWeather: async () => {
    set({ loading: true, error: null });
    const { popupLatLng, units } = get();
    try {
      const response = await getWeather({
        lat: popupLatLng?.lat || 0,
        lon: popupLatLng?.lng || 0,
        units,
      });
      set({ data: response, loaded: true, loading: false });
      return response;
    } catch (error: ApiError) {
      set({ error, loading: false, loaded: true });
      throw error;
    }
  },

  setUnits: (units) => {
    set({ units });
  },

  setPopupLatLng: (latlng) => {
    set({ popupLatLng: latlng });
  },

  setIsMoving: (isMoving) => {
    set({ isMoving });
  },
}));
