import React, { useState } from 'react';
import setButton from '../assets/js/Buttons';
import setPage from '../App';

function Dashboard(props) {

  return (
    <div className="dashboard">
      {/* <div className="helloContainer">
      <h1 className="hello">Hi! user</h1>
      </div> */}
      <br />
      <br />
      <br />
      <br />
      <div className="dashContainer" id='dashMedia'>
        <p className='dashTitle'>Share a selfie!</p>
        <button className="dashImgContainer" id='galleryImg'></button>
        <div>
        {/* <button className = 'dashButton' id='mediaBtn' onClick={() => { setPage('fileUpload'); setButton('fileBtn', 'mediaBtn');}}>Upload</button> */}
        <span className='earnSpan'><p>You earn <b>$</b> 0.00</p> <img></img> <p></p></span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'>SCROLLING TEXT</marquee>
      <br/>
      <div className="dashContainer" id='dashVideo'>
        <p className='dashTitle'>Share a video!</p>
        <button className="dashImgContainer" id='camImg'></button>
        <div>
        <span className='earnSpan'><p>You earn <b>$</b> 0.00</p> <img></img> <p></p></span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'>SCROLLING TEXT</marquee>
      <br/>
      <div className="dashContainer" id='dashQuiz'>
        <p className='dashTitle'>Take the quiz!</p>
        <button className="dashImgContainer" id='quizImg'></button>
        <div>
        <span className='earnSpan'><p>You earn <b>$</b> 0.00</p> <img></img> <p></p></span>
        </div>
      </div>
      <br/>
      <marquee className='dashScroll'>SCROLLING TEXT</marquee>
      <br/>
     <div className="dashContainer" id='dashAudio'>
        <p className='dashTitle'>Share an audio recording!</p>
        <button className="dashImgContainer" id='audioImg' ></button>
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
