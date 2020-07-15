import React, {useState} from 'react'
import { Grid, Menu, Button } from 'semantic-ui-react'
import Textarea from '../Components/Textarea'



const SideBar = () =>{


    let [activeItem, setActiveItem] = useState('bio')


    const onClick = (e, {name}) =>{
        setActiveItem(name)
    }

    return(
    <Grid style={{width: '100%'}}>
        <Grid.Column width={4}>
          <div className='sidebar'>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='bio'
              active={activeItem === 'bio'}
              onClick={onClick}
            />
            <Menu.Item
              name='test'
              active={activeItem === 'test'}
              onClick={onClick}
            />
            <Menu.Item
              name='dead'
              active={activeItem === 'dead'}
              onClick={onClick}
            />

            <Button content='Add' primary style={{marginTop: "30px", marginLeft: "10px", backgroundColor: "#7bcc81" }} />
            <Button content='Remove' secondary style={{marginLeft: "20px", backgroundColor: "#ff6666"}}/>

          </Menu>
          </div>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Textarea/>
        </Grid.Column>
      </Grid>
    )

}

export default SideBar