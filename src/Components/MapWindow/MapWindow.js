
import React from 'react'
import GameWindow from '../GameWindow/GameWindow'
import LevelData from '../../data/levels.json'

class MapWindow extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            currentLevel: 1,
            showGameWindow: false,
            currentBackroundURL: '',
            currentEnemyURL: ''
        }
    }


    moveToNextLevel = () => {
        this.setState((prevState) =>({
            currentLevel: prevState.currentLevel+1,
            showGameWindow: true

        }))

        //Go through some array of levels, I guess that hold the location of the necessary images for the enemies/backgrounds, pick one and pass it to gamewindow

    }

    render(){
        return(
            <div className='map-window-holder'>
                <GameWindow enemyURL ={this.currentEnemyURL} backgroundURL={this.currentBackroundURL} />
            </div>
        )
    }
}

export default MapWindow;