import classes from './Top.module.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {
  FlagOutlined,
  NotificationsNoneOutlined,
  Public,
} from '@mui/icons-material';
import Buttons from './ui/Button';
import { Avatar, Badge } from '@mui/material';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-Slice';

export const TopNav = () => {
  const dispatch = useDispatch();

  const menuCollapseHandler = () => {
    dispatch(uiActions.adminCollapse());
  };

  return (
    <div className={classes.container}>
      <div className={classes.left__menu}>
        <MenuOpenIcon
          style={{ cursor: 'pointer' }}
          onClick={menuCollapseHandler}
        />
        <Public style={{ cursor: 'pointer' }} />
        <Buttons style={{ display: 'flex', gap: '50px' }}> Clear Cache</Buttons>
      </div>
      <div className={classes.right__menu}>
        <Badge color="secondary" variant="dot">
          <NotificationsNoneOutlined />
        </Badge>
        <FlagOutlined />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bolder' }}>Kelvin Moses</span>
          <span>admin</span>
        </span>
      </div>
    </div>
  );
};
