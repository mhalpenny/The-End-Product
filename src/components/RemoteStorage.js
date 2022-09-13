import React, { useEffect } from 'react';
import { fetchValuesFromS3 } from '../assets/js/Utils';

function RemoteStorage(props) {
    const delay = 5;
    let count = 0;
    console.log(count);

    const setValuesLocally = (valuesObject) => {
        props.setGalleryValue(valuesObject.galleryValue);
        props.setCameraValue(valuesObject.cameraValue);
        props.setQuizValue(valuesObject.quizValue);
        props.setAudioValue(valuesObject.audioValue);
        props.setValue(+props.value);
    }

    useEffect(() => {
        let refreshTimer = setTimeout(() => props.setRefresh(true), delay * 1000);
        console.log('timer started');
        if (props.refresh === true){
            // resetTimer(true);
        } else{
            console.log('timer is false');
        }
        return () => {
            clearTimeout(refreshTimer);
        };
    });   

    useEffect(() => {
        if (props.refresh === true){
            console.log('timer triggered');
            count++;
            console.log(count);
            props.setRefresh(false)
            const fetchValuesFromS3AndSetLocally = async () => {
            console.log('fetchValuesFromS3AndSetLocally');
            const valuesObj = await fetchValuesFromS3();
            setValuesLocally(valuesObj);
            }
            fetchValuesFromS3AndSetLocally();
          }
        });
         
  return (
      <div>

      </div>
  )
}

export default RemoteStorage


