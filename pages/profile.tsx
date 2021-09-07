import {
  Avatar,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  Person as PersonIcon,
} from '@material-ui/icons';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const ProfilePage: NextPage = () => {
  const styles = useStyles();
  const router = useRouter();
  const name = router.asPath === '/profile'
    ? 'username'
    : router.asPath.replace('/@/', '');

  return (
    <Grid className={styles.root} container item justifyContent="center" direction="column" alignItems="center">
      <Head>
        <title>Keylo - {name}</title>
        <meta name="description" content={`${name}'s profile on Keylo.`} key="description" />
      </Head>
      <Avatar className={styles.avatar} src="https://i.pravatar.cc/400">
        <PersonIcon />
      </Avatar>
      <Typography component="h1" variant="h6">@{name}</Typography>
    </Grid>
  );
};

export default ProfilePage;
