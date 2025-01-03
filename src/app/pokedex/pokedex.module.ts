import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {PokemonItemComponent} from './pokemon-list/pokemon-item/pokemon-item.component';
import {SearchFilterPipe} from './search-filter.pipe';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonItemComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class PokedexModule {
}
