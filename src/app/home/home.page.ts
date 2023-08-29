import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditProfilePage } from '../edit-profile/edit-profile.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}
  async openModal(...args: []) {
    const modal = await this.modalController.create({
      component: EditProfilePage,
      cssClass: 'my-custom-modal-class', // Optional CSS class for styling
    });

    await modal.present();
  }

}
