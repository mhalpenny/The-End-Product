import React, { useState } from 'react';

import FileUpload from './components/FileUpload';
import Login from './components/Login';
import PriceList from './components/PriceList';
import Quiz from './components/Quiz';
import Stylesheet from './components/Stylesheet';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
// import Header from './components/Header';
import setBtn from './assets/js/btn';

// import './App.css';

function App() {
  const [page, setPage] = useState('homepage');
  const [fullName, setFullName] = useState('');
  const [price, setPrice] = useState('');
  // setFullName('none');
  // setPrice(0.00);
  // let mainContent = {Stylesheet}

  const renderMenu = () => {
    return (
      <div>
        {/* <Header initialUser={fullName} initialPrice={price}/> */}
        {/* <button className = 'userButton hidden' id='loginBtn' onClick={() => { setPage('login'); setBtn('quizBtn', 'loginBtn'); }}>Start</button> */}
        <button className = 'endButton hidden' id='fileBtn' onClick={() => { setPage('dashboard'); setBtn('mediaBtn', 'fileBtn');}}>Share</button>
        <button className = 'endButton hidden' id='submitBtn' onClick={() => { setPage('fileUpload'); }}>Submit quiz</button>
        {/* <button className = 'endButton' onClick={() => { setPage('priceList'); }}>price list</button> */}
        <button className = 'endButton hidden' id='quizBtn' onClick={() => { setPage('dashboard'); setBtn('mediaBtn', 'quizBtn');}}>Start Quiz</button>
        <button className = 'endButton' id='homeBtn' onClick={() => { setPage('login'); setBtn('loginBtn', 'homeBtn');}}>Get started!</button>
        <button className = 'dashButton hidden' id='mediaBtn' onClick={() => { setPage('fileUpload'); setBtn('fileBtn', 'mediaBtn');}}>Upload</button>
        <button className = 'dashButton hidden' id='quizBtn' onClick={() => { setPage('quiz'); setBtn('none', 'quizBtn');}}>Quiz</button>
        {fullName}
      </div>
    )
  }

  const renderContent = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard />
      case 'login':
        return <Login setFullestName={setFullName} />
      case 'fileUpload':
        return <FileUpload />
      case 'priceList':
        return <PriceList />
      case 'quiz':
        return <Quiz />
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
