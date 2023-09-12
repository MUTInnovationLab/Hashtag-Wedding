import { Component, OnInit } from '@angular/core';

interface  Ceremony{
  name: string;
  budgetAmount: number;
  actualAmount: number;
}

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage {

  budgetItems: Ceremony[] = [
    { name: 'Venue Rental Fee', budgetAmount: 0.00, actualAmount: 0.00 },
    { name: "Officiant's Fee", budgetAmount: 0.00, actualAmount: 0.00 },
    { name: 'Marriage License', budgetAmount: 0.00, actualAmount: 0.00 },
  ];

  receptionBudgetItems = [
    { name: 'Decorations (flowers, centerpieces, lighting, etc.)', budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: 'Rental of  tables, chairs,linens,etc', budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: 'Bar service (if applicable)', budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Wedding cake/dessert', budgetAmount: 800.00, actualAmount: 0.00 },
    { name: "Food and beverages (catering or restaurant)", budgetAmount: 800.00, actualAmount: 0.00 }
  ];

  AttireBeautyItems = [
    { name: 'Wedding dress', budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: "Groom's attire", budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: 'Accessories (veil, shoes, jewelry, etc.)', budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Hair and makeup for the bride', budgetAmount: 800.00, actualAmount: 0.00 },
    { name: 'Hair and grooming for the groom', budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Bridesmaids dresses or groomsmen attire', budgetAmount: 800.00, actualAmount: 0.00 },
  ];

  PhotographyandVideographyItems = [
    { name: "Professional Photographer's fee", budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: "	Videographer's fee", budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: "Additional Prints albums or video editing(if desired)", budgetAmount: 500.00, actualAmount: 0.00 },
  ];

  EntertainmentItems = [
    { name: 'DJ or live band', budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: 'Ceremony music(string quartet, harpist, etc.)', budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: 'Sound equipment or rentalse', budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Dance floor(if necessary)', budgetAmount: 800.00, actualAmount: 0.00 },
 ];

  StationeryandInvitationsItems = [
    { name: 'Save the dates', budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: 'Wedding Invitations', budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: 'RSVP cards', budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Thank Your Cards	Postage', budgetAmount: 800.00, actualAmount: 0.00 },
  ];

  FlowersandDecorItems = [
    { name: 'Bridal bouquet', budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: 'Bridesmaids bouquets', budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: 'Boutonnieres and corsages', budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Ceremony decor', budgetAmount: 800.00, actualAmount: 0.00 },
    { name: "Reception decor", budgetAmount: 3000.00, actualAmount: 0.00 },

    { name: "	Aisle runner", budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: "Flower Petals", budgetAmount: 500.00, actualAmount: 0.00 },
    { name: "Altar or arch decorations", budgetAmount: 500.00, actualAmount: 0.00 }
];

  WeddingRingsItems = [
    { name: "Bride's wedding ring", budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: "Groom's wedding ring", budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: "Engraving (if desired)", budgetAmount: 500.00, actualAmount: 0.00 },
  ];

  TransportationItems = [
    { name: ' Limousine or car rental for the couple', budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: 'Transportation for the wedding party or guests(if necessary)', budgetAmount: 4000.00, actualAmount: 0.00 },
 ];

  WeddingPlannerItems = [
    { name: "Professional wedding planner's fee", budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: 'Day of coordination services (if not included)', budgetAmount: 4000.00, actualAmount: 0.00 }
 ];

  MiscellaneousExpensesItems = [
    { name: 'Wedding favors', budgetAmount: 3000.00, actualAmount: 0.00 },
    { name: 'Guestbook', budgetAmount: 4000.00, actualAmount: 0.00 },
    { name: 'Gifts for the wedding party and parents', budgetAmount: 500.00, actualAmount: 0.00 },
    { name: 'Accommodations for out-of-town guests', budgetAmount: 800.00, actualAmount: 0.00 },
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
