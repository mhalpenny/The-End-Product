import React, { useState } from 'react';
import setButton from '../assets/js/Buttons';

function Login(props) {
  const [user, setUser] = useState('');

  const handleUserChange = (event) => {
    setUser(event.target.value);
  }

  return (
    <div className="login">
      <span className="centerMessage">
        <h1 className="welcome" id='chooseUsername'>Choose your username</h1>
      </span>
      <br/>
      <input type="text" id="userField" value={user} onChange={handleUserChange} required/>
      <br />
      <button className = 'userButton' id='loginBtn' 
        onClick={() => { 
          props.setUsername(user); 
          props.setPageState('dashboard'); 
          setButton('none', 'loginBtn'); 
          props.setNewLogin(true); 
          props.setValuePrice('0.00');}}>
        Start
      </button>
    </div>
  );
  
}

export default Login;
