import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  bytes = new Uint8Array([
    0x48,
    0x65,
    0x6c,
    0x6c,
    0x6f,
    0x2c,
    0x20,
    0x77,
    0x6f,
    0x72,
    0x6c,
    0x64,
    0x21
  ]);
  selected;
  downloadUrl: Observable<any>;
  progress: Observable<any>;
  value = '';
  constructor(private storage: StorageService) {}

  ngOnInit() {}

  onFileSelected(event) {
    const file = event.target.files[0];
    this.progress = this.storage.uploadFile(file);
  }

  onImageSelected(event) {
    const file = event.target.files[0];
    this.progress = this.storage.uploadImage(file);
  }

  uploadString() {
    this.progress = this.storage.uploadString(this.value);
  }

  downloadImage() {
    this.downloadUrl = this.storage.download();
  }
}
