import React, { useState } from 'react';
import setBtn from '../assets/js/btn';
import setPage from '../App';

function Dashboard(props) {

  return (
    <div className="dashboard">
      <div className="helloContainer">
      <h1 className="hello">Hi! user</h1>
      </div>
      <br />
      <div className="dashContainer" id='dashMedia'>
        <p>Share a selfie! This text should be changeable, 
as well as the photos. Won’t change during the perf.</p>
        <img className="dashImgContainer" src='../assets/imgs/test.png' alt=''>
        </img>
        <div>
        {/* <button className = 'dashButton' id='mediaBtn' onClick={() => { setPage('fileUpload'); setBtn('fileBtn', 'mediaBtn');}}>Upload</button> */}
        <span className='earnSpan'><p>You earn </p> <img></img> <p></p></span>
        </div>
      </div>
      <br/>
      <span className='dashScroll'>Scrolling text</span>
      <br/>
      <div className="dashContainer" id='dashVideo'>
        <p>Share a video! This text should be changeable, 
as well as the photos. Won’t change during the perf.</p>
        <img className="dashImgContainer" src='../assets/imgs/test.png' alt=''></img>
        <div>
            <p>You earn </p> <img></img> <p></p>
        </div>
      </div>
      <br/>
      <span className='dashScroll'>Scrolling text</span>
      <br/>
      <div className="dashContainer" id='dashQuiz'>
        <p>Take the quiz</p>
        <img className="dashImgContainer" src='../imgs/test.png' alt=''></img>
        <div>
            <p>You earn </p> <img></img> <p></p>
        </div>
      </div>
      <br/>
      <span className='dashScroll'>Scrolling text</span>
      <br/>
     <div className="dashContainer" id='dashAudio'>
        <p>Share an audio recording</p>
     <img className="dashImgContainer" src='../assets/imgs/test.png' alt=''></img>
        <div>
            <p>You earn </p> <img></img> <p></p>
        </div>
      </div>
      <br/>
      <span className='dashScroll'>Scrolling text</span>
      <br/>
    </div>
  );
}

export default Dashboard;
