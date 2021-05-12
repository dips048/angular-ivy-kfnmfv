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
  downloadUrl;
  progress: Observable<number>;
  constructor(private storage: StorageService) {}

  ngOnInit() {}

  onFileSelected(event) {
    const file = event.target.files[0];
    this.progress = this.storage.uploadFile(file);
  }

  onImageSelected(event) {
    const file = event.target.files[0];
    this.storage.uploadImage(file);
  }

  downloadImage() {
    this.storage.download().subscribe(res => console.log('download url:', res));
  }
}
