import React from 'react';

function BillSummary({ total, paid, overdue, outstanding }) {
  return (
    <React.Fragment>
      <div>
        total: {total}
      </div>
      <div>
        paid: {paid}
      </div>
      <div>
        overdue: {overdue}
      </div>
      <div>
        outstanding: {outstanding}
      </div>
    </React.Fragment>
  );
}

export default BillSummary;
