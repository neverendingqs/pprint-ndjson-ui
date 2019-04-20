import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

class Reset extends Component {
  onClick(e) {
    e.preventDefault();
    this.props.reset();
    window.location.reload();
  }

  render() {
    return (
      <Button
        variant="danger"
        onClick={e => this.onClick(e)}
      >Reset</Button>
    );
  }
}

export default Reset;
