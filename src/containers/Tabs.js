import React from 'react';
import { connect } from 'react-redux';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import get from 'lodash.get';

import { outputSelector } from '../selectors';

function generateTabheader(o, header, i) {
  const tabHeader = `${get(o, header, 'undefined')} (${i})`;
  const tabHeaderType = typeof tabHeader;

  return tabHeaderType === 'string'
    ? tabHeader
    : tabHeaderType;
}

const component = ({ header, output }) =>
  <Tabs>
    <TabList>
      {output.map((o, i) =>
        <Tab key={i}>{generateTabheader(o, header, i)}</Tab>)
      }
    </TabList>
    {output.map((o, i) =>
      <TabPanel key={i}>
        <pre key={i}>{JSON.stringify(o, null, 2)}</pre>
      </TabPanel>
    )}
  </Tabs>;

const mapStateToProps = ({ header, input, sort }) => ({
  header,
  output: outputSelector({ input, sort })
});

const connector = connect(mapStateToProps);
export default connector(component);
