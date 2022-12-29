import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'


import './App.css';
function  App() {
  return (
    <div className='container' >
      <Header title="Hello"/>
      <Tasks />
 
     
    </div>
  );
}

export default App;
