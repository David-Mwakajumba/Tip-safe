export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}