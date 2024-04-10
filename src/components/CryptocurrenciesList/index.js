// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

// const cryptoCurrencyData = [
//   {
//     currencyLogo: 'https://www.cryptocompare.com/media/19633/btc.png',
//     currencyName: 'Rupees',
//     usdValue: 1234.65,
//     euroValue: 44545.09,
//   },
// ]

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoCurrencyData} = this.props

    return (
      <div className="bg-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <div className="list-container">
          <div className="list-header">
            <p className="coin-heading">Coin Type</p>
            <div className="coin-header">
              <p className="coin-type">USD</p>
              <p className="coin-type">EURO</p>
            </div>
          </div>
          <ul className="currency-list-container">
            {cryptoCurrencyData.map(eachItem => (
              <CryptocurrencyItem
                currencyDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
