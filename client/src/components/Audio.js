import React, { useState } from 'react';

function Audio() {
  return (
    <div className="FileUpload">
         <div className="helloContainer">
      <h1 className="hello">Hi! user</h1>
      </div>
      <br />
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
      <br/>
    </div>
  );
}

export default Audio;
