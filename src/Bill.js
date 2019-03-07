import React from 'react';
import { dollarString } from './utils/stringConverter';

function Bill({ bill, label }) {
  return (
    <React.Fragment>
      {bill.id}:&nbsp;
      {dollarString(bill.amountInCents)},&nbsp;
      {label},&nbsp;
      {bill.dueDate}
    </React.Fragment>
  );
}

export default Bill;
