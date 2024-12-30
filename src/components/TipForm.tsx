import React, { useState } from 'react';

interface TipFormProps {
  onSubmit: (tip: { amount: number; tableNumber: string; type: 'cash' | 'card' }) => void;
}

export function TipForm({ onSubmit }: TipFormProps) {
  const [amount, setAmount] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  const handleSubmit = (type: 'cash' | 'card') => {
    const tipAmount = parseFloat(amount);
    if (isNaN(tipAmount) || tipAmount <= 0 || !tableNumber.trim()) {
      return;
    }

    onSubmit({
      amount: tipAmount,
      tableNumber: tableNumber.trim(),
      type
    });

    setAmount('');
    setTableNumber('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="tableNumber" className="block text-sm font-medium text-gray-700">
            Table Number
          </label>
          <input
            type="text"
            id="tableNumber"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleSubmit('cash')}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Cash Tip
          </button>
          <button
            onClick={() => handleSubmit('card')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Card Tip
          </button>
        </div>
      </div>
    </div>
  );
}