import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('1s ease-in-out'))
    ])
  ]
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
    },1000);
  }


  user = {
    name: '',
    surname: '',
    country: '',
    email:'',
    phone:'',
    gender:''

    // Other profile fields here
  };
  wedding = {
    wed_type: '',
    c_gender: '',
    groom: '',
    bride: ''
  };
  constructor() { }

  ngOnInit() {
  }
  saveProfile() {
    // Implement the logic to save profile changes
  }
  saveWeddingChanges() {
  //   this.weddingService.saveWeddingDetails(this.wedding).subscribe(
  //     response => {
  //       console.log('Wedding details saved successfully.', response);
  //     },
  //     error => {
  //       console.error('Error saving wedding details.', error);
  //     }
  //   );

  }
}
