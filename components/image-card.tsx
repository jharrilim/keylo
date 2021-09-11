import {
  forwardRef,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
  Avatar,
} from '@material-ui/core';
import {
  Skeleton,
} from '@material-ui/lab';
import {
  Comment,
  Favorite,
  Reply,
} from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  media: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      minHeight: '100%',
    },
    minWidth: '360px',
    minHeight: '640px',
  },
  card: {
    borderRadius: 0,
    scrollSnapAlign: 'start',
    backgroundColor: 'black',
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  actionArea: {
    height: '100%',
    width: '100%',
  },
  description: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '1em',
    color: 'white',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    border: 'none',
    maxWidth: '50%',
  },
  actionBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: 'white',
    padding: '1em',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    border: 'none',
  },
  actionBarButton: {
    backgroundColor: 'rgb(240, 240, 240)',
    padding: '12px',
    cursor: 'pointer',
    fontSize: '18px',
    borderRadius: '50%',
  },
  actionBarFavorite: {
    backgroundColor: 'pink',
  },
  actionBarShare: {
    backgroundColor: 'green',
  },
  actionBarComment: {
    backgroundColor: 'cyan',
  },
}));

export interface ImageCardProps {

}

const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>((_props, ref) => {
  const styles = useStyles();
  const [cardUrl, setCardUrl] = useState('');

  useEffect(() => {
    const url = () => `https://source.unsplash.com/random/1080x1920?travel&sig=${Math.floor(Math.random() * 100000)}`;
    axios.get(url()).then(r => {
      setCardUrl(r.request?.responseURL ?? '');
    });
  }, []);

  return (
    <Card ref={ref} className={styles.card}>
      {!!cardUrl ? (
        <>
          <CardActionArea className={styles.actionArea}>
            <CardMedia className={styles.media} image={cardUrl} />
          </CardActionArea>
          <Typography className={styles.description} variant="caption">
            Omg wooioo!! 🤣🙌😜🤦‍♂️
          </Typography>
          <div className={styles.actionBar}>
            <Avatar>J</Avatar>
            <Favorite className={clsx(styles.actionBarButton, styles.actionBarFavorite)} />
            <Reply className={clsx(styles.actionBarButton, styles.actionBarShare)} />
            <Comment className={clsx(styles.actionBarButton, styles.actionBarComment)} />
          </div>
        </>
      ) : (
        <Skeleton className={styles.media} />
      )}
    </Card>
  );
});

export default ImageCard;
