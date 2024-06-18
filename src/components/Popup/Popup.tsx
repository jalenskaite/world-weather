import { Loader } from "@/styles/Loader";
import { FC, useState } from "react";
import {
  Description,
  DetailsRow,
  Icon,
  Location,
  PopupContainer,
  Row,
  Temperature,
} from "./PopupStyled";
import { weatherAssetsUrl } from "@/config/env";
import { getUnitPrefix } from "@/utils/weather";
import { useWeatherStore } from "@/stores/useWeatherStore";

const roundNumber = (number?: number) => (number ? Math.round(number) : number);

interface ExtraInfoProps {
  label: string;
  value?: number;
  tempPrefix: string;
}

const ExtraInfo: FC<ExtraInfoProps> = ({ label, value = 0, tempPrefix }) => (
  <DetailsRow>
    <div>{label}</div>
    <Temperature>
      {roundNumber(value)}
      <span>{tempPrefix}</span>
    </Temperature>
  </DetailsRow>
);

export const Popup = () => {
  const { data, loaded, error, units } = useWeatherStore();
  const [imageLoaded, setImageLoaded] = useState(false);

  if (error) {
    return (
      <PopupContainer>
        <p>{error.message}</p>
      </PopupContainer>
    );
  }

  if (!loaded) {
    return <Loader />;
  }

  const weather = data?.weather?.[0];
  const weatherIcon = weather?.icon;

  const tempPrefix = getUnitPrefix(units);

  return (
    <PopupContainer>
      <Location>{data?.name || "Unnamed Area"}</Location>
      <Icon
        src={`${weatherAssetsUrl}/${weatherIcon}@2x.png`}
        alt="Weather Icon"
        className={imageLoaded ? "loaded" : ""}
        onLoad={() => {
          setImageLoaded(true);
        }}
      />
      <Row>
        <Temperature>
          {roundNumber(data?.main?.temp)}
          <span>{tempPrefix}</span>
        </Temperature>
        <Description>{weather?.description}</Description>
      </Row>
      <ExtraInfo
        label="Temperature feels like"
        value={data?.main?.feels_like}
        tempPrefix={tempPrefix}
      />
      <ExtraInfo
        label="Temperature max"
        value={data?.main?.temp_max}
        tempPrefix={tempPrefix}
      />
      <ExtraInfo
        label="Temperature min"
        value={data?.main?.temp_min}
        tempPrefix={tempPrefix}
      />
    </PopupContainer>
  );
};
