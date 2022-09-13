import React from 'react';

function Footer(props) {
  // const isLoggedIn = props.user;
  console.log(props.page);
  console.log(props.user);
  console.log(props.loggedIn);
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