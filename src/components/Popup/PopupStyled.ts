import styled from "styled-components";

export const PopupContainer = styled.div`
  color: white;
  position: relative;
`;

export const Location = styled.div`
  font-size: 20px;
  line-height: 25px;
  max-width: 150px;
`;

export const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Temperature = styled.div`
  font-size: 40px;
  line-height: 40px;
  position: relative;

  &:after {
    content: "°";
    position: absolute;
    top: 0;
    right: 12px;
    font-size: 18px;
    line-height: 18px;
  }
  span {
    font-size: 20px;
    line-height: 20px;
    padding-left: 5px;
  }
`;

export const Description = styled.div`
  font-size: 10px;
  line-height: 10px;
  text-transform: capitalize;
`;

export const Icon = styled.img`
  width: 100px;
  position: absolute;
  right: -120px;
  top: -20px;
  display: block;
  margin: 0 auto;
  opacity: 0;
  transition: all 0.3s ease-out;

  &.loaded {
    right: -20px;
    opacity: 1;
  }
`;

export const DetailsRow = styled(Row)`
  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  padding: 7px 0;
  opacity: 0.5;
  font-size: 12px;
  line-height: 12px;

  ${Temperature} {
    font-size: 12px;
    line-height: 12px;

    &:after {
      font-size: 8px;
      line-height: 8px;
      top: -2px;
      right: 5px;
    }

    span {
      font-size: 8px;
      line-height: 8px;
      padding-left: 2px;
    }
  }
`;
