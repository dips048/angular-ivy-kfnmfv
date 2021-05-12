import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  id = Date.now();
  constructor(private storage: AngularFireStorage) {}

  uploadFile(file) {
    const path = `files/${this.id}`;
    const fileRef = this.storage.ref(path);
    let task = fileRef.put(file);
    return task.percentageChanges();
  }

  uploadString(message) {
    const path = `string/${this.id}`;
    const fileRef = this.storage.ref(path);
    return fileRef.putString(message).percentageChanges();
  }

  uploadImage(file) {
    const path = `images`;
    const metadata = { contentType: 'image/jpeg' };
    let task = this.storage
      .ref(path)
      .child('mountains.jpg')
      .put(file, metadata);
    //task.then((snapshot) => console.log('Uploaded Image!'));

    return task.percentageChanges();
  }

  download() {
    const path = `files/${this.id}`;
    return this.storage.ref(path).getDownloadURL();
  }
}
