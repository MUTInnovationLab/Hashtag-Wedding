import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:AngularFirestore,private auth:AngularFireAuth) { }

  saveWeddingDetails(email:any, data:any){
    return this.firestore.collection("userDetails").doc(email).set("")
  }

   


}
