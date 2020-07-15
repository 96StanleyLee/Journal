import React, {useState} from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Textarea from '../Components/Textarea'



const SideBar = () =>{


    let [activeItem, setActiveItem] = useState('')


    const onClick = (e, {name}) =>{
        setActiveItem(name)
    }

    return(
    <div className='sidebar'>
    <Grid style={{width: '100%'}}>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='bio'
              active={activeItem === 'bio'}
              onClick={onClick}
            />
            <Menu.Item
              name='pics'
              active={activeItem === 'pics'}
              onClick={onClick}
            />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={onClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={onClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Textarea/>
        </Grid.Column>
      </Grid>
      </div>
    )

}

export default SideBar