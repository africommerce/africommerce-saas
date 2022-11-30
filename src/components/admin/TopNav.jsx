import classes from './Top.module.css';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import IconButton from '@mui/material/IconButton';

import { NotificationsNoneOutlined, Public } from '@mui/icons-material';
import Buttons from './ui/Button';
import { Avatar, Badge } from '@mui/material';
import { useDispatch } from 'react-redux';
import logo1 from '../../assests/united-states-of-america.png';
import { uiActions } from '../../store/ui-Slice';

export const TopNav = () => {
  const dispatch = useDispatch();

  const menuCollapseHandler = () => {
    dispatch(uiActions.adminCollapse());
  };

  return (
    <AppBar sx={{ bgcolor: '#fff', color: '#000' }} position="static">
      <div className={classes.container}>
        <div className={classes.left__menu}>
          <MenuIcon
            style={{ cursor: 'pointer' }}
            onClick={menuCollapseHandler}
          />

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Public />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <PrintOutlinedIcon />
          </IconButton>
          <Buttons
            style={{ display: 'flex', gap: '50px' }}
            sx={{ bgcolor: '#ff9c93', color: '#ff4c52' }}
          >
            {' '}
            Clear Cache
          </Buttons>
        </div>
        <div className={classes.right__menu}>
          <Badge color="secondary" variant="dot" style={{ cursor: 'pointer' }}>
            <NotificationsNoneOutlined />
          </Badge>
          <img
            src={logo1}
            alt="United icon"
            style={{ height: '20px', width: '20px', cursor: 'pointer' }}
          />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            style={{ cursor: 'pointer' }}
          />
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontWeight: 'bolder',
                fontSize: '15px',
                marginRight: '10px',
              }}
            >
              William C. Schroyer
            </span>
            <span>admin</span>
          </span>
        </div>
      </div>
    </AppBar>
  );
};
