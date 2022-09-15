import React, { useState } from 'react';

function Audio(props) {
  const [showSellButton, setShowSellButton] = useState(0);
  const [uploadUrl, setUploadUrl] = useState('');
  let [audioBlob, setAudioBlob] = useState('');
  // const mediaRecorder;

  // when promise returns, call setShowSellButton
  const handleStopClick = () => {
    // mediaRecorder.stop
    setShowSellButton(2);
    }

  //upload the media to s3 with the given link
  const handleSellClick = async () => {
    console.log('upload');

    // TODO: pass in media 'type' - e.g. images, etc
    // final keyName could look like 2022-12-12/matt/image-50-0.25
    const keyName=`${props.user}/audio-${Math.floor((Math.random() * 50))}-${props.value}`;
    console.log(keyName);

    //request an upload url from s3 through node/heroku
    const { url } = await fetch(`https://the-end-product.herokuapp.com/api/s3Url?keyName=${keyName}`, {
      crossDomain:true,
      method: 'GET',
      headers: {'Content-Type':'application/json'},
    })
      .then(response => response.json())
      setUploadUrl(url);


    await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: audioBlob,
    });

    //convert relevant values to be a num rather than a string
    let numValue = props.value;
    let numAudioValue = props.audioValue;
    numValue = +numValue;
    numAudioValue = +numAudioValue;
    console.log('value: ' + props.value);
    console.log('Gvalue: ' + props.audioValue);

    //add on the new sold value to the total value
    props.setValuePrice(numValue + numAudioValue);
    console.log('Addition: ' + props.value);

    //return to the dashboard
    props.setPageState('dashboard');
  }

  const renderButton = () => {
    if (showSellButton === 2) {
      return <button className = 'endButton' id='sellBtn' onClick={handleSellClick}>Sell</button>;
    } else if (showSellButton === 1) {
      // TODO: this should be disabled unless user has actually selected a file
      return <button className = 'endButton' id='uploadBtn' type="submit" onClick={handleStopClick}>Stop</button>
    } else if (showSellButton === 0) {
      return <button className = 'endButton' id='uploadBtn' type="submit" onClick={handleAudioClick}>Record</button>
    }
  }

  const handleAudioClick = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
  
      const audioChunks = [];
      mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
      });
  
      mediaRecorder.addEventListener("stop", () => {
        audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
      });
  
      setTimeout(() => {
        mediaRecorder.stop();
        setShowSellButton(2);
      }, 2000);
    });
    setShowSellButton(1);
  }

  return (
    <div className="cameraPage">
      {renderButton()}
      <button className = 'backButton' id='backBtn' 
        onClick={() => { props.setPageState('dashboard'); }}>
        Cancel
      </button>
      <div className="welcomeContainer">
        <h1 className="welcome">Upload a 2 second memo</h1>
      </div>
      <br/>
      <img id='imgPreview' alt=''></img>
      <br/>
      <div id='mediaUploadContainer'>
        {/* <form id="imageForm">
        <input id="imageInput" type="file" className = 'browseButton' accept="image/*" 
          />
        </form> */}
      </div>
    </div>
  );
}

export default Audio;
