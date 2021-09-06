import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Grid,
} from '@material-ui/core';

import Cards from '../components/cards';

const Home: NextPage = () => {
  return (
    <Grid container>
      <Head>
        <title>Keylo</title>
        <meta name="description" content="Community." />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Grid container item justifyContent="center">
        <Cards />
      </Grid>
    </Grid>
  );
};

export default Home;
