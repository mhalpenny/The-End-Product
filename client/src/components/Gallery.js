import React, { useState } from 'react';
import uploadMedia from '../assets/js/Upload';
import setButton from '../assets/js/Buttons';

function Gallery(props) {
  const [page, setPage] = useState('');
  const [value, setValue] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('You clicked submit.');
  // }
  return (
    <div className="FileUpload">
        <button className = 'endButton' id='uploadBtn' type="submit" onClick={() => { setButton('sellBtn', 'uploadBtn');}}>Upload</button>
        <button className = 'endButton hidden' id='sellBtn' onClick={() => { props.setPageState('dashboard'); props.setValuePrice(value + 0.25);}}>Sell</button>
        <button className = 'backButton' id='backBtn' onClick={() => { props.setPageState('dashboard'); }}>Cancel</button>
      <div className="welcomeContainer">
      <h1 className="welcome">Upload something</h1>
      </div>
      <br />
      <img id='imgPreview' alt=''></img>
      <br/>
      <div id='mediaUploadContainer'>
      <form id="imageForm">
      <input id="imageInput" type="file" className = 'browseButton' accept="image/*"/>
      {/* <button type='submit' className = 'endButton' id='mediaBtn' alt=''></button> */}
      </form>
      </div>
      {/* <button className = 'dashButton' id='mediaBtn' onClick={() => { props.setPageState('dashboard'); }}>Browse gallery</button>
      <br/> */}
      <script src="NodeIndex.js"></script>
    </div>
  );
}

export default Gallery;
