import React, {useState} from 'react';
import Navbar from './Containers/Navbar'
import Sidebar from './Containers/Sidebar'
import './App.css';
import Textarea from './Components/Textarea'
import { Grid} from 'semantic-ui-react'


function App() {



  const journalEntriesObj = [
    {title: 'bio', entry: 'This is my biography'},   
    {title: 'test', entry: "This is a test journal"},
    {title: 'dead', entry: `<strong>IM DED</strong>`}]


  let [journalEntries, setJournalEntries] = useState(journalEntriesObj)
  let [activeJournal, setActiveJournal] = useState(journalEntries[0])



  const onClick = (e, {name}) =>{


    let setJournal = journalEntries.find(journal =>{
      return journal.title === name
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

  const onClickAdd = () =>{

  }
    
  return (
    <>
    <div className = 'App'>
    <header className='navbarheader'>
      <Navbar/>
    </header>
    <h1 className='title'> Journal Test </h1>    
    <Grid style={{width: '100%'}}>
      <Sidebar journal = {journalEntries} active={onClick} remove={onClickDelete} activeJournal={activeJournal} onClick={onClick}></Sidebar>
      <Grid.Column stretched width={12}>
          <Textarea journal={activeJournal}/>
      </Grid.Column>
    </Grid>

    </div>
    </>
  );
}

export default App;
