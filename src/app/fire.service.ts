import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class FireService {
  constructor(private db: AngularFirestore) {}

  addUser(user: User) {
    return this.db
      .collection("users")
      .doc(user.id)
      .set(user);
  }

  getUsers(): Observable<any> {
    return this.db.collection("users").snapshotChanges();
  }

  getUser(id): Observable<any> {
    return this.db
      .collection("users")
      .doc(id)
      .get();
  }

  update(user: User) {
    this.db
      .collection("users")
      .doc(user.id)
      .update(user);
  }

  delete(user: User) {
    this.db
      .collection("users")
      .doc(user.id)
      .delete();
  }
}
