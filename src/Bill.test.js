// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import Bill from './Bill';
import BILLS from './data';

describe('<Bill />', () => {
  it('renders without crashing', () => {
    const bill = BILLS.a
    const div = document.createElement('div');
    ReactDOM.render(<Bill bill={bill} label="paid" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

