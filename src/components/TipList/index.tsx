import React from 'react';
import { Tip } from '../../types/tip';
import { TipItem } from './TipItem';
import { EmptyState } from './EmptyState';

interface TipListProps {
  tips: Tip[];
}

export function TipList({ tips }: TipListProps) {
  if (tips.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      {tips.map((tip) => (
        <TipItem key={tip.id} tip={tip} />
      ))}
    </div>
  );
}