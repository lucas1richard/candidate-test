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

export const BILL_WITH_CALCULATED_STATUS: BillWithCalculatedStatusType = {
  id: 'bill_1',
  calculatedStatus: 'overdue',
  dueDate: '2018-06-06',
  amountInCents: 93020,
  status: 'pending',
}

export const Bills: BillWithCalculatedStatusType[] = [...Array(5)].map((_, idx) => ({
  ...BILL_WITH_CALCULATED_STATUS,
  id: `bill_${idx + 1}`
}));
