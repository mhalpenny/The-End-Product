import React, { useState, useEffect } from 'react';
import { fetchValuesFromS3 } from '../assets/js/Utils';

//Control is in the process of being abstracted into new functions
//It acts as a space where performers can debug value substitutions
function Control(props) {
    //set component-scope values to be manipulated locally and saved remotely
    const [galleryValue, setGalleryValue] = useState(0);
    const [cameraValue, setCameraValue] = useState(0);
    const [quizValue, setQuizValue] = useState(0);
    const [audioValue, setAudioValue] = useState(0);
    const [marqueeValue, setMarqueeValue] = useState(0);

    //take the properties of JSON file and save them here for displaying
    const setValuesLocally = (valuesObject) => {
        setGalleryValue(valuesObject.galleryValue);
        setCameraValue(valuesObject.cameraValue);
        setQuizValue(valuesObject.quizValue);
        setAudioValue(valuesObject.audioValue);
        setMarqueeValue(valuesObject.marqueeValue);
    }

    //fetch the JSON states from s3
    useEffect(() => {
        const fetchValuesFromS3AndSetLocally = async () => {
            console.log('fetchValuesFromS3AndSetLocally');
            const valuesObj = await fetchValuesFromS3();
            setValuesLocally(valuesObj);
        }

        fetchValuesFromS3AndSetLocally();
      }, []);      
    
    // handlers for gallery value change
    const handleGalleryValueChange = (event) => {
        setGalleryValue(event.target.value);
    }

    //new function to cut down on repetition, yet to be implemented
    //WIP ---
    const submitValues = async (value) => {
        const existingValues = await fetchValuesFromS3();
        existingValues.value = +value;
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
    //---

    //handler to submit new states to be saved as a new JSON file on s3
   const handleGalleryValueSubmit = async () => {
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

    // handlers for camera value change
    const handleCameraValueChange = (event) => {
        setCameraValue(event.target.value);
    }

    const handleCameraValueSubmit = async () => {
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
         // handlers for marquee value
         const handleMarqueeValueChange = (event) => {
            setMarqueeValue(event.target.value);
        }
    
        const handleMarqueeValueSubmit = async () => {
            // TODO: you could abstract some of this code out so you don't have so much repeating code
            const existingValues = await fetchValuesFromS3();
            existingValues.marqueeValue = marqueeValue;
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
        {/* <button className='displayButton' id='displayAudioBtn' type="button" disabled>Audio: ${audioValue}</button>
        <input type="text" className='valueField' id="valueFieldAudio" value={audioValue} onChange={handleAudioValueChange} required/>
        <button className='endButton' id='newAudioBtn' type="submit" onClick={handleAudioValueSubmit}>Update price</button> */}
        <br/>
        <br/>
        <button className='displayButton' id='displayMarqueeBtn' type="button" disabled>Marquee: {marqueeValue}</button>
        <input type="text" className='valueField' id="valueFieldMarquee" value={marqueeValue} onChange={handleMarqueeValueChange} required/>
        <button className='endButton' id='newMarqueeBtn' type="submit" onClick={handleMarqueeValueSubmit}>Update value</button>
    </div>
    );
}

export default Control;
