import React, { useState } from 'react';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Quiz from './components/Quiz';
import QuizB from './components/QuizB';
// import Camera from './components/Camera';
import CameraAccess from './components/CameraAccess';
import Audio from './components/Audio';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import LocalStorage from './components/LocalStorage';
import RemoteStorage from './components/RemoteStorage';
import Header from './components/Header';
import Footer from './components/Footer';
import "./assets/css/styles.css";


function App() {
  const [page, setPage] = useState(localStorage.getItem('page'));
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));
  const [refresh, setRefresh] = useState(false);
  const [scroll, setScroll] = useState('');
  const storedValue = localStorage.getItem('value');
  const retainedValue = storedValue ? Number(storedValue) : 0.00
  const [value, setValue] = useState(retainedValue);
  const [galleryValue, setGalleryValue] = useState(localStorage.getItem('galleryValue'));
  const [cameraValue, setCameraValue] = useState(localStorage.getItem('cameraValue'));
  const [quizValue, setQuizValue] = useState(localStorage.getItem('quizValue'));
  const [audioValue, setAudioValue] = useState(localStorage.getItem('audioValue'));
  const [marqueeValue, setMarqueeValue] = useState(localStorage.getItem('marqueeValue'));
  
const updateVariables = () => {
  return(
    <div>
      <LocalStorage 
        user={user} 
        value={value} 
        page={page} 
        loggedIn={loggedIn} 
        galleryValue={galleryValue}
        cameraValue={cameraValue}
        quizValue={quizValue}
        audioValue={audioValue}
        marqueeValue={marqueeValue}>
        </LocalStorage>
        <RemoteStorage 
        refresh={refresh}
        value={value} 
        scroll={scroll}
        setRefresh={setRefresh}
        setValue={setValue} 
        setGalleryValue={setGalleryValue}
        setCameraValue={setCameraValue}
        setQuizValue={setQuizValue}
        setAudioValue={setAudioValue}
        setMarqueeValue={setMarqueeValue}
        setScroll={setScroll}>
        </RemoteStorage>
    </div>
    )
}

  const renderHeader = () => {
    return(
      <Header user={user} 
      value={value} 
      page={page} 
      loggedIn={loggedIn} 
      setValue={setValue} />
    )
  }

    const renderDev = () => {
      if (process.env.NODE_ENV !== 'production') {
        return(
          <div>
            <button className = 'backButton' id='backBtn' onClick={() => { 
                setPage('homepage'); setUser(' '); setGalleryValue(0.00); setValue(0.00); setLoggedIn(false)
            }}>Wipe</button>
          </div>
        )} else {
            return(
              <div className='hidden'></div>
            )
      }
  } 

  const renderContent = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard 
                  setPageState={setPage} 
                  setGalleryValue={setGalleryValue} 
                  setCameraValue={setCameraValue} 
                  setQuizValue={setQuizValue} 
                  setAudioValue={setAudioValue}
                  setValue={setValue}
                  galleryValue={galleryValue}
                  cameraValue={cameraValue} 
                  quizValue={quizValue} 
                  audioValue={audioValue}  
                  value={value} 
                  user={user} />
      case 'login':
        return <Login 
                  setUsername={setUser}  
                  setValuePrice={setValue} 
                  setPageState={setPage} 
                  setNewLogin={setLoggedIn}/>
      case 'gallery':
        return <Gallery 
                  setPageState={setPage} 
                  setValuePrice={setValue} 
                  galleryValue={galleryValue} 
                  value={value} 
                  user={user} />
      case 'camera':
        return <CameraAccess
                  setPageState={setPage} 
                  setValuePrice={setValue} 
                  cameraValue={cameraValue} 
                  value={value} 
                  user={user} />
      case 'quiz':
        return <Quiz 
                  setPageState={setPage} 
                  setValuePrice={setValue} 
                  quizValue={quizValue} 
                  value={value} 
                  user={user} />
      case 'quizB':
        return <QuizB 
                  setPageState={setPage} 
                  setValuePrice={setValue} 
                  quizValue={quizValue} 
                  value={value} 
                  user={user} />
      case 'audio':
        return <Audio 
                  setPageState={setPage} 
                  setValuePrice={setValue} 
                  audioValue={audioValue} 
                  value={value} 
                  user={user} />
      default:
        return <Homepage setPageState={setPage}/>
    }
  }

  const renderFooter = () => {
    return(
      <Footer 
      user={user} 
      value={value} 
      page={page} 
      loggedIn={loggedIn} 
      scroll={scroll} 
      marqueeValue={marqueeValue} 
      setMarqueeValue={setMarqueeValue}/>
    )
  }

  return (
    <div className="App">
      {updateVariables()}
      {renderHeader()}
      {renderContent()}
      {renderDev()}
      {/* {renderFooter()} */}
    </div>
  );
}

export default App;
