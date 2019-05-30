import React, { Component } from 'react';

import CopyButton from '../components/CopyButton';

class Output extends Component {
  render() {
    return (
      <pre>
        <CopyButton text={this.props.text} />
        {this.props.text}
      </pre>
    );
  }
}

export default Output;
