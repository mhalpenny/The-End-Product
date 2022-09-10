import React, { useState } from 'react';
import setButton from '../assets/js/Buttons';

function Gallery(props) {
  const [page, setPage] = useState('');

  // const handleValueChange = (event) => {
  //   setValue(event.target.value);
  // }
  return (
    <div className="FileUpload">
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
      <button className = 'dashButton hidden' id='mediaBtn' onClick={() => { props.setPageState('dashboard'); setButton('none', 'fileBtn');}}>Upload</button>
      <br/>
    </div>
  );
}

export default Gallery;
