import { createGlobalStyle } from "styled-components";
import "./css/normalize.css";
import "./css/reset.css";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    width: 100$;
    height: 100%;
  }
  
  /* Custom Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
