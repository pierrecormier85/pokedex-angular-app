import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/pokedex', pathMatch: 'full'
  },
  {
    path: 'pokedex', component: PokemonListComponent
  },
  {path: 'pokedex/:region', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
  {path: '**', redirectTo: '/pokedex'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
