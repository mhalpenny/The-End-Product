import React, { useState} from 'react';

import Gallery from './components/Gallery';
import Login from './components/Login';
import PriceList from './components/PriceList';
import Quiz from './components/Quiz';
import Camera from './components/Camera';
import Audio from './components/Audio';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import setButton from './assets/js/Buttons';
import Stylesheet from './components/Stylesheet';

// import './App.css';

function App() {
  const [page, setPage] = useState('homepage');
  const [user, setUser] = useState('');
  const [value, setValue] = useState('');

  const renderMenu = () => {
    return (
      <div>
        <Header user={user} value={value}/>
        {/* <Header initialUser={fullName} initialPrice={price}/> */}
        {/* <button className = 'userButton hidden' id='loginBtn' onClick={() => { setPage('login'); setButton('quizBtn', 'loginBtn'); }}>Start</button> */}
        <button className = 'endButton hidden' id='fileBtn' onClick={() => { setPage('dashboard'); setButton('mediaBtn', 'fileBtn');}}>Share</button>
        <button className = 'endButton hidden' id='submitBtn' onClick={() => { setPage('fileUpload'); }}>Submit quiz</button>
        {/* <button className = 'endButton' onClick={() => { setPage('priceList'); }}>price list</button> */}
        <button className = 'endButton hidden' id='quizBtn' onClick={() => { setPage('dashboard'); setButton('mediaBtn', 'quizBtn');}}>Enter</button>
        <button className = 'endButton' id='homeBtn' onClick={() => { setPage('login'); setButton('loginBtn', 'homeBtn');}}>Get started!</button>
        <button className = 'dashButton hidden' id='mediaBtn' onClick={() => { setPage('fileUpload'); setButton('fileBtn', 'mediaBtn');}}>Upload</button>
        <button className = 'dashButton hidden' id='quizBtn' onClick={() => { setPage('quiz'); setButton('none', 'quizBtn');}}>Quiz</button>
      </div>
    )
  }

  const renderContent = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard setPageState={setPage}/>
      case 'login':
        return <Login setUsername={setUser} />
      case 'gallery':
        return <Gallery />
      case 'camera':
        return <Camera />
      case 'priceList':
        return <PriceList />
      case 'quiz':
        return <Quiz />
      case 'audio':
        return <Audio />
      default:
        return <Homepage />

    }
  }

  return (
    <div className="App">
      {renderMenu()}
      {renderContent()}
    </div>
  );
}

export default App;
