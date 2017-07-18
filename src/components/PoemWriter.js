import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };
  }

  handlePoemChange = event => {
    const poem = event.target.value;
    this.setState({
      poem,
      valid: this.isValidPoem(poem),
    })
  }

  isValidPoem = (poem) => {
    const poemArray = poem.split('\n').map(line => line.trim())
    if (poemArray.length === 3 && poemArray[0].split(' ').length === 5 && poemArray[1].split(' ').length === 3 && poemArray[2].split(' ').length === 5) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handlePoemChange}
          value={this.state.poem}
        />
        {!this.state.valid &&
          <div
          id="poem-validation-error"
          style={{color: 'red'}}
          >
          This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
