import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { JamCard } from '../models/jam-card.model';

@Injectable({
  providedIn: 'root'
})
export class JamService {
  private readonly url = 'http://localhost:8000/api/jams';

  private JamsSubject = new BehaviorSubject<JamCard[]>([]);
  jams$ = this.JamsSubject.asObservable();

  constructor(private http: HttpClient) { this.loadJams(); }

  private loadJams(): void {
    this.http.get<any>(this.url).pipe(
      map(response => response['hydra:member'] as JamCard[])
    ).subscribe( {
      next : (jams: JamCard[]) => this.JamsSubject.next(jams),
      error : (error) => console.error('Failed to load jams:', error)
    });
  }

}
