import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';
import './App.css';

const defaultOutput = [
  {time: 123, type: 'a', value: 'a_value'},
  {time: 125, type: 'c', value: 'c_value'},
  {time: 124, type: 'b', value: 'b_value'}
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: defaultOutput.map(JSON.stringify).join('\n'),
      output: defaultOutput
    }
  }

  tryParse(s) {
    try {
      return JSON.parse(s);
    } catch {
      return {};
    }
  }

  parseInput(e) {
    e.preventDefault();

    this.setState({
      input: e.target.value,
      output: e.target.value.split('\n').map(this.tryParse)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Pretty-Print JSON</h1>
        <Form>
          <Form.Group controlId="inputControl">
            <Form.Control
              as="textarea"
              rows="10"
              defaultValue={this.state.input}
              onChange={e => this.parseInput(e)}
            />
          </Form.Group>
        </Form>
        {this.state.output.map((o, i) =>
          <pre key={i}>{JSON.stringify(o, null, 2)}</pre>)
        }
      </div>
    );
  }
}

export default App;
