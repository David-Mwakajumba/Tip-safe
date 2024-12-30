import React from 'react';
import { format } from 'date-fns';
import { Tip } from '../../types/tip';
import { formatCurrency } from '../../utils/formatting';

interface TipItemProps {
  tip: Tip;
}

export function TipItem({ tip }: TipItemProps) {
  return (
    <div className="p-4 border-b border-gray-200 last:border-b-0 flex justify-between items-center">
      <div>
        <div className="font-semibold">Table {tip.tableNumber}</div>
        <div className="text-sm text-gray-500">
          {format(tip.date, 'MM/dd/yyyy HH:mm')}
        </div>
        <div className="text-xs text-gray-400">
          {tip.type.charAt(0).toUpperCase() + tip.type.slice(1)}
        </div>
      </div>
      <div className="text-lg font-medium">{formatCurrency(tip.amount)}</div>
    </div>
  );
}