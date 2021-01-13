import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

const themeConfig = createMuiTheme({
  palette: {
    primary: {
      main: '#14a37f',
    },
    secondary: {
      main: '#2a3eb1',
    },
  },
});

export default themeConfig;
