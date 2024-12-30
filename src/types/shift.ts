export interface Shift {
  id: string;
  startTime: Date;
  endTime: Date | null;
  waiters: string[];
}