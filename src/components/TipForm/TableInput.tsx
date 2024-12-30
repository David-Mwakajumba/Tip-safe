import React from 'react';

interface TableInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function TableInput({ value, onChange }: TableInputProps) {
  return (
    <div>
      <label htmlFor="tableNumber" className="block text-sm font-medium text-gray-700">
        Table Number
      </label>
      <input
        type="text"
        id="tableNumber"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
}