import { FC } from "react";
import { Choice, SwitcherWrapper } from "./UnitsSwitcherStyled";
import { WeatherUnits } from "@/types/weather";

interface UnitsSwitcherProps {
  onSelect: (unit: WeatherUnits) => void;
  units: WeatherUnits
}

export const UnitsSwitcher: FC<UnitsSwitcherProps> = ({ onSelect, units }) => {
  return (
    <SwitcherWrapper>
      <Choice $isActive={units === 'metric'} onClick={() => onSelect("metric")}>
        C
      </Choice>
      <Choice $isActive={units === 'imperial'} onClick={() => onSelect("imperial")}>
        F
      </Choice>
    </SwitcherWrapper>
  );
};
