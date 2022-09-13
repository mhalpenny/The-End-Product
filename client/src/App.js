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
import { fetchValuesFromS3 } from './utils';

// import './App.css';

function App() {
  // const [page, setPage] = useState('homepage');
  const [page, setPage] = useState(localStorage.getItem('page'));
  const [user, setUser] = useState(localStorage.getItem('user'));
  // TODO: convert the value to a number
  const [value, setValue] = useState(localStorage.getItem('value'));
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));

  //set local memory to hold state to avoid app refreshes
  useEffect(() => {
    localStorage.setItem('page', page);
  }, [page]);

  useEffect(() => {
    localStorage.setItem('user', user);
  }, [user]);

  useEffect(() => {
    localStorage.setItem('value', value);
  }, [value]);

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
  const renderDev = () => {
    return(
     <div>
      <button className = 'backButton' id='backBtn' onClick={() => { setPage('homepage'); setUser(' '); setValue('0.00'); setLoggedIn(false)}}>Wipe</button>
     </div>
    )
  }
  
  // const renderMenu = () => {
  //   return(
  //     <div>
  //       {/* <Header initialUser={fullName} initialPrice={price}/> */}
  //       {/* <button className = 'userButton hidden' id='loginBtn' onClick={() => { setPage('login'); setButton('quizBtn', 'loginBtn'); }}>Start</button> */}
  //       <button className = 'endButton hidden' id='fileBtn' onClick={() => { setPage('dashboard'); setButton('mediaBtn', 'fileBtn');}}>Share</button>
  //       <button className = 'endButton hidden' id='submitBtn' onClick={() => { setPage('fileUpload'); }}>Submit quiz</button>
  //       {/* <button className = 'endButton' onClick={() => { setPage('priceList'); }}>price list</button> */}
  //       <button className = 'endButton hidden' id='quizBtn' onClick={() => { setPage('dashboard'); setButton('mediaBtn', 'quizBtn');}}>Enter</button>
  //       <button className = 'endButton' id='homeBtn' onClick={() => { setPage('login'); setButton('loginBtn', 'homeBtn');}}>Get started!</button>
  //       {/* <button className = 'dashButton hidden' id='quizBtn' onClick={() => { setPage('quiz'); setButton('none', 'quizBtn');}}>Quiz</button> */}
  //     </div>
  //   )
  // }

  const renderContent = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard setPageState={setPage} setValuePrice={setValue} value={value} user={user} />
      case 'login':
        return <Login setUsername={setUser} setValuePrice={setValue} setPageState={setPage} setNewLogin={setLoggedIn}/>
      case 'gallery':
        return <Gallery setPageState={setPage} setValuePrice={setValue} value={value} user={user} />
      case 'camera':
        return <Camera setPageState={setPage} setValuePrice={setValue} value={value} user={user} />
      case 'priceList':
        return <PriceList />
      case 'quiz':
        return <Quiz setPageState={setPage} setValuePrice={setValue} value={value} user={user} />
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
