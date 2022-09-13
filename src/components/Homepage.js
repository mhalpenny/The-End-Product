import React from 'react';

function Homepage(props) {

  return (
    <div className="Login">
       <button className = 'endButton' id='homeBtn' onClick={() => { props.setPageState('login'); }}>Get started!</button>
      <div className="welcomeContainer">
      <h1 className="welcome">WELCOME TO <br/><br/>THE END PRODUCT</h1>
      </div>
      <br />
    </div>
  );
  
}

export default Homepage;
