import React, { useState } from 'react';

function Login(props) {
  const [name, setName] = useState('');

  const handleFirstNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="Login">
      loginnn
      <br />
      <input type="text" value={name} onChange={handleFirstNameChange} />
      <br />
      <button
        onClick={() => { props.setFullestName(name); }}
      >
        submit name
      </button>
    </div>
  );
}

export default Login;
