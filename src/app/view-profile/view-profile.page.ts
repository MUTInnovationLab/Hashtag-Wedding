import { Component, OnInit } from '@angular/core';
import { DataService  } from '../services/data.service';
import { Profile } from '../model/profile.mode';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  
  profileData : Profile ={
    user: {
      country: '',
      email: '',
      gender: '',
      name: '',
      phone: '',
      surname: ''
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
      wed_type: ''
    }
  };
  constructor(private profileService: DataService ) 
  {

  }
  ngOnInit() {
    const email = 'vgwala149@gmail.com'; // Replace with the ID of the document you want to retrieve
    this.profileService.getProfileDocument(email).subscribe((data) => {
      this.profileData = data;
    });
    alert(JSON.stringify(this.profileData));
  }
  

}