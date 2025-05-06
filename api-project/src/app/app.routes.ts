import { Routes } from '@angular/router';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { NasaComponent } from './components/nasa/nasa.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'rick-and-morty', pathMatch: 'full' },
  { path: 'rick-and-morty', component: RickAndMortyComponent, canActivate: [AuthGuard] },
  { path: 'nasa', component: NasaComponent, canActivate: [AuthGuard] },
];
