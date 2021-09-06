import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core';

import appTheme from '../theme';
import Navigation from '../components/navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CssBaseline />
    <Navigation />
    <MuiThemeProvider theme={appTheme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  </>;
}

export default MyApp;
