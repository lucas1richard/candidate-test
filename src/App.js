// @flow

import React from 'react';
import { formatCentsToDollars } from 'clark-utils';
import styled from 'styled-components';
import BILL_WITH_CALCULATED_STATUS, { type BillWithCalculatedStatusType } from './data';

const Bill = ({ id, amountInCents, calculatedStatus, dueDate }: BillWithCalculatedStatusType) =>
  <BillWrapper key={id}>
    <div>id: {id}</div>
    <div>{formatCentsToDollars(amountInCents)}</div>
    <div>{calculatedStatus}</div>
    <div>{dueDate}</div>
  </BillWrapper>

const App = () =>
  <div>
    <Bill {...BILL_WITH_CALCULATED_STATUS} />
  </div>

export default App;

const BillWrapper = styled.div`
  outline: solid black 1px;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
`;


// type BillStateType = {};

// class StatefulBill extends React.Component<BillWithCalculatedStatusType, BillStateType> {
//   render() {
//     return <Bill {...this.props} />
//   }
// }

// const App = () =>
//   <div>
//     <StatefulBill {...BILL_WITH_CALCULATED_STATUS} />
//   </div>
