import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertComponent } from './concert/concert.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JamComponent } from './jam/jam.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrestationComponent } from './prestation/prestation.component';
import { RoasterComponent } from './roaster/roaster.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "jam", component: JamComponent },
  {path: "event/:id", component: EventComponent},
  {path: "concert", component: ConcertComponent},
  {path: "news", component: NewsComponent},
  {path: "roaster", component: RoasterComponent},
  {path: "prestations", component: PrestationComponent},
  {path: "contact", component: ContactComponent},

  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
