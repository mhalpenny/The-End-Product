import React, { useState } from 'react';
import uploadMedia from '../assets/js/Upload';

function Gallery(props) {
  const [showSellButton, setShowSellButton] = useState(false);
  const [uploadUrl, setUploadUrl] = useState('');
  const [images, setImages] = useState([]);
  function onImageChange(e) {
    setImages([...e.target.files]);
  }


  const handleUploadClick = async () => {
    
    // TODO: get all required props, call server to get s3url
    // when promise returns, call setShowSellButton
    console.log('upload');

    // TODO: replace this with url set via environment variable
    // TODO: pass in media 'type' - e.g. images, etc
    // TODO: pass in performance date as first keyName segment
    // final keyName could look like 2022-12-12/matt/image-50-0.25
    const keyName=`${props.user}/${Math.floor((Math.random() * 50))}-${props.value}`;
    console.log(keyName);
    const { url } = await fetch(`http://localhost:8080/s3Url?keyName=${keyName}`).then(res => res.json());
    setShowSellButton(true);
    setUploadUrl(url);
  }

  const handleSellClick = async () => {
    console.log('sell');
    console.log(uploadUrl);
    // TODO: actually upload it
    await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: images[0],
    });
    
    console.log('value: ' + props.value);
    let numValue = props.value;
    numValue = +numValue;
    console.log('Gvalue: ' + props.galleryValue);
    let numGalleryValue = props.galleryValue;
    numGalleryValue = +numGalleryValue;
    props.setValuePrice(numValue + numGalleryValue);
    console.log('Addition: ' + props.value);
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
    <div className="FileUpload">
        {renderButton()}
        <button className = 'backButton' id='backBtn' onClick={() => { props.setPageState('dashboard'); }}>Cancel</button>
      <div className="welcomeContainer">
      <h1 className="welcome">Upload something</h1>
      </div>
      <br />
      <img id='imgPreview' alt=''></img>
      <br/>
      <div id='mediaUploadContainer'>
      <form id="imageForm">
      <input id="imageInput" type="file" className = 'browseButton' accept="image/*" onChange={onImageChange} />
      </form>
      </div>
    </div>
  );
}

export default Gallery;
