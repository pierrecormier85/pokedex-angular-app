import {PokemonPokedex} from './pokemon-pokedex.model';

export class PokemonLocalisation {
  constructor(
    public regional: number,
    public national: number,
    public localisations: string,
    public nom: string,
  ) {
  }
}
