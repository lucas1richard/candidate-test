// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import BillDetail from './BillDetail';
import BILLS from './data';

describe('<BillDetail />', () => {
  it('renders without crashing', () => {
    const bill = BILLS.a
    const div = document.createElement('div');
    ReactDOM.render(
      <BillDetail
        outstanding={[]}
        overdue={[]}
        paid={[]}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

