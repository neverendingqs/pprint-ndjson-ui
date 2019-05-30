import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import copyToClipboard from 'copy-to-clipboard';

class Config extends Component {
  onClick(e) {
    e.preventDefault();
    copyToClipboard(this.props.text);
  }

  render() {
    return (
      <Button
        className="float-right"
        variant="primary"
        onClick={e => this.onClick(e)}
      >
        Copy
      </Button>
    );
  }
}

export default Config;
