import React, { useEffect } from 'react';
import setButton from '../assets/js/Buttons';

function Dashboard(props) {
  //convert all displayed values to have 2 decimal points
  useEffect(() => {
    let decimalFix = +props.value;
    decimalFix = (Math.floor(decimalFix*100)/100).toFixed(2);
    props.setValue(decimalFix);
    });

    useEffect(() => {
      let decimalFix = +props.galleryValue;
      decimalFix = (Math.floor(decimalFix*100)/100).toFixed(2);
      props.setGalleryValue(decimalFix);
    });

    useEffect(() => {
      let decimalFix = +props.cameraValue;
      decimalFix = (Math.floor(decimalFix*100)/100).toFixed(2);
      props.setCameraValue(decimalFix);
    });

    useEffect(() => {
      let decimalFix = +props.quizValue;
      decimalFix = (Math.floor(decimalFix*100)/100).toFixed(2);
      props.setQuizValue(decimalFix);
    });

    useEffect(() => {
      let decimalFix = +props.audioValue;
      decimalFix = (Math.floor(decimalFix*100)/100).toFixed(2);
      props.setAudioValue(decimalFix);
    });
  
    //failsafe if value corrupts (not stores on server)
    if (props.value === 'NaN'){
      props.setValue(0.00);
    }

  return (
    <div className="dashboard">
      <br /><br /><br /><br/>
      <div className="dashContainer" id='dashMedia'>
        <p className='dashTitle'>Share a selfie!</p>
        <button className="dashImgContainer" id='galleryImg'
          onClick={() => {props.setPageState('gallery'); setButton('mediaBtn', 'none');}}>  
        </button>
        <div>
          <span className='earnSpan'>
          <p>You earn <b>$</b> {props.galleryValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'></marquee>
      <br/>
      <div className="dashContainer" id='dashVideo'>
        <p className='dashTitle'>Share a video!</p>
        <button className="dashImgContainer" id='camImg' 
        onClick={() => { props.setPageState('camera');}}>
        </button>
        <div>
          <span className='earnSpan'>
          <p>You earn <b>$</b> {props.cameraValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'></marquee>
      <br/>
      <div className="dashContainer" id='dashQuiz'>
        <p className='dashTitle'>Take the quiz!</p>
        <button className="dashImgContainer" id='quizImg' 
        onClick={() => { props.setPageState('quiz');}}>
        </button>
        <div>
          <span className='earnSpan'>
            <p>You earn <b>$</b> {props.quizValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'></marquee>
      <br/>
     <div className="dashContainer" id='dashAudio'>
        <p className='dashTitle'>Share an audio recording!</p>
        <button className="dashImgContainer" id='audioImg' 
        onClick={() => { props.setPageState('audio');}}>
        </button>
        <div>
          <span className='earnSpan'>
          <p>You earn <b>$</b> {props.audioValue}</p> 
         </span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'></marquee>
      <br/>
    </div>
  );
  
}

export default Dashboard;
