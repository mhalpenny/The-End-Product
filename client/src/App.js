import React, { useState, createContext, useContext} from 'react';
import ReactDOM from "react-dom/client";

import FileUpload from './components/FileUpload';
import Login from './components/Login';
import PriceList from './components/PriceList';
import Quiz from './components/Quiz';
import Stylesheet from './components/Stylesheet';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import setButton from './assets/js/Buttons';
// import UserContext from './assets/js/UserContext'

// import './App.css';

function App() {
  const [page, setPage] = useState('homepage');
  const [fullName, setFullName] = useState('');
  const [user, setUser] = useState('hello');

  const renderMenu = () => {
    return (
      <div>
        {/* <UserContext.Provider value={{user, setUser}}>
        <Header/>
        </UserContext.Provider> */}
        {/* <Header initialUser={fullName} initialPrice={price}/> */}
        {/* <button className = 'userButton hidden' id='loginBtn' onClick={() => { setPage('login'); setButton('quizBtn', 'loginBtn'); }}>Start</button> */}
        <button className = 'endButton hidden' id='fileBtn' onClick={() => { setPage('dashboard'); setButton('mediaBtn', 'fileBtn');}}>Share</button>
        <button className = 'endButton hidden' id='submitBtn' onClick={() => { setPage('fileUpload'); }}>Submit quiz</button>
        {/* <button className = 'endButton' onClick={() => { setPage('priceList'); }}>price list</button> */}
        <button className = 'endButton hidden' id='quizBtn' onClick={() => { setPage('dashboard'); setButton('mediaBtn', 'quizBtn');}}>Start Quiz</button>
        <button className = 'endButton' id='homeBtn' onClick={() => { setPage('login'); setButton('loginBtn', 'homeBtn');}}>Get started!</button>
        <button className = 'dashButton hidden' id='mediaBtn' onClick={() => { setPage('fileUpload'); setButton('fileBtn', 'mediaBtn');}}>Upload</button>
        <button className = 'dashButton hidden' id='quizBtn' onClick={() => { setPage('quiz'); setButton('none', 'quizBtn');}}>Quiz</button>
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
