import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';
import Cards from '../components/cards';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  html: {
    overflow: 'hidden',
  },
  root: {
    overflow: 'hidden',
    height: '100%',
    maxHeight: '100%',
  },
}));

const Home: NextPage = () => {
  const styles = useStyles();
  useEffect(() => {
    if (typeof window !== 'undefined')
      window.scrollTo(0,1); // hide address bar on mobile
  }, []);
  return (
    <>
      <Head>
        <title>Keylo</title>
        <meta name="description" content="Community." key="description" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Grid className={styles.root} container item justifyContent="center">
        <Cards />
      </Grid>
    </>
  );
};

export default Home;
