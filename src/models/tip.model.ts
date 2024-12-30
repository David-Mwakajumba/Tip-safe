export interface Tip {
  id: string;
  amount: number;
  tableNumber: string;
  date: Date;
  type: 'cash' | 'card';
  waiterId: string;
  verified: boolean;
}

export interface TipPool {
  id: string;
  date: Date;
  totalAmount: number;
  participants: {
    waiterId: string;
    hoursWorked: number;
    share: number;
  }[];
}