import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Pokemon} from '../../shared/pokemon.model';
import {PokemonCapture} from '../../shared/pokemon-capture.model';
import {PokedexService} from '../../shared/pokedex.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonItemComponent {

  @Input() pokemon: Pokemon;
  @Input() region: string;
  @Input() afficherCapture: boolean;
  @Input() pokemonsCapture: PokemonCapture[];


  constructor(public pokedexService: PokedexService, private router: Router) {
  }

  pad(number, length) {
    let str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  isPokemonCapture(): boolean {
    let isPokemonCapture = false;
    if (this.pokemonsCapture) {
      const pokemonCapture = this.pokemonsCapture.find(pc => pc.id === this.pokedexService.getIdRegional(this.pokemon, this.region));
      isPokemonCapture = pokemonCapture ? pokemonCapture.capture : false;
    }
    return isPokemonCapture;
  }

  capturePokemon(capture: boolean) {
    const pokemonCapture = this.pokemonsCapture.find(capture => capture.id === this.pokedexService.getIdRegional(this.pokemon, this.region));

    if (pokemonCapture) {
      pokemonCapture.capture = capture;
    } else {
      this.pokemonsCapture.push({
        id: this.pokemon.id,
        capture: capture
      });
    }


    localStorage.removeItem(this.region);
    localStorage.setItem(this.region, JSON.stringify(this.pokemonsCapture));
  }

  afficherDetailsPokemon() {
    if (!this.afficherCapture) {
      this.router.navigate(['/pokemon', this.pokemon.id]);
    }
  }
}
