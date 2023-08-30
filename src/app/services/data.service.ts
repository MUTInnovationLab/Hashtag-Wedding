import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:AngularFirestore,private auth:AngularFireAuth) { }

  saveDetails(data:any ){
    return this.firestore.collection("userDetails").doc(data.user.email).update(data);
  }
  getUserDoc(data:any ){
    return this.firestore.collection("userDetails").doc(data.user.email).update(data);
  }
  getProfileDocument(email: string): Observable<any> {
    return this.firestore.doc(`userDetails/${email}`).valueChanges();
  }
 


}
