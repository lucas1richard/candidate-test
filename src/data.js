// @flow

export type StatusType = 'pending' | 'paid';

export type BillType = {
  id: string,
  dueDate: string,
  amountInCents: number,
  status: StatusType,
};

type CalculatedStatusType = 'paid' | 'overdue' | 'outstanding';

export type BillWithCalculatedStatusType = BillType & { calculatedStatus: CalculatedStatusType };

const BILL_WITH_CALCULATED_STATUS: BillWithCalculatedStatusType = {
  id: 'f',
  calculatedStatus: 'overdue',
  dueDate: '2018-06-06',
  amountInCents: 93020,
  status: 'pending',
}

export default BILL_WITH_CALCULATED_STATUS;
