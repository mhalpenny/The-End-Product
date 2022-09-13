import React, { useState, useEffect } from 'react';
import { fetchValuesFromS3 } from '../assets/js/Utils';
import setButton from '../assets/js/Buttons';


function Dashboard(props) {
  const [galleryValue, setGalleryValue] = useState(0);
  const [cameraValue, setCameraValue] = useState(0);
  const [quizValue, setQuizValue] = useState(0);
  const [audioValue, setAudioValue] = useState(0);

  const setValuesLocally = (valuesObject) => {
    props.setGalleryValue(valuesObject.galleryValue);
    props.setCameraValue(valuesObject.cameraValue);
    props.setQuizValue(valuesObject.quizValue);
    props.setAudioValue(valuesObject.audioValue);
    // TODO: do all the other ones
  }

  useEffect(() => {
      const fetchValuesFromS3AndSetLocally = async () => {
          console.log('fetchValuesFromS3AndSetLocally on Dash');
          const valuesObj = await fetchValuesFromS3();
          setValuesLocally(valuesObj);
      }

  fetchValuesFromS3AndSetLocally();
}, []);  

  return (
    <div className="dashboard">
      <br />
      <br />
      <br />
      <br />
      <div className="dashContainer" id='dashMedia'>
        <p className='dashTitle'>Share a selfie!</p>
        <button className="dashImgContainer" id='galleryImg' onClick={() => { props.setPageState('gallery'); setButton('mediaBtn', 'none');}}></button>
        <div>
        {/* <button className = 'dashButton' id='mediaBtn' onClick={() => { setPage('fileUpload'); setButton('fileBtn', 'mediaBtn');}}>Upload</button> */}
        <span className='earnSpan'><p>You earn <b>$</b> {props.galleryValue}</p> <img></img> <p></p></span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'>SCROLLING TEXT</marquee>
      <br/>
      <div className="dashContainer" id='dashVideo'>
        <p className='dashTitle'>Share a video!</p>
        <button className="dashImgContainer" id='camImg' onClick={() => { props.setPageState('camera');}}></button>
        <div>
        <span className='earnSpan'><p>You earn <b>$</b> 0.00</p> <img></img> <p></p></span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'>SCROLLING TEXT</marquee>
      <br/>
      <div className="dashContainer" id='dashQuiz'>
        <p className='dashTitle'>Take the quiz!</p>
        <button className="dashImgContainer" id='quizImg' onClick={() => { props.setPageState('quiz');}}></button>
        <div>
        <span className='earnSpan'><p>You earn <b>$</b> 0.25</p> <img></img> <p></p></span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'>SCROLLING TEXT</marquee>
      <br/>
     <div className="dashContainer" id='dashAudio'>
        <p className='dashTitle'>Share an audio recording!</p>
        <button className="dashImgContainer" id='audioImg' onClick={() => { props.setPageState('audio');}}></button>
        <div>
        <span className='earnSpan'><p>You earn <b>$</b> 0.00</p> <img></img> <p></p></span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'>SCROLLING TEXT</marquee>
      <br/>
    </div>
  );
}

export default Dashboard;
