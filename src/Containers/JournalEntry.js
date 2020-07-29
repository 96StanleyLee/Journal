import React from 'react'
import { Grid } from 'semantic-ui-react'
import Sidebar from './Sidebar'
import Textarea from '../Components/Textarea'



const JournalEntry = ({journalEntries, onClick, onClickDelete, activeJournal, onClickAdd, onClickEditTitle, onClickSaveJournal}) =>{




    return(
    <>
    <h1 className='title'> Journal Test </h1>    
    <Grid style={{width: '100%'}}>
      <Sidebar journal = {journalEntries} active={onClick} remove={onClickDelete} activeJournal={activeJournal} onClick={onClick} add={onClickAdd} ></Sidebar>
      <Grid.Column stretched width={12}>
          <Textarea journal={activeJournal} editTitle={onClickEditTitle} save={onClickSaveJournal}/>
      </Grid.Column>
    </Grid>
    </>
    )


}


export default JournalEntry