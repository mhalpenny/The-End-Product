import React, { useState, useEffect } from 'react';
import setButton from '../assets/js/Buttons';
import { fetchValuesFromS3 } from '../assets/js/Utils';

function Control(props) {
    // const [page, setPage] = useState('');
    const [galleryValue, setGalleryValue] = useState(0);
    const [cameraValue, setCameraValue] = useState(0);
    const [quizValue, setQuizValue] = useState(0);
    const [audioValue, setAudioValue] = useState(0);

    const setValuesLocally = (valuesObject) => {
        setGalleryValue(valuesObject.galleryValue);
        setCameraValue(valuesObject.cameraValue);
        setQuizValue(valuesObject.quizValue);
        setAudioValue(valuesObject.audioValue);
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
        existingValues.galleryValue = +galleryValue;
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

        // handlers for gallery value
        const handleCameraValueChange = (event) => {
            setCameraValue(event.target.value);
        }
    
        const handleCameraValueSubmit = async () => {
            // TODO: you could abstract some of this code out so you don't have so much repeating code
            const existingValues = await fetchValuesFromS3();
            existingValues.cameraValue = +cameraValue;
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

            // handlers for gallery value
    const handleQuizValueChange = (event) => {
        setQuizValue(event.target.value);
    }

    const handleQuizValueSubmit = async () => {
        // TODO: you could abstract some of this code out so you don't have so much repeating code
        const existingValues = await fetchValuesFromS3();
        existingValues.quizValue = +quizValue;
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

        // handlers for gallery value
        const handleAudioValueChange = (event) => {
            setAudioValue(event.target.value);
        }
    
        const handleAudioValueSubmit = async () => {
            // TODO: you could abstract some of this code out so you don't have so much repeating code
            const existingValues = await fetchValuesFromS3();
            existingValues.audioValue = +audioValue;
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
        <button className='displayButton' id='displayCameraBtn' type="button" disabled>Camera: ${cameraValue}</button>
        <input type="text" className='valueField' id="valueFieldCamera" value={cameraValue} onChange={handleCameraValueChange} required/>
        <button className='endButton' id='newCameraBtn' type="submit" onClick={handleCameraValueSubmit}>Update price</button>
        <br/>
        <br/>
        <button className='displayButton' id='displayQuizBtn' type="button" disabled>Quiz: ${quizValue}</button>
        <input type="text" className='valueField' id="valueFieldQuiz" value={quizValue} onChange={handleQuizValueChange} required/>
        <button className='endButton' id='newQuizBtn' type="submit" onClick={handleQuizValueSubmit}>Update price</button>
        <br/>
        <br/>
        <button className='displayButton' id='displayAudioBtn' type="button" disabled>Audio: ${audioValue}</button>
        <input type="text" className='valueField' id="valueFieldAudio" value={audioValue} onChange={handleAudioValueChange} required/>
        <button className='endButton' id='newAudioBtn' type="submit" onClick={handleAudioValueSubmit}>Update price</button>
    </div>
    );
}

export default Control;
