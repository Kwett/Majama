import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JamComponent } from './jam/jam.component';
import { ConcertComponent } from './concert/concert.component';
import { NewsComponent } from './news/news.component';
import { RoasterComponent } from './roaster/roaster.component';
import { PrestationComponent } from './prestation/prestation.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JamComponent,
    ConcertComponent,
    NewsComponent,
    RoasterComponent,
    PrestationComponent,
    ContactComponent,
    PageNotFoundComponent,
    NavComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
