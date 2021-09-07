import { Avatar, Card, CardActionArea, CardHeader, Grid, makeStyles } from '@material-ui/core';
import { forwardRef } from 'react';
import faker from 'faker';
import useSWR from 'swr';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export interface MessageCardProps {

}

const MessageCard = forwardRef<HTMLDivElement, MessageCardProps>((_props, ref) => {
  const styles = useStyles();
  const subheader = useSWR('subheader', async _ => faker.date.past(1).toDateString());
  const messageId = useSWR('message-id', async _ => faker.datatype.number());
  const avatarUrl = useSWR('https://i.pravatar.cc/400', async a => a);

  return (
    <Grid ref={ref} container item component={Card}>
      <CardActionArea href={`/messages/${messageId.data}`}>
        <CardHeader
          avatar={
            <Avatar className={styles.avatar} src={avatarUrl.data} />
          }
          title="Oh hey bud, how've ya been?"
          subheader={subheader.data}
        />
      </CardActionArea>
    </Grid>
  );
});

export default MessageCard;
