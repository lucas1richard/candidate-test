type Direction = 'descending' | 'ascending';

export const dateSort = (key: string, direction: Direction = 'descending') => {
  return (a, b) => {
    if (direction === 'descending') return new Date(b[key]) - new Date(a[key]);
    if (direction === 'ascending') return new Date(a[key]) - new Date(b[key]);
    throw new TypeError('direction must be "ascending" or "descending"');
  };
};