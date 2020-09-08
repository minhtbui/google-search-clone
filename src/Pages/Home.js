import React from 'react';
import { Link } from 'react-router-dom';
import AppIcons from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../Components/Search';

function Home() {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='home_header--left'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home_header--right'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppIcons></AppIcons>
          <Avatar></Avatar>
        </div>
      </div>
      <div className='home_body'>
        <img
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          alt='Google Logo'
        />
        <div className='home_body--searchContainer'>
          <Search/>
        </div>
      </div>
    </div>
  );
}

export default Home;
