import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from 'react-bootstrap/Form';

import { updateHeader, updateSort } from '../actions';

class Config extends Component {
  updateHeader(e) {
    e.preventDefault();
    this.props.updateHeader(e.target.value);
  }

  updateSort(e) {
    e.preventDefault();
    this.props.updateSort(e.target.value);
  }

  render() {
    return (
      <Form.Group controlId="metadataGroup">
        <Form.Label>Tab Header</Form.Label>
        <Form.Control
          type="input"
          value={this.props.header}
          onChange={e => this.updateHeader(e)}
        />

        <Form.Label>Sort By</Form.Label>
        <Form.Control
          type="input"
          value={this.props.sort}
          onChange={e => this.updateSort(e)}
        />
      </Form.Group>
    );
  }
}

const mapStateToProps = ({ header, sort }) => ({ header, sort });
const mapDispatchToProps = dispatch => bindActionCreators({ updateHeader, updateSort }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Config);
