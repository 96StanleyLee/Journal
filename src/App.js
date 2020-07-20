import React, {useState, useEffect} from 'react';
import Navbar from './Containers/Navbar'
import Sidebar from './Containers/Sidebar'
import './App.css';
import Textarea from './Components/Textarea'
import { Grid} from 'semantic-ui-react'


function App() {



  const journalEntriesObj = [
    {title: 'bio', entry: 'This is my biography', id:1},   
    {title: 'test', entry: "This is a test journal", id:2},
    {title: 'dead', entry: `<strong>IM DED</strong>`, id:3}]


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
    console.log(id)
    let newJournalEntry = {title: 'New', entry: 'New', id:id}
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

  useEffect(()=>{
    setActiveJournal(journalEntries[journalEntries.length-1])
  },[journalEntries])


    console.log(journalEntries)
  return (
    <>
    <div className = 'App'>
    <header className='navbarheader'>
      <Navbar/>
    </header>
    <h1 className='title'> Journal Test </h1>    
    <Grid style={{width: '100%'}}>
      <Sidebar journal = {journalEntries} active={onClick} remove={onClickDelete} activeJournal={activeJournal} onClick={onClick} add={onClickAdd}></Sidebar>
      <Grid.Column stretched width={12}>
          <Textarea journal={activeJournal} editTitle={onClickEditTitle}/>
      </Grid.Column>
    </Grid>

    </div>
    </>
  );
}

export default App;
