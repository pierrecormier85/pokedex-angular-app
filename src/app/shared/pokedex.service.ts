import {Injectable} from '@angular/core';
import {Pokemon} from './pokemon.model';
import {Pokedex} from './pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokedex: Pokedex[] = [
    {
      codeAPI: 'galar',
      codeNav: 'galar',
      nomAffichage: 'Galar'
    },
    {
      codeAPI: 'isle-of-armor',
      codeNav: 'isolarmure',
      nomAffichage: 'Isolarmure'
    },
    {
      codeAPI: 'crown-tundra',
      codeNav: 'couronneige',
      nomAffichage: 'Couronneige'
    }
  ];

  getIdRegional(pokemon: Pokemon, regionPokedex: string): number {
    const pokedex: Pokedex = this.pokedex.find(rp => rp.codeNav === regionPokedex);

    if (pokedex) {
      const region = pokemon.pokedex.find(pokemonPokedex => pokemonPokedex.region === pokedex.codeAPI);
      return region ? region.id : undefined;
    } else {
      return pokemon.id;
    }
  }
}
