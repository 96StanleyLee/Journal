import React, {useState} from 'react'
import { Grid, Menu, Button } from 'semantic-ui-react'
import Textarea from '../Components/Textarea'



const SideBar = ({journal}) =>{


    let [activeItem, setActiveItem] = useState(journal[0].title)
    let [activeJournal, setActiveJournal] = useState(journal[0])

    const onClick = (e, {name}) =>{
        setActiveItem(name)

        let setJournal = journal.find(journal =>{
          return journal.title === name
        })

        setActiveJournal(setJournal)
    }


    const journalEntries = () =>{
      return journal.map(journal =>{
        return <Menu.Item
        key={journal.title}
        name={journal.title}
        active={activeItem === journal.title}
        onClick={onClick}
      />
      })
    }


    return(
    <Grid style={{width: '100%'}}>
        <Grid.Column width={4}>
          <div className='sidebar'>
            <Menu fluid vertical tabular>

              {journalEntries()}
              <Button content='Add' primary style={{marginTop: "30px", marginLeft: "10px", backgroundColor: "#7bcc81" }} />
              <Button content='Remove' secondary style={{marginLeft: "20px", backgroundColor: "#ff6666"}}/>
            </Menu>

          </div>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Textarea journal={activeJournal}/>
        </Grid.Column>
      </Grid>
    )

}

export default SideBar