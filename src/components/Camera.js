import React, {useState} from 'react';
import CameraAccess from './CameraAccess';

function Camera(props) {
  const [showSellButton, setShowSellButton] = useState(0);
  const [uploadUrl, setUploadUrl] = useState('');
  const [images, setImages] = useState([]);

  // when promise returns, call setShowSellButton
  const handleUploadClick = async () => {
    console.log('upload');

    // TODO: pass in media 'type' - e.g. images, etc
    // final keyName could look like 2022-12-12/matt/image-50-0.25
    const keyName=`${props.user}/${Math.floor((Math.random() * 50))}-${props.value}`;
    console.log(keyName);

    //depending on dev or build, connect to the back-end to address s3
    if (process.env.NODE_ENV !== 'production') {
      const { url } = await fetch(`http://localhost:8080/s3Url?keyName=${keyName}`).then(res => res.json());
      setShowSellButton(true);
      setUploadUrl(url);
    } else{
        const { url } = await fetch(`https://the-end-product.herokuapp.com/api/s3Url?keyName=${keyName}`, {
          crossDomain:true,
          method: 'GET',
          headers: {'Content-Type':'application/json'},
        })
          .then(response => response.json())
          setShowSellButton(true);
          setUploadUrl(url);
      }
    }
    
  //upload the media to s3 with the given link
  const handleSellClick = async () => {
    console.log('sell');
    console.log(uploadUrl);

    await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: images[0],
    });

    //convert relevant values to be a num rather than a string
    let numValue = props.value;
    let numCameraValue = props.cameraValue;
    numValue = +numValue;
    numCameraValue = +numCameraValue;
    console.log('value: ' + props.value);
    console.log('Gvalue: ' + props.cameraValue);

    //add on the new sold value to the total value
    props.setValuePrice(numValue + numCameraValue);
    console.log('Addition: ' + props.value);

    //return to the dashboard
    props.setPageState('dashboard');
  }

  const renderButton = () => {
    if (showSellButton === true) {
      return <button className = 'endButton' id='sellBtn' onClick={handleSellClick}>Sell</button>;
    } else {
      // TODO: this should be disabled unless user has actually selected a file
      return <button className = 'endButton' id='uploadBtn' type="submit" onClick={handleUploadClick}>Upload</button>
    }
  }


    return (
      <div className="cameraPage">
      {renderButton()}
      <button className = 'backButtonCam' id='backBtn' 
        onClick={() => { props.setPageState('dashboard'); }}>
        Cancel
      </button>
      <div className="welcomeContainerCam">
        <h1 className="welcome">Take a picture</h1>
      </div>
      <div id="cameraContainer">
      <CameraAccess showSellButton={showSellButton} setShowSellButton={setShowSellButton}></CameraAccess>
      </div>
      <br/>
      <div id='mediaUploadContainer'>
        {/* <form id="imageForm">
        <input id="imageInput" type="file" className = 'browseButton' accept="image/*" 
          onChange={onImageChange}/>
        </form> */}
      </div>
    </div>
    );
}

export default Camera;
