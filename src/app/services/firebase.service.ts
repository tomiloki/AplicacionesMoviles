import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'; // Cambiar si usas otra versión
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireStore: AngularFirestore) {}

  createDoc<T>(data: T, path: string): Promise<any> {
    const collection: AngularFirestoreCollection<T> = this.fireStore.collection<T>(path);
    return collection.add(data);
  }

  // Funciones adicionales que puedes necesitar:
  getDoc<T>(path: string, id: string): Observable<T | undefined> {
    return this.fireStore.collection<T>(path).doc(id).valueChanges();
  }  

  updateDoc<T>(data: Partial<T>, path: string, id: string): Promise<void> {
    return this.fireStore.collection(path).doc(id).update(data);
  }

  deleteDoc(path: string, id: string): Promise<void> {
    return this.fireStore.collection(path).doc(id).delete();
  }
}
