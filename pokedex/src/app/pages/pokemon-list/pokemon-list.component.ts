import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokeapiService } from '../../services/pokeapi.service';
import { TitleCasePipe } from '@angular/common';
import { DigitNumberPipe } from '../../pipes/digit-number.pipe';
import { PokemonTypeComponent } from '../../components/pokemon-type/pokemon-type.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [TitleCasePipe, DigitNumberPipe, PokemonTypeComponent],
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
