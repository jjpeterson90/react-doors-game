import Door from "./Door"
import React from "react"

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prizeDoor: (Math.floor(Math.random() * this.props.numDoors) + 1),
      result: null,
    }
  }

  updateResult = (door) => {
    if (this.state.result !== null)
      return
    this.setState({ result: (door === this.state.prizeDoor) })
  }

  startNewGame = () => {
    window.location.reload();
  }

  // renders
  renderDoors = () => {
    let doorElements = []
    for (let i = 1; i <= this.props.numDoors; i++) {
      doorElements.push(
        <Door key={i} 
              number={i} 
              isPrizeDoor={i === this.state.prizeDoor}
              updateResult={this.updateResult}/>
      )
    }
    return doorElements
  }

  renderResult = () => {
    if (this.state.result === null)
      return ""
    return (
      this.state.result
        ? <p className="result-win">You win!!!</p>
        : <p className="result-lose">You lose!!</p>
    )
  }

  render() {
    return (
      <div className="center-container">
        <h3>Choose a door:</h3>
        <div id="door-container">
          { this.renderDoors() }
        </div>
        <div>
          <button className="btn" onClick={this.startNewGame}>New Game</button>
        </div>
        <div>
          { this.renderResult() }
        </div>
      </div>
    )
  }
}

export default Game;