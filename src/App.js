import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameWindow from './Components/GameWindow/GameWindow'
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
      
        {!this.state.isLoading &&   <GameWindow possibleCards ={this.state.possibleCards}/>}
      </div>
    );
  }
}

export default App;
