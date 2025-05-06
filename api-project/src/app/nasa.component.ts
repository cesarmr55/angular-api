import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-nasa',
  imports: [CommonModule, HttpClientModule],
  template: `
    <h2>Image de la NASA du jour</h2>

    <div *ngIf="nasaData; else loading">
      <h4>{{ nasaData.title }}</h4>
      <p>{{ nasaData.explanation }}</p>
      <img [src]="nasaData.url" alt="{{ nasaData.title }}" style="max-width: 100%; border-radius: 0.5rem;" />
    </div>

    <ng-template #loading>
      <p>Chargement de l'image...</p>
    </ng-template>
  `
})
export class NasaComponent implements OnInit {
  nasaData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const apiKey = 'DEMO_KEY'; 
    this.http.get<any>(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .subscribe(data => {
        this.nasaData = data;
      });
  }
}
