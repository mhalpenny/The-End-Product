import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Homepage from './components/Homepage';
import LocalStorage from './components/LocalStorage';
import Login from './components/Login';
import Quiz from './components/Quiz';
import QuizB from './components/QuizB';
import RemoteStorage from './components/RemoteStorage';
import Video from './components/Video';
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
  const [quizBValue, setQuizBValue] = useState(localStorage.getItem('quizBValue'));
  const [quizResponse, setQuizResponse] = useState(localStorage.getItem('quizResponse'));
  const [quizBResponse, setQuizBResponse] = useState(localStorage.getItem('quizBResponse'));
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
        quizBValue={quizBValue}
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
        setQuizBValue={setQuizBValue}
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
      //don't allow the dev button to show on the live web app
      if (process.env.NODE_ENV !== 'production') {
        return(
          <div id="devContainer">
            <button className = 'devButton' onClick={() => { 
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
                  setQuizBValue={setQuizBValue} 
                  setValue={setValue}
                  galleryValue={galleryValue}
                  cameraValue={cameraValue} 
                  quizValue={quizValue} 
                  quizBValue={quizBValue} 
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
      case 'video':
        return <Video
                  setPageState={setPage} 
                  setValuePrice={setValue} 
                  cameraValue={cameraValue} 
                  value={value} 
                  user={user} />
      case 'quiz':
        return <Quiz 
                  setPageState={setPage} 
                  setValuePrice={setValue} 
                  setQuizResponse={setQuizResponse}
                  quizValue={quizValue} 
                  quizResponse={quizResponse}
                  value={value} 
                  user={user} />
      case 'quizB':
        return <QuizB 
                  setPageState={setPage} 
                  setValuePrice={setValue} 
                  setQuizBResponse={setQuizBResponse}
                  quizBValue={quizBValue} 
                  quizBResponse={quizBResponse}
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
      {renderFooter()}
    </div>
  );
}

export default App;
