import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MapWindow from './Components/MapWindow/MapWindow'
class App extends React.Component {

    state = {
      isLoading:true
    }

    componentDidMount = () =>{

      this.setState({ 
        isLoading:false
      
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
