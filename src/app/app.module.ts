import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { routes } from './routes';

import { AppComponent } from './app.component';

// Replace firebase config with yours

const firebaseConfig = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'x.firebaseapp.com',
  databaseURL: 'https://x.firebaseio.com',
  projectId: 'xxxxxx',
  storageBucket: 'xxxxx.appspot.com',
  messagingSenderId: 'xxxxxxxxxxx'
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgbCollapseModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
