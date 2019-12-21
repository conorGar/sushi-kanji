
import React from 'react'
import GameWindow from '../GameWindow/GameWindow'
import LevelData from '../../data/levels.json'

class MapWindow extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            currentLevel: 0,
            showGameWindow: false,
            currentBackroundURL: '',
            currentEnemyURL: '',
        }
    }

    componentDidMount = () => {
        this.setState((prevState) =>({
            currentBackroundURL: LevelData[prevState.currentLevel].backgroundImg,
            currentEnemyURL: LevelData[prevState.currentLevel].enemyImg,
            showGameWindow: true
        }))
    }


    moveToNextLevel = () => { //activated by GameWindow at enemy death
        this.setState((prevState) =>({
            currentLevel: prevState.currentLevel+1,
            showGameWindow: true,
            currentBackroundURL: LevelData[prevState.currentLevel+1].backgroundImg,
            currentEnemyURL: LevelData[prevState.currentLevel+1].enemyImg
        }))
    }

    render(){
        return(
            <div className='map-window-holder'>
                {this.state.showGameWindow && 
                <GameWindow possibleCards={this.props.possibleCards} NextLevel={this.moveToNextLevel} enemyURL ={this.currentEnemyURL} backgroundURL={this.currentBackroundURL} />
                }
            </div>
        )
    }
}

export default MapWindow;