import type { FC } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ImageCard from './image-card';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';

const useStyles = makeStyles(theme => ({
  cards: {
    backgroundColor: 'black',
    maxHeight: '100%',
  },
  swiper: {
    height: '100%',
    width: '100%',
  },
}));

interface CardsProps {
  className?: string;
}

const Cards: FC<CardsProps> = ({ className }) => {
  const styles = useStyles();
  return (
    <Grid container item className={clsx(styles.cards, className)}>
      <Swiper
        direction="vertical"
        mousewheel={{ releaseOnEdges: true }}
        className={styles.swiper}
        modules={[Mousewheel]}
        scrollbar={{ draggable: true }}
      >
      {Array(9).fill(0).map((_, i) =>
        <SwiperSlide key={i}>
          <ImageCard />
        </SwiperSlide>
      )}
      </Swiper>
    </Grid>
  );
};

export default Cards;
