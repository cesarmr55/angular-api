import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api-project';
  characters: any[] = [];
  nasaData: any;

  constructor(private http: HttpClient, public authService: AuthService) {}

  ngOnInit(): void {
    this.getRickAndMortyCharacters();
    this.getNasaImageOfTheDay();
  }

  getRickAndMortyCharacters(): void {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(data => {
        this.characters = data.results;
      });
  }

  getNasaImageOfTheDay(): void {
    const apiKey = 'DEMO_KEY';
    this.http.get<any>(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .subscribe(data => {
        this.nasaData = data;
      });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}
