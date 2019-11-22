import React from 'react';
// import Button from '@material-ui/core/Button';
import TabCard from './components/tabCard/tabCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What's on my list ... <span role='img' aria-label="thinking">🤔</span></h1>
      </header>
      <body className='App-body'>
        <TabCard title={'Tasks'} />
      </body>
    </div>
  );
}

export default App;
