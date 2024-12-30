import { Observable } from '@nativescript/core';
import { Tip } from '../models/tip.model';

export class TipsViewModel extends Observable {
  private _tips: Tip[] = [];
  private _currentWaiterId: string = 'demo-user'; // In a real app, this would come from auth

  constructor() {
    super();
  }

  get tips(): Tip[] {
    return this._tips;
  }

  addTip(amount: number, tableNumber: string, type: 'cash' | 'card') {
    const newTip: Tip = {
      id: Date.now().toString(), // In production, use UUID
      amount,
      tableNumber,
      date: new Date(),
      type,
      waiterId: this._currentWaiterId,
      verified: false
    };

    this._tips.unshift(newTip);
    this.notifyPropertyChange('tips', this._tips);
    
    // In a real app, this would be persisted to a secure database
    console.log('New tip added:', newTip);
  }

  getTotalTips(): number {
    return this._tips.reduce((sum, tip) => sum + tip.amount, 0);
  }
}