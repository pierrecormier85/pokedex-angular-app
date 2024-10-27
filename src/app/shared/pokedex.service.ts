import {Injectable} from '@angular/core';
import {Pokemon} from './pokemon.model';
import {Pokedex} from './pokedex.model';
import {HttpClient} from '@angular/common/http';
import {PokemonLocalisation} from './pokemon-localisation.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokedex: Pokedex[] = [
    {
      codeAPI: 'galar',
      codeNav: 'galar',
      nomAffichage: 'Galar',
      jeu: 'sword-shield'
    },
    {
      codeAPI: 'isle-of-armor',
      codeNav: 'isolarmure',
      nomAffichage: 'Isolarmure',
      jeu: 'isolarmure'
    },
    {
      codeAPI: 'crown-tundra',
      codeNav: 'couronneige',
      nomAffichage: 'Couronneige',
      jeu: 'couronneige'
    }
  ];

  constructor(private http: HttpClient) {
  }

  getIdRegional(pokemon: Pokemon, regionPokedex: string): number {
    const pokedex: Pokedex = this.pokedex.find(rp => rp.codeNav === regionPokedex);

    if (pokedex) {
      const region = pokemon.pokedex.find(pokemonPokedex => pokemonPokedex.region === pokedex.codeAPI);
      return region ? region.id : undefined;
    } else {
      return pokemon.id;
    }
  }

  async getRegionalLocalisation(jeu: string) {
    const result = this.http.get<PokemonLocalisation[]>(`assets/data/${this.getCodeFromJeu(jeu)}_localisation.json`).toPromise();

    return result.then(pokemonLocalisations => pokemonLocalisations).catch(error => {
      return [];
    });
  }

  getCodeFromJeu(jeu: string) {
    const pokedex = this.pokedex.find(pkx => pkx.jeu === jeu);
    return pokedex ? pokedex.codeNav : '';
  }
}
