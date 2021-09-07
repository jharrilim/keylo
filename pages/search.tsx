import { Button, Grid, TextField } from '@material-ui/core';
import type { NextPage } from 'next';

const SearchPage: NextPage = () => {
  return (
    <Grid container item>
      <form action="/api/search">
        <TextField name="v" label="search" />
        <Button variant="contained" color="primary" type="submit" title="Submit">
          Search
        </Button>
      </form>
    </Grid>
  );
};

export default SearchPage;
