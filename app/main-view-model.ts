import { Observable } from '@nativescript/core';
import { TipsViewModel } from './view-models/tips-view-model';

export class MainViewModel extends Observable {
  private tipsVM: TipsViewModel;
  private _tipAmount: string = '';
  private _tableNumber: string = '';

  constructor() {
    super();
    this.tipsVM = new TipsViewModel();
  }

  get tips() {
    return this.tipsVM.tips;
  }

  get tipAmount(): string {
    return this._tipAmount;
  }

  set tipAmount(value: string) {
    if (this._tipAmount !== value) {
      this._tipAmount = value;
      this.notifyPropertyChange('tipAmount', value);
    }
  }

  get tableNumber(): string {
    return this._tableNumber;
  }

  set tableNumber(value: string) {
    if (this._tableNumber !== value) {
      this._tableNumber = value;
      this.notifyPropertyChange('tableNumber', value);
    }
  }

  addCashTip() {
    this.addTip('cash');
  }

  addCardTip() {
    this.addTip('card');
  }

  private addTip(type: 'cash' | 'card') {
    const amount = parseFloat(this._tipAmount);
    if (isNaN(amount) || amount <= 0) {
      // In a real app, show an alert or error message
      console.log('Invalid amount');
      return;
    }

    if (!this._tableNumber.trim()) {
      // In a real app, show an alert or error message
      console.log('Table number required');
      return;
    }

    this.tipsVM.addTip(amount, this._tableNumber, type);
    
    // Clear the form
    this.tipAmount = '';
    this.tableNumber = '';
  }
}