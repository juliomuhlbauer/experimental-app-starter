import { extendTheme } from "@chakra-ui/react";
import { theme as base, ThemeConfig } from "@chakra-ui/theme";

import components from "./components";
import { globalStyles } from "./styles/global-styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  // cssVarPrefix: appConfig.name,
};

const fonts = {
  heading: `Inter, ${base.fonts.heading}`,
  body: `Inter, ${base.fonts.body}`,
};

const primary = base.colors.purple;

const colors = {
  primary,
};

export const theme = extendTheme({
  config,
  fonts,
  semanticTokens: {
    colors: {
      accent: primary[300],
      bg: { _light: "white", _dark: "gray.800" },
      text: { _light: "gray.800", _dark: "whiteAlpha.900" },
    },
  },
  styles: globalStyles,
  colors,
  components,
});
