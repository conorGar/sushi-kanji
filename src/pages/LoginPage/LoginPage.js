import React from 'react'
import axios from 'axios'

class LoginPage extends React.Component {
    state = {
        username: '',
        passwordHash: ''
    }

    componentDidMount = () => {
        axios({
            method: 'get',
            url: '../../api/users.php',
            data: {"id":1},
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
        .then(function (res){
            console.log(res)
        })
        .catch(function (res){
            //error
            console.log(res)
        })
    }


    handleLogin = (e) => {
        e.preventDefault()
        console.log(this.state)

        let formData = new FormData(); //Formdata = easily constructs a set of key/value pairs representing the fields and their values
        formData.append('username', this.state.username)
        formData.append('passwordHash', this.state.passwordHash) 

        axios({
            method: 'post',
            url: '../../api/users.php',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
        .then(function (res){
            console.log(res)
        })
        .catch(function (res){
            //error
            console.log(res)
        })

    }


    render() {
        return (
            <div>
                <form>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value })} />
                    <label>Password:</label>
                    <input type="password" name="passwordHash" value={this.state.passwordHash}
                        onChange={e => this.setState({ passwordHash: e.target.value })} />
                    <input type="submit" onClick={this.handleLogin} value="Login" />
                </form>
            </div>
        )
    }
}

export default LoginPage