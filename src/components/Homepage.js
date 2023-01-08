import React from 'react';

function Homepage(props) {

  return (
    <div className="login">
      <div className='welcomeContainer'>
        <span className="flexSpan">
          <h1 className="welcome">WELCOME TO <br/><br/>THE END PRODUCT</h1>
        </span>
      </div>
      <br/>
      <span className='flexSpan'>
       <button className='homepageButton' id='homeBtn' onClick={() => { props.setPageState('login'); }}>Get started!</button>
      </span>
    </div>
  );
  
}

export default Homepage;
