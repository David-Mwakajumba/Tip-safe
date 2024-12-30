import React from 'react';
import { TipType } from '../../types/tip';

interface TipTypeButtonsProps {
  onSubmit: (type: TipType) => void;
}

export function TipTypeButtons({ onSubmit }: TipTypeButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={() => onSubmit('cash')}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Cash Tip
      </button>
      <button
        onClick={() => onSubmit('card')}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Card Tip
      </button>
    </div>
  );
}