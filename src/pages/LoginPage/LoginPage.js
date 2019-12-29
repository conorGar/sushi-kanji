import React from 'react'


class LoginPage extends React.Component{
    state = {
        username:'',
        password:''
    }


    handleLogin = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }


    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default LoginPage