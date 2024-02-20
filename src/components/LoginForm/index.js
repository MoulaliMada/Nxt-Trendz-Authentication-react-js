// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isUserNameCorrect: true,
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
    this.setState({isUserNameCorrect: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({isUserNameCorrect: false})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="loginForm-label">
          PASSWORD
        </label>
        <input
          id="password"
          className="loginForm-input"
          value={password}
          onChange={this.onChangePassword}
          placeholder="PASSWORD"
          type="password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {userName} = this.state
    return (
      <>
        <label htmlFor="username" className="loginForm-label">
          USERNAME
        </label>
        <input
          id="username"
          className="loginForm-input"
          value={userName}
          onChange={this.onChangeUsername}
          placeholder="USERNAME"
          type="text"
        />
      </>
    )
  }

  render() {
    const {isUserNameCorrect} = this.state
    return (
      <div className="loginForm-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="loginForm-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="loginForm-login-image"
        />
        <form className="loginForm-login-Container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="loginForm-sektop-logo"
          />
          <div className="loginForm-input-container">
            {this.renderUsernameField()}
          </div>
          <div className="loginForm-input-container">
            {this.renderPasswordField()}
          </div>
          <button className="loginForm-login-btn" type="submit">
            Login
          </button>
          {isUserNameCorrect ? (
            ''
          ) : (
            <p className="loginForm-error-msg">*Username is not found</p>
          )}
        </form>
      </div>
    )
  }
}
export default LoginForm
