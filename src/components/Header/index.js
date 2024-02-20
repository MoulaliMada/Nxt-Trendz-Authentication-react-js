// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-bg-container">
    <div className="header-logo-logout-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="header-logout"
      />
    </div>
    <div className="header-icons-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="header-home-icons"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="header-home-icons"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="header-home-icons"
      />
    </div>
    <ul className="header-icons-desktop-view">
      <li className="header-text-heading">Home</li>
      <li className="header-text-heading">Products</li>
      <li className="header-text-heading">Cart</li>

      <button className="header-logout-btn" type="button">
        Logout
      </button>
    </ul>
  </div>
)
export default Header
