import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

import Configs from '../containers/Configs';
import Input from '../containers/Input';
import Reset from '../containers/Reset';
import Tabs from '../containers/Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pretty-Print JSON</h1>
        <Form>
          <Configs />
          <Input />
        </Form>
        <Reset />
        <hr />
        <Tabs />
      </div>
    );
  }
}

export default App
