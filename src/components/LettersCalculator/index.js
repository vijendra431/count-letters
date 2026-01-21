

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="container2">
          <div className="order-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="calculator-image"
              className="calculator-image"
            />
          </div>
          <div className="letters-container order-2">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="name" className="label">
              Enter The Pheraps
            </label>
            <br />
            <input
              type="search"
              id="name"
              placeholder="Enter The Pheraps"
              className="input"
              onChange={this.onChangeSearchInput}
            />
            <br />

            <button className="count">
              No.of letters: {searchInput.length}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
