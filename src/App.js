import React from 'react';
import _ from 'lodash';
import { isPastDate } from 'clark-utils';
import DATA, { BillType } from './data';

type CalculatedStatusType = 'paid' | 'overdue' | 'outstanding';

const calculateBillStatus = (bill: BillType): CalculatedStatusType => {
  if (bill.status === 'paid') return 'paid';
  return isPastDate(bill.dueDate) ? 'overdue' : 'outstanding';
}

type BillWithCalculatedStatusType = BillType & { calculatedStatus: CalculatedStatusType };

const addCalculatedStatus = (bill: BillType): BillWithCalculatedStatusType => ({ ...bill, calculatedStatus: calculateBillStatus(bill) });

const dataWithCalculatedStatus: BillWithCalculatedStatusType[] = _.map(DATA, addCalculatedStatus);

const reducedTotals = dataWithCalculatedStatus.reduce(
  (acc, { amountInCents, calculatedStatus }) => (
    { ...acc,
      total: acc.total + amountInCents,
      [calculatedStatus]: acc[calculatedStatus] + amountInCents
    }
  ) ,
  { total: 0, paid: 0, overdue: 0, outstanding: 0 }
);

console.log(reducedTotals);

const orderedBillsList = _.orderBy(dataWithCalculatedStatus, ['calculatedStatus', 'dueDate'], ['asc', 'desc']);

console.log(orderedBillsList);

const App = () =>
  <div>
    <header>
      <h1>Welcome to the Clark Take-Home Code Challenge</h1>
    </header>
    <p>
      Take a look at <code>src/data.js</code>. This is an approximation of what normalized billing data from our API looks like.
    </p>
    <p>
      For this exercise, we'd like you to do the following:
    </p>
    <ul>
      <li>
        calculate the total amount billed in dollars
      </li>
      <li>
        calculate the total amount paid in dollars
      </li>
      <li>
        calculate the total amount overdue (unpaid) in dollars
      </li>
      <li>
        calculate the total amount outstanding (not due yet, not paid yet) money in dollars.
      </li>
      <li>
        render these values to the screen along with an ordered list of the bills sorted by date and by category (outstanding, overdue, paid) - see the attached screenshot for reference.
      </li>
    </ul>
    <p>
      Please test your work as you see fit, use git commits, and if you're comfortable use Flow to add type annotations.
    </p>
    <p>
      Feel free to use any resources and packages available to you, including <a href="https://github.com/hiclark/clark-utils">clark-utils</a>.
    </p>
    <p>
      When you've finished, zip your completed challenge and email it back to us.
    </p>
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>
      If you have any questions, please reach out!
    </p>
  </div>

export default App;
