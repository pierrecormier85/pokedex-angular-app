import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Pokemon} from '../shared/pokemon.model';
import {PokemonService} from '../shared/pokemon.service';
import {VirtualScrollerComponent} from 'ngx-virtual-scroller';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PokemonCapture} from '../shared/pokemon-capture.model';
import {PokedexService} from '../shared/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  regionPokedex;
  pokemons: Pokemon[] = [];
  pokemonsCapture: PokemonCapture[] = [];
  noOfPokemonLoaded: number;
  pokemonListSubscription;
  noOfLoadedPokemonSubscription;
  searchItem: string;
  searchItemSubscription;
  scrolled = true;
  resizeTimeout: any = 250;
  masquerCapture = false;
  afficherCapture = false;

  @ViewChild(VirtualScrollerComponent)
  private virtualScroller: VirtualScrollerComponent;


  @HostListener('window:resize')
  onWindowResize() {
    // debounce resize, wait for resize to finish before doing stuff
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout((() => {
      this.virtualScroller.invalidateCachedMeasurementAtIndex(0);
    }).bind(this), 500);
  }

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,
              private pokemonService: PokemonService, private pokedexService: PokedexService) {
    this.pokemonService.previousPokemonID.subscribe(
      (response) => {
        this.scrolled = false;
        this.focusOnAnItem(response);
      }
    );
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.regionPokedex = params['region'];
        this.initPokemonList();

        localStorage.removeItem('pokedex');

        if (this.regionPokedex) {
          this.pokemonsCapture = JSON.parse(localStorage.getItem(this.regionPokedex));

          if (!this.pokemonsCapture) {
            this.pokemonsCapture = [];
          }

          localStorage.setItem('pokedex', this.regionPokedex);
        }
      }
    );
  }

  initPokemonList() {
    if (this.pokemonService.pokemons[0]) { // List already loaded
      this.pokemons = this.pokemonService.pokemons
        .filter(pokemon => this.pokedexService.getIdRegional(pokemon, this.regionPokedex))
        .sort((a, b) =>
          this.pokedexService.getIdRegional(a, this.regionPokedex) - this.pokedexService.getIdRegional(b, this.regionPokedex));
      this.noOfPokemonLoaded = this.pokemonService.noOfPokemonsLoaded;
    } else { // List not already Loaded
      this.pokemonListSubscription = this.pokemonService.pokemonsListChanged.subscribe(
        (response) => {
          this.pokemons = response.slice(0, this.noOfPokemonLoaded)
            .filter(pokemon => this.pokedexService.getIdRegional(pokemon, this.regionPokedex))
            .sort((a, b) =>
              this.pokedexService.getIdRegional(a, this.regionPokedex) - this.pokedexService.getIdRegional(b, this.regionPokedex));
        }
      );
      this.noOfLoadedPokemonSubscription = this.pokemonService.newPokemonsLoaded.subscribe(
        (response) => {
          this.noOfPokemonLoaded = response;
        }
      );
    }
    this.searchItemSubscription = this.pokemonService.searchItemSubject.subscribe(
      (response) => {
        this.searchItem = response;
      }
    );
  }

  focusOnAnItem(index) {
    this.virtualScroller.scrollToIndex(index, undefined, -192, 0);
    setTimeout(() => {
      this.scrolled = true;
    }, 250); // Delay to allow the fade in animation to take place
  }

  public trackByPokemonID(index: number, pokemon: Pokemon): number {
    return pokemon.id;
  }

  ngOnDestroy(): void {
    this.pokemonService.searchItemSubject.next('');
    this.searchItemSubscription.unsubscribe();
  }

  doMasquerCapture() {
    this.masquerCapture = !this.masquerCapture;
    if (this.masquerCapture) {
      this.pokemons = this.pokemonService.pokemons
        .filter(pokemon => this.pokedexService.getIdRegional(pokemon, this.regionPokedex))
        .filter(pokemon => !this.isPokemonCapture(pokemon))
        .sort((a, b) =>
          this.pokedexService.getIdRegional(a, this.regionPokedex) - this.pokedexService.getIdRegional(b, this.regionPokedex));
    } else {
      this.pokemons = this.pokemonService.pokemons
        .filter(pokemon => this.pokedexService.getIdRegional(pokemon, this.regionPokedex))
        .sort((a, b) =>
          this.pokedexService.getIdRegional(a, this.regionPokedex) - this.pokedexService.getIdRegional(b, this.regionPokedex));
    }
  }

  activeAfficherCapture() {
    this.afficherCapture = !this.afficherCapture;
  }

  isPokemonCapture(pokemon: Pokemon): boolean {
    let isPokemonCapture = false;
    if (this.pokemonsCapture) {
      const pokemonCapture = this.pokemonsCapture.find(pc => pc.id === this.pokedexService.getIdRegional(pokemon, this.regionPokedex));
      isPokemonCapture = pokemonCapture ? pokemonCapture.capture : false;
    }
    return isPokemonCapture;
  }

}
