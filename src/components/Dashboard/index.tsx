import React from 'react';
import { TipForm } from '../TipForm';
import { TipList } from '../TipList';
import { ShiftSummary } from '../ShiftSummary';
import { DistributionSettings } from '../DistributionSettings';
import { useTipManager } from '../../hooks/useTipManager';
import { useShiftManager } from '../../hooks/useShiftManager';
import { useDistributionSettings } from '../../hooks/useDistributionSettings';

export function Dashboard() {
  const { tips, addTip } = useTipManager();
  const { waiters } = useShiftManager();
  const { settings, updateShare } = useDistributionSettings();

  const handleSubmit = (tipData: { amount: number; tableNumber: string; type: 'cash' | 'card' }) => {
    addTip(tipData.amount, tipData.tableNumber, tipData.type);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">TipSafe</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <DistributionSettings 
          shares={settings.shares}
          onUpdateShare={updateShare}
        />
        <ShiftSummary 
          tips={tips} 
          waiters={waiters}
          distributionSettings={settings.shares}
        />
        <TipForm onSubmit={handleSubmit} />
        <TipList tips={tips} />
      </main>
    </div>
  );
}