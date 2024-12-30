import React from 'react';
import { motion } from 'framer-motion';
import { StaffShare } from '../../types/distribution';
import { ShareEditor } from './ShareEditor';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  }
};

interface DistributionSettingsProps {
  shares: StaffShare[];
  onUpdateShare: (role: StaffShare['role'], percentage: number) => boolean;
}

export function DistributionSettings({ shares, onUpdateShare }: DistributionSettingsProps) {
  const totalPercentage = shares.reduce((sum, share) => sum + share.percentage, 0);
  const isValid = totalPercentage === 100;

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Tip Distribution Settings</h2>
        <p className="text-gray-600 mt-2">
          Configure how tips are distributed among different staff roles
        </p>
      </div>

      <div className="space-y-6">
        {shares.map(share => (
          <motion.div
            key={share.role}
            variants={itemVariants}
            className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
          >
            <ShareEditor
              share={share}
              onUpdate={onUpdateShare}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Distribution:</span>
          <span className={`font-bold ${isValid ? 'text-green-600' : 'text-red-600'}`}>
            {totalPercentage}%
          </span>
        </div>
        {!isValid && (
          <motion.p
            className="text-red-600 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Total distribution must equal 100%
          </motion.p>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          Tip: Adjust percentages to ensure fair distribution across all staff roles.
          The total must equal 100%.
        </p>
      </div>
    </motion.div>
  );
}