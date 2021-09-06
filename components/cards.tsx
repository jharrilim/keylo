import { Grid, makeStyles } from '@material-ui/core';
import ImageCard from './image-card';

const useStyles = makeStyles(theme => ({
  cards: {
    height: 'calc(100vh - 45px)',
    maxHeight: 'calc(100vh - 45px)',
    overflow: 'scroll',
    scrollSnapType: 'y mandatory',
  }
}));

const Cards = () => {
  const styles = useStyles();
  return (
    <Grid container item className={styles.cards}>
      {Array(9).fill(0).map((_, i) =>
        <Grid container item key={i} justifyContent="center">
          <ImageCard />
        </Grid>
      )}
    </Grid>
  );
};

export default Cards;
