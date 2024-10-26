import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Pokemon} from '../../shared/pokemon.model';
import {PokemonCapture} from '../../shared/pokemon-capture.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonItemComponent {

  @Input() pokemon: Pokemon;
  @Input() region: string;
  @Input() pokemonsCapture: PokemonCapture[];

  pad(number, length) {
    let str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  getIdRegional(): number {
    switch (this.region) {
      case 'galar' :
        return this.pokemon.galarId;
      case 'isolarmure' :
        return this.pokemon.isolarmureId;
      case 'couronneige' :
        return this.pokemon.couronneigeId;
      default:
        return this.pokemon.id;
    }
  }

  isPokemonCapture(): boolean {
    let isPokemonCapture = false;
    if (this.pokemonsCapture) {
      const pokemonCapture = this.pokemonsCapture.find(pc => pc.id === this.getIdRegional());
      isPokemonCapture = pokemonCapture ? pokemonCapture.capture : false;
    }
    return isPokemonCapture;
  }
}
