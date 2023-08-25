import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  wedding = {
    wed_type: '',
    c_gender: '',
    groom: '',
    bride: ''
  };
  constructor() { }

  ngOnInit() {
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
