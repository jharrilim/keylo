import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  HomeOutlined as HomeIcon,
  Menu as MenuIcon,
  MessageOutlined as MessageIcon,
  PeopleAltOutlined as PeopleIcon,
  PersonOutlined as PersonIcon,
  SearchOutlined as SearchIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    WebkitTextStrokeWidth: '0.5px',
    WebkitTextStrokeColor: 'black',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: 'fit-content',
      left: 0,
      right: 'initial',
    }
  },
  bottomNavigation: {
    backgroundColor: 'black',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: 'fixed',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: '45px',
  },
  menuButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: 'white',
  },
}));

const Navigation = () => {
  const styles = useStyles();

  return (
    <>
      <AppBar className={styles.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={styles.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Keylo
          </Typography>
        </Toolbar>
      </AppBar>
      <BottomNavigation className={styles.bottomNavigation}>
        <BottomNavigationAction className={styles.icon} label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction className={styles.icon} label="Search" value="search" icon={<SearchIcon />} />
        <BottomNavigationAction className={styles.icon} label="Messages" value="messages" icon={<MessageIcon />} />
        <BottomNavigationAction className={styles.icon} label="Profile" value="profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </>
  );
};

export default Navigation;
