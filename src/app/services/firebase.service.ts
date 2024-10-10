import { Injectable } from '@angular/core';
import { Firestore, doc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private FireStore: AngularFirestore) { }

  createDoc<tipo>(data: tipo, enlace: string) {
    const userCollection: AngularFirestoreCollection<tipo> =
                      this.FireStore.collection<tipo>(enlace);
    return userCollection.add(data);
  }

  createIdDoc(): string {
    return this.FireStore.createId();
}

}

