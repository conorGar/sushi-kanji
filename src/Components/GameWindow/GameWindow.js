import React from 'react'
import ReactInterval from 'react-interval';
import './GameWindow.css'
import KanjiData from '../../kanji-lv1.json'

class GameWindow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: 5,
            enemyHP: 5,
            playerHP: 5,
            currentAnswer: "",
            currentCard: {
                word: "",
                kanji: "火"
            },
            possibleCards: KanjiData, 
            timeout: false
        }
    }

    componentDidMount = () => {

        console.log(this.props.enemyURL)

        //get the enemy image and background image from 'MapWindow.js'
        this.setState({
            currentEnemyImgPath: this.props.enemyURL,
            backgroundImgPath: this.props.backgroundURL
        })

        this.chooseRandomCard()
    }

    answerSend = async (e) => {
        //TODO: check if answer is correct and lose health
        console.log(e)
        e.preventDefault();
        if (this.state.currentAnswer.toUpperCase() === this.state.currentCard.word.toUpperCase()) { //if answer is correct, decrease enemy HP
            //TODO: check for enemy death
            console.log("answer is correct" + this.state.currentAnswer.toUpperCase() + " " + this.state.currentCard.word.toUpperCase())
            this.setState((prevState) => ({
                enemyHP: prevState.enemyHP - 1
            }))

        } else {
            console.log("answer is INCORRECT")
            this.setState((prevState) => ({
                playerHP: prevState.playerHP - 1
            }))
        }
    }

    checkEnemyDeath = () => {
        if(this.state.enemyHP <= 0){
            this.playerWin()
        }
    }


    chooseRandomCard = async () => {
        // console.log(t)

        await console.log(this.props)
        const num = Math.floor(Math.random()*this.state.possibleCards.length)
        console.log(num)
        let randomWord = this.state.possibleCards[num].word
        let randomKanji = this.state.possibleCards[num].kanji
        this.setState({
            currentCard: {
                word: randomWord,
                kanji: randomKanji
            }
        })

    }

    handleTextInput = async (evt) => {
        const { name, value } = evt.target
        this.setState({
            [name]: value
        })
    }


    playerWin = () => {
        this.props.NextLevel()
    }

    timeTick = () =>{
        this.setState((prevState) => ({
            timer: prevState.timer - 1
        }))
    }

    renderEnemyImage = () =>{
        const test = '../../assets/demon1.png'
        return(
            <img className='enemy-img' src={require(test.toString())} alt={"demon"}/>

        )
    }


    render() {
        console.log(this.props.enemyURL)
        const enemyDivStyle ={
            backgroundImage: 'url(' + this.props.enemyURL + ')',
            backgroundColor: 'yellow'

        }

        const enemyURL = '../../assets/demon1.png'//this.props.enemyURL
        return (
            <div className='game-window-holder'>

                <ReactInterval timeout={1000} enabled={true}
                    callback={this.timeTick} />
                <div className='top-half-container'>
                    <form className='answer-form' onSubmit={this.answerSend}>
                        <div className="input-title-container">
                            <h2>Answer:</h2>
                            <input
                                type='text'
                                name='currentAnswer'
                                onChange={this.handleTextInput}
                                className="title-input-form"
                                value={this.state.currentAnswer}
                            />
                            <input
                                type='submit'
                                style={{ display: 'none' }}

                            />
                        </div>
                    </form>
                    <div className='current-kanji'>
                        <h1>{this.state.currentCard.kanji}</h1>
                    </div>
                </div>
                <div className='bottom-half-container'>
                    <div className='player-holder'>

                    </div>
                    <div className='enemy-holder'>
                        <img className='enemy-img' src={this.props.enemyURL}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default GameWindow