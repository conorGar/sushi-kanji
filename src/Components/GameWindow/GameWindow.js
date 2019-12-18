import React from 'react'

import './GameWindow.css'

class GameWindow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentEnemyPath: "Title",
            timer: 50,
            currentAnswer: ""
        }
    }

    answerSend = async (e) => {
        //TODO: check if answer is correct and lose health
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