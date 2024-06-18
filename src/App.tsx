import { useRef, useEffect, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { Popup } from "@/components/Popup";
import { Search } from "@/components/Search";
import { mapboxAcessToKen } from "@/config/env";
import { LatLng } from "@/types/map";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyled";
import { Map, Wrapper } from "./AppStyled";
import { ThemeProvider } from "styled-components";
import { ThemeProps } from "./types/styles";
import { UnitsSwitcher } from "./components/UnitsSwitcher";
import { popupDay, popupNight } from "./styles/Colors";
import { useWeatherStore } from "./stores/useWeatherStore";

mapboxgl.accessToken = mapboxAcessToKen;

function App() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  const {
    loaded,
    data,
    fetchWeather,
    units,
    setUnits,
    clear,
    popupLatLng,
    setPopupLatLng,
    isMoving,
    setIsMoving,
  } = useWeatherStore();

  // Initialize and set up the map instance
  useEffect(() => {
    if (map.current || !mapContainer.current) {
      return;
    }

    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [12.581145075331875, 55.648159895057205],
      zoom: 9,
    });

    map.current = newMap;

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Handle map click events to set the popup's latitude and longitude
  useEffect(() => {
    if (!map.current) return;

    const handleClick = (
      event: mapboxgl.MapMouseEvent & mapboxgl.EventData
    ) => {
      const lngLat = event.lngLat;
      setPopupLatLng(lngLat);
    };

    map.current.on("click", handleClick);

    return () => {
      if (map.current) {
        map.current.off("click", handleClick);
      }
    };
  }, []);

  // Fly to a new location when popupLatLng or isMoving changes
  useEffect(() => {
    if (popupLatLng && map.current && isMoving) {
      map.current.flyTo({
        center: [popupLatLng.lng, popupLatLng.lat],
        zoom: 9,
      });

      const handleMoveEnd = () => {
        setIsMoving(false);
      };

      map.current.once("moveend", handleMoveEnd);
      return () => {
        map.current?.off("moveend", handleMoveEnd);
      };
    }
  }, [popupLatLng, isMoving]);

  // Set up the popup with React content
  useEffect(() => {
    if (popupLatLng && map.current) {
      if (!popupRef.current) {
        popupRef.current = new mapboxgl.Popup({
          closeButton: true,
          closeOnClick: false,
        });
      }
      const popupNode = document.createElement("div");
      const root = createRoot(popupNode);
      root.render(<Popup />);

      popupRef.current
        .setLngLat([popupLatLng.lng, popupLatLng.lat])
        .setDOMContent(popupNode)
        .addTo(map.current);
    }
  }, [popupLatLng]);

  // Fetch weather data when popupLatLng changes
  useEffect(() => {
      clear();
      fetchWeather();
  }, [popupLatLng, fetchWeather, clear]);

  // Fetch weather data when units changes
  useEffect(() => {
      fetchWeather();
  }, [units, fetchWeather]);

  // selecting search setting popupLatLng and isMoving
  const handleOnSelectSearchResult = useCallback(
    (latlng: LatLng) => {
      setIsMoving(true);
      setPopupLatLng(latlng);
    },
    [setIsMoving, setPopupLatLng]
  );

  const theme: ThemeProps = {
    weatherTimeColor: data?.weather?.[0]?.icon.endsWith("n")
      ? popupNight
      : popupDay,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper $isPopUpLoading={!loaded}>
        <Map ref={mapContainer} />
        <Search onSelect={handleOnSelectSearchResult} />
        <UnitsSwitcher units={units} onSelect={setUnits} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
