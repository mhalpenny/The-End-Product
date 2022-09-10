import React, { useState } from 'react';
import setBtn from '../assets/js/Buttons';

function Login(props) {
  const [user, setUser] = useState('');

  const handleUserChange = (event) => {
    setUser(event.target.value);
  }

  return (
    <div className="Login">
      <div className="welcomeContainer">
      <h1 className="welcome" id='chooseUsername'>Choose your username</h1>
      </div>
      <br />
      <input type="text" id="userField" className='hidden' value={user} onChange={handleUserChange} required/>
      <br />
      <button className = 'userButton hidden' id='loginBtn' onClick={() => { props.setUsername(user); setBtn('none', 'loginBtn'); }}>
        Start
      </button>
    </div>
  );
}

export default Login;
