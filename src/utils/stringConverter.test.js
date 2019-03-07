import { dollarString } from './stringConverter';

describe('dollarString', () => {
  it('converts an amount in cents', () => {
    expect(dollarString(1234)).toEqual('$12.34');
  });
  it('converts an amount in cents adding commas', () => {
    expect(dollarString(123456)).toEqual('$1,234.56');
  });
});
