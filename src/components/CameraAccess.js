import React from "react";

class CameraAccess extends React.Component {
  constructor() {
    super();

    this.cameraNumber = 0;
    this.file = null;

    this.state = {
      imageDataURL: null,
      button: 0,
      uploadUrl: '',
      images: []
    };
  }

  initializeMedia = async () => {
    this.setState({ imageDataURL: null });
    this.state.button = 1;

    if (!("mediaDevices" in navigator)) {
      navigator.mediaDevices = {};
    }

    if (!("getUserMedia" in navigator.mediaDevices)) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        var getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        if (!getUserMedia) {
          return Promise.reject(new Error("getUserMedia Not Implemented"));
        }

        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    //Get the details of video inputs of the device
    const videoInputs = await this.getListOfVideoInputs();

    //The device has a camera
    if (videoInputs.length) {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: {
            maxWidth: 400,
            maxHeight: 600,
            // deviceId: {
            //   exact: videoInputs[this.cameraNumber].deviceId,
            // },
          },
        })
        .then((stream) => {
          this.player.srcObject = stream;
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("The device does not have a camera");
    }
  };

  capturePicture = () => {
    var canvas = document.createElement("canvas");
    canvas.width = this.player.videoWidth;
    canvas.height = this.player.videoHeight;
    var contex = canvas.getContext("2d");
    this.state.button = 2;
    contex.drawImage(this.player, 0, 0, canvas.width, canvas.height);
    this.player.srcObject.getVideoTracks().forEach((track) => {
      track.stop();
    });

    console.log(canvas.toDataURL());
    this.setState({ imageDataURL: canvas.toDataURL() });
    this.capture = new Image();
    this.capture = canvas.toDataURL('image/png', 1.0);
  };

  convertToFile = (dataurl, filename) => {
  
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), 
          n = bstr.length, 
          u8arr = new Uint8Array(n);
          
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      
      return new File([u8arr], filename, {type:mime});
  }

  switchCamera = async () => {
    const listOfVideoInputs = await this.getListOfVideoInputs();

    // The device has more than one camera
    if (listOfVideoInputs.length > 1) {
      if (this.player.srcObject) {
        this.player.srcObject.getVideoTracks().forEach((track) => {
          track.stop();
        });
      }

      // switch to second camera
      if (this.cameraNumber === 0) {
        this.cameraNumber = 1;
      }
      // switch to first camera
      else if (this.cameraNumber === 1) {
        this.cameraNumber = 0;
      }

      // Restart based on camera input
      this.initializeMedia();
    } else if (listOfVideoInputs.length === 1) {
      alert("The device has only one camera");
    } else {
      alert("The device does not have a camera");
    }
  };

  getListOfVideoInputs = async () => {
    // Get the details of audio and video output of the device
    const enumerateDevices = await navigator.mediaDevices.enumerateDevices();

    //Filter video outputs (for devices with multiple cameras)
    return enumerateDevices.filter((device) => device.kind === "videoinput");
  };

  render() {
    const playerORImage = Boolean(this.state.imageDataURL) ? (
      <img id='preview' src={this.state.imageDataURL} alt="cameraPic" />
    ) : (
      <video
        ref={(refrence) => {
          this.player = refrence;
        }}
        autoPlay
      ></video>
    );
    
  //upload the media to s3 with the given link
  const handleSellClick = async () => {

  // TODO: pass in media 'type' - e.g. images, etc
  // final keyName could look like 2022-12-12/matt/image-50-0.25
  const keyName=`${this.props.user}/camera-${Math.floor((Math.random() * 50))}-${this.props.value}`;
  console.log(keyName);

  //depending on dev or build, connect to the back-end to address s3
  // if (process.env.NODE_ENV !== 'production') {
  //   const { url } = await fetch(`http://localhost:8080/s3Url?keyName=${keyName}`).then(res => res.json());
  //   this.state.uploadUrl = url;
  // } else{
      const { url } = await fetch(`https://the-end-product.herokuapp.com/api/s3Url?keyName=${keyName}`, {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json'},
      })
        .then(response => response.json())
        console.log(url);
        this.state.uploadUrl = url;
        
    // }
    
    console.log('sell');
    let file = this.convertToFile(this.state.imageDataURL, keyName);
    console.log('converted');

    await fetch(this.state.uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: file,
    });
    console.log('sold');

    //convert relevant values to be a num rather than a string
    let numValue = this.props.value;
    let numCameraValue = this.props.cameraValue;
    numValue = +numValue;
    numCameraValue = +numCameraValue;
    console.log('value: ' + this.props.value);
    console.log('Gvalue: ' + this.props.cameraValue);

    //add on the new sold value to the total value
    this.props.setValuePrice(numValue + numCameraValue);
    console.log('Addition: ' + this.props.value);
    console.log('calculated and returning');
    //return to the dashboard
    this.props.setPageState('dashboard');
  }

  const renderButton = () => {
    if (this.state.button === 0) {
      return <button className='endButton' id='camPhotoBtn' onClick={this.initializeMedia}>Take Photo</button>
    } else if (this.state.button === 1) {
      return <button className='endButton' id='camSnapBtn' onClick={this.capturePicture}>Capture</button>
    } else if (this.state.button === 2){
      return <button className = 'endButton' id='sellBtn' onClick={handleSellClick}>Sell</button>}
  }

    return (
     <div className="cameraPage">
      {renderButton()}
      <button className = 'backButtonCam' id='backBtn' 
        onClick={() => { this.props.setPageState('dashboard'); }}>
        Cancel
      </button>
      <div className="welcomeContainerCam">
        <h1 className="welcome">Take a picture</h1>
      </div>
        <div id='previewContainer'>{playerORImage}</div>
      </div>
    );
  }
}

export default CameraAccess;