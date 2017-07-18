import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInputChange} value={this.state.value}/>
        <h4>{this.props.maxChars - this.state.value.length}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
