import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'react-bootstrap/Button';

import { reset } from '../actions';

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

const mapDispatchToProps = dispatch => bindActionCreators({ reset }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(Reset);
