import { Component } from '@angular/core';
import { Card } from './models/card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menuCards: Card[] = [
    {title: 'Jam Session', image: 'jam', route: '/jam'},
    {title: 'Concerts', image: 'concert', route: '/concert'},
    {title: 'News', image: 'news', route: '/news'},
    {title: 'Nos Artistes', image: 'roaster', route: '/roaster'},
    {title: 'Prestations', image: 'presta', route: '/prestation'},
    {title: 'Contact', image: 'contact', route: '/contact'}
  ];

  constructor(protected router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
