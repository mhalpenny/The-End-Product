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
import Stylesheet from './components/Stylesheet';

// import './App.css';

function App() {
  const [page, setPage] = useState('homepage');
  const [user, setUser] = useState('');
  const [value, setValue] = useState('0.00');

  const renderHeader = () => {
    return(
      <Header user={user} value={value}/>
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
        return <Dashboard setPageState={setPage} setValuePrice={setValue}/>
      case 'login':
        return <Login setUsername={setUser} setPageState={setPage} />
      case 'gallery':
        return <Gallery setPageState={setPage} setValuePrice={setValue}/>
      case 'camera':
        return <Camera setPageState={setPage} setValuePrice={setValue}/>
      case 'priceList':
        return <PriceList />
      case 'quiz':
        return <Quiz setPageState={setPage} setValuePrice={setValue}/>
      case 'audio':
        return <Audio setPageState={setPage} setValuePrice={setValue}/>
      default:
        return <Homepage setPageState={setPage}/>

    }
  }

  return (
    <div className="App">
      {renderHeader()}
      {/* {renderMenu()}
      {renderButtons()} */}
      {renderContent()}
    </div>
  );
}

export default App;
