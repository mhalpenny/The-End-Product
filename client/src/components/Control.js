import React, { useState, useEffect } from 'react';
import setButton from '../assets/js/Buttons';
import { fetchValuesFromS3 } from '../utils';

function Control(props) {
    // const [page, setPage] = useState('');
    const [galleryValue, setGalleryValue] = useState(0);

    const setValuesLocally = (valuesObject) => {
        setGalleryValue(valuesObject.galleryValue);
        // TODO: do all the other ones
    }

    useEffect(() => {
        const fetchValuesFromS3AndSetLocally = async () => {
            console.log('fetchValuesFromS3AndSetLocally');
            const valuesObj = await fetchValuesFromS3();
            setValuesLocally(valuesObj);
        }

        fetchValuesFromS3AndSetLocally();
      }, []);      
    
    // handlers for gallery value
    const handleGalleryValueChange = (event) => {
        setGalleryValue(event.target.value);
    }

    const handleGalleryValueSubmit = async () => {
        // TODO: you could abstract some of this code out so you don't have so much repeating code
        const existingValues = await fetchValuesFromS3();
        existingValues.galleryValue = galleryValue;
        const newValuesJSON = JSON.stringify(existingValues);

        const fileBlob = new Blob([newValuesJSON], {
            type: 'application/json'
        });

        const fileToUpload = new File([fileBlob], "filename");

        await fetch('https://the-end-product.s3.amazonaws.com/settings.json', {
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data"
            },
            body: fileToUpload,
          });
    }

  return (
    <div>
        <h1>Welcome to the controlboard.</h1>
        <button className='displayButton' id='displayGalleryBtn' type="button" disabled>Gallery: ${galleryValue}</button>
        <input type="text" className='valueField' id="valueFieldGallery" value={galleryValue} onChange={handleGalleryValueChange} required/>
        <button className='endButton' id='newGalleryBtn' type="submit" onClick={handleGalleryValueSubmit}>Update price</button>
        <br/>
        <br/>
        {/* <button className='displayButton' id='displayCameraBtn' type="button" disabled>Camera: $0.25</button>
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
        <button className='endButton' id='newAudioBtn' type="submit" onClick={() => { setButton('sellBtn', 'uploadBtn');}}>Update price</button> */}
    </div>
    );
}

export default Control;
