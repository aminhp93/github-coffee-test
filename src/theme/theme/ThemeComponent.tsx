// ** React Imports
import { ReactNode } from "react";

// ** MUI Imports
import { deepmerge } from "@mui/utils";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Theme,
} from "@mui/material/styles";

// ** Type Imports
import { Settings } from "../context/settingsContext";

// ** Theme Config
import themeConfig from "../theme/themeConfig";

// ** Theme Override Imports
import overrides from "./overrides";
import typography from "./typography";

// ** Theme
import themeOptions from "./ThemeOptions";
import UserThemeOptions from "../theme/UserThemeOptions";

// ** Global Styles
import GlobalStyling from "./globalStyles";
import * as constants from "./constants";

interface Props {
  settings: Settings;
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  // ** Props
  const { settings, children } = props;

  // ** Merged ThemeOptions of Core and User
  const coreThemeConfig = themeOptions(settings);

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig);

  // ** Deep Merge Component overrides of core and user
  const mergeComponentOverrides = (theme: Theme) =>
    deepmerge({ ...overrides(theme) }, UserThemeOptions()?.components);

  // ** Deep Merge Typography of core and user
  const mergeTypography = () =>
    deepmerge(typography(), UserThemeOptions()?.typography);

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: { ...mergeComponentOverrides(theme) },
    typography: { ...mergeTypography() },
    constants,
  });

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme)} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
