import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: '',
  };


  ngOnInit() {
  }

  constructor(private router: Router, private auth: AngularFireAuth) {}

  async login() {
    try {
      const result = await this.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );

      console.log('User logged in:', result.user);
      this.router.navigateByUrl('/home'); // Redirect to home page after login
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

}
