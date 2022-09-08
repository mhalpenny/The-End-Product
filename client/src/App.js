import React, { useState } from 'react';

import FileUpload from './components/FileUpload';
import Login from './components/Login';
import PriceList from './components/PriceList';
import Quiz from './components/Quiz';
import Stylesheet from './components/Stylesheet';
import Homepage from './components/Homepage';
import setBtn from './js/btn';

// import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [fullName, setFullName] = useState('');
  // let mainContent = {Stylesheet}

  const renderMenu = () => {
    return (
      <div>
        <Stylesheet primary={true}/>
        <button className = 'userButton hidden' id='loginBtn' onClick={() => { setPage('login'); setBtn('quizBtn', 'loginBtn'); }}>Start</button>
        <button className = 'endButton fileBtn hidden' onClick={() => { setPage('fileUpload'); }}>Upload media</button>
        {/* <button className = 'endButton' onClick={() => { setPage('priceList'); }}>price list</button> */}
        <button className = 'endButton hidden' id='quizBtn' onClick={() => { setPage('quiz'); }}>Start Quiz</button>
        <button className = 'endButton' id='homeBtn' onClick={() => { setPage('login'); setBtn('loginBtn', 'homeBtn');}}>Get started!</button>
        {fullName}
        {/* <div className='mainContainer'>{mainContent}</div> */}
      </div>
    )
  }

  const renderContent = () => {
    switch (page) {
      case 'homepage':
        return <Homepage />
      case 'login':
        return <Login setFullestName={setFullName} />
      case 'fileUpload':
        return <FileUpload />
      case 'priceList':
        return <PriceList />
      case 'quiz':
        return <Quiz />
      default:
        return <Login />
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
