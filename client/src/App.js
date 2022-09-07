import React, { useState } from 'react';

import FileUpload from './components/FileUpload';
import Login from './components/Login';
import PriceList from './components/PriceList';
import Quiz from './components/Quiz';
import Stylesheet from './components/Stylesheet';
import Homepage from './components/Homepage';

// import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [fullName, setFullName] = useState('');

  const renderMenu = () => {
    return (
      <div>
        <Stylesheet primary={true}/>
        <button onClick={() => { setPage('login'); }}>login</button>
        <button onClick={() => { setPage('fileUpload'); }}>file upload</button>
        <button onClick={() => { setPage('priceList'); }}>price list</button>
        <button onClick={() => { setPage('quiz'); }}>quiz</button>
        <button className = 'endButton' onClick={() => { setPage('login'); }}>Get Started!</button>
        {fullName}
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
