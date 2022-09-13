import React from 'react';

function Footer(props) {
  // TODO: move scrolling text to footer
   if (props.loggedIn){
    return (
      <div id='footer' className='hidden'>
         
      </div>
    )
   } else {
    return(
        <div id='footer' className='hidden'>
               
      </div>
    )
   }
}

export default Footer;