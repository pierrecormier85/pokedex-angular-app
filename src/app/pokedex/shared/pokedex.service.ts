import {Injectable} from '@angular/core';
import {Pokemon} from './pokemon.model';
import {Pokedex} from './pokedex.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokedex: Pokedex[] = [
    {
      codeAPI: 'kanto',
      codeNav: 'Kanto',
      nomAffichage: 'Kanto',
      jeu: 'red-blue',
      nomJeuAffichage: 'Rouge/Bleu/Jaune',
    }, {
      codeAPI: 'original-johto',
      codeNav: 'johto',
      nomAffichage: 'Johto',
      jeu: 'gold-silver',
      nomJeuAffichage: 'Or/Argent/Crystal',
    }, {
      codeAPI: 'hoenn',
      codeNav: 'hoenn',
      nomAffichage: 'Hoenn',
      jeu: 'ruby-sapphire',
      nomJeuAffichage: 'Ruby/Saphir/Emeraude',
    },
    // {
    //   codeAPI: 'updated-kanto',
    //   codeNav: 'kanto-rfvf',
    //   nomAffichage: 'Konto (RFVF)',
    //   jeu: 'firered-leafgreen',
    //   nomJeuAffichage: 'Rouge feu/Vert Feuille',
    // },
    {
      codeAPI: 'original-sinnoh',
      codeNav: 'sinnoh-dp',
      nomAffichage: 'Sinnoh (DP)',
      jeu: 'diamond-pearl',
      nomJeuAffichage: 'Diamand/Perle',
    }, {
      codeAPI: 'extended-sinnoh',
      codeNav: 'sinnoh-dp',
      nomAffichage: 'Sinnih (P)',
      jeu: 'platinum',
      nomJeuAffichage: 'Platine',
    }, {
      codeAPI: 'updated-johto',
      codeNav: 'johto-hgss',
      nomAffichage: 'Johto (HGSS)',
      jeu: 'heartgold-soulsilver',
      nomJeuAffichage: 'Heart Gold/Soul Silver',
    }, {
      codeAPI: 'original-unova',
      codeNav: 'unys',
      nomAffichage: 'Unys (BN)',
      jeu: 'black-white',
      nomJeuAffichage: 'Blanc/Noir',
    }, {
      codeAPI: 'updated-unova',
      codeNav: 'unys-b2n2',
      nomAffichage: 'Unys (B2N2)',
      jeu: 'black-2-white-2',
      nomJeuAffichage: 'Blanc2/Noir2',
    },
    // {
    //   codeAPI: '',
    //   codeNav: '',
    //   nomAffichage: 'Kalos',
    //   jeu: 'x-y',
    //   nomJeuAffichage: 'X/Y',
    // },
    {
      codeAPI: 'updated-hoenn',
      codeNav: 'hoenn-rosa',
      nomAffichage: 'Hoenn (ROSA)',
      jeu: 'omega-ruby-alpha-sapphire',
      nomJeuAffichage: 'Ruby Omega/Saphir Alpha',
    }, {
      codeAPI: 'original-alola',
      codeNav: 'alola',
      nomAffichage: 'Alola',
      jeu: 'sun-moon',
      nomJeuAffichage: 'Soleil/Lune',
    }, {
      codeAPI: 'updated-alola',
      codeNav: 'alola-usul',
      nomAffichage: 'Alola (USUL)',
      jeu: 'ultra-sun-ultra-moon',
      nomJeuAffichage: 'Ultra Soleil/Ultra Lune',
    }, {
      codeAPI: 'letsgo-kanto',
      codeNav: 'letsgo-kanto',
      nomAffichage: 'Kanto (LetsGo)',
      jeu: 'sword-lets-go-pikachu-lets-go-eevee',
      nomJeuAffichage: 'Let\'s Go Pikachu/Evoli',
    }, {
      codeAPI: 'galar',
      codeNav: 'galar',
      nomAffichage: 'Galar',
      jeu: 'sword-shield',
      nomJeuAffichage: 'Epée/Bouclier',
    }, {
      codeAPI: 'isle-of-armor',
      codeNav: 'isolarmure',
      nomAffichage: 'Isolarmure',
      jeu: 'isolarmure',
      nomJeuAffichage: 'EB Isolarmure',
    }, {
      codeAPI: 'crown-tundra',
      codeNav: 'couronneige',
      nomAffichage: 'Couronneige',
      jeu: 'couronneige',
      nomJeuAffichage: 'EB Couronneige',
    }, {
      codeAPI: 'hisui',
      codeNav: 'hisui',
      nomAffichage: 'Hisui',
      jeu: 'legends-arceus',
      nomJeuAffichage: 'Legends Arceus',
    }, {
      codeAPI: 'paldea',
      codeNav: 'paldea',
      nomAffichage: 'Paldea',
      jeu: 'scarlet-violet',
      nomJeuAffichage: 'Ecarlate/Violet',
    }, {
      codeAPI: 'kitakami',
      codeNav: 'kitakami',
      nomAffichage: 'Kitakami',
      jeu: 'the-teal-mask',
      nomJeuAffichage: 'EV Le Masque Turquoise',
    }, {
      codeAPI: 'blueberry',
      codeNav: 'blueberry',
      nomAffichage: 'Blueberry',
      jeu: 'the-indigo-disk',
      nomJeuAffichage: 'EV Le Disque Indigo',
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

  getCodeFromJeu(jeu: string) {
    const pokedex = this.pokedex.find(pkx => pkx.jeu === jeu);
    return pokedex ? pokedex.codeNav : '';
  }
}
