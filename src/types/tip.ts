export type TipType = 'cash' | 'card';

export interface Tip {
  id: string;
  amount: number;
  tableNumber: string;
  date: Date;
  type: TipType;
}