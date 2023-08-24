import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(){
    this.createRandomCircles()
  }

  async register() {
    try {
      // Basic input validation
      if (!this.user.name || !this.user.email || !this.user.password) {
        console.error('All fields are required.');
        return;
      }

      if (this.user.password.length < 6) {
        console.error('Password must be at least 6 characters long.');
        return;
      }

      // Register user with email and password
      const result = await this.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );

      // Store additional user information in Firestore
      await this.firestore.collection('users').doc(result.user?.uid).set({
        name: this.user.name,
        email: this.user.email,
      });

      console.log('User registered:', this.user);
      this.router.navigateByUrl('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error registering:', error);
    }
  }

  createRandomCircles() {
    const numCircles = 20; // Number of circles to create

    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');

      // Random size between 10px and 30px
      const size = Math.floor(Math.random() * 21) + 10;
      circle.style.width = size + 'px';
      circle.style.height = size + 'px';

      // Random position within the viewport
      const topPosition = Math.random() * 100;
      const leftPosition = Math.random() * 100;
      circle.style.top = topPosition + 'vh';
      circle.style.left = leftPosition + 'vw';

      document.querySelector('.background-circles')?.appendChild(circle);
    }
  }
}
