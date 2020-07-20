import React, {useState} from 'react'
import { Grid, Menu, Button } from 'semantic-ui-react'




const SideBar = ({journal, remove, onClick, activeJournal, add}) =>{

   

    const journalEntries = () =>{
      if(journal.length !== 0){
        return journal.map(journal =>{
          return <Menu.Item
          key={journal.id}
          name={`${journal.title}`}
          id={journal.id}
          active={activeJournal.id === journal.id}
          onClick={onClick}
          />
        })
      }
    }

  
    return(
      <>
        <Grid.Column width={4}>
          <div className='sidebar'>
            <Menu fluid vertical tabular>

              {journalEntries()}
              <Button content='Add' onClick={()=>add()} primary style={{marginTop: "30px", marginLeft: "10px", backgroundColor: "#7bcc81" }} />
              <Button  onClick={()=>remove(activeJournal)} content='Remove' secondary style={{marginLeft: "20px", backgroundColor: "#ff6666"}}/>
            </Menu>

          </div>
        </Grid.Column>
        </>
    )

}

export default SideBar