// @flow

import React from 'react';
import { formatCentsToDollars } from 'clark-utils';
import styled from 'styled-components';
import { type BillWithCalculatedStatusType, BILL_WITH_CALCULATED_STATUS } from './data';

type PropsType = {
  bill: BillWithCalculatedStatusType
}

const Bill = ({ bill: { id, amountInCents, calculatedStatus, dueDate } }: PropsType) =>
  <BillWrapper key={id}>
    <div>id: {id}</div>
    <div>{formatCentsToDollars(amountInCents)}</div>
    <div>{calculatedStatus}</div>
    <div>{dueDate}</div>
  </BillWrapper>

const App = () =>
  <div>
    <Bill bill={BILL_WITH_CALCULATED_STATUS} />
  </div>

export default App;

const BillWrapper = styled.div`
  border: solid black 1px;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
`;
