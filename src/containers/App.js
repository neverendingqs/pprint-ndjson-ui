import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from 'react-bootstrap/Form';

import { reset } from '../actions';
import Configs from './Configs';
import Input from './Input';
import Reset from '../components/Reset';
import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pretty-Print JSON</h1>
        <Form>
          <Configs />
          <Input />
        </Form>
        <Reset reset={this.props.reset}/>
        <hr />
        <Tabs />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ reset }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(App);
