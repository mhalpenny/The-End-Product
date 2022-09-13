    import React, { useEffect } from 'react';

  function LocalStorage(props) {
    
    useEffect(() => {
        localStorage.setItem('page', props.page);
    }, [props.page]);

    useEffect(() => {
        localStorage.setItem('user', props.user);
    }, [props.user]);

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

    useEffect(() => {
        localStorage.setItem('loggedIn', props.loggedIn);
    }, [props.loggedIn]);

    return (
        <div>

        </div>
    )
}

export default LocalStorage