import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core';

import appTheme from '../theme';
import Navigation from '../components/navigation';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'calc(100vh - 45px)',
      overflow: 'auto',
    },
  },
}));

function MyApp({ Component, pageProps }: AppProps) {
  const styles = useStyles();
  return <>
    <CssBaseline />
    <Navigation />
    <MuiThemeProvider theme={appTheme}>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </MuiThemeProvider>
  </>;
}

export default MyApp;
