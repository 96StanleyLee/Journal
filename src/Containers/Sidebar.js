import React, {useState} from 'react'
import { Grid, Menu, Button } from 'semantic-ui-react'




const SideBar = ({journal, remove, onClick, activeJournal}) =>{



    const journalEntries = () =>{
      if(journal.length !== 0){
        return journal.map(journal =>{
          return <Menu.Item
          key={journal.title}
          name={journal.title}
          active={activeJournal.title === journal.title}
          onClick={onClick}
          />
        })
      }
    }

    console.log(journal)


    return(
      <>
        <Grid.Column width={4}>
          <div className='sidebar'>
            <Menu fluid vertical tabular>

              {journalEntries()}
              <Button content='Add' primary style={{marginTop: "30px", marginLeft: "10px", backgroundColor: "#7bcc81" }} />
              <Button  onClick={()=>remove(activeJournal)} content='Remove' secondary style={{marginLeft: "20px", backgroundColor: "#ff6666"}}/>
            </Menu>

          </div>
        </Grid.Column>
        </>
    )

}

export default SideBar