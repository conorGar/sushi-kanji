
import React from 'react'
import GameWindow from '../GameWindow/GameWindow'
import LevelData from '../../data/levels.json'
import Images from '../../assets/images'

class MapWindow extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            currentLevel: 0,
            showGameWindow: false,
            currentBackroundURL: '',
            currentEnemyURL: '',
            enemyname: 'demon1'
        }
    }

    componentDidMount = () => {
        this.setState((prevState) =>({
            currentBackroundURL: LevelData[prevState.currentLevel].backgroundImg,
            enemyname: LevelData[prevState.currentLevel].enemyImg,
            currentEnemyURL: Images[this.state.enemyname],
            showGameWindow: true
        }))
    }


    moveToNextLevel = () => { //activated by GameWindow at enemy death
        this.setState((prevState) =>({
            currentLevel: prevState.currentLevel+1,
            showGameWindow: true,
            currentBackroundURL: LevelData[prevState.currentLevel+1].backgroundImg,
            enemyname: LevelData[prevState.currentLevel+1].enemyImg,
        }))

        this.setState({
            currentEnemyURL: Images[this.state.enemyname]
        })
    }

    render(){
        return(
            <div className='map-window-holder'>
                {this.state.showGameWindow && 
                <GameWindow NextLevel={this.moveToNextLevel} enemyURL={this.state.currentEnemyURL} backgroundURL={this.state.currentBackroundURL} />
                }
            </div>
        )
    }
}

export default MapWindow;