import React, { useState } from 'react';
import setBtn from '../assets/css/js/btn';

function Login(props) {
  const [name, setName] = useState('');

  const handleFirstNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="Login">
      <div className="welcomeContainer">
      <h1 className="welcome">Choose your username</h1>
      </div>
      <br />
      <input type="text" id="userField" className='hidden' value={name} onChange={handleFirstNameChange} required/>
      <br />
      <button className = 'userButton hidden' id='loginBtn'onClick={() => { props.setFullestName(name); setBtn('quizBtn', 'loginBtn'); }}>
        Start
      </button>
    </div>
  );
}

export default Login;
