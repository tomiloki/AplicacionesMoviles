import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"aplicacionesmoviles-76d9e","appId":"1:452715160779:web:0bd19fbfebc37be01aa74e","storageBucket":"aplicacionesmoviles-76d9e.appspot.com","apiKey":"AIzaSyAFhvtOqCOIIVAdCCCcQAdJbQZV9NMLkfo","authDomain":"aplicacionesmoviles-76d9e.firebaseapp.com","messagingSenderId":"452715160779","measurementId":"G-2BJVWVLFE8"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
