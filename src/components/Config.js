import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

class Config extends Component {
  onChange(e) {
    e.preventDefault();
    this.props.onChange(e.target.value.trim());
  }

  render() {
    const { id, label, defaultValue, helpText } = this.props;

    return (
      <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type="input"
          defaultValue={defaultValue}
          onChange={e => this.onChange(e)}
        />
        <Form.Text className="text-muted">{helpText}</Form.Text>
      </Form.Group>
    );
  }
}

export default Config;
