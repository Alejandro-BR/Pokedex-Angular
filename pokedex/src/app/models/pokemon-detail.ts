import { Pokemon } from "./pokemon";

export interface PokemonDetail extends Pokemon {
  height: number;
  weight: number;
}
