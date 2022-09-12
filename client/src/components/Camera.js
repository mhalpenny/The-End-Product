import React, { useState } from 'react';

function Camera(props) {
    const [page, setPage] = useState('');
    
  return (
    <div className="FileUpload">
        <button className = 'endButton' id='fileBtn' onClick={() => { props.setPageState('dashboard'); }}>Share</button>
      <div className="welcomeContainer">
      <h1 className="welcome">Upload something</h1>
      </div>
      <br />
      <img></img>
      <br/>
      <div id='mediaUploadContainer'>
      <form id="imageForm">
      <input id="imageInput" type="file" accept="image/*"/>
      <button type='submit' className='icon album' alt=''></button>
      </form>
      <img className='icon camera' alt=''></img>
      </div>
      <button className = 'dashButton' id='mediaBtn' onClick={() => { props.setPageState('dashboard'); }}>Upload</button>
      <br/>
    </div>
  );
}

export default Camera;
