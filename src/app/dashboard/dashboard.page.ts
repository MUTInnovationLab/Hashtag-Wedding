import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }



  goToViewProfile() {
    this.navController.navigateForward("/view-profile");
  }

  goToBudget() {
    this.navController.navigateForward("/budget");
  }

  goToChecklist() {
    this.navController.navigateForward("/checklist");
  }

  goToLookerDashboard(){
    this.navController.navigateForward("/looker-dashboard");
  }
}
