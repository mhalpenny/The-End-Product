import React, { useState } from 'react';

function Gallery(props) {
/*===================================================
=                 VARIABLES                         =
====================================================*/
  const [showSellButton, setShowSellButton] = useState(false);
  const [uploadUrl, setUploadUrl] = useState('');
  const [images, setImages] = useState([]);
  
/*====================================================
=                 IMAGE SELECT                       =
====================================================*/
  //function to create image upload preview
  function onImageChange(e) {
    setImages([...e.target.files]);
  }

/*====================================================
=                 UPLOAD CLICK                       =
====================================================*/
  // when promise returns, call setShowSellButton
  const handleUploadClick = async () => {
    console.log('upload');

    // TODO: pass in media 'type' - e.g. images, etc
    // final keyName could look like 2022-12-12/matt/image-50-0.25
    const keyName=`${props.user}/image-${Math.floor((Math.random() * 50))}-${props.value}`;
    console.log(keyName);

    //request an upload url from s3 through node/heroku
    const { url } = await fetch(`https://the-end-product.herokuapp.com/api/s3Url?keyName=${keyName}`, {
      crossDomain:true,
      method: 'GET',
      headers: {'Content-Type':'application/json'},
    })
      .then(response => response.json())
      setShowSellButton(true);
      setUploadUrl(url);

      const imageUrl = url.split('?')[0];
      // const image = document.createElement("img");
      let image = document.getElementById("imgPreview");
      image.src = imageUrl;  
    }

/*====================================================
=                 SELL CLICK                         =
====================================================*/
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
    let numGalleryValue = props.galleryValue;
    numValue = +numValue;
    numGalleryValue = +numGalleryValue;
    console.log('value: ' + props.value);
    console.log('Gvalue: ' + props.galleryValue);

    //add on the new sold value to the total value
    props.setValuePrice(numValue + numGalleryValue);
    console.log('Addition: ' + props.value);

    //return to the dashboard
    props.setPageState('dashboard');
  }

/*====================================================
=                 BUTTON SWAP                        =
=====================================================*/
  const renderButton = () => {
    if (showSellButton === true) {
      return <button className = 'endButton' id='sellBtn' onClick={handleSellClick}>Sell</button>;
    } else {
      // TODO: this should be disabled unless user has actually selected a file
      return <button className = 'endButton' id='uploadBtn' type="submit" onClick={handleUploadClick}>Upload</button>
    }
  }

/*====================================================
=                 RENDER                             =
=====================================================*/
  return (
    <div className="cameraPage">
      {renderButton()}
      <button className = 'backButton' id='backBtn' 
        onClick={() => { props.setPageState('dashboard'); }}>
        Cancel
      </button>
      <div className="welcomeContainer">
        <h1 className="welcome">Upload something</h1>
      </div>
      <br/>
      <img id='imgPreview' alt=''></img>
      <br/>
      <div id='mediaUploadContainer'>
        <form id="imageForm">
        <input id="imageInput" type="file" className = 'browseButton' accept="image/*" 
          onChange={onImageChange}/>
        </form>
      </div>
    </div>
  );
}

export default Gallery;
