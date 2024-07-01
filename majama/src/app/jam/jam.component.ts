import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JamCard } from './models/jam-card.model';
import { JamService } from './services/jam.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-jam',
  templateUrl: './jam.component.html',
  styleUrl: './jam.component.css',
})
export class JamComponent implements AfterViewInit {
  isJamSelected = false;
  selectedJamId: number | null = null;
  jamCard: JamCard[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private jamService: JamService, protected router: Router) {}

  ngAfterViewInit(): void {
    // Subscribe to the jams$ observable when the component initializes
    this.jamService.jams$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({

      next : (jams) => {
        console.log('Received jams from service:', jams);
        this.jamCard = jams;
      },

       error : (error) => {
        console.error('Error fetching jams:', error);
      }
  });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
