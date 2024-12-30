import React from 'react';

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function AmountInput({ value, onChange }: AmountInputProps) {
  return (
    <div>
      <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
        Amount
      </label>
      <input
        type="number"
        id="amount"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="0.00"
      />
    </div>
  );
}