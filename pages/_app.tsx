import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  CssBaseline,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core';

import appTheme from '../theme';
import Navigation from '../components/navigation';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 45px)',
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 48px)',
      overflow: 'auto',
    },
  },
}));

function MyApp({ Component, pageProps }: AppProps) {
  const styles = useStyles();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Navigation />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
