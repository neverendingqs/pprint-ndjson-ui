import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { updateHeader, updateSort } from '../actions';

class Config extends Component {
  updateHeader(e) {
    e.preventDefault();
    this.props.updateHeader(e.target.value.trim());
  }

  updateSort(e) {
    e.preventDefault();
    this.props.updateSort(e.target.value.trim());
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Form.Group controlId="headerGroup">
              <Form.Label>Tab Header</Form.Label>
              <Form.Control
                type="input"
                defaultValue={this.props.header}
                onChange={e => this.updateHeader(e)}
              />
              <Form.Text className="text-muted">
                Path of the property to display as the tab header.
              </Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="sortGroup">
              <Form.Label>Sort By</Form.Label>
              <Form.Control
                type="input"
                defaultValue={this.props.sort}
                onChange={e => this.updateSort(e)}
              />
              <Form.Text className="text-muted">
                Path of the property to sort by.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ header, sort }) => ({ header, sort });
const mapDispatchToProps = dispatch => bindActionCreators({ updateHeader, updateSort }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Config);
