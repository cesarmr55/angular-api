import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRickAndMortyCharacters();
    this.getNasaImageOfTheDay();
  }

  login() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', 'fake-jwt-token');
    }
  }
  
  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
  

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }
  

  getRickAndMortyCharacters() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(data => {
        this.characters = data.results;
      });
  }

  getNasaImageOfTheDay() {
    const apiKey = 'DEMO_KEY';
    this.http.get<any>(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .subscribe(data => {
        this.nasaData = data;
      });
  }
}
