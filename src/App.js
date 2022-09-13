import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import Login from './components/Login';
import PriceList from './components/PriceList';
import Quiz from './components/Quiz';
import Camera from './components/Camera';
import Audio from './components/Audio';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Stylesheet from './components/Stylesheet';
import { fetchValuesFromS3 } from './assets/js/Utils';

function App() {
  // const [page, setPage] = useState('homepage');
  const [page, setPage] = useState(localStorage.getItem('page'));
  const [user, setUser] = useState(localStorage.getItem('user'));
  // TODO: convert the value to a number
  const [galleryValue, setGalleryValue] = useState(localStorage.getItem('galleryValue'));
  const [cameraValue, setCameraValue] = useState(localStorage.getItem('cameraValue'));
  const [quizValue, setQuizValue] = useState(localStorage.getItem('quizValue'));
  const [audioValue, setAudioValue] = useState(localStorage.getItem('audioValue'));
  const [value, setValue] = useState(localStorage.getItem('value'));
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));
  //convert to num
  // setGalleryValue(+galleryValue);
  // setCameraValue(+cameraValue);
  // setQuizValue(+quizValue);
  // setAudioValue(+audioValue);
  // setValue(+value);

  const setValuesLocally = (valuesObject) => {
    setGalleryValue(valuesObject.galleryValue);
    setCameraValue(valuesObject.cameraValue);
    setQuizValue(valuesObject.quizValue);
    setAudioValue(valuesObject.audioValue);
    setValue(+value);
    // TODO: do all the other ones
}

useEffect(() => {
    const fetchValuesFromS3AndSetLocally = async () => {
        console.log('fetchValuesFromS3AndSetLocally');
        const valuesObj = await fetchValuesFromS3();
        setValuesLocally(valuesObj);
    }

    fetchValuesFromS3AndSetLocally();
  }, []);  

  //set local memory to hold state to avoid app refreshes
  //clean these functions
  useEffect(() => {
    localStorage.setItem('page', page);
  }, [page]);

  useEffect(() => {
    localStorage.setItem('user', user);
  }, [user]);

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(value));
  }, [value]);

  useEffect(() => {
    localStorage.setItem('galleryValue', JSON.stringify(galleryValue));
  }, [galleryValue]);

  useEffect(() => {
    localStorage.setItem('cameraValue', JSON.stringify(cameraValue));
  }, [cameraValue]);

  useEffect(() => {
    localStorage.setItem('quizValue', JSON.stringify(quizValue));
  }, [quizValue]);

  useEffect(() => {
    localStorage.setItem('audioValue', JSON.stringify(audioValue));
  }, [audioValue]);

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn);
  }, [loggedIn]);

  // TODO: create a useEffect that does a setTimeout to call fetchValuesFromS3
  // and set your local values according
  // refer to the implementation in Control.js if needed

  const renderHeader = () => {
    console.log('%%%');
    console.log(value)
    return(
      <Header user={user} value={value} page={page} loggedIn={loggedIn}/>
    )
  }

  if (process.env.NODE_ENV !== 'production') {
    const renderDev = () => {
      return(
       <div>
        <button className = 'backButton' id='backBtn' onClick={() => { setPage('homepage'); setUser(' '); setGalleryValue(0.00); setValue(0.00); setLoggedIn(false)}}>Wipe</button>
       </div>
      )
    }
  }


  const renderContent = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard setPageState={setPage} setGalleryValue={setGalleryValue} setCameraValue={setCameraValue} setQuizValue={setQuizValue} setAudioValue={setAudioValue} galleryValue={galleryValue} value={value} user={user} />
      case 'login':
        return <Login setUsername={setUser} setValuePrice={setValue} setPageState={setPage} setNewLogin={setLoggedIn}/>
      case 'gallery':
        return <Gallery setPageState={setPage} setValuePrice={setValue} galleryValue={galleryValue} value={value} user={user} />
      case 'camera':
        return <Camera setPageState={setPage} setValuePrice={setValue} value={value} user={user} />
      case 'priceList':
        return <PriceList />
      case 'quiz':
        return <Quiz setPageState={setPage} setValuePrice={setValue} quizValue={quizValue} value={value} user={user} />
      case 'audio':
        return <Audio setPageState={setPage} setValuePrice={setValue} value={value} user={user} />
      default:
        return <Homepage setPageState={setPage}/>

    }
  }

  return (
    <div className="App">
      {renderHeader()}
      {renderContent()}
      {/* {renderDev()} */}
    </div>
  );
}

export default App;
