import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type',
  standalone: true,
  imports: [NgClass, TitleCasePipe],
  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.css'
})

export class PokemonTypeComponent {
  @Input()
  type: string = '';
}

