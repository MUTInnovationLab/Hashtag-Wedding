import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage {
  budgetItems = [
    { name: 'Venue Rental Fee', budgetAmount: 2000.00, actualAmount: 0.00 },
    { name: "Officiant's Fee", budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Marriage License', budgetAmount: 100.00, actualAmount: 0.00 },
    // Add more budget items with default values as needed

    { name: 'Reception - Venue', budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: 'Reception - Food', budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: 'Reception - Cake', budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Reception - Bar Service', budgetAmount: 800.00, actualAmount: 0.00 }
  ];

  receptionBudgetItems = [
    { name: 'Reception - Venue', budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: 'Reception - Food', budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: 'Reception - Cake', budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Reception - Bar Service', budgetAmount: 800.00, actualAmount: 0.00 },
    // Add more reception budget items with default values as needed
  ];

  constructor() {}

  // Calculate the total budget
  totalBudget(): number {
    return this.budgetItems.reduce((total, item) => total + item.budgetAmount, 0);
  }

  // Calculate the total actual amount
  totalActual(): number {
    return this.budgetItems.reduce((total, item) => total + item.actualAmount, 0);
  }
  
  totalReceptionBudget(): number {
    return this.receptionBudgetItems.reduce((total, item) => total + item.budgetAmount, 0);
  }

  // Calculate the total actual amount for the reception
  totalReceptionActual(): number {
    return this.receptionBudgetItems.reduce((total, item) => total + item.actualAmount, 0);
  }
}
