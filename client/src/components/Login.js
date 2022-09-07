import React, { useState } from 'react';

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
      <input type="text" value={name} onChange={handleFirstNameChange} />
      <br />
      <button
        onClick={() => { props.setFullestName(name); }}
      >
        Start
      </button>
    </div>
  );
}

export default Login;
