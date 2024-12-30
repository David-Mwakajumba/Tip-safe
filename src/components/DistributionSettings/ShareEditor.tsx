import React from 'react';
import { StaffShare } from '../../types/distribution';

interface ShareEditorProps {
  share: StaffShare;
  onUpdate: (role: StaffShare['role'], percentage: number) => boolean;
}

export function ShareEditor({ share, onUpdate }: ShareEditorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
    onUpdate(share.role, newValue);
  };

  return (
    <div className="flex items-center justify-between">
      <label className="flex-1">
        <span className="capitalize">{share.role}</span>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min="0"
            max="100"
            value={share.percentage}
            onChange={handleChange}
            className="w-20 px-2 py-1 border rounded"
          />
          <span>%</span>
        </div>
      </label>
    </div>
  );
}