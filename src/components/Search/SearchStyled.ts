import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  max-width: 50%;
  left: 20px;
  top: 20px;
  border: none;

  @media (min-width: 550px) {
    max-width: 400px;
  }
`;
