import React from 'react';
import Navbar from './Containers/Navbar'
import Sidebar from './Containers/Sidebar'
import './App.css';
import { Header } from 'semantic-ui-react'

function App() {



  const journalEntries = [
    {title: 'bio', entry: 'This is my biography'},   
    {title: 'test', entry: "This is a test journal"},
    {title: 'dead', entry: `<strong>IM DED</strong>`}]


 
  return (
    <>
    <div className = 'App'>
    <header className='navbarheader'>
      <Navbar/>
    </header>
    <h1 className='title'> Journal Test </h1>
    
    <Sidebar journal = {journalEntries}></Sidebar>
    </div>
    </>
  );
}

export default App;
