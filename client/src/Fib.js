import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    values: {},
  };

  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    const values = await axios.get('/api/indexes/values');
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
    return (
      <div>
        <h3>Indexes Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
