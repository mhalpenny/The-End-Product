import React, { useState } from 'react';
import setButton from '../assets/js/Buttons';

function Control(props) {
    // const [page, setPage] = useState('');
    const [value, setValue] = useState('');
    
    const handleValueChange = (event) => {
        setValue(event.target.value);
    }
  return (
    <div>
        <h1>Welcome to the controlboard.</h1>
        <button className='displayButton' id='displayGalleryBtn' type="button" disabled>Gallery: $0.25</button>
        <input type="text" className='valueField' id="valueFieldGallery" value={value} onChange={handleValueChange} required/>
        <button className='endButton' id='newGalleryBtn' type="submit" onClick={() => { setButton('sellBtn', 'uploadBtn');}}>Update price</button>
        <br/>
        <br/>
        <button className='displayButton' id='displayCameraBtn' type="button" disabled>Camera: $0.25</button>
        <input type="text" className='valueField' id="valueFieldCamera" value={value} onChange={handleValueChange} required/>
        <button className='endButton' id='newCameraBtn' type="submit" onClick={() => { setButton('sellBtn', 'uploadBtn');}}>Update price</button>
        <br/>
        <br/>
        <button className='displayButton' id='displayQuizBtn' type="button" disabled>Quiz: $0.25</button>
        <input type="text" className='valueField' id="valueFieldQuiz" value={value} onChange={handleValueChange} required/>
        <button className='endButton' id='newQuizBtn' type="submit" onClick={() => { setButton('sellBtn', 'uploadBtn');}}>Update price</button>
        <br/>
        <br/>
        <button className='displayButton' id='displayAudioBtn' type="button" disabled>Audio: $0.25</button>
        <input type="text" className='valueField' id="valueFieldAudio" value={value} onChange={handleValueChange} required/>
        <button className='endButton' id='newAudioBtn' type="submit" onClick={() => { setButton('sellBtn', 'uploadBtn');}}>Update price</button>
    </div>
    );
}

export default Control;
