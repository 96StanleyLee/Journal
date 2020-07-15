import React from 'react';
import Navbar from './Containers/Navbar'
import Sidebar from './Containers/Sidebar'
import './App.css';
import { Header } from 'semantic-ui-react'

function App() {
  return (
    <>
    <div className = 'App'>
    <header className='navbarheader'>
      <Navbar/>
    </header>
    <h1 className='title'> Journal Test </h1>
    
    <Sidebar></Sidebar>
    </div>
    </>
  );
}

export default App;
