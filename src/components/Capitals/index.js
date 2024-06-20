import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    countryName: countryAndCapitalsList[0].id,
  }

  onCountryClick = event => {
    this.setState({
      countryName: event.target.value,
    })
  }

  countryChange = () => {
    const {countryName} = this.state
    const filterData = countryAndCapitalsList.find(
      each => each.id === countryName,
    )
    return filterData.country
  }

  render() {
    const {countryName} = this.state
    const data = this.countryChange()
    return (
      <div className="bgCont">
        <div className="cardCont">
          <h1 className="head">Countries and Capitals</h1>
          <div className="countryBar">
            <select
              className="selects"
              onChange={this.onCountryClick}
              value={countryName}
            >
              {countryAndCapitalsList.map(each => (
                <option className="caps" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <h1 className="head2">{data}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
