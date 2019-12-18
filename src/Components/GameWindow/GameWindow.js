import React from 'react'

import './GameWindow.css'

class GameWindow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentEnemyPath: "Title",
            timer: 50,
            currentAnswer: "",
            currentCard: {
                word: "",
                kanji:"火"
            }
        }
    }

    componentDidMount = () =>{
        this.chooseRandomCard()
    }

    answerSend = async (e) => {
        //TODO: check if answer is correct and lose health
    }

    chooseRandomCard = async () =>{
        // console.log(t)

        await console.log(this.props)

        let randomWord = this.props.possibleCards[0].word
        let randomKanji = this.props.possibleCards[0].kanji
        this.setState({
            currentCard:{
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


    render() {
        return (
            <div className='game-window-holder'>
                <div className='top-half-container'>
                    <form className='answer-form'>
                        <div className="input-title-container">
                            <h2>Answer:</h2>
                            <input
                                type='text'
                                name='currentAnswer'
                                onChange={this.handleTextInput}
                                className="title-input-form"
                                value={this.state.currentAnswer}
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

                    </div>
                </div>
            </div>
        )
    }
}


export default GameWindow