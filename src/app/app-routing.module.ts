import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './pokedex/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './pokedex/pokemon-detail/pokemon-detail.component';
import {ExtensionsListComponent} from './pokemon-tcgp/extensions-list/extensions-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/pokedex', pathMatch: 'full'
  },
  {
    path: 'pokedex', component: PokemonListComponent
  },
  {path: 'pokedex/:region', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
  {path: 'tcgp', component: ExtensionsListComponent},
  {path: '**', redirectTo: '/pokedex'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
