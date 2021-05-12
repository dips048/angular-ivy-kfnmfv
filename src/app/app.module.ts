import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsertComponent } from './insert/insert.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UpdateComponent } from './update/update.component';
import { UploadComponent } from './upload/upload.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCiqz_ktbxMt74iyu6-905sHLutbny0HK4',
  authDomain: 'potent-airfoil-253804.firebaseapp.com',
  databaseURL: 'https://potent-airfoil-253804-default-rtdb.firebaseio.com',
  projectId: 'potent-airfoil-253804',
  storageBucket: 'potent-airfoil-253804.appspot.com',
  messagingSenderId: '148647410760',
  appId: '1:148647410760:web:668f6ac8610eb826a46c7d',
  measurementId: 'G-37N2T13T5V'
};
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InsertComponent,
    UpdateComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
