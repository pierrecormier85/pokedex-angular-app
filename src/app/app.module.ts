import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouteReuseStrategy} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
// import { ScrollingModule } from '@angular/cdk/scrolling';
import {SearchFilterPipe} from './pokedex/search-filter.pipe';
import {CustomRouteReuseStrategy} from './router-strategy';
import {AppRoutingModule} from './app-routing.module';


import {VirtualScrollerModule} from 'ngx-virtual-scroller';
import {SimpleNotificationsModule} from 'angular2-notifications';

import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTooltip} from '@angular/material/tooltip';
import {PokemonTcgpModule} from './pokemon-tcgp/pokemon-tcgp.module';
import {PokedexModule} from './pokedex/pokedex.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    VirtualScrollerModule,
    // ScrollingModule,
    SimpleNotificationsModule.forRoot({preventDuplicates: true}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:5000'
    }),
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltip,
    PokemonTcgpModule,
    PokedexModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
}
