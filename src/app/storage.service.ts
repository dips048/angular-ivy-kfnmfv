import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  id = Date.now();
  path = `files/${this.id}`;
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
    fileRef.putString(message).then(snapshot => {
      console.log('Uploaded a raw string!');
    });
  }

  uploadImage(file) {
    const path = `images`;
    const metadata = { contentType: 'image/jpeg' };
    let task = this.storage
      .ref(path)
      .child('mountains.jpg')
      .put(file, metadata);
    //task.then((snapshot) => console.log('Uploaded Image!'));

    task.percentageChanges().subscribe(res => console.log('abcd', res));
  }

  download() {
    return this.storage.ref(this.path).getDownloadURL();
  }
}
