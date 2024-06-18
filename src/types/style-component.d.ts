import 'styled-components';
import theme from "your_theme_path";
import { ThemeProps } from './styles';

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeProps {}
}