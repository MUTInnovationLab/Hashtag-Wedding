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
     await this.auth.createUserWithEmailAndPassword(this.user.email,this.user.password)
     .then(async responce =>{
       const user={
        name: this.user.name,
        email: this.user.email,
       }
     
      await this.firestore.collection("userDetails").doc(this.user.email).set({
          user
        }).then(responce=>{
          alert("registered");
          this.router.navigateByUrl("/login")
        })
      });

      // Store additional user information in Firestore
    

     
      
    } catch (error) {
      console.error('Error registering:', error);
    }
  }

  
}
