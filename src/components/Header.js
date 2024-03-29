import React, { useEffect } from 'react';
import userIcon from '../assets/imgs/user.png';

function Header(props) {
//   console.log(props.value);
   if (props.loggedIn){
    return (
      <div id='header'>
          <div className="headerContainer">
              <span id='headerSpan' className=''>
                  <img id='userImg' className='icon' src={userIcon} alt=''/><h1 className="hello">Hello, {props.user}!</h1>
              <p id='headerPrice'> <b className='dollar'>$</b> {props.value} </p>
              </span>
          </div>    
      </div>
    )
   } else {
    return(
      <div id='header' className='hidden'>
          <div className="headerContainer">
              <span id='headerSpan' className=''>
                  <img id='userImg' className='icon' src={userIcon} alt=''/><h1 className="hello">Hello, {props.user}!</h1>
              <p id='headerPrice'> <b className='dollar'>$</b> {props.value} </p>
              </span>
          </div>    
      </div>
    )
   }
}

export default Header;