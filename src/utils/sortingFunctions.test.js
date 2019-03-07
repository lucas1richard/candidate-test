// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { dateSort } from './sortingFunctions';

describe('sortingFunctions - dateSort', () => {
  it ('sorts an array of objects by date descending', () => {
    const array = [{ dueDate: '2018-01-01' }, { dueDate: '2019-01-01' }];
    expect(array.sort(dateSort('dueDate')))
      .toEqual([{ dueDate: '2019-01-01' }, { dueDate: '2018-01-01' }]);
  });
  it ('sorts an array of objects by date ascending', () => {
    const array = [{ dueDate: '2018-01-01' }, { dueDate: '2019-01-01' }];
    expect(array.sort(dateSort('dueDate', 'ascending')))
      .toEqual([{ dueDate: '2018-01-01' }, { dueDate: '2019-01-01' }]);
  });
  it ('throws an error with invalid direction', () => {
    expect(dateSort('dueDate', 'nothing')).toThrow();
  });
});

