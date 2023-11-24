import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

interface BudgetItem {
  name: string;
  budgetAmount: number;
  actualAmount: number;
}

interface Budget {
  [key: string]: BudgetItem[];
}

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit{
  budget: Budget = {
    Ceremony: [
      { name: 'Venue Rental Fee', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: "Officiant's Fee", budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Marriage License', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    receptionBudget: [
      { name: 'Decorations (flowers, centerpieces, lighting, etc.)', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Rental of tables, chairs, linens, etc.', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Bar service (if applicable)', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Wedding cake/dessert', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Food and beverages (catering or restaurant)', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    AttireBeauty: [
      { name: 'Wedding dress', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: "Groom's attire", budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Accessories (veil, shoes, jewelry, etc.)', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Hair and makeup for the bride', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Hair and grooming for the groom', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Bridesmaids dresses or groomsmen attire', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    PhotographyandVideography: [
      { name: "Professional Photographer's fee", budgetAmount: 0.00, actualAmount: 0.00 },
      { name: "Videographer's fee", budgetAmount: 0.00, actualAmount: 0.00 },
      { name: "Additional Prints albums or video editing(if desired)", budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    Entertainment: [
      { name: 'DJ or live band', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Ceremony music (string quartet, harpist, etc.)', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Sound equipment or rentals', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Dance floor (if necessary)', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    StationeryandInvitations: [
      { name: 'Save the dates', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Wedding Invitations', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'RSVP cards', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Thank You Cards & Postage', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    FlowersandDecor: [
      { name: 'Bridal bouquet', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Bridesmaids bouquets', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Boutonnieres and corsages', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Ceremony decor', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Reception decor', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Aisle runner', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Flower Petals', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Altar or arch decorations', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    WeddingRings: [
      { name: "Bride's wedding ring", budgetAmount: 0.00, actualAmount: 0.00 },
      { name: "Groom's wedding ring", budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Engraving (if desired)', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    Transportation: [
      { name: 'Limousine or car rental for the couple', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Transportation for the wedding party or guests (if necessary)', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    WeddingPlanner: [
      { name: "Professional wedding planner's fee", budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Day of coordination services (if not included)', budgetAmount: 0.00, actualAmount: 0.00 }
    ],
    MiscellaneousExpenses: [
      { name: 'Wedding favors', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Guestbook', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Gifts for the wedding party and parents', budgetAmount: 0.00, actualAmount: 0.00 },
      { name: 'Accommodations for out-of-town guests', budgetAmount: 0.00, actualAmount: 0.00 }
    ]
  };
  
  userEmailAddress = 'nduduzo@gmail.com';
  constructor(private firestore: AngularFirestore,private auth: AngularFireAuth) {}
  ngOnInit() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userEmailAddress = user.email || 'nduduzo@gmail.com';
        this.readFromDatabase();
      }
    });
    // this.readFromDatabase();

  }
  
  // ----------------------------------------------------------------------------------------------------------
addOrUpdateBudget(){
this.saveBudgetToFirestore('Ceremony', this.budget['Ceremony']);
this.saveBudgetToFirestore('receptionBudget', this.budget['receptionBudget']);
this.saveBudgetToFirestore('AttireBeauty', this.budget['AttireBeauty']);
this.saveBudgetToFirestore('PhotographyandVideography', this.budget['PhotographyandVideography']);
this.saveBudgetToFirestore('Entertainment', this.budget['Entertainment']);
this.saveBudgetToFirestore('StationeryandInvitations', this.budget['StationeryandInvitations']);
this.saveBudgetToFirestore('FlowersandDecor', this.budget['FlowersandDecor']);
this.saveBudgetToFirestore('WeddingRings', this.budget['WeddingRings']);
this.saveBudgetToFirestore('Transportation', this.budget['Transportation']);
this.saveBudgetToFirestore('WeddingPlanner', this.budget['WeddingPlanner']);
this.saveBudgetToFirestore('MiscellaneousExpenses', this.budget['MiscellaneousExpenses']);

alert("Successfull added into database");

}
//-----------------------------------------------------------------------------------------------------------
readFromDatabase(){
  this.loadBudgetFromFirestoreById('Ceremony');
  this.loadBudgetFromFirestoreById('receptionBudget');
  this.loadBudgetFromFirestoreById('AttireBeauty');
  this.loadBudgetFromFirestoreById('PhotographyandVideography');
  this.loadBudgetFromFirestoreById('Entertainment');
  this.loadBudgetFromFirestoreById('StationeryandInvitations');
  this.loadBudgetFromFirestoreById('FlowersandDecor');
  this.loadBudgetFromFirestoreById('WeddingRings');
  this.loadBudgetFromFirestoreById('Transportation');
  this.loadBudgetFromFirestoreById('WeddingPlanner');
  this.loadBudgetFromFirestoreById('MiscellaneousExpenses');
  
  }
  //------------------------------------------------------------------------------------------------
  saveBudgetToFirestore(sectionName: string, items: BudgetItem[]) {
    const sectionData: { [key: string]: { budgetAmount: number; actualAmount: number } } = {};
    
    items.forEach(item => {
      sectionData[item.name] = { budgetAmount: item.budgetAmount, actualAmount: item.actualAmount };
    });

    // Save budget under the user's email address document
    this.firestore.collection('users').doc(this.userEmailAddress).collection('budget').doc(sectionName).set({ items: sectionData }, { merge: true })
      .then(() => console.log(`${sectionName} section saved/updated successfully`))
      .catch(error => console.error(`Error saving/updating ${sectionName} section:`, error));
  
    console.log('Budget saved to Firestore');
  }
//-------------------------------------------------------------------------------------------------------
calculateCategoryTotal(category: string): { budget: number; actual: number } {
  const items = this.budget[category];
  let totalBudget = 0;
  let totalActual = 0;

  items.forEach(item => {
    totalBudget += item.budgetAmount;
    totalActual += item.actualAmount;
  });

  return { budget: totalBudget, actual: totalActual };
}

//----------------------------------------------------------------------------------------------------

loadBudgetFromFirestoreById(sectionName: string) {
  try {
    this.firestore.collection('users').doc(this.userEmailAddress).collection('budget').doc(sectionName).get().subscribe(
      (doc: any) => {

     
        const sectionData = doc?.data()?.items;
        
        if (sectionData) {
          console.log('Section Name:', sectionName);
          console.log('Section Data:', sectionData);
          this.budget[sectionName] = Object.keys(sectionData).map(key => {
            const item = sectionData[key];
            return {
              name: key,
              budgetAmount: item.budgetAmount,
              actualAmount: item.actualAmount
            };
          });
        }
        console.log('Section Data:',  this.budget[sectionName]);
        console.log('Budget loaded from Firestore:', this.budget);
        
      },
      (error: any) => {
        console.error('Error loading budget from Firestore:', error);
      }
      
    );
    
    // Your code here

  } catch (error) {
    console.error('Error in try block:', error);
  }
}
  
}
