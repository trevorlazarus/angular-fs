import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { AddFlexitankComponent } from './components/add-flexitank/add-flexitank.component';
import { FlexitanksComponent } from './components/flexitanks/flexitanks.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    NavbarComponent,
    AddJobComponent,
    AddFlexitankComponent,
    FlexitanksComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'web-tracker'),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
