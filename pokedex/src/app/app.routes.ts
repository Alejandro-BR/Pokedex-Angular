import { Routes } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

export const routes: Routes = [
  {path: '', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonComponent}
];
