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

    useEffect(() => {
      console.log('localstorage value')
      console.log(props.value)
      // debugger;
        const valueToStore = props.value ? props.value : '0.0';
        localStorage.setItem('value', valueToStore);
    }, [props.value]);

    useEffect(() => {
        localStorage.setItem('galleryValue', props.galleryValue);
    }, [props.galleryValue]);

    useEffect(() => {
        localStorage.setItem('cameraValue', props.cameraValue);
    }, [props.cameraValue]);

    useEffect(() => {
        localStorage.setItem('quizValue', props.quizValue);
    }, [props.quizValue]);

    // useEffect(() => {
    //     localStorage.setItem('audioValue', props.audioValue);
    // }, [props.audioValue]);

    useEffect(() => {
        localStorage.setItem('marqueeValue', props.marqueeValue);
    }, [props.marqueeValue]);

    return (
        <div>

        </div>
    )
}

export default LocalStorage