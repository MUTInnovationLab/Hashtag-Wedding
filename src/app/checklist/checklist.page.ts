import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
interface checlistItem {
  name: string;
  checked: boolean;
  
}

interface checklist {
  [key: string]: checlistItem[];
}

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {
 
  timeFrame: string[] = ["12 MONTHS", "10-11 MONTHS", "8-9 MONTHS", "6-7 MONTHS", "4-5 MONTHS", "3 MONTHS", "2 MONTHS", "1 MONTH", "2 WEEKS", "1 WEEK", "THE DAY BEFORE", "WEDDING DAY", "BEYOND THE WEDDING"];

checklist: { timeFrame: string, checklist: { name: string, checked: boolean }[] }[] = [

  { timeFrame: "12 MONTHS", checklist: [
    { name: "Have fun announcing your engagement!", checked: false },
    { name: "Choose a date (or up to 3 so you can be flexible).", checked: false },
    { name: "Talk budget and decide who’s contributing what.", checked: false },
    { name: "Discover your wedding style Take our quiz.", checked: false },
    { name: "Choose your wedding party: maid of honor, bridesmaids,best man, groomsmen, flowergirl and ring bearer.", checked: false },
    { name: "Create a wedding website.", checked: false },
    { name: "Get engagement ring insured and consider purchasing wedding insurance.", checked: false },
    { name: "Begin compiling a guest list.", checked: false },
    { name: "Explore ceremony and reception venue options.", checked: false },
    { name: "Start assembling a team of weddingpros: planner photographer videographer caterer florist and musicians.", checked: false },
     {name: "Browse wedding dress and veil styles.", checked: false},
     {name: "Create wedding and style boards on Pinterest Follow MagnetStreet for ideas!", checked: false},
     {name: "Subscribe to Truly Engaging for wedding inspiration tips and deals.", checked: false},
     {name: "Get engagement photos taken", checked: false},
     {name: "Start browsing, Save the Date designs to find your favorite shape and size.", checked: false},
     {name: "See your favorite designs in person,Order custom ,Save the Date samples.", checked: false},
     {name: "Place your full Save the Date order based on your favorite custom sample!",  checked: false},
  ] },

  { timeFrame: "10-11 MONTHS", checklist: [
    { name: "Choose bridal party attire and accessories", checked: false },
    { name: "Reserve ceremony and reception venues.", checked: false },
    { name: "Book officiant and check into premarital counseling", checked: false },
    { name: "Hire photographer, videographer, caterer, DJ/band, florist, and planner.", checked: false },
    { name: "Finalize guest address list.", checked: false },
    { name: "Mail your Save the Dates.", checked: false },
    { name: "Purchase wedding dress, veil and undergarments.", checked: false },
    { name: "Establish a healthy skin and wellness routine.", checked: false },
    { name: "Research honeymoon destinations.", checked: false },
    
  ] },

  { timeFrame: "8-9 MONTHS", checklist: [
    { name: "Find 3 hotels (at different price points) for out-of-town guests.", checked: false },
    { name: "Browse Wedding Invitation designs and coordinating stationery (Enclosures, b_Programs, Menu Cards, Thank Yous, and Favors).", checked: false },
    { name: "Refine and update guest address list as needed.", checked: false },
    { name: "Create gift registries at 2-3 national and/or online retailers.", checked: false },
    { name: "Begin planning honeymoon.", checked: false },
    
  ] },

  { timeFrame: "6-7 MONTHS", checklist: [
    { name: "Explore wedding  day,hair and makeup styles.", checked: false },
    { name: "Meet with officiant to discuss plans for ceremony.", checked: false },
    { name: "Reserve rentals: chairs, linens, lighting décor, etc.", checked: false },
    { name: "Choose dessert style and schedule tastings.", checked: false },
    { name: "Decide on groomsmen attire", checked: false },
    { name: "See your favorite designs in person, Order custom Wedding Invitation samples.", checked: false },
    { name: "Hire ceremony musicians.", checked: false },
    { name: "Book transportation to and from venues.", checked: false },
    { name: "Purchase wedding bands.", checked: false },
    { name: "Decide on a date for the Bachelor and Bachelorette party or weekend.", checked: false },
    { name: "Order Thank You Cards (for bridal shower and gifts that arrive early). ", checked: false },
    
  ] },

  { timeFrame: "4-5 MONTHS", checklist: [
    { name: "Place your full Wedding Invitation order based on your favorite custom sample!", checked: false },
    { name: "Choose flowers for: wedding party,attendants venues,cake,etc", checked: false },
    { name: "Schedule dress fittings.", checked: false },
    { name: "Book honeymoon flights and hotels", checked: false },
    { name: "Book room for wedding night.", checked: false },
    { name: "Order wedding dessert/cake", checked: false },
    { name: "Plan welcome baskets for out of town guests.", checked: false },
    { name: "Prepare {play/do not play} lists for DJ/band.", checked: false },
    { name: "Finalize wedding guest list.", checked: false },
    { name: "Assemble rehearsal dinner guest list.", checked: false },
    { name: "Book rehearsal dinner venue", checked: false },
    { name: "Order Rehearsal Dinner Invitations.", checked: false },
    
  ] },

  { timeFrame: "3 MONTHS", checklist: [
    { name: "Finalize honeymoon plans and ensure all documents  are in order", checked: false },
    { name: "Plan ceremony and reception seating.", checked: false },
    { name: "Experiment with hair and veil with stylist", checked: false },
    { name: "Finalize readers, readings, and music for the ceremony.", checked: false },
    { name: "Purchase:toasting flutes,serving pieces,guestbook, flower basket and ring bearer pillow.", checked: false },
    { name: "Finalize reception menu.", checked: false },
    { name: "Order Menu Cards and Wedding Favors", checked: false },
    { name: "Mail Wedding Invitations.", checked: false },
    
  ] },

  { timeFrame: "2 MONTHS", checklist: [
    { name: "Develop system for organizing RSVPs.", checked: false },
    { name: "Begin writing vows.", checked: false },
    { name: "Review ceremony details with officiant.", checked: false },
    { name: "Lay out the content for Wedding Programs.", checked: false },
    { name: "Apply for marriage license.", checked: false },
    { name: "Finalize seating arrangements.", checked: false },
    { name: "Finalize playlists with musicians", checked: false },
    { name: "Finalize fittings for wedding party and parents", checked: false },
    { name: "Create wedding day timeline and send to your vendors, officiant and wedding party.", checked: false },
    { name: "Write out honeymoon itinerary for family at home.", checked: false },
     {name: "Decide “Something Old, New, Borrowed, Blue.”", checked: false},
     {name: "Book spa and beauty treatments for you and your bridal party.", checked: false},
     {name: "Book wedding day transportation", checked: false},
     {name: "Purchase gifts for attendants.", checked: false},
     
  ] },

  { timeFrame: "1 MONTH", checklist: [
    { name: "Call vendors to confirm date, times and location", checked: false },
    { name: "Confirm honeymoon reservations.", checked: false },
    { name: "Pack for honeymoon.", checked: false },
    { name: "Pick up wedding rings.", checked: false },
    { name: "Confirm final plans with wedding officiant.", checked: false },
    { name: "Attend Bachelor/Bachelorette party.", checked: false },
    { name: "Order Wedding Programs.", checked: false },
    { name: "Final dress fitting(with shoes & undergarments).", checked: false },
    { name: "Write Thank You notes as gifts are_received.", checked: false },
    { name: "Look for pet sitter/boarding options to cover wedding and honeymoon.", checked: false },
    
  ] },

  { timeFrame: "2 WEEKS", checklist: [
    { name: "Follow up with guests who have not RSVP’d.", checked: false },
    { name: "Give final count to caterer. ", checked: false },
    { name: "Update registries.", checked: false },
    { name: "Begin breaking in wedding shoes.", checked: false },
    { name: "Send playlists to DJ/band/ceremony musicians.", checked: false },
    { name: "Get final haircut and color.", checked: false },
    { name: "Delegate wedding day duties: gift table guestbook,etc", checked: false },
    { name: "Delegate someone to return tuxes, rentals and tend to wedding dress.", checked: false },
    { name: "Send directions to wedding day limo/transportation driver.", checked: false },
    
  ] },

  { timeFrame: "1 WEEK", checklist: [
    { name: "Prepare final payments to vendors and cash tips for service personnel.", checked: false },
    { name: "Give readers their scripts", checked: false },
    { name: "Give photographer and videographer your image and video requests.", checked: false },
    { name: "Lay out wedding clothes. ", checked: false },
    { name: "Prepare wedding day emergency kit.", checked: false },
    { name: "Get spa treatments for you and the bridal party.", checked: false },
    
  ] },

  { timeFrame: "THE DAY BEFORE", checklist: [
    { name: "Deliver welcome baskets", checked: false },
    { name: "Get mani/pedi/massage", checked: false },
    { name: "Attend wedding rehearsal", checked: false },
    { name: "Have fun at the rehearsal dinner", checked: false },
    { name: "Get to bed at a decent hour!", checked: false },
    
  ] },

  { timeFrame: "WEDDING DAY", checklist: [
    { name: "Eat a good breakfast!", checked: false },
    { name: "Allow yourself plenty of time to get ready.", checked: false },
    { name: "Give wedding rings and officiant fee to best man.", checked: false },
    { name: "Relax smile and soak in every incredible moment.", checked: false },
     
  ] },

  { timeFrame: "BEYOND THE WEDDING", checklist: [
    { name: "Ensure tuxes and rentals have been returned.", checked: false },
    { name: "Get wedding dress to preservationist or cleaners.", checked: false },
    { name: "Order and send Photo Thank You Cards(include a wedding photo).", checked: false },
    { name: "Order Personalized Stationery with your new last name.", checked: false },
    { name: "Put your favorite wedding photo on a beautiful Custom Canvas.", checked: false },
     
  ] },
];

selectedTimeFrame: string = '';

  checkAll: boolean = false; 

  constructor(private firestore: AngularFirestore,private alertController: AlertController, private afAuth: AngularFireAuth) { }


 


  loadChecklistFromFirestoreById(sectionName: string) {
    try {
      this.firestore.collection('allLists').doc(sectionName).get().subscribe(
        (doc: any) => {
          const sectionData = doc.data().items;
  
          if (sectionData) {
            console.log('Section Name:', sectionName);
            console.log('Section Data:', sectionData);
            this.checklist = this.checklist.map(item => {
              if (item.timeFrame === sectionName) {
                item.checklist = Object.keys(sectionData).map(key => ({
                  name: key,
                  checked: sectionData[key].checked
                }));
              }
              return item;
            });
          }
          console.log('Budget loaded from Firestore:', this.checklist);
        },
        (error: any) => {
          console.error('Error loading budget from Firestore:', error);
        }
      );
    } catch (error) {
      console.error('Error in try block:', error);
    }
  }
  

  
  

  ngOnInit() {
    // this.loadBudgetFromFirestores();

    this.readFromDatabase();

   

  // Load the checklist for the logged-in user
  this.loadChecklistForLoggedInUser();

  // Retrieve the last selected checklist from the user's document
  this.afAuth.currentUser.then((user) => {
    if (user) {
      const userEmail = user.email;
      this.firestore
        .collection('userDetails')
        .doc(userEmail!)
        .get()
        .subscribe(
          (doc) => {
            if (doc.exists) {
              const userData = doc.data() as any; // Adjust the type to match your user data structure

              if (userData && userData.lastSelectedChecklist) {
                const lastSelectedChecklist = userData.lastSelectedChecklist;

                // Set the last selected checklist as the default
                this.selectMonth(lastSelectedChecklist);
              } else {
                // If no checklist is found in the user's document, set the default one (e.g., '12 MONTHS')
                this.selectMonth('12 MONTHS');
              }
            } else {
              console.log('User document not found.');
            }
          },
          (error) => {
            console.error('Error loading user data from Firestore:', error);
          }
        );
    } else {
      console.error('User not authenticated.');
    }
  });

    
  }

  loadChecklistForLoggedInUser() {
    this.afAuth.currentUser.then((userAuth) => {
      if (userAuth) {
        const userEmail = userAuth.email!;

        this.firestore.collection('userDetails').doc(userEmail).get().subscribe(
          (doc) => {
            if (doc.exists) {
              const userData = doc.data() as any; // Adjust the type to match your user data structure

              if (userData) {
                for (const sectionName in userData) {
                  if (userData.hasOwnProperty(sectionName)) {
                    const sectionData = userData[sectionName];

                    // Update the checklist based on the sectionName and sectionData
                    this.checklist = this.checklist.map((item) => {
                      if (item.timeFrame === sectionName) {
                        item.checklist = Object.keys(sectionData).map((key) => ({
                          name: key,
                          checked: sectionData[key].checked,
                        }));
                      }
                      return item;
                    });
                  }
                }
              }
            } else {
              console.log('User document not found.');
            }
          },
          (error) => {
            console.error('Error loading checklist from Firestore:', error);
          }
        );
      } else {
        console.error('User not authenticated.');
      }
    });
  }
  
  // ----------------------------------------------------------------------------------------------------------
  addOrUpdateBudget() {
    this.checklist.forEach(item => {
      this.saveChecklistToFirestore(item.timeFrame, item.checklist);
    });
  
    this.presentAlert();
  }


  


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Checklist Marked!!!',
      message: 'Thanks for Selecting your checklist choice it will be updated on your profile',
      buttons: ['OK']
    });

    await alert.present();
  }

  
