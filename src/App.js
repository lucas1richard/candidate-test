// @flow

import React from 'react';
import data, { PAID, PENDING } from './data';
import { dollarString } from './utils/stringConverter';
import BillSummary from './BillSummary';
import BillDetail from './BillDetail';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    const dataKeys = Object.keys(data);
    this.paidBills = [];
    this.overDueBills = [];
    this.outstandingBills = [];

    this.billBreakdown = dataKeys.reduce((memo, key) => {
      const bill = data[key];
      const isDueDateFuture = new Date(bill.dueDate) > new Date();

      const isOverdue = isDueDateFuture && bill.status !== PAID;
      const isOutstanding = !isDueDateFuture && bill.status === PENDING;
      const isPaid = bill.status === PAID;

      if (isPaid) this.paidBills.push(bill);
      if (isOverdue) this.overDueBills.push(bill);
      if (isOutstanding) this.outstandingBills.push(bill);

      return {
        total: memo.total + bill.amountInCents,
        paid: memo.paid + (isPaid ? bill.amountInCents : 0),
        overdue: memo.overdue + (isOverdue ? bill.amountInCents : 0),
        outstanding: memo.outstanding + (isOutstanding ? bill.amountInCents : 0)
      };
    }, {
      total: 0,
      paid: 0,
      overdue: 0,
      outstanding: 0
    });
  }
  render() {
    return (
      <div>
        <BillSummary
          total={dollarString(this.billBreakdown.total)}
          paid={dollarString(this.billBreakdown.paid)}
          overdue={dollarString(this.billBreakdown.overdue)}
          outstanding={dollarString(this.billBreakdown.outstanding)}
        />
        <BillDetail
          outstanding={this.outstandingBills}
          overdue={this.overDueBills}
          paid={this.paidBills}
        />
      </div>
    );
  }
}

export default App;
