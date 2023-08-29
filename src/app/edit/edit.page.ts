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


  async getUserDoc() {
    try {
      const user = await this.auth.currentUser;
  
      if (!user) {
        console.log("User is not authenticated.");
        return;
      }
  
      if (!user.email) {
        console.log("User's email is not available.");
        return;
      }
  
      const docSnapshot = await this.dataService.getUserDoc(user.email);
  
      if (docSnapshot?.exists) {
        console.log("Document data:", docSnapshot.data());
      } else {
        console.log("Document does not exist.");
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
