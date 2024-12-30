import React from 'react';
import { TipDistribution } from './TipDistribution';
import { ShiftDetails } from './ShiftDetails';
import { Tip } from '../../types/tip';
import { Waiter } from '../../types/waiter';
import { StaffShare } from '../../types/distribution';
import { calculateTipShares, calculateStaffShares } from '../../utils/tipCalculations';

interface ShiftSummaryProps {
  tips: Tip[];
  waiters: Waiter[];
  distributionSettings: StaffShare[];
}

export function ShiftSummary({ tips, waiters, distributionSettings }: ShiftSummaryProps) {
  const totalTips = tips.reduce((sum, tip) => sum + tip.amount, 0);
  const waiterShares = calculateTipShares(totalTips, waiters, distributionSettings);
  const staffShares = calculateStaffShares(totalTips, distributionSettings);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Current Shift Summary</h2>
      <ShiftDetails 
        totalTips={totalTips}
        staffShares={staffShares}
      />
      <TipDistribution 
        shares={waiterShares}
        staffShares={staffShares}
      />
    </div>
  );
}