import React from 'react';
import { formatCurrency } from '../../utils/formatting';

interface ShiftDetailsProps {
  totalTips: number;
  waiterCount: number;
}

export function ShiftDetails({ totalTips, waiterCount }: ShiftDetailsProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">Total Tips:</span>
        <span className="font-semibold">{formatCurrency(totalTips)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Waiters on Shift:</span>
        <span className="font-semibold">{waiterCount}</span>
      </div>
    </div>
  );
}