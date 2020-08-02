import React from 'react'
import { Input, Button } from 'semantic-ui-react'



const SignInPage = ({state}) =>{

    


    return(
        <>
        <h1 style={{textAlign: 'center'}}>{state}</h1>
        <div className = 'input'>
        <Input style={{display: 'inline-block'}} placeholder='Username'></Input>
        <br></br>
        <br></br>
        <Input style={{display: 'inline-block'}} placeholder='Password'></Input>
        <br></br>
        <Button primary style={{marginTop: '1em'}}> {state}</Button>
        </div>
        </>
    )


}

export default SignInPage