import {
  Avatar,
  Grid,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  Message,
  Person as PersonIcon, PersonAdd,
} from '@material-ui/icons';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  profileActions: {
    padding: '1em',
    gap: 20,
  },
  profileBio: {
    minHeight: '2em',
    textAlign: 'center',
    paddingBottom: '0.5em',
  },
}));

const ProfilePage: NextPage = () => {
  const styles = useStyles();
  const router = useRouter();

  const name = router.asPath === '/profile'
    ? 'username'
    : router.asPath.replace('/@/', '');


  const url = () => `https://source.unsplash.com/random/360x640?travel&sig=${Math.floor(Math.random() * 100000)}`;
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
      <Grid container item justifyContent="center" className={styles.profileActions}>
        <PersonAdd />
        <Message />
      </Grid>
      <Grid container item justifyContent="center" className={styles.profileBio}>
        <Typography>
          Hello! This is a demo profile bio. Hope you enjoy reading useless quibble!
        </Typography>
      </Grid>
      <Grid container item>
        <ImageList cols={4}>
          {Array(12).fill(0).map((_, i) =>
            <ImageListItem key={i}>
              <img src={url()} alt="A random image" />
            </ImageListItem>
          )}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
