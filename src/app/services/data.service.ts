import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:AngularFirestore,private auth:AngularFireAuth) {}

  saveDetails(data:any ){
    return this.firestore.collection("userDetails").doc(data.user.email).update(data);
  }
  getUserDoc(email: string) {
    return this.firestore.collection("userDetails").doc(email).get().toPromise();
  }
  
  async getCurrentUserEmail() {
    const user = await this.auth.currentUser;
    if (user) {
      return user.email;
    } else {
      return null; // Or any appropriate value indicating no user
    }
  }
  


}
