import React, { useState } from 'react';
import setButton from '../assets/js/Buttons';

function Login(props) {
  const [user, setUser] = useState('');

  const handleUserChange = (event) => {
    setUser(event.target.value);
  }

  function handleUserClick() {
    props.setUsername(user); 
    props.setPageState('dashboard'); 
    setButton('none', 'loginBtn'); 
    props.setNewLogin(true); 
    props.setValuePrice('0.00');
  }

  return (
    <div className="login">
      <span className="flexSpan">
        <h1 className="userMessage" id='chooseUsername'>Choose your username</h1>
      </span>
      <br/>
      <span className="flexSpan">
        <input type="text" id="userField" value={user} onChange={handleUserChange} required/>
      </span>
      <br/>
      <span className="flexSpan">
        <button className='userButton' id='loginBtn' onClick= {handleUserClick}>
          Start
        </button>
      </span>
    </div>
  );
  
}

// this is a dev test!
export default Login;
