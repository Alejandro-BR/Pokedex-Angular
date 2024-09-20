import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})

export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokeApi: PokeapiService) { }

  async ngOnInit(): Promise<void> {
    this.pokemons = await this.pokeApi.getAllPokemon();
  }

}
