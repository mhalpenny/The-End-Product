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

    // useEffect(() => {
    //   let decimalFix = +props.audioValue;
    //   decimalFix = (Math.floor(decimalFix*100)/100).toFixed(2);
    //   props.setAudioValue(decimalFix);
    // });
  
    //failsafe if value corrupts (not stores on server)
    if (props.value === 'NaN'){
      props.setValue(0.00);
    }

  return (
    <div className="dashboard">
      <br /><br /><br /><br/>
      <div className="dashContainer" id='dashMedia'>
        <p className='dashTitle'>Share or take an image:</p>
        <button className="dashImgContainer" id='camImg'
          onClick={() => {props.setPageState('gallery'); setButton('mediaBtn', 'none');}}>  
        </button>
        <div>
          <span className='earnSpan'>
          <p>You earn <b>$</b> {props.galleryValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <div className="dashContainer" id='dashQuiz'>
        <p className='dashTitle'>Fill out an info sheet:</p>
        <button className="dashImgContainer" id='infoImg' 
        onClick={() => { props.setPageState('quiz');}}>
        </button>
        <div>
          <span className='earnSpan'>
            <p>You earn <b>$</b> {props.quizValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <div className="dashContainer" id='dashVideo'>
        <p className='dashTitle'>Share a video:</p>
        <button className="dashImgContainer" id='vidImg' 
        onClick={() => { props.setPageState('video');}}>
        </button>
        <div>
          <span className='earnSpan'>
          <p>You earn <b>$</b> {props.cameraValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <div className="dashContainer" id='dashQuiz'>
        <p className='dashTitle'>Take our quiz:</p>
        <button className="dashImgContainer" id='quizImg' 
        onClick={() => { props.setPageState('quizB');}}>
        </button>
        <div>
          <span className='earnSpan'>
            <p>You earn <b>$</b> {props.quizValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
  
}

export default Dashboard;
