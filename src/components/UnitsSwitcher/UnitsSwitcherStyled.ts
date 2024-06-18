import styled from "styled-components";

export const SwitcherWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  height: 36px;
  border-radius: 15px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.05), 0 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  background-color: white;
`;

export const Choice = styled.div<{ $isActive: boolean }>`
  border-radius: 15px;
  margin: 2px;
  padding: 0 15px;
  background-color: ${({ $isActive }) =>
    $isActive ? "rgba(0, 0, 0, 0.1)" : "white"};
  color: ${({ $isActive }) =>
    $isActive ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.75)"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 15px;
  box-shadow: ${({ $isActive }) =>
    $isActive ? "rgba(0, 0, 0, 0.16) 0px 1px 4px" : "none"};
  cursor: pointer;
`;
