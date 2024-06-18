import styled, { css } from "styled-components";

interface WrapperProps {
  $isPopUpLoading: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;

  .mapboxgl-popup-content {
    background-color: ${({ theme }) => theme.weatherTimeColor};
    border-radius: 15px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    width: 250px;
    min-height: 200px;
    padding: 15px;
    position: relative;
    opacity: 1;
    overflow: hidden;
  }

  .mapboxgl-popup-close-button {
    color: rgba(255,255,255, 0.3);
    top: 3px;
    right: 3px;
    font-size: 20px;
  }

  .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
    border-bottom-color: ${({ theme }) => theme.weatherTimeColor};
  }

  .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
    border-top-color: ${({ theme }) => theme.weatherTimeColor};
  }

  .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
    border-right-color: ${({ theme }) => theme.weatherTimeColor};
  }

  .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
    border-left-color: ${({ theme }) => theme.weatherTimeColor};
  }

  .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
    border-top-color: ${({ theme }) => theme.weatherTimeColor};
  }

  // TODO might be missing some anchor corners

  ${({ $isPopUpLoading }) =>
    $isPopUpLoading &&
    css`
      .mapboxgl-popup-tip {
        display: none;
      }
      .mapboxgl-popup-close-button {
        display: none;
      }
      .mapboxgl-popup-content {
        background-color: transparent;
        box-shadow: none;
        opacity: 0;
      }
    `}
`;

export const Map = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

