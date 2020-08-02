import { Menu } from 'semantic-ui-react'
import React, {useState} from 'react'
import {
    Link,
    BrowserRouter as Router
  } from "react-router-dom";


const Navbar = () =>{


    let [active, setActive] = useState('Journals')


    const setActiveTest = (e, {name}) =>{
        setActive(name)
    }

    return(
        <Menu pointing secondary>
            <Link to="/journals">
            <Menu.Item
            name = 'Journals'
            className = 'menuitems'
            active = {active === 'Journals'}
            onClick={setActiveTest}
            >
                Journals
            </Menu.Item>
            </Link>

            <Link to="/login">
            <Menu.Item
            name = 'Login'
            className = 'menuitems'
            active = {active === 'Login'}
            onClick={setActiveTest}
            >
                Login
            </Menu.Item>
            </Link>

            <Link to="/register">
            <Menu.Item
            name = 'Register'
            className = 'menuitems'
            active = {active === 'Register'}
            onClick={setActiveTest}
            >
                Register
            </Menu.Item>
            </Link>

            
        </Menu>
    )
}

export default Navbar