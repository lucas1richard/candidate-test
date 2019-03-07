export function dollarString(amountInCents: number) {
  if (typeof amountInCents === 'number') {
    return `$${(amountInCents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  throw new TypeError('amountInCents must be a number');
}
