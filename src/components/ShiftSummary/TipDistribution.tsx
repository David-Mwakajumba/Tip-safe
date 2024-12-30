import React from 'react';
import { formatCurrency } from '../../utils/formatting';

interface TipShare {
  waiterId: string;
  waiterName: string;
  amount: number;
}

interface TipDistributionProps {
  shares: TipShare[];
}

export function TipDistribution({ shares }: TipDistributionProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Tip Distribution</h3>
      <div className="space-y-2">
        {shares.map(share => (
          <div key={share.waiterId} className="flex justify-between items-center">
            <span>{share.waiterName}</span>
            <span className="font-medium">{formatCurrency(share.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}