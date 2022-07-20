import GiftImage from "../images/gift.png"
import React from "react";

class Door extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false }
  }

  toggleDoor = () => {
    let status = this.state.opened
    this.setState((prevState) => ({opened: !prevState.opened}))
    this.props.updateResult(this.props.number)
  }

  // renders  
  getDoorStateStyle = () => {
    return " " + (this.state.opened ? "door-opened" : "door-closed")
  }

  renderImage = () => {
    return this.state.opened && this.props.isPrizeDoor
      ? <img id="image-prize" src={GiftImage} alt="prize" />
      : null
  }

  render() {
    return (
      <div className={"door " + this.getDoorStateStyle()} onClick={this.toggleDoor}>
      <div>Door { this.props.number }</div>
        { this.renderImage() }
      </div>
    )
  }
}

export default Door;