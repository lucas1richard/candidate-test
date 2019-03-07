// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import BillSummary from './BillSummary';
import BILLS from './data';

describe('<BillSummary />', () => {
  it('renders without crashing', () => {
    const bill = BILLS.a
    const div = document.createElement('div');
    ReactDOM.render(
      <BillSummary
        total="$100"
        paid="$100"
        overdue="$100"
        outstanding="$100"
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

