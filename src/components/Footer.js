import React from 'react';

function Footer(props) {
  // TODO: move scrolling text to footer
   if (props.loggedIn && props.page == 'dashboard'){
    return (
      <div id="footer">
        <marquee className='marqueeContainer'>Message: {props.marqueeValue}</marquee>
      </div>
    )
   } else {
    return(
        <div id='footer' className='hidden'></div>
    )
   }
}

export default Footer;