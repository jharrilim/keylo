import type { FC } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ImageCard from './image-card';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  cards: {
    backgroundColor: 'black',
    maxHeight: '100%',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      scrollSnapType: 'y mandatory',
      scrollSnapStop: 'always',
    },
  }
}));

interface CardsProps {
  className?: string;
}

const Cards: FC<CardsProps> = ({ className }) => {
  const styles = useStyles();
  return (
    <Grid container item className={clsx(styles.cards, className)}>
      {Array(9).fill(0).map((_, i) =>
        <Grid container item key={i} justifyContent="center">
          <ImageCard />
        </Grid>
      )}
    </Grid>
  );
};

export default Cards;
