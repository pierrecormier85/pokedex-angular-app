import { Component } from '@angular/core';
import {Extension} from '../shared/extensions.model';
import {PokedexService} from '../../pokedex/shared/pokedex.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-extensions-list',
  templateUrl: './extensions-list.component.html',
  styleUrl: './extensions-list.component.scss'
})
export class ExtensionsListComponent {
  extensions: Extension[] = [{
    nom: 'Puissance Génétique',
    code: 'puissance-genetique'
  }, {
    nom: 'L\'île fabuleuse',
    code: 'ile-fabuleuse'
  }, {
    nom: 'Promo A',
    code: 'promo-a'
  }];
}
