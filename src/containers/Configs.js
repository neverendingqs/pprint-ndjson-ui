import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { updateHeader, updateSort } from '../actions';
import Config from '../components/Config';

class Configs extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Config
            id="headerGroup"
            label="Tab Header"
            defaultValue={this.props.header}
            onChange={this.props.updateHeader}
            helpText="Path of the property to display as the tab header."
          />
        </Col>
        <Col>
          <Config
            id="sortGroup"
            label="Sort By"
            defaultValue={this.props.sort}
            onChange={this.props.updateSort}
            helpText="Path of the property to sort by."
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ header, sort }) => ({ header, sort });
const mapDispatchToProps = dispatch => bindActionCreators({ updateHeader, updateSort }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Configs);
