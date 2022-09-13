import React from 'react';
import setButton from '../assets/js/Buttons';

function Camera(props) {
    // const [page, setPage] = useState('');
    // const [value, setValue] = useState('');
    
    return (
      <div className="FileUpload">
          <button className = 'endButton' id='uploadBtn' onClick={() => { setButton('sellBtn', 'uploadBtn');}}>Upload</button>
          <button className = 'endButton hidden' id='sellBtn' onClick={() => { props.setPageState('dashboard'); props.setValuePrice(props.value + 0.25);}}>Sell</button>
          <button className = 'backButton' id='backBtn' onClick={() => { props.setPageState('dashboard'); }}>Cancel</button>
        <div className="welcomeContainer">
        <h1 className="welcome">Upload something</h1>
        </div>
        <br />
        <img id='imgPreview' alt=''></img>
        <br/>
        <div id='mediaUploadContainer'>
        <form id="imageForm">
        <input id="imageInput" type="file" className = "browseButton" accept="video/*;capture=camcorder"/>
        {/* <button type='submit' className = 'endButton' id='mediaBtn' alt=''></button> */}
        </form>
        </div>
        {/* <button className = 'dashButton' id='mediaBtn' onClick={() => { props.setPageState('dashboard'); }}>Browse gallery</button>
        <br/> */}
      </div>
    );
}

export default Camera;
