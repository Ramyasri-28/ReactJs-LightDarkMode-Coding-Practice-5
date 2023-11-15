// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightDarkMode: true}

  onButtonClick = () => {
    this.setState(previousState => ({
      isLightDarkMode: !previousState.isLightDarkMode,
    }))
  }

  render() {
    const {isLightDarkMode} = this.state
    const modeOfClassName = isLightDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isLightDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${modeOfClassName}`}>
          <h1 className="heading"> Click To Change Mode </h1>
          <button className="button" type="button" onClick={this.onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
