import { Grid } from '@material-ui/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import MessageCard from '../../components/message-card';

const MessagesPage: NextPage = () => {
  return (
    <Grid container item>
      <Head>
        <title>Keylo - Messages</title>
      </Head>
      {Array(10).fill(0).map((_, i) =>
        <MessageCard key={i} />
      )}
    </Grid>
  );
};

export default MessagesPage;
