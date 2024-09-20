import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { forkJoin, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  readonly BASE_URL = 'https://pokeapi.co/api/v2/'
  constructor(private http: HttpClient) { }

  async getAllPokemon(): Promise<Pokemon[]> {
    const requests: Observable<Object>[] = [];

    for (let i = 1; i <= 151; i++) {
      requests.push(this.http.get(`${this.BASE_URL}pokemon/${i}`));
    }

    const allDataRaw: any[] = await lastValueFrom(forkJoin(requests));
    const pokemons: Pokemon[] = [];
    
    for (const data of allDataRaw) {
      const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        imageUrl: data.sprites.other['official-artwork'].front_default,
        types: (data.types as any[]).map(type => type.type.name)
      };
      pokemons.push(pokemon);
    }
    return pokemons;
  }
}
