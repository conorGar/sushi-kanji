
import React from 'react'
import GameWindow from '../GameWindow/GameWindow'
import LevelData from '../../data/levels.json'
import Images from '../../assets/images'


import './MapWindow.css'
class MapWindow extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            currentLevel: 0,
            showGameWindow: false,
            currentBackroundURL: '',
            currentEnemyURL: '',
            enemyname: 'demon1',
            backgroundName: 'background1',
            playerIconClass: 'player-icon-lv1'
        }
    }

    componentDidMount = () => {
        this.setState((prevState) =>({
            currentBackroundURL: Images[this.state.backgroundName],
            enemyname: LevelData[prevState.currentLevel].enemyImg,
            currentEnemyURL: Images[this.state.enemyname],
            showGameWindow: true
        }))

    }


    moveToNextLevel = () => { //activated by GameWindow at enemy death
        console.log(this.state.currentLevel)
        this.setState((prevState) =>({
            currentLevel: prevState.currentLevel+1,
            showGameWindow: false,
            backgroundName: LevelData[prevState.currentLevel+1].backgroundImg,
            enemyname: LevelData[prevState.currentLevel+1].enemyImg,
            playerIconClass: `player-icon-lv${prevState.currentLevel+1}`
        }))

        this.setState({
            currentEnemyURL: Images[this.state.enemyname],
            currentBackroundURL: Images[this.state.backgroundName]
        })

        setTimeout(() =>{this.setState({showGameWindow:true})},1000) //show game window after delay

        
    }

    render(){
        return(
            <div className='map-window-holder'>
                <div className={this.state.playerIconClass}>

                </div>
                {this.state.showGameWindow && 
                <GameWindow NextLevel={this.moveToNextLevel} enemyURL={this.state.currentEnemyURL} backgroundURL={this.state.currentBackroundURL} />
                }

            </div>
        )
    }
}

export default MapWindow;