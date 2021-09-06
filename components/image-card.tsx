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
} from '@material-ui/core';
import {
  Skeleton,
} from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  media: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '100vw',
      minHeight: 'calc(100vh - 45px)',
    },
    minWidth: '360px',
    minHeight: '640px',
  },
  card: {
    borderRadius: 0,
    scrollSnapAlign: 'start',
    backgroundColor: 'black',
    position: 'relative',
  },
  description: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '1em',
    color: 'white',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    border: 'none',
    maxWidth: '50%'
  },
}));

const ImageCard = forwardRef((_props, ref) => {
  const styles = useStyles();
  const url = `https://source.unsplash.com/random/1080x1920?nature`;
  const [cardUrl, setCardUrl] = useState('');

  useEffect(() => {
    axios.get(url).then(r => {
      setCardUrl(r.request?.responseURL ?? '');
    });
  }, []);

  return (
    <Card ref={ref} className={styles.card}>
      {!!cardUrl ? (
        <>
          <CardActionArea>
            <CardMedia className={styles.media} image={cardUrl} />
          </CardActionArea>
          <Typography className={styles.description} variant="caption">
            Omg wooioo!! 🤣🙌😜🤦‍♂️
          </Typography>
        </>
      ) : (
        <Skeleton className={styles.media} />
      )}
    </Card>
  );
});

export default ImageCard;
