import React, {useState, useEffect} from 'react';
import Navbar from './Containers/Navbar'
import JournalEntry from './Containers/JournalEntry'
import SignInPage from './Containers/SignInPage'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {



  const journalEntriesObj = [
    {title: 'bio', entry: 'This is my biography', date:"7/15/2020", id:1},   
    {title: 'test', entry: "This is a test journal", date:"7/17/2020", id:2},
    {title: 'dead', entry: `<strong>IM DED</strong>`, date:"7/19/2020", id:3},
    {title: 'dead', entry: `<strong>IM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM M DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DEDIM DED</strong>`, date:"7/19/2020", id:4}
  ]


  let [journalEntries, setJournalEntries] = useState(journalEntriesObj)
  let [activeJournal, setActiveJournal] = useState(journalEntries[0])



  const onClick = (e, {id}) =>{
    console.log(id)
    let setJournal = journalEntries.find(journal =>{
      return journal.id === id
    })

    setActiveJournal(setJournal)
  }

  const onClickDelete = (journalEntry) =>{
    const newJournalObj = journalEntries.filter(journal => journal !== journalEntry)
    const userInput = window.confirm('Are you sure you want to delete this journal entry?')
    if(userInput) {
      setJournalEntries(newJournalObj)
      setActiveJournal(newJournalObj[0])
    }
  }

  const onClickAdd = async () =>{
    let id = journalEntries[journalEntries.length-1].id + 1
    let date = new Date()
    date = date.toLocaleDateString()
    let newJournalEntry = {title: 'New', entry: 'New', date: date, id:id}
    let newJournalEntries = [...journalEntries, newJournalEntry]
    setJournalEntries(newJournalEntries)
  }

  const onClickEditTitle = (journal, title) =>{
    let journals = [...journalEntries]

    let newJournals = journals.map(journals =>{
      if(journals === journal){
        return {...journals, title: title}
      }
      return journals
    })
    setJournalEntries(newJournals)
  }



  const onClickSaveJournal = (journal, content) =>{
    let entries = [...journalEntries]
    let editedJournal = {...journal}

    entries = entries.filter(journals =>{
      return journals !== journal
    })
   
  
    
    editedJournal.entry = content 

    setActiveJournal(editedJournal) 
    entries.push(editedJournal)
    setJournalEntries(entries)
    
  
    
  }


  // useEffect(()=>{
  //   console.log(journalEntries)
  //   console.log(activeJournal)
  //   // let id = activeJournal.id - 1
  //   // setActiveJournal(journalEntries[id])
  // },[journalEntries])


  return (
    <>
    <div className = 'App'>
    <Router>
    <header className='navbarheader'>
      <Navbar/>
    </header>
      <Switch>
      <Route path={['/journals','/']}>
      <JournalEntry journalEntries = {journalEntries} onClick={onClick} onClickAdd={onClickAdd} onClickDelete={onClickDelete} activeJournal={activeJournal} onClickEditTitle={onClickEditTitle} onClickSaveJournal={onClickSaveJournal}  />
      </Route>
      <Route path = '/register'>
        <SignInPage state={'Register'}/>
      </Route>
      <Route path = '/login'>
        <SignInPage state={'Login'}/>
      </Route>
      </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
