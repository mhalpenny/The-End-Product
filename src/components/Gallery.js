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
  //set the user selected image
  function onImageChange(e) {
    setImages([...e.target.files]);
  }

/*====================================================
=                 UPLOAD CLICK                       =
====================================================*/
  const handleUploadClick = async () => {
    //generate a string for the server location & file name
		//get the current date from the browser...
    const date = new Date();

    //extract the relevant data to be compiled into a string (YYYY-MM-DD)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    //xompile date data into hyphenated string
    const dateHypen = [year, month, day].join('-');
    // console.log(withHyphens); 

    const generatedNum = Math.floor((Math.random() * 50));

    const keyName=`${dateHypen}/${props.user}/image-${generatedNum}-${props.galleryValue}.jpg`;
    // console.log('upload');
    // console.log('keyname: ' + keyName);

    //request an upload url from s3 through node/heroku
    const { url } = await fetch(`https://the-end-product.herokuapp.com/api/s3Url?keyName=${keyName}`, {
      crossDomain:true,
      method: 'GET',
      headers: {'Content-Type':'application/json'},
    })
      .then(response => response.json())

      //when promise is returned, set the sell button display to true
      setShowSellButton(true);
      //save the returned the upload url for s3
      setUploadUrl(url);
    }

/*====================================================
=                 SELL CLICK                         =
====================================================*/
  const handleSellClick = async () => {
    // console.log('sell');
    // console.log(uploadUrl);

    //upload to file with the received s3 url
    await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: images[0],
    });

    //based on the current selling value, modify the user's payout
		//to be manipulated the values must be changed from their storage state (strings) to nums
		let numValue = props.value;
    let numGalleryValue = props.galleryValue;

    //convert to numerical
    numValue = +numValue;
    numGalleryValue = +numGalleryValue;
    // console.log('value: ' + props.value);
    // console.log('Gvalue: ' + props.galleryValue);

    //add on the new sold value to the total value
    props.setValuePrice(numValue + numGalleryValue);
    // console.log('Addition: ' + props.value);

    //return to user to the dashboard
    props.setPageState('dashboard');
  }

/*====================================================
=                 BUTTON SWAP                        =
=====================================================*/
const renderButton = () => {
  //if the sell button bool is true, render the button with an associated sell function 
    if (showSellButton === true) {
      return (
      <span className='flexSpan'>
        <button className='gallerySellUpButton' onClick={handleSellClick}>Sell</button>;
      </span>
      )
      //if the sell button bool is false, render the button with an associated upload function 
    } else {
      return (
        <span className='flexSpan'>
            <button className='gallerySellUpButton' id='uploadBtn' type="submit" onClick={handleUploadClick}>Upload</button>
         </span>
      )
    }
  }

/*====================================================
=                 RENDER                             =
=====================================================*/
  return (
    <div className="gallery">
      <span className='flexSpan'>
        <h1 id="uploadText">Upload something</h1>
      </span>
      <div id='mediaUploadContainer'>
        <form id="imageForm">
         <input id="imageInput" type="file" className='browseButton' accept="image/*" onChange={onImageChange}/>
        </form>
      </div>
      {renderButton()}
      <span className='flexSpan'>
        <button className='galleryCancelButton' onClick={() => { props.setPageState('dashboard'); }}>
          Cancel
        </button>
      </span>
      <img id='imgPreview' alt=''></img>
    </div>
  );
}

export default Gallery;
