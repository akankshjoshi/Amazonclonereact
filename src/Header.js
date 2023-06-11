import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
function Header(){
  return (
    <div className='header'>
      <Link to='/'>
      <img
      className="header__logo"
      src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
      />
      </Link>
       <div className='header__search'>
        <input
        className='header__searchInput' type='text' />
      </div>
      <div className='header__nav'>
     
            <div className='header__option'>
            <span
            className='header__optionLineOne'>Hello Guest  
            </span>
            <span
            className='header__optionalLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
        <span
            className='header__optionLineOne'>Returns</span>
            <span
            className='header__optionalLineTwo'>& Orders</span>
            
        </div>
        </div>
        <div className='header__option'>
        <span
            className='header__optionLineOne'>Your</span>
            <span
            className='header__optionalLineTwo'>Prime</span>
        </div>

        </div>
  )
}

export default Header
