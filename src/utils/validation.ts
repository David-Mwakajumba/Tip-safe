export function validateTipAmount(amount: number): boolean {
  return !isNaN(amount) && amount > 0;
}

export function validateTableNumber(tableNumber: string): boolean {
  return tableNumber.trim().length > 0;
}