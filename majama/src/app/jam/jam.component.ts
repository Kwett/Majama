import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JamCard } from './models/jam-card.model';
import { Address } from './models/address.model';


@Component({
  selector: 'app-jam',
  templateUrl: './jam.component.html',
  styleUrl: './jam.component.css'
})
export class JamComponent {

  jamCard: JamCard[] = [
    { date: new Date('2024-05-03'),
      place: 'le Gallia',
      address:
        { firstLine: '35 rue de Méhul',
        city: 'Pantin'} ,
      timeStart: this.time(16, 0),
      timeStop: this.time(19, 0)},

    { date: new Date('2024-05-03'),
      place: 'le Gallia',
      address:
        {firstLine: '35 rue de Méhul',
      city: 'Pantin'} ,
      timeStart: this.time(16, 0),
      timeStop: this.time(19, 0)},

    { date: new Date('2024-05-03'),
      place: 'le Gallia',
      address:
        {firstLine: '35 rue de Méhul',
        city: 'Pantin'} ,
      timeStart: this.time(16, 0),
      timeStop: this.time(19, 0)},


    { date: new Date('2024-05-03'),
      place: 'le Gallia',
      address:
        {firstLine: '35 rue de Méhul',
      city: 'Pantin'} ,
      timeStart: this.time(16, 0),
      timeStop: this.time(19, 0)},


    { date: new Date('2024-05-03'),
      place: 'le Gallia',
      address:
        {firstLine: '35 rue de Méhul',
      city: 'Pantin'} ,
      timeStart: this.time(16, 0),
      timeStop: this.time(19, 0)},


    { date: new Date('2024-05-03'),
      place: 'le Gallia',
      address:
        {firstLine: '35 rue de Méhul',
      city: 'Pantin'} ,
      timeStart: this.time(16, 0),
      timeStop: this.time(19, 0)}
    ];

  constructor(protected router: Router) {};

  time(hour: number, minute: number) {
   const date = new Date();
   date.setHours(hour, minute, 0);
   return this.formatTime(date);
 }


  formatTime(date: Date): string {
   const hours = date.getHours().toString().padStart(2, '0');
   const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
   }

  getAddressLines(address: Address) : string[] {
    return Object.values(address);
  }

  getAddressKeys(address: Address) : string[] {
    return Object.keys(address);
  }
}
