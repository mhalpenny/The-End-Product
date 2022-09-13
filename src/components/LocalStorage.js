    import React, { useEffect } from 'react';

  //puts every state we've created in the app runtime, or received remotely, 
  //into localstorage in case the browser is disrupted
  function LocalStorage(props) {
    useEffect(() => {
        localStorage.setItem('page', props.page);
    }, [props.page]);

    useEffect(() => {
        localStorage.setItem('user', props.user);
    }, [props.user]);
    
    useEffect(() => {
        localStorage.setItem('loggedIn', props.loggedIn);
    }, [props.loggedIn]);

    //certain states require stringfication to transfer properly
    //this happens automatically in localstorage but not the way we want
    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(props.value));
    }, [props.value]);

    useEffect(() => {
        localStorage.setItem('galleryValue', JSON.stringify(props.galleryValue));
    }, [props.galleryValue]);

    useEffect(() => {
        localStorage.setItem('cameraValue', JSON.stringify(props.cameraValue));
    }, [props.cameraValue]);

    useEffect(() => {
        localStorage.setItem('quizValue', JSON.stringify(props.quizValue));
    }, [props.quizValue]);

    useEffect(() => {
        localStorage.setItem('audioValue', JSON.stringify(props.audioValue));
    }, [props.audioValue]);

    return (
        <div>

        </div>
    )
}

export default LocalStorage