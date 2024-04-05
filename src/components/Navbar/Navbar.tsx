import React from 'react';
import classes from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <div className="item">Profile</div>
        <div className="item">Messages</div>
        <div className="item">News</div>
        <div className="item">Music</div>
        <div>Settings</div>
      </nav>
    </div>
  );
};
