import React from 'react';
import { dateSort } from './utils/sortingFunctions';
import Bill from './Bill';

const dueDateSort = dateSort('dueDate');

export default function BillDetail({ outstanding, overdue, paid }) {
  return (
    <ul>
      {outstanding.sort(dueDateSort).map((bill) => (
        <li key={bill.id}>
          <Bill bill={bill} label="outstanding" />
        </li>
      ))}
      {overdue.sort(dueDateSort).map((bill) => (
        <li key={bill.id}>
          <Bill bill={bill} label="overdue" />
        </li>
      ))}
      {paid.sort(dueDateSort).map((bill) => (
        <li key={bill.id}>
          <Bill bill={bill} label="paid" />
        </li>
      ))}
    </ul>
  );
}
