export interface StaffShare {
  role: 'waiters' | 'kitchen' | 'bar';
  percentage: number;
}

export interface TipDistributionSettings {
  shares: StaffShare[];
}