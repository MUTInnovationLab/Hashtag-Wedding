import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Profile } from '../model/profile.mode';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  userData:any;
  profileData: Profile = {
    user: {
      country: '',
      email: '',
      gender: '',
      name: '',
      phone: '',
      surname: '',
    },
    wedding: {
      bride: '',
      c_gender: '',
      couple: '',
      days_Till_wed: 0,
      groom: '',
      location: '',
      maxBudget: 0,
      minBudget: 0,
      wed_date: '',
      wed_type: '',
    },
  };
  user: any; // Replace 'any' with an interface or type that matches your Firestore document structure

  constructor(
    private dataService: DataService,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const user = await this.auth.currentUser;
  
    if (user && user.email) {
      try {
        const docSnapshot = await this.dataService.getUserDoc(user.email);
  
        if (docSnapshot?.exists) {
          this.userData = docSnapshot.data();
          console.log("mm",this.userData.user.email)
        } else {
          // Handle document not found
          console.log('Document not found.');
        }
      } catch (error) {
        // Handle errors
        console.error('Error getting document:', error);
      }
    } else {
      console.log('User is not authenticated or email is not available.');
    }
  }
}
