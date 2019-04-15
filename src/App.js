import get from 'lodash.get';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';
import "react-tabs/style/react-tabs.css";

const defaultInput = [
  { metadata: { time: 123, type: 'a', previous_time: 234 }, value: 'a_value' },
  { metadata: { time: 125, type: 'c', previous_time: 235 }, value: 'c_value' },
  { metadata: { time: 124, type: 'b', previous_time: 236 }, value: 'b_value' }
].map(JSON.stringify).join('\n');

function tryParse(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}

class App extends Component {
  constructor() {
    super();

    const header = 'metadata.type';
    const sort = 'metadata.time';

    const output = this.generateOutput(defaultInput, sort);

    this.state = {
      header,
      input: defaultInput,
      output,
      sort,
      tabs: this.generateTabs(output, header)
    };
  }

  generateOutput(input, sort) {
    return input
      .split('\n')
      .map(tryParse)
      .sort((a, b) => get(a, sort, '') - get(b, sort, ''));
  }

  generateTabheader(o, header) {
    const tabHeader = get(o, header, 'undefined');
    const tabHeaderType = typeof tabHeader;
    if (tabHeaderType === 'string') {
      return tabHeader
    } else {
      return tabHeaderType;
    }
  }

  generateTabs(output, header) {
    return <Tabs>
      <TabList>
        {output.map((o, i) =>
          <Tab key={i}>{this.generateTabheader(o, header)}</Tab>)
        }
      </TabList>
      {output.map((o, i) =>
        <TabPanel key={i}>
          <pre key={i}>{JSON.stringify(o, null, 2)}</pre>
        </TabPanel>
      )}
    </Tabs>;
  }

  onHeaderChange(e) {
    e.preventDefault();
    const header = e.target.value;
    const output = this.generateOutput(this.state.input);
    this.setState({
      header,
      output,
      tabs: this.generateTabs(output, header)
    });
  }

  onSortChange(e) {
    e.preventDefault();
    const sort = e.target.value;
    const output = this.generateOutput(this.state.input, sort);
    this.setState({
      output,
      sort,
      tabs: this.generateTabs(output, this.state.header)
    });
  }

  onInputChange(e) {
    e.preventDefault();
    const input = e.target.value;
    const output = this.generateOutput(input);
    this.setState({
      input,
      output,
      tabs: this.generateTabs(output, this.state.header)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Pretty-Print JSON</h1>
        <Form>
          <Form.Group controlId="metadataGroup">
            <Form.Label>Tab Header</Form.Label>
            <Form.Control
              type="input"
              defaultValue={this.state.header}
              onChange={e => this.onHeaderChange(e)}
            />

            <Form.Label>Sort By</Form.Label>
            <Form.Control
              type="input"
              defaultValue={this.state.sort}
              onChange={e => this.onSortChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="jsonInputGroup">
            <Form.Control
              as="textarea"
              rows="10"
              defaultValue={this.state.input}
              onChange={e => this.onInputChange(e)}
            />
          </Form.Group>
        </Form>
        {this.state.tabs}
      </div>
    );
  }
}

export default App;
