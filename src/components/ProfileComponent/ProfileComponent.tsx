import React from 'react';
import classes from './ProfileComponent.module.css';
import {MyPosts} from './posts/MyPosts';

export const ProfileComponent = () => {
  return (
    <div className={classes.content}>
      <div className="content">Main Content</div>
      <img src="https://media.collegetimes.com/uploads/2016/10/24200002/perfect.jpg" />
      <MyPosts />
    </div>
  );
};
