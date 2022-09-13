import React, { useEffect } from 'react';
import { fetchValuesFromS3 } from '../assets/js/Utils';

function RemoteStorage(props) {
    const delay = 5;
    let count = 0;
    console.log(count);

    //integrate received remote variables into local storage
    const setValuesLocally = (valuesObject) => {
        props.setGalleryValue(valuesObject.galleryValue);
        props.setCameraValue(valuesObject.cameraValue);
        props.setQuizValue(valuesObject.quizValue);
        props.setAudioValue(valuesObject.audioValue);
        props.setValue(+props.value);
    }

    //set a refresh timer for calling variable refreshes
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

    //address s3 to download (potentially) updated variable JSON
    useEffect(() => {
        if (props.refresh === true){
            count++;
            console.log('timer triggered');
            console.log(count);
            props.setRefresh(false)

            //calls s3 function which directly downloads the file
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


