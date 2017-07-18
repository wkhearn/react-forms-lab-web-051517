import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value,
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.onSubmit
    } else {
      return console.log('You forgot something')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" onChange={this.handleUsernameChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
