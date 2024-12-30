import React from 'react';
import { format } from 'date-fns';
import { Tip } from '../models/tip.model';

interface TipListProps {
  tips: Tip[];
}

export function TipList({ tips }: TipListProps) {
  if (tips.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
        No tips recorded yet
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      {tips.map((tip) => (
        <div
          key={tip.id}
          className="p-4 border-b border-gray-200 last:border-b-0 flex justify-between items-center"
        >
          <div>
            <div className="font-semibold">Table {tip.tableNumber}</div>
            <div className="text-sm text-gray-500">
              {format(tip.date, 'MM/dd/yyyy HH:mm')}
            </div>
            <div className="text-xs text-gray-400">
              {tip.type.charAt(0).toUpperCase() + tip.type.slice(1)}
            </div>
          </div>
          <div className="text-lg font-medium">${tip.amount.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}