import React, { useState } from 'react';
import setBtn from '../js/btn';

function Login(props) {
  const [name, setName] = useState('');

  const handleFirstNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="Login">
      <div className="welcomeContainer">
      <h1 className="welcome">WELCOME TO <br/><br/>THE END PRODUCT</h1>
      </div>
      <br />
      <input type="text" id="userField" value={name} onChange={handleFirstNameChange} required/>
      <br />
      <button
        onClick={() => { props.setFullestName(name); setBtn('quizBtn', 'loginBtn'); }}
      >
        Start
      </button>
    </div>
  );
}

export default Login;