//-----------------------------------------------------------------------------------------------------------
readFromDatabase(){
  this.loadChecklistFromFirestoreById('12 MONTHS');
  this.loadChecklistFromFirestoreById('10-11 MONTHS');
  this.loadChecklistFromFirestoreById('8-9 MONTHS');
  this.loadChecklistFromFirestoreById('6-7 MONTHS');
  this.loadChecklistFromFirestoreById('4-5 MONTHS');
  this.loadChecklistFromFirestoreById('3 MONTHS');
  this.loadChecklistFromFirestoreById('2 MONTHS');
  this.loadChecklistFromFirestoreById('1 MONTH');
  this.loadChecklistFromFirestoreById('2 WEEKS');
  this.loadChecklistFromFirestoreById('1 WEEK');
  this.loadChecklistFromFirestoreById('THE DAY BEFORE');
  this.loadChecklistFromFirestoreById('WEDDING DAY');
  this.loadChecklistFromFirestoreById('BEYOND THE WEDDING');
  
  }



  shouldDisplayCard(): boolean {
    // Check if selectedTimeFrame matches any item in the checklist
    return this.checklist.some(item => item.timeFrame === this.selectedTimeFrame);
  }
  selectMonth(timeFrame: string) {
    this.selectedTimeFrame = timeFrame;
  }

  
 // Method to get the checklist items for the selected timeframe
  getChecklistItemsForSelectedTimeFrame(): any[] {
    const selectedTimeFrameItem = this.checklist.find(
      (item) => item.timeFrame === this.selectedTimeFrame
    );

    return selectedTimeFrameItem ? selectedTimeFrameItem.checklist : [];
  }

  // Toggle the state of all checkboxes for the selected timeframe
  toggleAllCheckboxesInCurrentTimeFrame() {
    const selectedTimeFrameChecklist = this.getChecklistItemsForSelectedTimeFrame();

    if (selectedTimeFrameChecklist) {
      
      selectedTimeFrameChecklist.forEach((checklistItem) => {
        checklistItem.checked = this.checkAll;
      });
    }
  }
  saveChecklistToFirestore(sectionName: string, items: { name: string; checked: boolean }[]) {
    this.afAuth.currentUser.then((user) => {
      if (user) {
        const userEmail = user.email;
        const sectionData: { [key: string]: { checked: boolean } } = {};
  
        items.forEach((item) => {
          sectionData[item.name] = { checked: item.checked };
        });
  
        // Save the checklist data under the user's document in Firestore
        this.firestore
          .collection('userDetails')
          .doc(userEmail!)
          .set(
            {
              [sectionName]: sectionData,
              lastSelectedChecklist: sectionName, // Update the last selected checklist
            },
            { merge: true }
          )
          .then(() =>
            console.log(`${sectionName} section saved/updated successfully for ${userEmail}`)
          )
          .catch((error) => console.error(`Error saving/updating ${sectionName} section:`, error));
      } else {
        console.error('User not authenticated.');
      }
    });
  }
  
  
  

}
