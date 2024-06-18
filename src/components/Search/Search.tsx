import { FC, useState } from "react";

// This component SearchBox might have some issues while incorrect typescript veersions, should be investigated more
import { SearchBox } from "@mapbox/search-js-react";
import { SearchBoxRetrieveResponse } from "@mapbox/search-js-core";
import { mapboxAcessToKen } from "@/config/env";
import { LatLng } from "@/types/map";
import { Wrapper } from "./SearchStyled";

interface SearchProps {
  onSelect: (position: LatLng) => void;
}

export const Search: FC<SearchProps> = ({ onSelect }) => {
  const [value, setValue] = useState("");
  const onRetrieve = (searchValue: SearchBoxRetrieveResponse) => {
    const [lng, lat] = searchValue.features?.[0]?.geometry.coordinates;
    onSelect({ lat, lng });
  };

  return (
    <Wrapper>
      {/* @ts-ignore */}
      <SearchBox
        value={value}
        accessToken={mapboxAcessToKen}
        onRetrieve={onRetrieve}
        onChange={setValue}
        placeholder="Search location..."
      />
    </Wrapper>
  );
};
