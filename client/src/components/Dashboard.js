import React, { useState } from 'react';

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
        <img className="dashImgContainer" src='../assets/imgs/test.jpg'></img>
        <div>
            <p>You earn </p> <img></img> <p></p>
        </div>
      </div>
      <marquee className='dashMarquee'>Scrolling text</marquee>
      <div className="dashContainer" id='dashVideo'>
        <p>Share a video! This text should be changeable, 
as well as the photos. Won’t change during the perf.</p>
        <img className="dashImgContainer" src='../assets/imgs/test.jpg'></img>
        <div>
            <p>You earn </p> <img></img> <p></p>
        </div>
      </div>
      <marquee className='dashMarquee'>Scrolling text</marquee>
      <div className="dashContainer" id='dashQuiz'>
        <p>Take the quiz</p>
        <img className="dashImgContainer" src='../imgs/test.jpg'></img>
        <div>
            <p>You earn </p> <img></img> <p></p>
        </div>
      </div>
      <marquee className='dashMarquee'>Scrolling text</marquee>
     <div className="dashContainer" id='dashAudio'>
        <p>Share an audio recording</p>
     <img className="dashImgContainer" src='../assets/imgs/test.jpg'></img>
        <div>
            <p>You earn </p> <img></img> <p></p>
        </div>
      </div>
      <marquee className='dashMarquee'>Scrolling text</marquee>
    </div>
  );
}

export default Dashboard;
