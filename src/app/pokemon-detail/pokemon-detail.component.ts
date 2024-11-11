import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../shared/pokemon.service';
import {Pokemon} from '../shared/pokemon.model';
import {Subject} from 'rxjs';
import {PokedexService} from '../shared/pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemonId;
  pokemon;

  pokemonImageUrl;
  pokemonDefaultColor;
  heightInMetres;
  heightInFeetInches;
  weightInKgs;
  weightInPounds;
  pokemonStats;
  maxPokemonStats = [];
  minPokemonStats = [];
  statsToShow = [];
  maxStat;
  maxMaxStat;
  maxMinStat;
  selectedStat = 'base';
  stats: string[] = ['0%', '0%', '0%', '0%', '0%', '0%'];
  imageLoading = true;
  pokemonGenera;
  abilities = [];
  abilitySelected = 0;
  allAbilitiesReceived = false;
  selectedAbilityFlavorText;
  selectedAbilityEffect;
  selectedAbilityShortEffect;
  unavailableAbilityText;

  pokemonForms = [];
  formattedFormNames = [];
  selectedFormNo = 0;
  // varietiesReversed = false; // For Magearna
  formColors = {
    'charizard-mega-x': 'black',
    'latias-mega': 'purple',
    'latios-mega': 'purple',
    'castform-sunny': 'red',
    'castform-rainy': 'blue',
    'castform-snowy': 'purple',
    'burmy-sandy': 'brown',
    'burmy-trash': 'pink',
    'rotom-heat': 'red',
    'rotom-wash': 'blue',
    'rotom-frost': 'purple',
    'rotom-fan': 'yellow',
    'rotom-mow': 'green',
    'wormadam-sandy': 'brown',
    'wormadam-trash': 'pink',
    'darmanitan-zen': 'gray',
    'kyurem-black': 'black',
    'kyurem-white': 'white',
    'oricorio-pom-pom': 'yellow',
    'oricorio-pau': 'pink',
    'oricorio-sensu': 'purple',
    'lycanroc-midnight': 'red',
    'lycanroc-dusk': 'brown',
    'minior-orange-meteor': 'red', // Because its second in "pokemon.varieties"; actually its minior-red
    'necrozma-ultra': 'yellow',
    'magearna-original': 'red',
    'rattata-alola': 'black',
    'raticate-alola': 'black',
    'raichu-alola': 'brown',
    'sandshrew-alola': 'blue',
    'sandslash-alola': 'blue',
    'vulpix-alola': 'white',
    'ninetales-alola': 'white',
    'meowth-alola': 'gray',
    'persian-alola': 'gray',
    'grimer-alola': 'green',
    'muk-alola': 'green',
    'marowak-alola': 'black',
    'meowth-galar': 'brown',
    'ponyta-galar': 'pink',
    'rapidash-galar': 'pink',
    'mr-mime-galar': 'blue',
    'corsola-galar': 'white',
    'zigzagoon-galar': 'black',
    'linoone-galar': 'black',
    'darumaka-galar': 'white',
    'darmanitan-galar-standard': 'white',
    'darmanitan-galar-zen': 'white',
    'stunfisk-galar': 'gray',
    'articuno-galar': 'purple',
    'zapdos-galar': 'red',
    'moltres-galar': 'black',
    'slowking-galar': 'purple',
    'growlithe-hisui': 'red',
    'arcanine-hisui': 'gray',
    'voltorb-hisui': 'red',
    'electrode-hisui': 'red',
    'qwilfish-hisui': 'black',
    'sneasel-hisui': 'purple',
    'zorua-hisui': 'white',
    'zoroark-hisui': 'white',
    'braviary-hisui': 'white',
    'calyrex-ice': 'white',
    'calyrex-shadow': 'purple'
  };

  formNameFormatted = {
    'darmanitan-galar-zen': 'Galarian Darmanitan Zen',
    'zygarde-10': '10%',
    'zygarde-50': '50%',
    'zygarde-10-power-construct': '10% Power Construct',
    'zygarde-50-power-construct': '50% Power Construct',
    'zygarde-complete': 'Complete',
    'oricorio-pau': 'pa\'u',
    'minior-red': 'core',
    'minior-red-meteor': 'meteor',
    'necrozma-dusk': 'Dusk Mane Necrozma',
    'necrozma-dawn': 'Dawn Wings Necrozma',
    'necrozma-ultra': 'Ultra Necrozma',
    'toxtricity-amped-gmax': 'Gigantamax Amped',
    'toxtricity-low-key-gmax': 'Gigantamax Low Key',
    'urshifu-single-strike-gmax': 'Gigantamax Single Strike',
    'urshifu-rapid-strike-gmax': 'Gigantamax Rapid Strike',
    'eternatus-eternamax': 'Eternamax Eternatus',
    'calyrex-ice': 'Ice Rider Calyrex',
    'calyrex-shadow': 'Shadow Rider Calyrex'
  };


  visible = true;
  imageVisible = true;
  // Mega Evolution Animation
  megaEvolving = false;
  megaEvolveAnimationEnabled = true;
  SphereVisible = false;
  SigilVisible = false;
  sigilEnd = false;
  BubblesVisible = false;
  imageLoadedForMegaEvolution = false;
  imageLoadedForMegaEvolutionSubject = new Subject<boolean>();

  evoChainsFetched = false;
  selectedEvolutionId;
  evolutionChain = [];
  evolutionDesc = [];
  exceptionalChainType;
  evolutionChainExceptions_112 = [
    'oddish',
    'poliwag',
    'ralts',
    'cosmog'];
  evolutionChainExceptions_12 = [
    'meowth',
    'slowpoke',
    'nincada',
    'snorunt',
    'clamperl',
    'burmy',
    'applin',
    'yamask'];//toxel,kubfu after form specific chains?
  evolutionChainExceptions_122 = [
    'wurmple',
  ];
  evolutionChainExceptions_13 = [
    'tyrogue'
  ];
  evolutionChainExceptions_18 = [
    'eevee'];


  typeDefences = {'4x': [], '2x': [], '1x': [], '0.5x': [], '0.25x': [], '0x': []};
  typeChart = [{'name': 'normal', 'immunes': ['ghost'], 'weaknesses': ['rock', 'steel'], 'strengths': []},
    {'name': 'fire', 'immunes': [], 'weaknesses': ['fire', 'water', 'rock', 'dragon'], 'strengths': ['grass', 'ice', 'bug', 'steel']},
    {'name': 'water', 'immunes': [], 'weaknesses': ['water', 'grass', 'dragon'], 'strengths': ['fire', 'ground', 'rock']},
    {'name': 'electric', 'immunes': ['ground'], 'weaknesses': ['electric', 'grass', 'dragon'], 'strengths': ['water', 'flying']},
    {
      'name': 'grass',
      'immunes': [],
      'weaknesses': ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
      'strengths': ['water', 'ground', 'rock']
    },
    {
      'name': 'ice',
      'immunes': [],
      'weaknesses': ['fire', 'water', 'ice', 'steel'],
      'strengths': ['grass', 'ground', 'flying', 'dragon']
    },
    {
      'name': 'fighting',
      'immunes': ['ghost'],
      'weaknesses': ['poison', 'flying', 'psychic', 'bug', 'fairy'],
      'strengths': ['normal', 'ice', 'rock', 'dark', 'steel']
    },
    {'name': 'poison', 'immunes': ['steel'], 'weaknesses': ['poison', 'ground', 'rock', 'ghost'], 'strengths': ['grass', 'fairy']},
    {
      'name': 'ground',
      'immunes': ['flying'],
      'weaknesses': ['grass', 'bug'],
      'strengths': ['fire', 'electric', 'poison', 'rock', 'steel']
    },
    {'name': 'flying', 'immunes': [], 'weaknesses': ['electric', 'rock', 'steel'], 'strengths': ['grass', 'fighting', 'bug']},
    {'name': 'psychic', 'immunes': ['dark'], 'weaknesses': ['psychic', 'steel'], 'strengths': ['fighting', 'poison']},
    {
      'name': 'bug',
      'immunes': [],
      'weaknesses': ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'],
      'strengths': ['grass', 'psychic', 'dark']
    },
    {'name': 'rock', 'immunes': [], 'weaknesses': ['fighting', 'ground', 'steel'], 'strengths': ['fire', 'ice', 'flying', 'bug']},
    {'name': 'ghost', 'immunes': ['normal'], 'weaknesses': ['dark'], 'strengths': ['psychic', 'ghost']},
    {'name': 'dragon', 'immunes': ['fairy'], 'weaknesses': ['steel'], 'strengths': ['dragon']},
    {'name': 'dark', 'immunes': [], 'weaknesses': ['fighting', 'dark', 'fairy'], 'strengths': ['psychic', 'ghost']},
    {'name': 'steel', 'immunes': [], 'weaknesses': ['fire', 'water', 'electric', 'steel'], 'strengths': ['ice', 'rock', 'fairy']},
    {'name': 'fairy', 'immunes': [], 'weaknesses': ['fire', 'poison', 'steel'], 'strengths': ['fighting', 'dragon', 'dark']}];
  types = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
    'unknown',
    'shadow'];

  genderDifferences = {
    '003': 'Female\'s flower has a seed in it',
    '012': 'Female has black (purple in Generation V) spots on her lower wings',
    '019': 'Female has shorter whiskers',
    '020': 'Female has shorter whiskers',
    '025': 'Female\'s tail ends in the upper half of a heart',
    '026': 'Female\'s tail lacks a point',
    '041': 'Female has smaller fangs',
    '042': 'Female has smaller fangs',
    '044': 'Female has one large spot per bud',
    '045': 'Female\'s petals have larger spots',
    '064': 'Female has smaller whiskers',
    '065': 'Female has smaller whiskers',
    '084': 'Male has black necks and female has beige necks',
    '085': 'Male has black necks and female has beige necks',
    '097': 'Female has more collar fur',
    '111': 'Male\'s horn is larger',
    '112': 'Male\'s horn is larger',
    '118': 'Male\'s horn is larger',
    '119': 'Male\'s horn is larger',
    '123': 'Female\'s abdomen is larger',
    '129': 'Male has yellow whiskers and Female has white whiskers',
    '130': 'Male has blue whiskers and female has white whiskers',
    '133': 'Unlike other Eevee, in Pokémon: Let\'s Go, Pikachu! and Let\'s Go, Eevee!, the partner Eevee has gender differences. Male partner Eevee look the same as all other Eevee, but female partner Eevee have a unique heart-shaped tail pattern. In Generation VIII, this gender difference was applied to all female Eevee',
    '154': 'Female has smaller antennae',
    '165': 'Female has smaller antennae',
    '166': 'Female has smaller antennae',
    '178': 'Male has three body stripes',
    '185': 'Female\'s head "branch" is smaller',
    '186': 'Female has smaller cheeks',
    '190': 'Male has shorter head fur',
    '194': 'Female has one set of gill branches',
    '195': 'Female has smaller dorsal fins',
    '198': 'Male\'s "hat" is larger',
    '202': 'Female\'s mouth has lipstick-like marking',
    '203': 'Female\'s body is more yellow',
    '207': 'Female has smaller stinger',
    '208': 'Female lacks an outer tooth on each side',
    '212': 'Female\'s abdomen is larger',
    '214': 'Female\'s horn is heart-shaped',
    '215': 'Female\'s feather is shorter',
    '217': 'Female has longer shoulder fur',
    '221': 'Female has shorter tusks',
    '224': 'Female has smaller suction cups',
    '229': 'Female has shorter horns',
    '232': 'Female has shorter tusks',
    '255': 'Male has a black speck on his rear',
    '256': 'Female has smaller head feathers',
    '257': 'Female\'s head crest is smaller',
    '267': 'Male\'s red spots are larger',
    '269': 'Female has smaller antennae',
    '272': 'Male has thicker stripes',
    '274': 'Female has smaller leaf',
    '275': 'Female has smaller leaves',
    '307': 'Male\'s ears are higher than the female\'s',
    '308': 'Male has a larger bulb on his head',
    '315': 'Female\'s body leaf is longer',
    '316': 'Female\'s feather is shorter',
    '317': 'Female has shorter whiskers',
    '322': 'Female has larger hump',
    '323': 'Female has larger humps',
    '332': 'Female has a large spike on her chest where male has two normal ones',
    '350': 'Male\'s hair-like fins are shorter',
    '369': 'Female has smaller jaw guard',
    '396': 'Female\'s head is less white',
    '397': 'Female\'s forehead spot is smaller',
    '398': 'Female\'s forehead spot is smaller',
    '399': 'Male has more tail curls',
    '400': 'Male\'s face have two additional curls on beige mask',
    '401': 'Female has larger collar',
    '402': 'Female has smaller mustache',
    '403': 'Female has blue hind feet and a shorter mane',
    '404': 'Female has exposed ankles and a shorter mane',
    '405': 'Female\'s mane is smaller',
    '407': 'Female has longer cape',
    '415': 'Male\'s lower face has no red mark',
    '417': 'Female\'s head stripe is shorter',
    '418': 'Male has two white spots on his back while Female has one',
    '419': 'Male has two white bumps on his back while female has one',
    '424': 'Male has shorter hair on his head',
    '443': 'Male has grooved fin',
    '444': 'Male has grooved fin',
    '445': 'Male has grooved fin',
    '449': 'Male and female\'s color patterns are inverted',
    '450': 'Male\'s body is light brown while female\'s is dark gray',
    '453': 'Female has higher "bandages"',
    '454': 'Female\'s throat sac is smaller',
    '456': 'Female has larger tail fins',
    '457': 'Female has larger fins',
    '459': 'Female\'s midsection is white',
    '460': 'Female has longer chest fur',
    '461': 'Female has shorter ear "feathers"',
    '464': 'Female has smaller upper horn',
    '465': 'Female\'s fingers are more magenta than blue',
    '473': 'Female has smaller tusks',
    '521': 'Male has a pink mask with long extensions while the female has a curved feather on the back of her head. Male has a green underside and female has a brown underside.',
    '592': 'Male is blue, frowns, and has a ruffled collar, smooth, diamond-patterned tentacles, and one upper eyelash per eye. Female is pink, smiles, and has a bulbous collar, frilled tentacles, and one lower eyelash per eye. Males have a star-shaped head pattern and a stiff crown while females have a flower-shaped pattern and a limp crown.',
    '593': 'Body color, eyes, head pattern, and tentacle differences are much the same as with Frillish, but the Female\'s eyes are now larger and have two eyelashes each. Males have a facial covering resembling a large moustache while Females have one resembling a fluffy collar. Female has a heart-shaped mouth and the male\'s is hidden inside the "moustache"',
    '668': 'Male has a large mane shaped like the kanji character 大 ō (big or great), a stockier body, and half-brown front legs. Female has long, flowing hair similar to a ponytail and mostly-brown legs. Male\'s tail has a split in it',
    '678': 'Males are mostly blue with white highlights, the inverse of Females. Male\'s eyes are green with light blue sclerae, while Female\'s are red and yellow. Unlike most Pokémon, the moves Meowstic can learn vary by gender, with males learning more status moves and Females learning more attack moves. Male Meowstic have the Hidden Ability Prankster, while Female Meowstic have the Hidden Ability Competitive',
    '876': 'Males have lowered eyes, a triangular mouth pointing upwards like a frown, and more black on its torso, made to resemble a suit. Females have wider eyes, a triangular mouth pointing downwards like a smile, and more white on its torso, made to resemble an apron. Male Indeedee have more Attack, Special Attack, and Speed, while female Indeedee have more Defense, Special Defense, and HP. The two genders also have different moves',
    '902': 'Males have red accents, fierce-looking eyes, longer barbels, and two additional growths on their chin resembling a stubble. Females have pale-blue accents, sad-looking eyes, shorter barbels, and additional accents around their lips and eyes. Male Basculegion have higher Attack, while female Basculegion have higher Special Attack'
  };

  movesList = [];
  delayMovesListLoad = true;
  movesListTimeout;
  movesListLoaded = false;
  levelUpMovesList = [];
  machineMovesList = [];
  eggMovesList = [];
  tutorMovesList = [];
  selectedMove = 'level-up';
  selectedMoveFirstColHeader = {'level-up': 'Level', 'machine': '#', 'egg': '-', 'tutor': '-'};

  selectedGameVersion;

  versions = {
    'red-blue': 1,
    'yellow': 2,
    'gold-silver': 3,
    'crystal': 4,
    'ruby-sapphire': 5,
    'emerald': 6,
    'firered-leafgreen': 7,
    'diamond-pearl': 8,
    'platinum': 9,
    'heartgold-soulsilver': 10,
    'black-white': 11,
    'colosseum': 12,
    'xd': 13,
    'black-2-white-2': 14,
    'x-y': 15,
    'omega-ruby-alpha-sapphire': 16,
    'sun-moon': 17,
    'ultra-sun-ultra-moon': 18,
    'lets-go-pikachu-lets-go-eevee': 19,
    'sword-shield': 20,
    'isolarmure': 21,
    'couronneige': 22,
    'legends-arceus': 23,
    'scarlet-violet': 24,
    'the-teal-mask': 25,
    'the-indigo-disk': 26
  };
  generations = {
    'generation-i': 1,
    'generation-ii': 2,
    'generation-iii': 3,
    'generation-iv': 4,
    'generation-v': 5,
    'generation-vi': 6,
    'generation-vii': 7,
    'generation-viii': 8,
    'generation-ix': 9
  };
  versionToGeneration = {
    'red-blue': 1,
    'yellow': 1,
    'gold-silver': 2,
    'crystal': 2,
    'ruby-sapphire': 3,
    'emerald': 3,
    'firered-leafgreen': 3,
    'diamond-pearl': 4,
    'platinum': 4,
    'heartgold-soulsilver': 4,
    'black-white': 5,
    'black-2-white-2': 5,
    'x-y': 6,
    'omega-ruby-alpha-sapphire': 6,
    'sun-moon': 7,
    'ultra-sun-ultra-moon': 7,
    'lets-go-pikachu-lets-go-eevee': 7,
    'sword-shield': 8,
    'isolarmure': 8,
    'couronneige': 8,
    'legends-arceus': 8,
    'scarlet-violet': 9,
    'the-teal-mask': 9,
    'the-indigo-disk': 9
  };

  currentMoveData;
  currentMoveID = null;
  moveDetails = [];
  moveLevelDetails = [];
  moveMachineDetails = [];
  moveEggDetails = [];
  moveTutorDetails = [];
  moveFlavorTextEntry;
  moveShortEffect;
  moveEffect;
  moveContestType = ['cool', 'beauty', 'cute', 'smart', 'tough'];

  isOnline;

  constructor(private activatedRoute: ActivatedRoute,
              private pokemonService: PokemonService, public pokedexService: PokedexService) {
    this.megaEvolveAnimationEnabled = !this.pokemonService.isMobile;
  }

  ngOnInit(): void {
    if (this.pokemonService.versionMainSwitch) {
      this.selectedGameVersion = localStorage.getItem('SelectedVersion');
    } else {
      this.selectedGameVersion = 'sword-shield';
      localStorage.setItem('SelectedVersion', this.selectedGameVersion);
    }
    // Initialization Logic after Pokemon Fetching in Both If and Else Conditions
    this.activatedRoute.params.subscribe(
      (params) => {
        this.pokemonId = params['id'];
        this.pokemonForms = [];
        this.formattedFormNames = [];
        // From List
        if (this.pokemonService.pokemons[this.pokemonId - 1]) {
          this.initializePokemonAndForms();
          // Directly From Link
        } else {
          this.pokemonService.EverythingLoaded.subscribe(res => {
            this.initializePokemonAndForms();
          });
        }
      }
    );
    // Subscribe to online check
    this.pokemonService.createOnline$().subscribe(isOnline => {
      this.isOnline = isOnline;
    });
  }

  initializePokemonAndForms() {
    const pokemonFromList = this.pokemonService.pokemons[this.pokemonId - 1];
    this.pokemon = new Pokemon(
      pokemonFromList.name,
      pokemonFromList.id,
      pokemonFromList.pokedex,
      pokemonFromList.types,
      pokemonFromList.abilities,
      pokemonFromList.height,
      pokemonFromList.weight,
      pokemonFromList.baseExperience,
      pokemonFromList.heldItems,
      pokemonFromList.is_default,
      pokemonFromList.moves,
      pokemonFromList.stats,
      pokemonFromList.species,
      pokemonFromList.speciesDetails,
      pokemonFromList.color,
      pokemonFromList.genera,
      pokemonFromList.varieties,
      pokemonFromList.evolutionChainID
    );
    this.pokemonDefaultColor = this.pokemon.color;
    this.pokemonService.activePokemon.next(this.pokemon);
    this.requestForms();
    this.formatFormNames();
    // Store as first form in array
    this.pokemonForms[0] = new Pokemon(
      this.pokemon.name,
      this.pokemon.id,
      this.pokemon.pokedex,
      this.pokemon.types,
      this.pokemon.abilities,
      this.pokemon.height,
      this.pokemon.weight,
      this.pokemon.baseExperience,
      this.pokemon.heldItems,
      this.pokemon.is_default,
      this.pokemon.moves,
      this.pokemon.stats,
      this.pokemon.species,
      this.pokemon.speciesDetails,
      this.pokemon.color,
      this.pokemon.genera,
      this.pokemon.varieties,
      this.pokemon.evolutionChainID
    );
    this.initializePokemonFields();
  }

  initializePokemonFields() {
    this.selectedEvolutionId = this.pokemon.id;
    this.selectedStat = 'base';
    this.abilitySelected = 0;
    if (this.pokemon.varieties !== undefined && this.selectedFormNo &&
      this.formColors[this.pokemon.varieties[this.selectedFormNo]['n']] !== undefined) {
      this.pokemon.color = this.formColors[this.pokemon.varieties[this.selectedFormNo]['n']];
      this.pokemonService.activePokemon.next(this.pokemon);
    } else {
      this.pokemon.color = this.pokemonDefaultColor;
      this.pokemonService.activePokemon.next(this.pokemon);
    }
    this.requestAbilityDetails();
    if (!this.evoChainsFetched) {
      this.getEvolutionChain();
      this.evoChainsFetched = true;
    }
    if (this.pokemon.is_default) {
      this.pokemonImageUrl = 'assets/thumbnails-compressed/' + this.pad(this.pokemon.id, 4) + '.png';
    }
    // }
    this.getGenera();
    this.heightInMetres = (this.pokemon.height * 0.1).toFixed(1);
    this.heightInFeetInches = Math.floor(this.heightInMetres * 3.2808) + '"' + Math.round(((this.heightInMetres * 3.2808) % 1) * 12) + '\'';
    this.weightInKgs = (this.pokemon.weight * 0.1).toFixed(1);
    this.weightInPounds = (this.weightInKgs * 2.205).toFixed(1);
    this.pokemonStats = [
      this.pokemon.stats[0]['bs'],
      this.pokemon.stats[1]['bs'],
      this.pokemon.stats[2]['bs'],
      this.pokemon.stats[3]['bs'],
      this.pokemon.stats[4]['bs'],
      this.pokemon.stats[5]['bs']
    ];
    this.maxStat = Math.max(...this.pokemonStats);
    setTimeout(() => {
      this.calculateStats();
    }, 500);
    this.calculateTypeEffectiveness();
    this.getMoves();
  }

  pad(number, length) {
    let str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  imagePreload() {
    this.imageLoading = false;
    if (!this.megaEvolving) {
      this.imageVisible = true;
    } else {
      this.imageLoadedForMegaEvolutionSubject.next(true);
      this.imageLoadedForMegaEvolution = true;
    }
  }

  calculateStats() {
    for (let i = 0; i < 6; i++) {
      let calculatedStat = this.pokemonStats[i] / this.maxStat * 100;
      if (calculatedStat > 10) {
        this.stats[i] = calculatedStat + '%';
      } else {
        calculatedStat = 10;
        this.stats[i] = calculatedStat + '%';
      }
    }
    this.statsToShow = this.pokemonStats;
    this.calculateMinStats();
    this.calculateMaxStats();
  }

  calculateMaxStats() {
    if (this.pokemon.id === 292) { // Shedinja HP
      this.maxPokemonStats[0] = 1;
    } else {
      this.maxPokemonStats[0] = Math.floor((2 * this.pokemonStats[0] + 31 + 63) * 100 / 100 + 100 + 10);
    }
    for (let i = 1; i < 6; i++) {
      this.maxPokemonStats[i] = Math.floor(Math.floor((2 * this.pokemonStats[i] + 31 + 63) * 100 / 100 + 5) * 1.1);
    }
    this.maxMaxStat = Math.max(...this.maxPokemonStats);
  }

  calculateMinStats() {
    if (this.pokemon.id === 292) { // Shedinja HP
      this.minPokemonStats[0] = 1;
    } else {
      this.minPokemonStats[0] = Math.floor((2 * this.pokemonStats[0]) * 100 / 100 + 100 + 10);
    }
    for (let i = 1; i < 6; i++) {
      this.minPokemonStats[i] = Math.floor(Math.floor((2 * this.pokemonStats[i]) * 100 / 100 + 5) * 0.9);
    }
    this.maxMinStat = Math.max(...this.minPokemonStats);
  }

  showStats(type: string) {
    let stats;
    let maxStat;
    switch (type) {
      case 'base': {
        stats = this.pokemonStats;
        maxStat = this.maxStat;
        this.statsToShow = this.pokemonStats;
        this.selectedStat = 'base';
        break;
      }
      case 'max': {
        stats = this.maxPokemonStats;
        maxStat = this.maxMaxStat;
        this.statsToShow = this.maxPokemonStats;
        this.selectedStat = 'max';
        break;
      }
      case 'min': {
        stats = this.minPokemonStats;
        maxStat = this.maxMinStat;
        this.statsToShow = this.minPokemonStats;
        this.selectedStat = 'min';
      }
    }
    for (let i = 0; i < 6; i++) {
      let calculatedStat = stats[i] / maxStat * 100;
      if (calculatedStat > 15) {
        this.stats[i] = calculatedStat + '%';
      } else {
        calculatedStat = 15;
        this.stats[i] = calculatedStat + '%';
      }
    }
  }

  getGenera() {
    this.pokemonGenera = this.pokemon.genera;
  }

  requestAbilityDetails() {
    this.abilities = [];
    for (const ability of this.pokemon.abilities) {
      const abilityID = ability['id'];
      this.abilities.push(this.pokemonService.abilityJSON[abilityID - 1]);
    }
    if (this.abilities.length != 0) {
      this.allAbilitiesReceived = true;
    }
  }

  selectAbility(no: number) {
    this.abilitySelected = no;
    this.unavailableAbilityText = '';
    if (['red-blue', 'yellow', 'gold-silver', 'crystal', 'lets-go-pikachu-lets-go-eevee'].indexOf(this.selectedGameVersion) !== -1) {
      this.unavailableAbilityText = 'Abilities unavailable in the selected games!';
    } else if (!this.availableInSelectedGen(this.abilities[no]['generation'])) {
      this.unavailableAbilityText = 'This ability didn\'t exist in the selected games!';
    } else {
      this.selectedAbilityFlavorText = this.abilities[no]['flavor_text_entries'][this.versions[this.selectedGameVersion]];
      if (this.abilities[no]['effect_entries'] == undefined) {
        this.selectedAbilityEffect = 'Unavailable';
        this.selectedAbilityShortEffect = 'Unavailable';
      } else {
        this.selectedAbilityEffect = this.abilities[no]['effect_entries']['effect'];
        this.selectedAbilityShortEffect = this.abilities[no]['effect_entries']['short_effect'];
      }
    }
  }

  totalBaseStats() {
    return this.pokemonStats ? (this.pokemonStats[0] + this.pokemonStats[1] + this.pokemonStats[2] + this.pokemonStats[3]
      + this.pokemonStats[4] + this.pokemonStats[5]) : 0;
  }

  formatFormNames() {
    for (let i = 0; i < this.pokemon.varieties.length; i++) {
      var formattedName;
      var name = this.pokemon.varieties[i]['n'];
      formattedName = this.formNameFormatted[name];
      if (formattedName === undefined) {
        if (name.indexOf('-totem') !== -1 || name.indexOf('-battle-bond') !== -1 || name.indexOf('minior') !== -1) {
          continue;// Skipping these forms
        } else if (name.indexOf('-mega') !== -1 || name.indexOf('-primal') !== -1 || name === 'greninja-ash') {
          const re = '(' + this.pokemon.species['n'] + ')[-]([a-z]*)';
          const regExp = new RegExp(re, 'g');
          formattedName = name.replace(regExp, '$2 $1');
          formattedName = formattedName.replace(/-/g, ' ');
        } else if (name.indexOf('-alola') !== -1 && this.pokemon.id !== 25) { // Excluding Alola-Cap Pikachu
          formattedName = 'Alolan ' + this.pokemon.species['n'];
        } else if (name.indexOf('-galar') !== -1) {
          formattedName = 'Galarian ' + this.pokemon.species['n'];
        } else if (name.indexOf('-hisui') !== -1) {
          formattedName = 'Hisuian ' + this.pokemon.species['n'];
        } else if (name.indexOf('-gmax') !== -1) {
          formattedName = 'Gigantamax ' + this.pokemon.species['n'];
        } else { // Rest Species
          const re = '(' + this.pokemon.species['n'] + ')[-]([a-z]*)';
          const regExp = new RegExp(re, 'g');
          formattedName = name.replace(regExp, '$2');
          if (this.pokemon.id !== 250) { // excluding Ho-Oh
            formattedName = formattedName.replace(/-/g, ' ');
          }
        }
      }
      this.formattedFormNames.push(formattedName);
    }
  }

  requestForms() {
    // if (this.pokemon.id === 801 && !this.varietiesReversed) { // For magearna Reverse the varieties
    //   this.pokemon.varieties.reverse();
    //   this.varietiesReversed = true;
    // }
    const formIDs = [];
    if (this.pokemon.id !== 774) { // Skipping Minior
      for (const variety of this.pokemon.varieties.slice(1)) {
        if (variety['n'].indexOf('-totem') !== -1 || variety['n'] === 'greninja-battle-bond') {
          continue;// Skipping these forms
        }
        formIDs.push(variety['id']);
        // formRequests.push(this.pokemonService.getPokemonByURL(variety['id']));
      }
    } else {
      for (const variety of this.pokemon.varieties.slice(1)) {
        if (variety['n'] === 'minior-red' || variety['n'] === 'minior-red-meteor') {
          formIDs.push(variety['id']);
        }
      }
    }
    let i = 1;
    for (const id of formIDs) {
      const form = this.pokemonService.pokemonJSON[id.toString()];
      this.pokemonForms[i] = new Pokemon(
        form['N'],
        form['id'],
        this.pokemon.pokedex,
        form['T'],
        form['Ab'],
        form['H'],
        form['W'],
        form['BE'],
        form['HI'],
        form['isD'],
        this.pokemonService.pokemonMovesCSV[id.toString()],
        form['St'],
        form['Sp'],
        this.pokemon.speciesDetails,
        this.pokemon.color,
        this.pokemon.genera,
        this.pokemon.varieties,
        this.pokemon.evolutionChainID,
      );
      i = i + 1;
    }
  }

  selectForm(i) {
    if (this.selectedFormNo === i || this.pokemonForms[i] === undefined) {
      return;
    }
    this.currentMoveID = null;
    this.visible = false;
    if ((this.pokemonForms[i].name.indexOf('-mega') !== -1) && (this.pokemonForms[this.selectedFormNo].name.indexOf('-mega') === -1)
      && (this.megaEvolveAnimationEnabled) && (this.isOnline) && (this.pokemonService.megaEvolutionMainSwitch) && (!this.imageLoading)) {
      this.megaEvolve();
    } else {
      this.imageVisible = false;
      // this.megaEvolveAnimationEnabled = false;
    }
    setTimeout(() => {
      this.selectedFormNo = i;
      if (this.pokemonForms[i].name === this.pokemon.species['n']) {
        this.pokemon.name = this.pokemon.species['n'];
      } else if ((this.pokemon.id !== 25) // excluding Pikachu
        && ((this.pokemonForms[i].name.indexOf('-mega') !== -1)
          || (this.pokemonForms[i].name.indexOf('-primal') !== -1)
          || (this.pokemonForms[i].name.indexOf('-alola') !== -1)
          || (this.pokemonForms[i].name.indexOf('-galar') !== -1)
          || (this.pokemonForms[i].name.indexOf('-hisui') !== -1)
          || (this.pokemonForms[i].name.indexOf('-gmax') !== -1)
          || (this.pokemonForms[i].name === 'greninja-ash')
          || (this.pokemon.id === 800) // Necrozma
          || (this.pokemon.id === 890) // Eternatus
          || (this.pokemon.id === 898) // Calyrex
        )
      ) {
        this.pokemon.name = this.formattedFormNames[i];
      } else {
        this.pokemon.name = this.pokemon.species['n'] + ' [' + this.formattedFormNames[i] + ']';
      }
      this.pokemon.types = this.pokemonForms[i].types;
      this.pokemon.abilities = this.pokemonForms[i].abilities;
      this.pokemon.height = this.pokemonForms[i].height;
      this.pokemon.weight = this.pokemonForms[i].weight;
      this.pokemon.baseExperience = this.pokemonForms[i].baseExperience;
      this.pokemon.heldItems = this.pokemonForms[i].heldItems;
      this.pokemon.is_default = this.pokemonForms[i].is_default;
      this.pokemon.moves = this.pokemonService.pokemonMovesCSV[this.pokemonForms[i].id.toString()];
      this.pokemon.stats = this.pokemonForms[i].stats;
      this.pokemon.species = this.pokemonForms[i].species;
      // For Non Default Forms Only
      if (!this.pokemon.is_default) {
        const re = '(' + this.pokemon.species['n'] + ')[-]([a-z]*)';
        const regExp = new RegExp(re, 'g');
        const str = this.pokemonForms[i].name.replace(regExp, '$2');
        this.pokemonImageUrl = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/' +
          this.pad(this.pokemon.id, 3) + '-' + this.capitalizeSplitJoin(str, '-', '-') + '.png';
        // this.pokemonImageUrl = 'assets/images/' + this.pad(this.pokemon.id, 3) + '-' + this.capitalizeSplitJoin(str, '-', '-') + '.png';
      }
      // For Default Forms and Initializing Fields
      this.initializePokemonFields();
      this.visible = true;
    }, 400);
  }

  megaEvolve() {
    this.megaEvolving = true;
    this.imageLoadedForMegaEvolution = false;
    this.imageVisible = false;
    setTimeout(() => {
      this.SigilVisible = true;
      this.SphereVisible = true;
      this.BubblesVisible = true;
    }, 250);
    setTimeout(() => {
      if (this.imageLoadedForMegaEvolution) {
        this.SphereVisible = false;
        this.BubblesVisible = false;
        this.imageVisible = true;
        this.imageLoadedForMegaEvolution = false;
        this.sigilEnd = true;
        setTimeout(() => {
          this.SigilVisible = false;
        }, 2100);
        setTimeout(() => {
          this.megaEvolving = false;
        }, 2100);
      } else {
        const imageLoadedForMegaEvolutionSubscription = this.imageLoadedForMegaEvolutionSubject.subscribe((response) => {
          if (response) {
            this.SphereVisible = false;
            this.BubblesVisible = false;
            this.imageVisible = true;
            this.imageLoadedForMegaEvolution = false;
            this.sigilEnd = true;
            setTimeout(() => {
              this.SigilVisible = false;
            }, 2100);
            setTimeout(() => {
              this.megaEvolving = false;
            }, 2100);
            imageLoadedForMegaEvolutionSubscription.unsubscribe();
          }
        });
      }
    }, 5000);
    this.megaEvolveAnimationEnabled = false;
  }

  getEvolutionChain() {
    this.evolutionDesc = [];
    this.exceptionalChainType = '';
    const evoID = this.pokemon.evolutionChainID;
    const response = this.pokemonService.evolutionChains[evoID - 1];
    this.evolutionChain = [];
    if (response === undefined) {
      return;
    }
    let chain = response['chain'];
    if (this.evolutionChainExceptions_112.indexOf(chain['species']['name']) > -1) {
      this.exceptionalChainType = '112';
    } else if (this.evolutionChainExceptions_12.indexOf(chain['species']['name']) > -1) {
      this.exceptionalChainType = '12';
    } else if (this.evolutionChainExceptions_13.indexOf(chain['species']['name']) > -1) {
      this.exceptionalChainType = '13';
    } else if (this.evolutionChainExceptions_18.indexOf(chain['species']['name']) > -1) {
      this.exceptionalChainType = '18';
    } else if (this.evolutionChainExceptions_122.indexOf(chain['species']['name']) > -1) {
      this.exceptionalChainType = '122';
    }
    var nextChain, i;
    switch (this.exceptionalChainType) {
      case '': // Normal Case
        do {
          this.evolutionChain.push(this.constructEvolutionChain(chain));
          chain = chain['evolves_to'][0];
        } while (chain !== undefined);
        break;
      case '112':
        nextChain = chain;
        this.evolutionChain.push(this.constructEvolutionChain(nextChain));
        nextChain = chain['evolves_to'][0];
        this.evolutionChain.push(this.constructEvolutionChain(nextChain));
        this.evolutionChain[2] = [];
        i = 0;
        while (chain['evolves_to'][0]['evolves_to'][i] !== undefined) {
          nextChain = chain['evolves_to'][0]['evolves_to'][i];
          this.evolutionChain[2].push(this.constructEvolutionChain(nextChain));
          i++;
        }
        break;
      case '12':
      case '13':
      case '18':
        nextChain = chain;
        this.evolutionChain.push(this.constructEvolutionChain(nextChain));
        this.evolutionChain[1] = [];
        i = 0;
        while (chain['evolves_to'][i] !== undefined) {
          nextChain = chain['evolves_to'][i];
          this.evolutionChain[1].push(this.constructEvolutionChain(nextChain));
          i++;
        }
        break;
      case '122':
        nextChain = chain;
        this.evolutionChain.push(this.constructEvolutionChain(nextChain));
        this.evolutionChain[1] = [];
        nextChain = chain['evolves_to'][0]; // silcoon
        this.evolutionChain[1].push(this.constructEvolutionChain(nextChain));
        nextChain = chain['evolves_to'][1]; // cascoon
        this.evolutionChain[1].push(this.constructEvolutionChain(nextChain));
        this.evolutionChain[2] = [];
        nextChain = chain['evolves_to'][0]['evolves_to'][0]; // Beautifly
        this.evolutionChain[2].push(this.constructEvolutionChain(nextChain));
        nextChain = chain['evolves_to'][1]['evolves_to'][0]; // Dustox
        this.evolutionChain[2].push(this.constructEvolutionChain(nextChain));
    }
    this.generateEvolutionMethods();
  }

  private constructEvolutionChain(chain) {
    const id = chain['species']['id'];
    const pokemon = this.pokemonService.pokemons.find(pkm => pkm.id === id);
    return [
      pokemon.name, // 0
      id, // 1
      chain['is_baby'], // 2
      chain['evolution_details'] // 3
    ];
  }

  generateEvolutionMethods() {
    var i;
    switch (this.exceptionalChainType) {
      case '': // Normal Case
        for (let link of this.evolutionChain) {
          let stage = link[3][0];
          if (stage !== undefined) {
            this.evolutionDesc.push(this.generateEvolutionMethodsLogic(stage));
          }
        }
        break;
      case '112':
        i = 0;
        for (let link of this.evolutionChain) {
          if (i === this.evolutionChain.length - 1) {
            // Last Stage
            this.evolutionDesc.push([]);
            for (let sideStage of link) {
              sideStage = sideStage[3][0];
              this.evolutionDesc[i - 1].push(this.generateEvolutionMethodsLogic(sideStage));
            }
          } else {
            // Initial Stages
            let stage = link[3][0];
            if (stage !== undefined) {
              this.evolutionDesc.push(this.generateEvolutionMethodsLogic(stage));
            }
          }
          i++;
        }
        break;
      case '12':
      case '13':
      case '14':
      case '18':
        i = 0;
        for (const link of this.evolutionChain) {
          if (i === this.evolutionChain.length - 1) {
            // Last Stage
            this.evolutionDesc.push([]);
            for (let sideStage of link) {
              sideStage = sideStage[3][0];
              this.evolutionDesc[i - 1].push(this.generateEvolutionMethodsLogic(sideStage));
            }
          } else {
            // Initial Stages
            let stage = link[3][0];
            if (stage !== undefined) {
              this.evolutionDesc.push(this.generateEvolutionMethodsLogic(stage));
            }
          }
          i++;
        }
        break;
      case '122':
        this.evolutionDesc = [['Level 7 based on PV', 'Level 7 based on PV'],
          ['Level 10+', 'Level 10+']];
    }
  }

  generateEvolutionMethodsLogic(stage) {
    let desc = '';
    switch (stage['trigger']) {
      case 'level-up':
        if (stage['min_level'] !== null) {
          desc = 'Level ' + stage['min_level'] + '+';
        } else {
          desc = 'Level up';
        }
        if (stage['gender'] !== null) {
          let gender;
          if (stage['gender'] === 2) {
            gender = '(Male)';
          } else {
            gender = '(Female)';
          }
          desc = desc + ' ' + gender;
        }
        if (stage['held_item'] !== null) {
          const held_item = this.capitalizeSplitJoin(stage['held_item']['name'], '-', ' ');
          desc = desc + ' holding ' + held_item;
        }
        if (stage['known_move'] !== null) {
          const known_move = this.capitalizeSplitJoin(stage['known_move']['name'], '-', ' ');
          desc = desc + ' knowing ' + known_move;
        }
        if (stage['known_move_type'] !== null) {
          const known_move_type = this.capitalizeSplitJoin(stage['known_move_type']['name'], '-', ' ');
          desc = desc + ' knowing a ' + known_move_type + ' move';
        }
        if (stage['min_affection'] !== null) {
          const min_affection = stage['min_affection'];
          desc = desc + ' with ' + min_affection + '+ Affection';
        }
        if (stage['min_beauty'] !== null) {
          const min_beauty = stage['min_beauty'];
          desc = desc + ' with ' + min_beauty + '+ Beauty';
        }
        if (stage['min_happiness'] !== null) {
          const min_happiness = stage['min_happiness'];
          desc = desc + ' with ' + min_happiness + '+ Happiness';
        }
        if (stage['relative_physical_stats'] !== null) {
          let sign;
          if (stage['relative_physical_stats'] === 1) {
            sign = '>';
          } else if (stage['relative_physical_stats'] === -1) {
            sign = '<';
          } else {
            sign = '=';
          }
          desc = desc + ' with Attack ' + sign + ' Defence';
        }
        if (stage['party_species'] !== null) {
          const party_species = this.capitalizeSplitJoin(stage['party_species']['name'], '-', ' ');
          desc = desc + ' with ' + party_species + ' in party';
        }
        if (stage['party_type'] !== null) {
          const party_type = this.capitalizeSplitJoin(stage['party_type']['name'], '-', ' ');
          desc = desc + ' with a ' + party_type + ' type in party';
        }
        if (stage['location'] !== null) {
          const location = this.capitalizeSplitJoin(stage['location']['name'], '-', ' ');
          desc = desc + ' at ' + location;
        }
        if (stage['needs_overworld_rain'] !== false) {
          desc = desc + ' during Rain';
        }
        if (stage['time_of_day'] !== '') {
          const time_of_day = this.capitalizeSplitJoin(stage['time_of_day'], '-', ' ');
          desc = desc + ' at ' + time_of_day + 'time';
        }
        if (stage['turn_upside_down'] !== false) {
          desc = desc + ' holding 3DS upside-down';
        }
        // item:null;
        // trade_species:null;
        break;
      case 'trade':
        desc = 'Trade';
        if (stage['held_item'] !== null) {
          const held_item = this.capitalizeSplitJoin(stage['held_item']['name'], '-', ' ');
          desc = desc + ' holding ' + held_item;
        }
        if (stage['trade_species'] !== null) {
          const trade_species = this.capitalizeSplitJoin(stage['trade_species']['name'], '-', ' ');
          desc = desc + ' with ' + trade_species;
        }
        if (stage['gender'] !== null) {
          let gender;
          if (stage['gender'] === 2) {
            gender = '(Male)';
          } else {
            gender = '(Female)';
          }
          desc = desc + ' ' + gender;
        }
        break;
      case 'use-item':
        desc = 'Use';
        if (stage['item'] !== null) {
          const item = this.capitalizeSplitJoin(stage['item']['name'], '-', ' ');
          desc = desc + ' ' + item;
        }
        if (stage['gender'] !== null) {
          let gender;
          if (stage['gender'] === 2) {
            gender = '(Male)';
          } else {
            gender = '(Female)';
          }
          desc = desc + ' ' + gender;
        }
        break;
      case 'shed':
        desc = 'Level 20, with empty PokéBall and an open slot in party';
        break;
      case 'spin':
        desc = 'Spin holding a Sweet';
        break;
      case 'tower-of-darkness':
        desc = 'Train in the Tower of Darkness/ Waters';// Add forms support to Evolution Chain (sometime... someday...)
        break;
      case 'tower-of-waters':
        desc = 'Train in the Tower of Waters';
        break;
      case 'three-critical-hits':
        desc = 'Land three critical hits in a battle';
        break;
      case 'take-damage':
        desc = 'Travel under the stone bridge in Dusty Bowl after taking at least 49 HP in damage from attacks without fainting';
        break;
    }
    return desc;
  }

  selectEvolution(id) {
    if (this.selectedEvolutionId !== id) {
      this.selectedFormNo = 0;
      this.imageVisible = false;
      this.selectedEvolutionId = id;
      this.currentMoveID = null;
    }
  }

  getIdfromURL(url): number {
    let myRegex = /https:\/\/pokeapi.co\/api\/v2\/pokemon-species\/(.+)\//g;
    let match = myRegex.exec(url);
    return +match[1];
  }

  generateGenderRates() {
    const rate = this.pokemon.speciesDetails['GeR'];
    let maleRate, femaleRate;
    switch (rate) {
      case -1:
        return '<span class="' + this.pokemon.color + '-text"' + '>Genderless <i class="icon-genderless"></i></span>';
      case 0:
        maleRate = '100';
        femaleRate = '0';
        break;
      case 1:
        maleRate = '87.5';
        femaleRate = '12.5';
        break;
      case 2:
        maleRate = '75';
        femaleRate = '25';
        break;
      case 3:
        maleRate = '62.5';
        femaleRate = '37.5';
        break;
      case 4:
        maleRate = '50';
        femaleRate = '50';
        break;
      case 5:
        maleRate = '37.5';
        femaleRate = '62.5';
        break;
      case 6:
        maleRate = '25';
        femaleRate = '75';
        break;
      case 7:
        maleRate = '12.5';
        femaleRate = '87.5';
        break;
      case 8:
        maleRate = '0';
        femaleRate = '100';
    }
    return '<span class="gender-male">' + maleRate + '% <i class="icon-mars"></i></span>,<span class="gender-female"> ' + femaleRate + '% <i class="icon-venus"></i></span>';
  }

  getExperiencePoints(growth_rate: string) {
    switch (growth_rate) {
      case 'slow':
        return '1250000';
      case 'medium':
        return '1000000';
      case 'fast':
        return '800000';
      case 'medium-slow':
        return '1059860';
      case 'slow-then-very-fast':
        return '600000';
      case 'fast-then-very-slow':
        return '1640000';
    }
  }

  calculateTypeEffectiveness() {
    this.typeDefences = {'4x': [], '2x': [], '1x': [], '0.5x': [], '0.25x': [], '0x': []};
    let type1 = this.pokemon.types[0]['n'];
    let type2;
    if (this.pokemon.types[1] !== undefined) {
      type2 = this.pokemon.types[1]['n'];
    } else {
      type2 = '';
    }
    for (const type of this.typeChart) {
      if ((type['immunes'].indexOf(type1) !== -1) || (type['immunes'].indexOf(type2) !== -1)) { // 0x
        this.typeDefences['0x'].push(type['name']);
      } else if ((type['weaknesses'].indexOf(type1) !== -1) && (type['weaknesses'].indexOf(type2) !== -1)) { // 0.25x
        this.typeDefences['0.25x'].push(type['name']);
      } else if (((type['strengths'].indexOf(type1) !== -1) && (type['strengths'].indexOf(type2) !== -1))) { // 4x
        this.typeDefences['4x'].push(type['name']);
      } else if (((type['strengths'].indexOf(type1) !== -1) && (type['weaknesses'].indexOf(type2) !== -1))
        || (((type['strengths'].indexOf(type2) !== -1) && (type['weaknesses'].indexOf(type1) !== -1)))) { // 1x
        this.typeDefences['1x'].push(type['name']);
      } else if (((type['strengths'].indexOf(type1) === -1) && (type['weaknesses'].indexOf(type2) !== -1))
        || (((type['strengths'].indexOf(type2) === -1) && (type['weaknesses'].indexOf(type1) !== -1)))) { // 0.5x
        this.typeDefences['0.5x'].push(type['name']);
      } else if (((type['strengths'].indexOf(type1) !== -1) && (type['weaknesses'].indexOf(type2) === -1))
        || (((type['strengths'].indexOf(type2) !== -1) && (type['weaknesses'].indexOf(type1) === -1)))) { // 2x
        this.typeDefences['2x'].push(type['name']);
      } else {
        this.typeDefences['1x'].push(type['name']); // 1x
      }
    }
  }

  calculateCatchRate(genderRate) {
    let perc;
    perc = (genderRate / (3 * 255) * 100).toFixed(1);
    perc = perc + '% PokéBall & Full HP';
    return perc;
  }

  getFriendShip(friendship) {
    if (friendship > 100) {
      return 'High';
    } else if (friendship > 70) {
      return 'Higher than Normal';
    } else if (friendship === 70) {
      return 'Normal';
    } else if (friendship >= 35) {
      return 'Lower than Normal';
    } else if (friendship > 0) {
      return 'Low';
    } else {
      return 'Minimum';
    }
  }

  getMoves() {
    const version = this.selectedGameVersion;
    this.levelUpMovesList = [];
    this.machineMovesList = [];
    this.eggMovesList = [];
    this.tutorMovesList = [];
    this.movesList = [];
    this.movesListLoaded = false;
    if (this.movesListTimeout) {
      clearTimeout(this.movesListTimeout);
    }
    if (this.delayMovesListLoad) {
      this.movesListTimeout = setTimeout(() => {
        this.getMovesLogic(version);
      }, 2000);
    } else {
      this.getMovesLogic(version);
    }
  }

  getMovesLogic(version) {
    // const moveLearnMethods = {'level-up': 1, 'egg': 2, 'tutor': 3, 'machine': 4};
    const versionID = this.versions[version];
    if (this.pokemon.moves) {
      for (const move of this.pokemon.moves) {
        // for (const versionGroup of move['version_group_details']) {
        if (move.version_group_id == versionID) {
          const moveDetails = this.pokemonService.movesDetails[move.move_id - 1];
          switch (move.pokemon_move_method_id) {
            case '1': // level-up
              this.levelUpMovesList.push([this.capitalizeSplitJoin(moveDetails.identifier, '-', ' '), move.level,
                moveDetails, move.move_id]);
              break;
            case '2': // egg
              this.eggMovesList.push([this.capitalizeSplitJoin(moveDetails.identifier, '-', ' '), move.level,
                moveDetails, move.move_id]);
              break;
            case '3': // tutor
              this.tutorMovesList.push([this.capitalizeSplitJoin(moveDetails.identifier, '-', ' '), move.level,
                moveDetails, move.move_id]);
              break;
            case '4': // machine
              this.machineMovesList.push([this.capitalizeSplitJoin(moveDetails.identifier, '-', ' '), move.level,
                moveDetails, move.move_id]);
              break;
          }
        }
        // }
      }
      this.levelUpMovesList = this.levelUpMovesList.sort((obj1, obj2) => {
        if (+obj1[1] > +obj2[1]) {
          return 1;
        }
        if (+obj1[1] < +obj2[1]) {
          return -1;
        }
        return 0;
      });
      for (const move of this.machineMovesList) {
        const moveID = move[3];
        const machines = this.pokemonService.moveJSON[moveID - 1]['machines'];
        const machineID = machines[this.versions[this.selectedGameVersion]];
        move.push(this.pokemonService.machineDetails[machineID - 1].machine_number);
      }
      this.machineMovesList = this.machineMovesList.sort((obj1, obj2) => {
        if (+obj1[4] > +obj2[4]) {
          return 1;
        }
        if (+obj1[4] < +obj2[4]) {
          return -1;
        }
        return 0;
      });
      for (const move of this.machineMovesList) {
        const machineNumber = move[4];
        if (this.selectedGameVersion == 'sword-shield') {
          move[4] = +machineNumber < 100 ? 'TM' + this.pad(machineNumber, 2) : 'TR' + this.pad(machineNumber - 100, 2);
        } else {
          move[4] = +machineNumber <= 100 ? 'TM' + this.pad(machineNumber, 2) : 'HM' + this.pad(machineNumber - 100, 2);
        }
      }
      switch (this.selectedMove) {
        case 'level-up':
          this.movesList = this.levelUpMovesList;
          break;
        case 'machine':
          this.movesList = this.machineMovesList;
          break;
        case 'egg':
          this.movesList = this.eggMovesList;
          break;
        case 'tutor':
          this.movesList = this.tutorMovesList;
          break;
      }
      this.getMoveDetails();
    }
    this.movesListLoaded = true;
  }

  async selectMovesByLearnMethod(moveToSelect) {
    if (this.selectedMove === moveToSelect) {
      return;
    } else {
      this.currentMoveID = null;
      switch (moveToSelect) {
        case 'level-up':
          this.movesList = this.levelUpMovesList;
          this.moveDetails = this.moveLevelDetails;
          this.selectedMove = 'level-up';
          break;
        case 'machine':
          this.movesList = this.machineMovesList;
          this.moveDetails = this.moveMachineDetails;
          this.selectedMove = 'machine';
          break;
        case 'egg':
          this.movesList = this.eggMovesList;
          this.moveDetails = this.moveEggDetails;
          this.selectedMove = 'egg';
          break;
        case 'tutor':
          this.movesList = this.tutorMovesList;
          this.moveDetails = this.moveTutorDetails;
          this.selectedMove = 'tutor';
          break;
      }
    }
  }

  getDamageClass(id) {
    switch (id) {
      case '1':
        return 'Status';
      case '2':
        return 'Physical';
      case '3':
        return 'Special';
    }
  }

  async selectGameVersion(name) {
    if (this.selectedGameVersion === name) {
      return;
    } else {
      if (this.pokemonService.versionMainSwitch) {
        localStorage.setItem('SelectedVersion', name);
      }
      this.delayMovesListLoad = false;
      this.selectedGameVersion = name;
      this.currentMoveID = null;
      this.getMoves();
      this.delayMovesListLoad = true;
    }
  }

  availableInSelectedGen(whatWeChecking) {
    let gen = this.generations[whatWeChecking];
    let selectedGameGen = this.versionToGeneration[this.selectedGameVersion];
    return gen <= selectedGameGen;
  }

  selectMove(id) {
    if (this.moveDetails.length === 0) {
      return;
    }
    this.currentMoveData = this.moveDetails[id];
    this.currentMoveID = id;
    //Effect Texts
    if (this.currentMoveData['effect_entries'] === undefined) {
      this.moveShortEffect = 'Unavailable';
      this.moveEffect = 'Unavailable';
    } else if (this.currentMoveData['effect_chance'] !== null) {
      this.moveShortEffect = this.currentMoveData['effect_entries']['short_effect'].replace(/\$effect_chance/g,
        this.movesList[id][2].effect_chance);
      this.moveEffect = this.currentMoveData['effect_entries']['effect'].replace(/\$effect_chance/g,
        this.movesList[id][2].effect_chance);
    } else {
      this.moveShortEffect = this.currentMoveData['effect_entries']['short_effect'];
      this.moveEffect = this.currentMoveData['effect_entries']['effect'];
    }
    //Flavor Text
    if (this.selectedGameVersion === 'red-blue' || this.selectedGameVersion === 'yellow') {
      this.moveFlavorTextEntry = 'Selected games had no flavor text entries!';
    } else {
      if (this.currentMoveData['flavor_text_entries'][this.versions[this.selectedGameVersion]] !== undefined) {
        this.moveFlavorTextEntry = this.currentMoveData['flavor_text_entries'][this.versions[this.selectedGameVersion]];
      }
    }
  }

  getMoveDetails() {
    const moveRequests = [[], [], [], []];
    this.moveDetails = [];
    this.moveLevelDetails = [];
    this.moveMachineDetails = [];
    this.moveEggDetails = [];
    this.moveTutorDetails = [];
    for (const move of this.levelUpMovesList) {
      const moveID = move[3];
      this.moveLevelDetails.push(this.pokemonService.moveJSON[moveID - 1]);
    }
    for (const move of this.machineMovesList) {
      const moveID = move[3];
      this.moveMachineDetails.push(this.pokemonService.moveJSON[moveID - 1]);
    }
    for (const move of this.eggMovesList) {
      const moveID = move[3];
      this.moveEggDetails.push(this.pokemonService.moveJSON[moveID - 1]);
    }
    for (const move of this.tutorMovesList) {
      const moveID = move[3];
      this.moveTutorDetails.push(this.pokemonService.moveJSON[moveID - 1]);
    }
    switch (this.selectedMove) {
      case 'level-up':
        this.moveDetails = this.moveLevelDetails;
        break;
      case 'machine':
        this.moveDetails = this.moveMachineDetails;
        break;
      case 'egg':
        this.moveDetails = this.moveEggDetails;
        break;
      case 'tutor':
        this.moveDetails = this.moveTutorDetails;
        break;
    }
  }

  capitalizeSplitJoin(str, split: string, join: string) {
    str = str.split(split);
    for (let i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(join);
  }

  isPresent() {
    const pokedex = this.pokedexService.pokedex.find(pkx => pkx.jeu === this.selectedGameVersion);
    const code = pokedex ? pokedex.codeAPI : '';
    return this.pokemon.pokedex.find(pokemonPokedex => pokemonPokedex.region === code);
  }

  isCapture() {
    const pokedex = this.pokedexService.pokedex.find(pkx => pkx.jeu === this.selectedGameVersion);
    const code = pokedex ? pokedex.codeNav : '';
    const pokemonsCapture = JSON.parse(localStorage.getItem(this.pokedexService.getCodeFromJeu(this.selectedGameVersion)));
    if (pokemonsCapture) {
      const pokemonCapture = pokemonsCapture.find(pc => pc.id === this.pokedexService.getIdRegional(this.pokemon, code));

      if (pokemonCapture) {
        const isPokemonCapture = pokemonCapture ? pokemonCapture.capture : false;

        return isPokemonCapture ? 'Oui' : 'Non';
      }

    }
  }

  ngOnDestroy() {
    this.pokemonService.activePokemon.next(null);
    this.pokemonService.previousPokemonID.next(this.pokemonId);
    // Closing Open Modals
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('modal-open');
    body.style.paddingRight = 'unset';
    const elements = document.getElementsByClassName('modal-backdrop');
    while (elements.length > 0) {
      elements[0].remove();
    }
  }
}
