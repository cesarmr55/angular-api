import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NasaService {
  private apiKey = 'DEMO_KEY'; // remplace par ta vraie clé si tu veux
  private baseUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getApod() {
    return this.http.get(`${this.baseUrl}?api_key=${this.apiKey}`);
  }
}
