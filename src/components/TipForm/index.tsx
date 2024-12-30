import React, { useState } from 'react';
import { AmountInput } from './AmountInput';
import { TableInput } from './TableInput';
import { TipTypeButtons } from './TipTypeButtons';
import { TipType } from '../../types/tip';
import { validateTipAmount } from '../../utils/validation';

interface TipFormProps {
  onSubmit: (tip: { amount: number; tableNumber: string; type: TipType }) => void;
}

export function TipForm({ onSubmit }: TipFormProps) {
  const [amount, setAmount] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  const handleSubmit = (type: TipType) => {
    const tipAmount = parseFloat(amount);
    if (!validateTipAmount(tipAmount) || !tableNumber.trim()) {
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
        <AmountInput value={amount} onChange={setAmount} />
        <TableInput value={tableNumber} onChange={setTableNumber} />
        <TipTypeButtons onSubmit={handleSubmit} />
      </div>
    </div>
  );
}