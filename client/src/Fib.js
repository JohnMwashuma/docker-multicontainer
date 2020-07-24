import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    const values = await axios.get('/api/indexes/fibvalues');
    this.setState({ values: values.data });
  }

  renderValues() {
    const entries = [];
    const { values } = this.state;

    for (let key in values) {
      entries.push(
        <div key={key}>
          The value for index {key} is: {values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    const { index } = this.state;
    return (
      <div>
        <form>
          <label>Enter index: </label>
          <input
            value={index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Indexes Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
