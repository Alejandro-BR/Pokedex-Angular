import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonDetail } from '../../models/pokemon-detail';
import { ActivatedRoute } from '@angular/router';
import { DigitNumberPipe } from "../../pipes/digit-number.pipe";
import { PokemonTypeComponent } from "../../components/pokemon-type/pokemon-type.component";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [DigitNumberPipe, PokemonTypeComponent, TitleCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  pokemon: PokemonDetail | null = null;

  constructor(private pokeapi: PokeapiService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as unknown as number;
    this.pokemon = await this.pokeapi.getPokemonDatail(id);
  }

}
