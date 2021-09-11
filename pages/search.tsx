import { Grid, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import {
  useState,
  useCallback,
  ChangeEvent,
} from 'react';
import type { NextPage } from 'next';

import styles from '../styles/search.module.css';

const SearchPage: NextPage = () => {

  const [searchText, setSearchText] = useState('');

  const updateSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }, [setSearchText]);

  return (
    <Grid className={styles.searchPage} container item justifyContent="space-between" direction="column">
      <Grid container item>
        <Typography>Yoyoyoyoyo</Typography>
      </Grid>
      <Grid container item component="form" action="/api/search" className={styles.searchBar}>
        <Grid container item alignItems="center" className={styles.searchBarInner}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={styles.searchField}
            value={searchText}
            onChange={updateSearch}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchPage;
