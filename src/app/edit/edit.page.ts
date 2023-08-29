import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { DataService } from '../services/data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('1s ease-in-out')),
    ]),
  ],
})
export class EditPage implements OnInit {
  showProfile = true;
  showWeddingInfo = false;

  @ViewChild('nextButton') nextButton: IonButton | undefined;
  @ViewChild('saveButton') saveButton: ElementRef | undefined;

  toggleSections() {
    this.showProfile = !this.showProfile;
    this.showWeddingInfo = !this.showWeddingInfo;

    // After the animation is complete, focus on the "Save Changes" button
    setTimeout(() => {
      if (!this.showProfile && this.saveButton) {
        this.saveButton.nativeElement.focus();
      }
    }, 1000);
  }

  user = {
    name: '',
    surname: '',
    country: '',
    email: '',
    phone: '',
    gender: '',

    // Other profile fields here
  };
  wedding = {
    wed_type: '',
    c_gender: '',
    groom: '',
    bride: '',
    couple: '',
    wed_date: '',
    days_Till_wed: 0,
    location: '',
    minBudget: '',
    maxBudget: '',
  };

  constructor(private dataService: DataService,private auth:AngularFireAuth) {}

  ngOnInit() {
    this.getUserDoc();
  }

  saveWeddingChanges() {
    this.wedding.couple = this.wedding.groom + ' & ' + this.wedding.bride;
    const combinedData = {
      user: this.user,
      wedding: this.wedding,
    };
    this.dataService
      .saveDetails(combinedData)
      .then((response) => {
        alert('data saved');
        this.user = {
          name: '',
          surname: '',
          country: '',
          email: '',
          phone: '',
          gender: '',

          // Other profile fields here
        };
        this.wedding = {
          wed_type: '',
          c_gender: '',
          groom: '',
          bride: '',
          couple: '',
          wed_date: '',
          days_Till_wed: 0,
          location: '',
          minBudget: '',
          maxBudget: '',
        };
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  

 docData:any;
  async getUserDoc() {
    try {
      const user = await this.auth.currentUser;
      alert(user?.email);
      if (user && user.email) {
        const docSnapshot = await this.dataService.getUserDoc(user.email);
  
        console.log("mike");
        if (docSnapshot?.exists) {
          this.docData = docSnapshot.data(); // Get the data object from the snapshot
          // Set data to the user object
          this.user.name = this.docData.user.name;
          this.user.surname = this.docData.user.surname;
          this.user.country = this.docData.user.country ;
          this.user.email = this.docData.user.email ;
          this.user.phone = this.docData.user.phone ;
          this.user.gender = this.docData.user.gender ;
    
          // Set this.docData to the wedding object
          this.wedding.wed_type = this.docData.wedding.wed_type || '';
          this.wedding.c_gender = this.docData.wedding.c_gender || '';
          this.wedding.groom = this.docData.wedding.groom || '';
          this.wedding.bride = this.docData.wedding.bride || '';
          this.wedding.couple = this.docData.wedding.couple || '';
          this.wedding.wed_date = this.docData.wedding.wed_date || '';
          this.wedding.days_Till_wed = this.docData.wedding.days_Till_wed || 0;
          this.wedding.location = this.docData.wedding.location || '';
          this.wedding.minBudget = this.docData.wedding.minBudget || '';
          this.wedding.maxBudget = this.docData.wedding.maxBudget || '';
    
          console.log("User this.docData:", this.user);
          console.log("Wedding this.docData:", this.wedding);
          console.log("Document data:", docSnapshot.data());
        } else {
          console.log("Document does not exist.");
        }
      } else {
        console.log("User is not authenticated or email is not available.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  
  
  setDate(e: any) {
    this.wedding.wed_date = e.detail.value.split('T')[0];
    this.calculateDaysLeft();
  }
  calculateDaysLeft() {
    const weddingDate = new Date(this.wedding.wed_date);
    const today = new Date();

    const timeDifference = weddingDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

    this.wedding.days_Till_wed = daysLeft;
  }
}
