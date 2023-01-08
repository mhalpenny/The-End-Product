import React, { useEffect } from 'react';
import setButton from '../assets/js/Buttons';

function Dashboard(props) {
/*====================================================
=                 VALUE FORMATTING                   =
====================================================*/
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
      let decimalFix = +props.quizBValue;
      decimalFix = (Math.floor(decimalFix*100)/100).toFixed(2);
      props.setQuizBValue(decimalFix);
    });
  
    //failsafe if value corrupts (not stores on server)
    if (props.value === 'NaN'){
      props.setValue(0.00);
    }

/*====================================================
=                 RENDER                            =
====================================================*/
  return (
    <div className="dashboard">
      <br /><br /><br /><br/>
      <div className="dashContainer" id='dashMedia'>
        <span className='flexSpan'>
          <p className='dashTitle'>Share or take an image</p>
        </span>
        <span className='flexSpan'>
          <button className="dashImgContainer" id='camImg'
            onClick={() => {props.setPageState('gallery'); setButton('mediaBtn', 'none');}}>  
          </button>
        </span>
        <div>
          <span className='flexSpan'>
            <p className='earnText'>You'll earn <b>$</b>{props.galleryValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <div className="dashContainer" id='dashQuiz'>
        <span className='flexSpan'>
          <p className='dashTitle'>Fill out an info sheet</p>
        </span>
        <span className='flexSpan'>
          <button className="dashImgContainer" id='infoImg' 
          onClick={() => { props.setPageState('quizB');}}>
          </button>
        </span>
        <div>
          <span className='flexSpan'>
            <p className='earnText'>You'll earn <b>$</b>{props.quizBValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <div className="dashContainer" id='dashVideo'>
        <span className='flexSpan'>
          <p className='dashTitle'>Share a video</p>
        </span>
        <span className='flexSpan'>
          <button className="dashImgContainer" id='vidImg' 
          onClick={() => { props.setPageState('video');}}>
          </button>
        </span>
        <div>
          <span className='flexSpan'>
            <p className='earnText'>You'll earn <b>$</b>{props.cameraValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <div className="dashContainer" id='dashQuiz'>
        <span className='flexSpan'>
          <p className='dashTitle'>Take our quiz</p>
        </span>
        <span className='flexSpan'>
          <button className="dashImgContainer" id='quizImg' 
          onClick={() => {props.setPageState('quiz');}}>
          </button>
        </span>
        <div>
          <span className='flexSpan'>
            <p className='earnText'>You'll earn <b>$</b>{props.quizValue}</p> 
          </span>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
  
}

export default Dashboard;
