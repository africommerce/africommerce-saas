import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';

import { GrNotification } from 'react-icons/gr';
import { AiOutlineHome } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import classes from '../../styles/PhoneNavbar.module.css';

const PhoneNavbar = () => {
  const showDashboardHandler = () => {
    document.getElementById('sidebar-test').classList.remove('Hide');
  };
  return (
    <nav className={classes.Nav}>
      <ul className={classes.NavList}>
        <li className={classes.NavItem}>
          <NavLink exact to="/" className={classes.Link}>
            <span className={classes.NavIcon}>
              <AiOutlineHome className={classes.Icon} />
            </span>
            <span className={classes.NavName}>Home</span>
          </NavLink>
        </li>
        <li className={classes.NavItem}>
          <NavLink to="/all-categories" className={classes.Link}>
            <span className={classes.NavIcon}>
              <BiCategory className={classes.Icon} />
            </span>
            <span className={classes.NavName}>Categories</span>
          </NavLink>
        </li>
        <li className={classes.NavItem}>
          <div to="" className={classes.Cart}>
            <span className={classes.CartIconBox}>
              <BiShoppingBag className={classes.CartIcon} />
            </span>
            <span className={classes.NavName}>Cart</span>
          </div>
        </li>
        <li className={classes.NavItem}>
          <NavLink to="" className={classes.Link}>
            <span className={classes.NavIcon}>
              <GrNotification className={classes.Icon} />
            </span>
            <span className={classes.NavName}>Notifications</span>
          </NavLink>
        </li>
        <li className={classes.NavItem}>
          <NavLink
            to="/user/purchase-history"
            onClick={showDashboardHandler}
            className={classes.Link}
          >
            <span className={classes.NavIcon}>
              <VscAccount className={classes.Icon} />
            </span>
            <span className={classes.NavName}>Account</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PhoneNavbar;
