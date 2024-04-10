// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li className="currency-list-items">
      <div className="logo-and-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="coin-name">{currencyName}</p>
      </div>
      <div className="currencyValue-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
