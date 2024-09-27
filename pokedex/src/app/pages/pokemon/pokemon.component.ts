import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonDetail } from '../../models/pokemon-detail';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DigitNumberPipe } from "../../pipes/digit-number.pipe";
import { PokemonTypeComponent } from "../../components/pokemon-type/pokemon-type.component";
import { TitleCasePipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [DigitNumberPipe, PokemonTypeComponent, TitleCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit, OnDestroy {
  pokemon: PokemonDetail | null = null;
  routeParamMap$: Subscription | null = null;

  constructor(
    private pokeapi: PokeapiService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnDestroy(): void {
    this.routeParamMap$?.unsubscribe();
  }

  async ngOnInit(): Promise<void> {
    this.routeParamMap$ = this.activatedRoute.paramMap.subscribe(async params => {
      const id = params.get('id') as unknown as number;
      this.pokemon = await this.pokeapi.getPokemonDetail(id);
    });
    // this.activatedRoute.paramMap.subscribe(this.loadPokemon);
  }

  // async loadPokemon(params: ParamMap) {
  //   const id = params.get('id') as unknown as number;
  //   this.pokemon = await this.pokeapi.getPokemonDetail(id);
  // }

  goPrevious() {
    this.goOtherPokemon(-1);
  }

  goNext() {
    this.goOtherPokemon(+1);
  }

  goBack() {
    this.router.navigateByUrl('/')
  }

  goOtherPokemon(offset: number) {
    let id = this.pokemon?.id as number + offset;
    if (id < 1) {
      id = 151;
    } else if (id > 151) {
      id = 1;
    }
    this.router.navigateByUrl(`pokemon/${id}`);
  }
}