import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

// interface  Ceremony{
//   name: string;
//   budgetAmount: number;
//   actualAmount: number;
// }

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage {
  budget = {
    Ceremony: [
      { name: 'Venue Rental Fee', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: "Officiant's Fee", budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Marriage License', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    receptionBudgetItems: [
      { name: 'Decorations (flowers, centerpieces, lighting, etc.)', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Rental of tables, chairs, linens, etc.', budgetAmount: 4000.00, actualAmount: 0.00 },
      { name: 'Bar service (if applicable)', budgetAmount: 500.00, actualAmount: 0.00 },
      { name: 'Wedding cake/dessert', budgetAmount: 800.00, actualAmount: 0.00 },
      { name: 'Food and beverages (catering or restaurant)', budgetAmount: 800.00, actualAmount: 0.00 }
    ],
    AttireBeautyItems: [
      { name: 'Wedding dress', budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: "Groom's attire", budgetAmount: 4000.00, actualAmount: 0.00 },
      { name: 'Accessories (veil, shoes, jewelry, etc.)', budgetAmount: 500.00, actualAmount: 0.00 },
      { name: 'Hair and makeup for the bride', budgetAmount: 800.00, actualAmount: 0.00 },
      { name: 'Hair and grooming for the groom', budgetAmount: 500.00, actualAmount: 0.00 },
      { name: 'Bridesmaids dresses or groomsmen attire', budgetAmount: 800.00, actualAmount: 0.00 }
    ],
    PhotographyandVideographyItems: [
      { name: "Professional Photographer's fee", budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: "Videographer's fee", budgetAmount: 4000.00, actualAmount: 0.00 },
      { name: "Additional Prints albums or video editing(if desired)", budgetAmount: 500.00, actualAmount: 0.00 }
    ],
    EntertainmentItems: [
      { name: 'DJ or live band', budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: 'Ceremony music (string quartet, harpist, etc.)', budgetAmount: 4000.00, actualAmount: 0.00 },
      { name: 'Sound equipment or rentals', budgetAmount: 500.00, actualAmount: 0.00 },
      { name: 'Dance floor (if necessary)', budgetAmount: 800.00, actualAmount: 0.00 }
    ],
    StationeryandInvitationsItems: [
      { name: 'Save the dates', budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: 'Wedding Invitations', budgetAmount: 4000.00, actualAmount: 0.00 },
      { name: 'RSVP cards', budgetAmount: 500.00, actualAmount: 0.00 },
      { name: 'Thank You Cards & Postage', budgetAmount: 800.00, actualAmount: 0.00 }
    ],
    FlowersandDecorItems: [
      { name: 'Bridal bouquet', budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: 'Bridesmaids bouquets', budgetAmount: 4000.00, actualAmount: 0.00 },
      { name: 'Boutonnieres and corsages', budgetAmount: 500.00, actualAmount: 0.00 },
      { name: 'Ceremony decor', budgetAmount: 800.00, actualAmount: 0.00 },
      { name: 'Reception decor', budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: 'Aisle runner', budgetAmount: 4000.00, actualAmount: 0.00 },
      { name: 'Flower Petals', budgetAmount: 500.00, actualAmount: 0.00 },
      { name: 'Altar or arch decorations', budgetAmount: 500.00, actualAmount: 0.00 }
    ],
    WeddingRingsItems: [
      { name: "Bride's wedding ring", budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: "Groom's wedding ring", budgetAmount: 4000.00, actualAmount: 0.00 },
      { name: 'Engraving (if desired)', budgetAmount: 500.00, actualAmount: 0.00 }
    ],
    TransportationItems: [
      { name: 'Limousine or car rental for the couple', budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: 'Transportation for the wedding party or guests (if necessary)', budgetAmount: 4000.00, actualAmount: 0.00 }
    ],
    WeddingPlannerItems: [
      { name: "Professional wedding planner's fee", budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: 'Day of coordination services (if not included)', budgetAmount: 4000.00, actualAmount: 0.00 }
    ],
    MiscellaneousExpensesItems: [
      { name: 'Wedding favors', budgetAmount: 3000.00, actualAmount: 0.00 },
      { name: 'Guestbook', budgetAmount: 4000.00, actualAmount: 0.00 },
      { name: 'Gifts for the wedding party and parents', budgetAmount: 500.00, actualAmount: 0.00 },
      { name: 'Accommodations for out-of-town guests', budgetAmount: 800.00, actualAmount: 0.00 }
    ]
  };
  

  constructor(private firestore: AngularFirestore) {}

 
  // ----------------------------------------------------------------------------------------------------------
addOrUpdateBudget(){
this.saveBudgetToFirestore('Ceremony', this.budget.Ceremony);
this.saveBudgetToFirestore('receptionBudget', this.budget.receptionBudgetItems);
this.saveBudgetToFirestore('AttireBeauty', this.budget.AttireBeautyItems);
this.saveBudgetToFirestore('PhotographyandVideography', this.budget.PhotographyandVideographyItems);
this.saveBudgetToFirestore('Entertainment', this.budget.EntertainmentItems);
this.saveBudgetToFirestore('StationeryandInvitations', this.budget.StationeryandInvitationsItems);
this.saveBudgetToFirestore('FlowersandDecor', this.budget.FlowersandDecorItems);
this.saveBudgetToFirestore('WeddingRings', this.budget.WeddingRingsItems);
this.saveBudgetToFirestore('Transportation', this.budget.TransportationItems);
this.saveBudgetToFirestore('WeddingPlanner', this.budget.WeddingPlannerItems);
this.saveBudgetToFirestore('MiscellaneousExpenses', this.budget.MiscellaneousExpensesItems);

}
  // ----------------------------------------------------------------------------------------------------------
  saveBudgetToFirestore(sectionName: string, items: { name: string; budgetAmount: number; actualAmount: number }[]) {
    const sectionData: { [key: string]: { budgetAmount: number; actualAmount: number } } = {};
    
    items.forEach(item => {
      sectionData[item.name] = { budgetAmount: item.budgetAmount, actualAmount: item.actualAmount };
    });
  
    this.firestore.collection('budget').doc(sectionName).set({ items: sectionData }, { merge: true })
      .then(() => console.log(`${sectionName} section saved/updated successfully`))
      .catch(error => console.error(`Error saving/updating ${sectionName} section:`, error));
  
    console.log('Budget saved to Firestore');
  }

}
