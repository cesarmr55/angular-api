import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-rick-and-morty',
  imports: [CommonModule, HttpClientModule],
  template: `
    <h2>Personnages de Rick & Morty</h2>

    <div *ngIf="characters.length; else loading">
      <div *ngFor="let character of characters" style="margin-bottom: 1rem;">
        <h4>{{ character.name }}</h4>
        <img [src]="character.image" alt="{{ character.name }}" style="height: 100px; border-radius: 0.5rem;" />
      </div>
    </div>

    <ng-template #loading>
      <p>Chargement des personnages...</p>
    </ng-template>
  `
})
export class RickAndMortyComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(data => {
        this.characters = data.results;
      });
  }
}
