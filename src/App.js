import React from 'react';
import _ from 'lodash';
import { isPastDate, formatCentsToDollars } from 'clark-utils';
import DATA, { BillType } from './data';

type CalculatedStatusType = 'paid' | 'overdue' | 'outstanding';

const calculateBillStatus = (bill: BillType): CalculatedStatusType => {
  if (bill.status === 'paid') return 'paid';
  return isPastDate(bill.dueDate) ? 'overdue' : 'outstanding';
}

type BillWithCalculatedStatusType = BillType & { calculatedStatus: CalculatedStatusType };

const addCalculatedStatus = (bill: BillType): BillWithCalculatedStatusType =>
  ({ ...bill, calculatedStatus: calculateBillStatus(bill) });

const dataWithCalculatedStatus: BillWithCalculatedStatusType[] = _.map(DATA, addCalculatedStatus);

const totalsInCents = dataWithCalculatedStatus.reduce(
  (acc, { amountInCents, calculatedStatus }) => (
    { ...acc,
      total: acc.total + amountInCents,
      [calculatedStatus]: acc[calculatedStatus] + amountInCents
    }
  ) ,
  { total: 0, paid: 0, overdue: 0, outstanding: 0 }
);

const orderedBillsList = _.orderBy(dataWithCalculatedStatus, ['calculatedStatus', 'dueDate'], ['asc', 'desc']);

const App = () =>
  <div>
    {_.map(totalsInCents, (total, key) =>
      <div key={key}>{key}: {formatCentsToDollars(total)}</div>)
    }
    <ul>
      {orderedBillsList.map(({ id, amountInCents, calculatedStatus, dueDate }) =>
        <li key={id}>{id}: {formatCentsToDollars(amountInCents)}, {calculatedStatus}, {dueDate}</li>)
      }
    </ul>
  </div>

export default App;
