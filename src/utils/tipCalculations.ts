import { Waiter } from '../types/waiter';
import { StaffShare } from '../types/distribution';

interface TipShare {
  waiterId: string;
  waiterName: string;
  amount: number;
}

export function calculateTipShares(
  totalTips: number, 
  waiters: Waiter[], 
  distributionSettings: StaffShare[]
): TipShare[] {
  const waiterShare = distributionSettings.find(s => s.role === 'waiters')?.percentage ?? 100;
  const waiterTips = (totalTips * waiterShare) / 100;
  const equalShare = waiterTips / waiters.length;
  
  return waiters.map(waiter => ({
    waiterId: waiter.id,
    waiterName: waiter.name,
    amount: equalShare
  }));
}

export function calculateStaffShares(totalTips: number, distributionSettings: StaffShare[]) {
  return distributionSettings.map(share => ({
    role: share.role,
    amount: (totalTips * share.percentage) / 100
  }));
}