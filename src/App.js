import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MapWindow from './Components/MapWindow/MapWindow'
import axios from 'axios'
class App extends React.Component {

    state = {
      isLoading:true

    }

    componentDidMount = () =>{

      this.setState({ 
        isLoading:false
      
      })

      const url = '/api/users.php'
      axios.get(url).then(res=>res.data)
      .then((data) =>{ //*****TODO: This is where the auth would occur, right now im just setting all the data grabbed to an array in state */
        this.setState({
          contacts: data
        })
        console.log(this.state.contacts)
      })

    }
  

  render(){
    return (
      <div className="App">
        {!this.state.isLoading &&  
          <MapWindow />}
      </div>
    );
  }
}

export default App;
