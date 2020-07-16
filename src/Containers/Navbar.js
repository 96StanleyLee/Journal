import { Menu } from 'semantic-ui-react'
import React, {useState} from 'react'


const Navbar = () =>{


    let [active, setActive] = useState('Journals')



    return(
        <Menu pointing secondary>
            <Menu.Item
            name = 'Journals'
            className = 'menuitems'
            active = {active === 'Journals'}
            onClick={()=>setActive('Journals')}
            >
                Journals
            </Menu.Item>


        </Menu>
    )
}

export default Navbar