import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationActionClassKey,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  HomeOutlined as HomeIcon,
  Menu as MenuIcon,
  MessageOutlined as MessageIcon,
  PersonOutlined as PersonIcon,
  SearchOutlined as SearchIcon,
} from '@material-ui/icons';
import { useRouter } from 'next/router';
import { ClassNameMap } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  appBar: {
    color: 'white',
    backgroundColor: 'black',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
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
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: 'white !important',
  },
  iconOnly: {
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
  },
  iconSelected: {
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
  },
}));

const Navigation = () => {
  const styles = useStyles();
  const router = useRouter();
  const navigationClasses: Partial<ClassNameMap<BottomNavigationActionClassKey>> = {
    selected: styles.iconSelected,
    iconOnly: styles.iconOnly,
  };

  return (
    <>
      <AppBar className={styles.appBar} position="sticky">
        <Toolbar variant="dense">
          <IconButton edge="start" className={styles.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Keylo
          </Typography>
        </Toolbar>
      </AppBar>
      <BottomNavigation value={router.asPath} onChange={(_, v) => router.push(v)} className={styles.bottomNavigation} showLabels={false}>
        <BottomNavigationAction classes={navigationClasses} className={styles.icon} value="/" icon={<HomeIcon />} />
        <BottomNavigationAction classes={navigationClasses} className={styles.icon} value="/search" icon={<SearchIcon />} />
        <BottomNavigationAction classes={navigationClasses} className={styles.icon} value="/messages" icon={<MessageIcon />} />
        <BottomNavigationAction classes={navigationClasses} className={styles.icon} value="/profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </>
  );
};

export default Navigation;
