import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from 'react-bootstrap/Form';

import { updateInput } from '../actions';

class Input extends Component {
  updateInput(e) {
    e.preventDefault();
    this.props.updateInput(e.target.value.trim());
  }

  render() {
    return (
      <Form.Group controlId="jsonInputGroup">
        <Form.Label>Input</Form.Label>
        <Form.Control
          as="textarea"
          rows="10"
          wrap="off"
          defaultValue={this.props.input}
          onChange={e => this.updateInput(e)}
        />
        <Form.Text className="text-muted">
          Must be newline-delimited JSON as defined by <a href="http://ndjson.org/"  target="_blank" rel="noopener noreferrer">http://ndjson.org/</a> or <a href="http://jsonlines.org/" target="_blank" rel="noopener noreferrer">http://jsonlines.org/</a>.
        </Form.Text>
      </Form.Group>
    );
  }
}

const mapStateToProps = ({ input }) => ({ input });
const mapDispatchToProps = dispatch => bindActionCreators({ updateInput }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Input);
