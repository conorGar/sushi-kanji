import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MapWindow from './Components/MapWindow/MapWindow'
import KanjiData from './kanji-lv1.json'
class App extends React.Component {

    state = {
      possibleCards:[],
      isLoading:true
    }

    componentDidMount = () =>{

      console.log(KanjiData)
      this.setState({ 
        possibleCards: KanjiData, 
        isLoading:false
      
      })

    }
  

  render(){
    return (
      <div className="App">
        {!this.state.isLoading &&  
          <MapWindow possibleCards = {this.state.possibleCards}/>}
      </div>
    );
  }
}

export default App;
