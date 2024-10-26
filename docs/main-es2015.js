(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+biT":
/*!*******************************************!*\
  !*** ./src/app/shared/pokemon.service.ts ***!
  \*******************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pokemon_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemon.model */ "703N");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "Lm38");
/* harmony import */ var _moves_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moves.model */ "5zsF");
/* harmony import */ var _machine_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./machine.model */ "6oSE");
/* harmony import */ var _pokemon_move_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pokemon-move.model */ "YPiH");
/* harmony import */ var _french_national_pokemon_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./french-national-pokemon.model */ "yODE");













class PokemonService {
    constructor(http, _notifications) {
        this.http = http;
        this._notifications = _notifications;
        this.pokemons = [];
        this.pokemonsListChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.noOfPokemonsLoaded = 0;
        this.newPokemonsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.activePokemon = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.previousPokemonID = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.firstTime = false;
        this.frenchPokemon = [];
        this.renamedNames = {
            29: 'Nidoran♀',
            32: 'Nidoran♂',
            83: 'Farfetch\'d',
            122: 'Mr. Mime',
            386: 'Deoxys',
            413: 'Wormadam',
            439: 'Mime Jr.',
            487: 'Giratina',
            492: 'Shaymin',
            550: 'Basculin',
            555: 'Darmanitan',
            641: 'Tornadus',
            642: 'Thundurus',
            645: 'Landorus',
            647: 'Keldeo',
            648: 'Meloetta',
            669: 'Flabébé',
            678: 'Meowstic',
            681: 'Aegislash',
            710: 'Pumpkaboo',
            711: 'Gourgeist',
            718: 'Zygarde',
            741: 'Oricorio',
            745: 'Lycanroc',
            746: 'Wishiwashi',
            772: 'Type: Null',
            774: 'Minior',
            778: 'Mimikyu',
            785: 'Tapu Koko',
            786: 'Tapu Lele',
            787: 'Tapu Bulu',
            788: 'Tapu Fini',
            849: 'Toxtricity',
            865: 'Sirfetch\'d',
            866: 'Mr. Rime',
            875: 'Eiscue',
            876: 'Indeedee',
            877: 'Morpeko',
            892: 'Urshifu',
            902: 'Basculegion',
            905: 'Enamorus'
        };
        this.searchItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.EverythingLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.megaSwitchSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.versionSwitchSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.OpenMenu = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.megaSwitchSubscription.subscribe((res) => {
            this.megaEvolutionMainSwitch = res;
        });
        this.versionSwitchSubscription.subscribe((res) => {
            this.versionMainSwitch = res;
        });
        if (localStorage.getItem('visitedOnce') === null) {
            this.firstTime = true;
            localStorage.setItem('visitedOnce', 'true');
        }
        this.requestALL();
        // Check Online Connectivity
        this.createOnline$().subscribe(isOnline => {
            const title = isOnline ? 'Online' : 'Offline';
            const content = isOnline ? 'Images will load now ...' : 'New Images won\'t be loaded ...';
            if (isOnline) {
                const toast = _notifications.success(title, content, {
                    timeOut: 10000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true
                });
            }
            else {
                const toast = _notifications.error(title, content, {
                    timeOut: 10000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true
                });
            }
        });
        this.isMobile = this.isMobileBrowser(); //  Mobile Browser Check
        this.getFrenchPokemonFromJSON();
    }
    isMobileBrowser() {
        let check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                check = true;
            }
        })(navigator.userAgent || navigator.vendor);
        return check;
    }
    getPokemonSpeciesFromJSON() {
        this.http.get('assets/data/pokemon-species.json').subscribe((response) => {
            this.pokemonSpeciesJSON = response['pokemon-species'];
        });
    }
    getPokemonMovesFromCSV() {
        this.pokemonMovesCSV = {};
        this.http.get('assets/data/pokemon-moves.csv', { responseType: 'text' })
            .subscribe(data => {
            const allTextLines = data.split(/\r\n|\r|\n/);
            const headers = allTextLines[0].split(',');
            for (let i = 1; i < allTextLines.length; i++) {
                // split content based on comma
                const rowData = allTextLines[i].split(',');
                const pokemon_id = rowData[0];
                if (this.pokemonMovesCSV[pokemon_id] === undefined) {
                    this.pokemonMovesCSV[pokemon_id] = [];
                }
                const move = new _pokemon_move_model__WEBPACK_IMPORTED_MODULE_8__["PokemonMove"]();
                // const move = [];
                for (let j = 0; j < headers.length - 1; j++) {
                    move[headers[j]] = rowData[j];
                }
                this.pokemonMovesCSV[pokemon_id].push(move);
            }
        }, error => {
            console.log(error);
        });
    }
    getPokemonFromJSON() {
        this.http.get('assets/data/pokemon.json').subscribe((response) => {
            this.getMoveDetailsFromCSV();
            this.pokemonJSON = response['pokemon'];
            for (let i = 0; i < 1025; i++) {
                const pokemonData = this.pokemonJSON[(i + 1).toString()];
                const pokemonSpeciesData = this.pokemonSpeciesJSON[i];
                const frenchVersion = this.frenchPokemon.find(fp => fp.nationalId === pokemonData['id']);
                this.pokemons.push(new _pokemon_model__WEBPACK_IMPORTED_MODULE_2__["Pokemon"](
                // from pokemon
                frenchVersion.frenchName, pokemonData['id'], frenchVersion.galarId, frenchVersion.isolarmureId, frenchVersion.couronneigeId, 
                // null,
                pokemonData['T'], pokemonData['Ab'], pokemonData['H'], pokemonData['W'], pokemonData['BE'], 
                // null,
                pokemonData['HI'], 
                // null,
                pokemonData['isD'], 
                // null,
                this.pokemonMovesCSV[(i + 1).toString()], 
                // null,
                pokemonData['St'], pokemonData['Sp'], 
                // from pokemon-species
                pokemonSpeciesData, pokemonSpeciesData ? pokemonSpeciesData['Co'] : '', pokemonSpeciesData ? pokemonSpeciesData['G'] : '', pokemonSpeciesData ? pokemonSpeciesData['varieties'] : '', pokemonSpeciesData ? pokemonSpeciesData['EvC'] : ''));
            }
            this.newPokemonsLoaded.next(1025);
            this.pokemonsListChanged.next(this.pokemons);
        });
    }
    getMoveDetailsFromCSV() {
        this.movesDetails = [];
        this.http.get('assets/data/moves.csv', { responseType: 'text' })
            .subscribe(data => {
            this.getMachinesFromCSV();
            const allTextLines = data.split(/\r\n|\r|\n/);
            const headers = allTextLines[0].split(',');
            for (let i = 1; i < allTextLines.length; i++) {
                const move = new _moves_model__WEBPACK_IMPORTED_MODULE_6__["Move"]();
                // split content based on comma
                const rowData = allTextLines[i].split(',');
                for (let j = 0; j < headers.length; j++) {
                    if (rowData[j] === '') {
                        move[headers[j]] = '-';
                    }
                    else {
                        move[headers[j]] = rowData[j];
                    }
                }
                this.movesDetails.push(move);
            }
        }, error => {
            console.log(error);
        });
    }
    getMachinesFromCSV() {
        this.machineDetails = [];
        this.http.get('assets/data/machines.csv', { responseType: 'text' })
            .subscribe(data => {
            this.getMovesFlavorFromJSON();
            const allTextLines = data.split(/\r\n|\r|\n/);
            const headers = allTextLines[0].split(',');
            for (let i = 1; i < allTextLines.length; i++) {
                const machine = new _machine_model__WEBPACK_IMPORTED_MODULE_7__["Machine"]();
                // split content based on comma
                const rowData = allTextLines[i].split(',');
                for (let j = 0; j < headers.length; j++) {
                    machine[headers[j]] = rowData[j];
                }
                this.machineDetails.push(machine);
            }
        }, error => {
            console.log(error);
        });
    }
    getMovesFlavorFromJSON() {
        this.http.get('assets/data/move.json').subscribe((response) => {
            this.getEvoChainFromJSON();
            this.moveJSON = response['moves'];
        });
    }
    getEvoChainFromJSON() {
        this.http.get('assets/data/evolution-chain.json').subscribe((response) => {
            this.getAbilityFromJSON();
            this.evolutionChains = response['evolution-chains'];
        });
    }
    getAbilityFromJSON() {
        this.http.get('assets/data/ability.json').subscribe((response) => {
            this.abilityJSON = response['abilities'];
            this.EverythingLoaded.next(true);
        });
    }
    requestALL() {
        const requests = [];
        requests.push(this.http.get('assets/data/pokemon-species.json'));
        requests.push(this.http.get('assets/data/pokemon-moves.csv', { responseType: 'text' }));
        // requests.push(this.http.get('assets/data/pokemon.json'));
        // requests.push(this.http.get('assets/data/moves.csv', {responseType: 'text'}));
        // requests.push(this.http.get('assets/data/machines.csv', {responseType: 'text'}));
        // requests.push(this.http.get('assets/data/move.json'));
        // requests.push(this.http.get('assets/data/evolution-chain.json'));
        // requests.push(this.http.get('assets/data/ability.json'));
        this.pokemonMovesCSV = {};
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(requests).subscribe(([species, movesCSV]) => {
            this.getPokemonFromJSON();
            this.pokemonSpeciesJSON = species['pokemon-species'];
            const data = movesCSV;
            const allTextLines = data.split(/\r\n|\r|\n/);
            const headers = allTextLines[0].split(',');
            for (let i = 1; i < allTextLines.length; i++) {
                // split content based on comma
                const rowData = allTextLines[i].split(',');
                const pokemon_id = rowData[0];
                if (this.pokemonMovesCSV[pokemon_id] === undefined) {
                    this.pokemonMovesCSV[pokemon_id] = [];
                }
                const move = new _pokemon_move_model__WEBPACK_IMPORTED_MODULE_8__["PokemonMove"]();
                // const move = [];
                for (let j = 0; j < headers.length - 1; j++) {
                    move[headers[j]] = rowData[j];
                }
                this.pokemonMovesCSV[pokemon_id].push(move);
            }
        });
    }
    createOnline$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => false)), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => true)), new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((sub) => {
            sub.next(navigator.onLine);
            sub.complete();
        }));
    }
    getFrenchPokemonFromJSON() {
        this.http.get('assets/data/french pokemon.json').subscribe((response) => {
            for (let i = 0; i < response.length; i++) {
                const pokemonData = response[i];
                this.frenchPokemon.push(new _french_national_pokemon_model__WEBPACK_IMPORTED_MODULE_9__["FrenchNationalPokemon"](pokemonData['French Name'], pokemonData['National Dex'], pokemonData['Galar Dex(SwSh)'], pokemonData['Isle of Armor Dex(SwSh)'], pokemonData['Crown Tund Dex(SwSh)']));
            }
        });
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"])); };
PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] }]; }, { searchItemSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], EverythingLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], megaSwitchSubscription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], versionSwitchSubscription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], OpenMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pierr\dev\pokedex-angular-app\src\main.ts */"zUnb");


/***/ }),

/***/ "5zsF":
/*!***************************************!*\
  !*** ./src/app/shared/moves.model.ts ***!
  \***************************************/
/*! exports provided: Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
class Move {
}


/***/ }),

/***/ "6oSE":
/*!*****************************************!*\
  !*** ./src/app/shared/machine.model.ts ***!
  \*****************************************/
/*! exports provided: Machine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return Machine; });
class Machine {
}


/***/ }),

/***/ "703N":
/*!*****************************************!*\
  !*** ./src/app/shared/pokemon.model.ts ***!
  \*****************************************/
/*! exports provided: Pokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pokemon", function() { return Pokemon; });
class Pokemon {
    constructor(
    // From pokemon
    name, id, galarId, isolarmureId, couronneigeId, 
    // public sprite, // no
    types, abilities, height, weight, baseExperience, 
    // public forms, // no
    heldItems, 
    // public gameIndices, // no
    is_default, 
    // public location, // no
    moves, 
    // public order, // no
    stats, species, 
    // From pokemon-species
    speciesDetails, color, genera, varieties, evolutionChainID) {
        this.name = name;
        this.id = id;
        this.galarId = galarId;
        this.isolarmureId = isolarmureId;
        this.couronneigeId = couronneigeId;
        this.types = types;
        this.abilities = abilities;
        this.height = height;
        this.weight = weight;
        this.baseExperience = baseExperience;
        this.heldItems = heldItems;
        this.is_default = is_default;
        this.moves = moves;
        this.stats = stats;
        this.species = species;
        this.speciesDetails = speciesDetails;
        this.color = color;
        this.genera = genera;
        this.varieties = varieties;
        this.evolutionChainID = evolutionChainID;
    }
}


/***/ }),

/***/ "7opG":
/*!*********************************************************************!*\
  !*** ./src/app/pokemon-list/pokemon-item/pokemon-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: PokemonItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonItemComponent", function() { return PokemonItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pokemon_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pokemon.model */ "703N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PokemonItemComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} }
function PokemonItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r2["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r2["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PokemonItemComponent {
    pad(number, length) {
        let str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
    getIdRegional() {
        switch (this.region) {
            case 'galar':
                return this.pokemon.galarId;
            case 'isolarmure':
                return this.pokemon.isolarmureId;
            case 'couronneige':
                return this.pokemon.couronneigeId;
            default:
                return this.pokemon.id;
        }
    }
    isPokemonCapture() {
        let isPokemonCapture = false;
        if (this.pokemonsCapture) {
            const pokemonCapture = this.pokemonsCapture.find(pc => pc.id === this.getIdRegional());
            isPokemonCapture = pokemonCapture ? pokemonCapture.capture : false;
        }
        return isPokemonCapture;
    }
}
PokemonItemComponent.ɵfac = function PokemonItemComponent_Factory(t) { return new (t || PokemonItemComponent)(); };
PokemonItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonItemComponent, selectors: [["app-pokemon-item"]], inputs: { pokemon: "pokemon", region: "region", pokemonsCapture: "pokemonsCapture" }, decls: 11, vars: 6, consts: [[1, "pokemon-card", 3, "routerLink"], [1, "pokemon-card-info"], [1, "id-name"], [1, "card-id"], ["class", "icon", "alt", "", "src", "assets/icons/icon-72x72.png", 4, "ngIf"], [1, "card-name", "text-capitalize", "text-left", "text-truncate"], [1, "icons"], [3, "class", 4, "ngFor", "ngForOf"], ["alt", "", 1, "pokemon-card-img", "mx-auto", 3, "src"], ["alt", "", "src", "assets/icons/icon-72x72.png", 1, "icon"], ["alt", "", 3, "src"]], template: function PokemonItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonItemComponent_img_5_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonItemComponent_div_9_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx.pokemon.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getIdRegional(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPokemonCapture());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemon.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx.pad(ctx.pokemon.id, 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".pokemon-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  width: 9rem;\n  height: 12rem;\n  padding: 0.5rem 0.3rem 0.3rem 0.3rem;\n  font-size: medium;\n  color: gray;\n  transition: background-color 3000ms ease;\n}\n.pokemon-card[_ngcontent-%COMP%]   .pokemon-card-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.pokemon-card[_ngcontent-%COMP%]   .pokemon-card-info[_ngcontent-%COMP%]   .id-name[_ngcontent-%COMP%] {\n  flex: 0 0 75%;\n  flex-grow: 1;\n  max-width: 75%;\n  text-align: left;\n  position: relative;\n  top: -6px;\n}\n.pokemon-card[_ngcontent-%COMP%]   .pokemon-card-info[_ngcontent-%COMP%]   .id-name[_ngcontent-%COMP%]   .card-id[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  margin: 0;\n}\n.pokemon-card[_ngcontent-%COMP%]   .pokemon-card-info[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 25%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  flex-grow: 1;\n  max-width: 100%;\n  align-items: flex-end;\n}\n.pokemon-card[_ngcontent-%COMP%]   .pokemon-card-info[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  filter: saturate(200%);\n  transform: scale(1.1);\n  cursor: pointer;\n}\n.pokemon-card[_ngcontent-%COMP%]   .pokemon-card-img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.pokemon-card[_ngcontent-%COMP%]:hover {\n  background-color: #dbdbdb;\n  transition: background-color 300ms ease;\n}\n@media (max-width: 500px) {\n  .pokemon-card[_ngcontent-%COMP%] {\n    max-width: 33.33vw;\n    height: 8rem;\n    font-size: x-small;\n  }\n  .pokemon-card[_ngcontent-%COMP%]   .pokemon-card-info[_ngcontent-%COMP%]   .id-name[_ngcontent-%COMP%] {\n    position: unset;\n    top: unset;\n  }\n  .pokemon-card[_ngcontent-%COMP%]   .pokemon-card-info[_ngcontent-%COMP%]   .id-name[_ngcontent-%COMP%]   .card-id[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    line-height: 1.6rem;\n  }\n  .pokemon-card[_ngcontent-%COMP%]   .pokemon-card-info[_ngcontent-%COMP%]   .id-name[_ngcontent-%COMP%]   .card-name[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .pokemon-card[_ngcontent-%COMP%]   .pokemon-card-info[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    height: 20px;\n    width: 20px;\n  }\n  .pokemon-card[_ngcontent-%COMP%]   .pokemon-card-img[_ngcontent-%COMP%] {\n    height: 68px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9rZW1vbi1saXN0L3Bva2Vtb24taXRlbS9wb2tlbW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFBTjtBQUVNO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0FBQVI7QUFJSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBRk47QUFJTTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRlI7QUFPRTtFQUNFLGFBQUE7QUFMSjtBQVNBO0VBQ0UseUJBQUE7RUFDQSx1Q0FBQTtBQU5GO0FBU0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBTkY7RUFTSTtJQUNFLGVBQUE7SUFDQSxVQUFBO0VBUE47RUFTTTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUFQUjtFQVVNO0lBQ0Usa0JBQUE7RUFSUjtFQWFNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFYUjtFQWdCRTtJQUNFLFlBQUE7RUFkSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9rZW1vbi1saXN0L3Bva2Vtb24taXRlbS9wb2tlbW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9rZW1vbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICB3aWR0aDogOXJlbTtcbiAgaGVpZ2h0OiAxMnJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuM3JlbSAwLjNyZW0gMC4zcmVtO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgY29sb3I6IGdyYXk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwMG1zIGVhc2U7XG5cbiAgLnBva2Vtb24tY2FyZC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmlkLW5hbWUge1xuICAgICAgZmxleDogMCAwIDc1JTtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIG1heC13aWR0aDogNzUlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTZweDtcblxuICAgICAgLmNhcmQtaWQge1xuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pY29ucyB7XG4gICAgICBmbGV4OiAwIDAgMjUlO1xuICAgICAgbWF4LXdpZHRoOiAyNSU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgLmljb246aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IHNhdHVyYXRlKDIwMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucG9rZW1vbi1jYXJkLWltZyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4ucG9rZW1vbi1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnBva2Vtb24tY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzMy4zM3Z3O1xuICAgIGhlaWdodDogOHJlbTtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG5cbiAgICAucG9rZW1vbi1jYXJkLWluZm8ge1xuICAgICAgLmlkLW5hbWUge1xuICAgICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICAgIHRvcDogdW5zZXQ7XG5cbiAgICAgICAgLmNhcmQtaWQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmljb25zIHtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wb2tlbW9uLWNhcmQtaW1nIHtcbiAgICAgIGhlaWdodDogNjhweDtcbiAgICB9XG4gIH1cblxufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-item',
                templateUrl: './pokemon-item.component.html',
                styleUrls: ['./pokemon-item.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { pokemon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], region: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pokemonsCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "QlOP":
/*!***************************************!*\
  !*** ./src/app/shared/pwa.service.ts ***!
  \***************************************/
/*! exports provided: PwaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwaService", function() { return PwaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");




class PwaService {
    constructor(swUpdate) {
        this.swUpdate = swUpdate;
        swUpdate.available.subscribe(event => {
            if (confirm('App has been Updated. Reload App Now ? ')) {
                window.location.reload();
            }
        });
        window.addEventListener('beforeinstallprompt', event => {
            this.promptEvent = event;
        });
    }
}
PwaService.ɵfac = function PwaService_Factory(t) { return new (t || PwaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"])); };
PwaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PwaService, factory: PwaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PwaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/pokemon.service */ "+biT");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "Lm38");









const _c0 = ["header"];
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} }
const _c1 = function (a0) { return { "disableClicks": a0 }; };
class AppComponent {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
        this.loaded = false;
        this.pokemonService.EverythingLoaded.subscribe(res => {
            this.loaded = res;
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.pokemonService.firstTime) {
                const toast = this.pokemonService._notifications.success('Welcome To The PokéDex', 'Loading Data ...', {
                    timeOut: 0,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                });
                toast.click.subscribe((event) => {
                    const toast2 = this.pokemonService._notifications.info('Hate Waiting ?', 'Don\'t Worry, This app can work OFFLINE thereafter...', {
                        timeOut: 0,
                        showProgressBar: true,
                        pauseOnHover: true,
                        clickToClose: true,
                    });
                    toast2.click.subscribe((event2) => {
                        const toast2 = this.pokemonService._notifications.info('It\'s Installable too!', 'Images once loaded will be available for offline usage.', {
                            timeOut: 0,
                            showProgressBar: true,
                            pauseOnHover: true,
                            clickToClose: true,
                        });
                        toast2.click.subscribe((event3) => {
                            this.headerComponent.openMenu();
                        });
                    });
                });
            }
        }, 100);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    } }, decls: 8, vars: 4, consts: [[1, "page-wrapper"], [1, "page-content"], ["header", ""], [1, "container-fluid", 3, "ngClass"], ["class", "lds-dual-ring", 4, "ngIf"], [1, "lds-dual-ring"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "simple-notifications");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, !ctx.loaded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["SimpleNotificationsComponent"]], styles: [".page-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.disableClicks[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQU1BO0VBQ0Usb0JBQUE7QUFIRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vLyAuY29udGFpbmVyLWZsdWlke1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLmRpc2FibGVDbGlja3N7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"] }]; }, { headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['header']
        }] }); })();


/***/ }),

/***/ "WCHk":
/*!***************************************!*\
  !*** ./src/app/search-filter.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchFilterPipe {
    transform(pokemons, searchFor) {
        if (!pokemons) {
            return [];
        }
        if (searchFor === '' || !searchFor) {
            return pokemons;
        }
        return pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(searchFor.toLowerCase()) > -1 || pokemon.id.toString().indexOf(searchFor) > -1);
    }
}
SearchFilterPipe.ɵfac = function SearchFilterPipe_Factory(t) { return new (t || SearchFilterPipe)(); };
SearchFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchFilter", type: SearchFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "WQvd":
/*!*************************************************!*\
  !*** ./src/app/shared/pokemon-capture.model.ts ***!
  \*************************************************/
/*! exports provided: PokemonCapture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonCapture", function() { return PokemonCapture; });
class PokemonCapture {
    constructor(
    // From pokemon
    id, capture) {
        this.id = id;
        this.capture = capture;
    }
}


/***/ }),

/***/ "YPiH":
/*!**********************************************!*\
  !*** ./src/app/shared/pokemon-move.model.ts ***!
  \**********************************************/
/*! exports provided: PokemonMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonMove", function() { return PokemonMove; });
class PokemonMove {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-filter.pipe */ "WCHk");
/* harmony import */ var _router_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router-strategy */ "ceT6");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-virtual-scroller */ "SYYg");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-notifications */ "Lm38");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pokemon-list/pokemon-list.component */ "aBNB");
/* harmony import */ var _pokemon_list_pokemon_item_pokemon_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pokemon-list/pokemon-item/pokemon-item.component */ "7opG");
/* harmony import */ var _pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pokemon-detail/pokemon-detail.component */ "de+6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");







// import { ScrollingModule } from '@angular/cdk/scrolling';















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
            useClass: _router_strategy__WEBPACK_IMPORTED_MODULE_8__["CustomRouteReuseStrategy"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_10__["VirtualScrollerModule"],
            // ScrollingModule,
            angular2_notifications__WEBPACK_IMPORTED_MODULE_11__["SimpleNotificationsModule"].forRoot({ preventDuplicates: true }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production, registrationStrategy: 'registerWhenStable:5000' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_15__["PokemonListComponent"],
        _pokemon_list_pokemon_item_pokemon_item_component__WEBPACK_IMPORTED_MODULE_16__["PokemonItemComponent"],
        _pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_17__["PokemonDetailComponent"],
        _search_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchFilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_10__["VirtualScrollerModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_11__["SimpleNotificationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_15__["PokemonListComponent"],
                    _pokemon_list_pokemon_item_pokemon_item_component__WEBPACK_IMPORTED_MODULE_16__["PokemonItemComponent"],
                    _pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_17__["PokemonDetailComponent"],
                    _search_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchFilterPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_10__["VirtualScrollerModule"],
                    // ScrollingModule,
                    angular2_notifications__WEBPACK_IMPORTED_MODULE_11__["SimpleNotificationsModule"].forRoot({ preventDuplicates: true }),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production, registrationStrategy: 'registerWhenStable:5000' })
                ],
                providers: [
                    {
                        provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
                        useClass: _router_strategy__WEBPACK_IMPORTED_MODULE_8__["CustomRouteReuseStrategy"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aBNB":
/*!********************************************************!*\
  !*** ./src/app/pokemon-list/pokemon-list.component.ts ***!
  \********************************************************/
/*! exports provided: PokemonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return PokemonListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/pokemon.service */ "+biT");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-virtual-scroller */ "SYYg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_pokemon_capture_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/pokemon-capture.model */ "WQvd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pokemon_item_pokemon_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pokemon-item/pokemon-item.component */ "7opG");
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search-filter.pipe */ "WCHk");















function PokemonListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Masquer capturer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokemonListComponent_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.masquerCapture = $event; })("change", function PokemonListComponent_div_2_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.checkMasquerCapture($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.masquerCapture);
} }
function PokemonListComponent_app_pokemon_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pokemon-item", 8);
} if (rf & 2) {
    const pokemon_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pokemon", pokemon_r7)("region", ctx_r3.regionPokedex)("pokemonsCapture", ctx_r3.pokemonsCapture);
} }
const _c0 = function (a0) { return { fade: a0 }; };
class PokemonListComponent {
    constructor(http, activatedRoute, pokemonService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.pokemonService = pokemonService;
        this.pokemons = [];
        this.pokemonsCapture = [];
        this.scrolled = true;
        this.resizeTimeout = 250;
        this.masquerCapture = false;
        this.pokemonService.previousPokemonID.subscribe((response) => {
            this.scrolled = false;
            this.focusOnAnItem(response);
        });
    }
    onWindowResize() {
        // debounce resize, wait for resize to finish before doing stuff
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout((() => {
            this.virtualScroller.invalidateCachedMeasurementAtIndex(0);
        }).bind(this), 500);
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.regionPokedex = params['region'];
            this.initPokemonList();
            if (this.regionPokedex) {
                this.http.get(`assets/data/${this.regionPokedex}.json`).subscribe((response) => {
                    for (let i = 0; i < response.length; i++) {
                        const pokemonData = response[i];
                        this.pokemonsCapture.push(new _shared_pokemon_capture_model__WEBPACK_IMPORTED_MODULE_5__["PokemonCapture"](
                        // from pokemon
                        pokemonData['numero local'], pokemonData['Possédé'] === 'x'));
                    }
                });
            }
        });
    }
    initPokemonList() {
        if (this.pokemonService.pokemons[0]) { // List already loaded
            this.pokemons = this.pokemonService.pokemons
                .filter(pokemon => this.getIdRegional(pokemon))
                .sort((a, b) => this.getIdRegional(a) - this.getIdRegional(b));
            this.noOfPokemonLoaded = this.pokemonService.noOfPokemonsLoaded;
        }
        else { // List not already Loaded
            this.pokemonListSubscription = this.pokemonService.pokemonsListChanged.subscribe((response) => {
                this.pokemons = response.slice(0, this.noOfPokemonLoaded)
                    .filter(pokemon => this.getIdRegional(pokemon))
                    .sort((a, b) => this.getIdRegional(a) - this.getIdRegional(b));
            });
            this.noOfLoadedPokemonSubscription = this.pokemonService.newPokemonsLoaded.subscribe((response) => {
                this.noOfPokemonLoaded = response;
            });
        }
        this.searchItemSubscription = this.pokemonService.searchItemSubject.subscribe((response) => {
            this.searchItem = response;
        });
    }
    focusOnAnItem(index) {
        this.virtualScroller.scrollToIndex(index, undefined, -192, 0);
        setTimeout(() => {
            this.scrolled = true;
        }, 250); // Delay to allow the fade in animation to take place
    }
    trackByPokemonID(index, pokemon) {
        return pokemon.id;
    }
    ngOnDestroy() {
        this.pokemonService.searchItemSubject.next('');
        this.searchItemSubscription.unsubscribe();
    }
    getIdRegional(pokemon) {
        switch (this.regionPokedex) {
            case 'galar':
                return pokemon.galarId;
            case 'isolarmure':
                return pokemon.isolarmureId;
            case 'couronneige':
                return pokemon.couronneigeId;
            default:
                return pokemon.id;
        }
    }
    checkMasquerCapture(values) {
        if (values.currentTarget.checked) {
            this.pokemons = this.pokemonService.pokemons
                .filter(pokemon => this.getIdRegional(pokemon))
                .filter(pokemon => !this.isPokemonCapture(pokemon))
                .sort((a, b) => this.getIdRegional(a) - this.getIdRegional(b));
        }
        else {
            this.pokemons = this.pokemonService.pokemons
                .filter(pokemon => this.getIdRegional(pokemon))
                .sort((a, b) => this.getIdRegional(a) - this.getIdRegional(b));
        }
        this.pokemonService.versionSwitchSubscription.next(values.currentTarget.checked);
    }
    isPokemonCapture(pokemon) {
        let isPokemonCapture = false;
        if (this.pokemonsCapture) {
            const pokemonCapture = this.pokemonsCapture.find(pc => pc.id === this.getIdRegional(pokemon));
            isPokemonCapture = pokemonCapture ? pokemonCapture.capture : false;
        }
        return isPokemonCapture;
    }
}
PokemonListComponent.ɵfac = function PokemonListComponent_Factory(t) { return new (t || PokemonListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"])); };
PokemonListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonListComponent, selectors: [["app-pokemon-list"]], viewQuery: function PokemonListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollerComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
    } }, hostBindings: function PokemonListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PokemonListComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 11, consts: [[1, "pokemon-list", "faded", 3, "ngClass"], ["scrollingBlock", ""], [4, "ngIf"], ["scrollAnimationTime", "0", 3, "items", "parentScroll"], ["scroll", ""], [3, "pokemon", "region", "pokemonsCapture", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["for", "masquerCapture", 2, "font-size", "medium", "margin-right", "10px"], ["id", "masquerCapture", "type", "checkbox", "checked", "", "name", "versionSwitch", 1, "switch", 3, "ngModel", "ngModelChange", "change"], [3, "pokemon", "region", "pokemonsCapture"]], template: function PokemonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonListComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "virtual-scroller", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonListComponent_app_pokemon_item_6_Template, 1, 3, "app-pokemon-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.scrolled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regionPokedex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx.pokemons, ctx.searchItem))("parentScroll", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r2.viewPortItems)("ngForTrackBy", ctx.trackByPokemonID);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _pokemon_item_pokemon_item_component__WEBPACK_IMPORTED_MODULE_8__["PokemonItemComponent"]], pipes: [_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"]], styles: ["virtual-scroller[_ngcontent-%COMP%] {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  height: calc(100vh - 64px);\n  text-align: center;\n}\n\n.pokemon-list[_ngcontent-%COMP%] {\n  will-change: scroll-position;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.scrollable-content[_ngcontent-%COMP%] {\n  will-change: scroll-position;\n}\n\napp-pokemon-item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.faded[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.fade[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out;\n}\n\n@media (max-width: 575px) {\n  virtual-scroller[_ngcontent-%COMP%] {\n    height: calc(100vh - 40px);\n  }\n}\n\n@media (max-width: 316px) {\n  virtual-scroller[_ngcontent-%COMP%] {\n    height: calc(100vh - 36.8px);\n  }\n}\n\n@media (max-width: 270px) {\n  virtual-scroller[_ngcontent-%COMP%] {\n    height: calc(100vh - 32px);\n  }\n}\n\n.switch[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n\n@supports (-webkit-appearance: none) or (-moz-appearance: none) {\n  input[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n    --active: gray;\n    --active-inner: #fff;\n    --focus: 2px black;\n    --border: gray;\n    --border-hover: black;\n    --background: #fff;\n    --disabled: #F6F8FF;\n    --disabled-inner: #E1E6F9;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    height: 21px;\n    outline: none;\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n    margin: 0;\n    cursor: pointer;\n    border: 1px solid var(--bc, var(--border));\n    background: var(--b, var(--background));\n    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:after, input[type=radio][_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: block;\n    left: 0;\n    top: 0;\n    position: absolute;\n    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked {\n    --b: var(--active);\n    --bc: var(--active);\n    --d-o: .3s;\n    --d-t: .6s;\n    --d-t-e: cubic-bezier(.2, .85, .32, 1.2);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:disabled, input[type=radio][_ngcontent-%COMP%]:disabled {\n    --b: var(--disabled);\n    cursor: not-allowed;\n    opacity: 0.9;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:disabled:checked, input[type=radio][_ngcontent-%COMP%]:disabled:checked {\n    --b: var(--disabled-inner);\n    --bc: var(--border);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%] {\n    cursor: not-allowed;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:hover:not(:checked):not(:disabled), input[type=radio][_ngcontent-%COMP%]:hover:not(:checked):not(:disabled) {\n    --bc: var(--border-hover);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:focus, input[type=radio][_ngcontent-%COMP%]:focus {\n    box-shadow: 0 0 0 var(--focus);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch), input[type=radio][_ngcontent-%COMP%]:not(.switch) {\n    width: 21px;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch):after, input[type=radio][_ngcontent-%COMP%]:not(.switch):after {\n    opacity: var(--o, 0);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch):checked, input[type=radio][_ngcontent-%COMP%]:not(.switch):checked {\n    --o: 1;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 21px;\n    display: inline-block;\n    vertical-align: top;\n    cursor: pointer;\n    margin-left: 4px;\n  }\n\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch) {\n    border-radius: 7px;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch):after {\n    width: 5px;\n    height: 9px;\n    border: 2px solid var(--active-inner);\n    border-top: 0;\n    border-left: 0;\n    left: 7px;\n    top: 4px;\n    transform: rotate(var(--r, 20deg));\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch):checked {\n    --r: 43deg;\n  }\n  input[type=checkbox].switch[_ngcontent-%COMP%] {\n    width: 38px;\n    border-radius: 11px;\n  }\n  input[type=checkbox].switch[_ngcontent-%COMP%]:after {\n    left: 2px;\n    top: 2px;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    background: var(--ab, var(--border));\n    transform: translateX(var(--x, 0));\n  }\n  input[type=checkbox].switch[_ngcontent-%COMP%]:checked {\n    --ab: var(--active-inner);\n    --x: 17px;\n  }\n  input[type=checkbox].switch[_ngcontent-%COMP%]:disabled:not(:checked):after {\n    opacity: 0.6;\n  }\n\n  input[type=radio][_ngcontent-%COMP%] {\n    border-radius: 50%;\n  }\n  input[type=radio][_ngcontent-%COMP%]:after {\n    width: 19px;\n    height: 19px;\n    border-radius: 50%;\n    background: var(--active-inner);\n    opacity: 0;\n    transform: scale(var(--s, 0.7));\n  }\n  input[type=radio][_ngcontent-%COMP%]:checked {\n    --s: .5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9rZW1vbi1saXN0L3Bva2Vtb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNEJBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSwwQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxlQUFBO0FBRkY7O0FBTUE7RUFFRTs7SUFFRSxjQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLHdCQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0EsMENBQUE7SUFDQSx1Q0FBQTtJQUNBLCtEQUFBO0VBSkY7RUFNRTs7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0Esa0JBQUE7SUFDQSxtRkFBQTtFQUhKO0VBTUU7O0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0Esd0NBQUE7RUFISjtFQU1FOztJQUNFLG9CQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VBSEo7RUFLSTs7SUFDRSwwQkFBQTtJQUNBLG1CQUFBO0VBRk47RUFLSTs7SUFDRSxtQkFBQTtFQUZOO0VBUU07O0lBQ0UseUJBQUE7RUFMUjtFQVVFOztJQUNFLDhCQUFBO0VBUEo7RUFVRTs7SUFDRSxXQUFBO0VBUEo7RUFTSTs7SUFDRSxvQkFBQTtFQU5OO0VBU0k7O0lBQ0UsTUFBQTtFQU5OO0VBVUU7O0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQVBKOztFQVlFO0lBQ0Usa0JBQUE7RUFUSjtFQVdJO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxxQ0FBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxrQ0FBQTtFQVROO0VBWUk7SUFDRSxVQUFBO0VBVk47RUFjRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQVpKO0VBY0k7SUFDRSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxvQ0FBQTtJQUNBLGtDQUFBO0VBWk47RUFlSTtJQUNFLHlCQUFBO0lBQ0EsU0FBQTtFQWJOO0VBa0JRO0lBQ0UsWUFBQTtFQWhCVjs7RUF1QkE7SUFDRSxrQkFBQTtFQXBCRjtFQXNCRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSwrQkFBQTtJQUNBLFVBQUE7SUFDQSwrQkFBQTtFQXBCSjtFQXVCRTtJQUNFLE9BQUE7RUFyQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Bva2Vtb24tbGlzdC9wb2tlbW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ2aXJ0dWFsLXNjcm9sbGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBva2Vtb24tbGlzdHtcbiAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuXG4uc2Nyb2xsYWJsZS1jb250ZW50IHtcbiAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbn1cblxuYXBwLXBva2Vtb24taXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZhZGVkIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZhZGUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIHZpcnR1YWwtc2Nyb2xsZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xuICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDMxNnB4KSB7XG4gIHZpcnR1YWwtc2Nyb2xsZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM2LjhweCk7XG4gIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMjcwcHgpIHtcbiAgdmlydHVhbC1zY3JvbGxlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XG4gIH1cbn1cblxuLnN3aXRjaCB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLy8gTWF0ZXJpYWwgQnV0dG9uc1xuQHN1cHBvcnRzICgtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUpIG9yICgtbW96LWFwcGVhcmFuY2U6IG5vbmUpIHtcblxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddLFxuICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICAtLWFjdGl2ZTogZ3JheTtcbiAgICAtLWFjdGl2ZS1pbm5lcjogI2ZmZjtcbiAgICAtLWZvY3VzOiAycHggYmxhY2s7XG4gICAgLS1ib3JkZXI6IGdyYXk7XG4gICAgLS1ib3JkZXItaG92ZXI6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLWRpc2FibGVkOiAjRjZGOEZGO1xuICAgIC0tZGlzYWJsZWQtaW5uZXI6ICNFMUU2Rjk7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYywgdmFyKC0tYm9yZGVyKSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYiwgdmFyKC0tYmFja2dyb3VuZCkpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzLCBib3JkZXItY29sb3IgLjNzLCBib3gtc2hhZG93IC4ycztcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tZC10LCAuM3MpIHZhcigtLWQtdC1lLCBlYXNlKSwgb3BhY2l0eSB2YXIoLS1kLW8sIC4ycyk7XG4gICAgfVxuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgIC0tYjogdmFyKC0tYWN0aXZlKTtcbiAgICAgIC0tYmM6IHZhcigtLWFjdGl2ZSk7XG4gICAgICAtLWQtbzogLjNzO1xuICAgICAgLS1kLXQ6IC42cztcbiAgICAgIC0tZC10LWU6IGN1YmljLWJlemllciguMiwgLjg1LCAuMzIsIDEuMik7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICAtLWI6IHZhcigtLWRpc2FibGVkKTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAuOTtcblxuICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgLS1iOiB2YXIoLS1kaXNhYmxlZC1pbm5lcik7XG4gICAgICAgIC0tYmM6IHZhcigtLWJvcmRlcik7XG4gICAgICB9XG5cbiAgICAgICYrbGFiZWwge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgJjpub3QoOmNoZWNrZWQpIHtcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgLS1iYzogdmFyKC0tYm9yZGVyLWhvdmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tZm9jdXMpO1xuICAgIH1cblxuICAgICY6bm90KC5zd2l0Y2gpIHtcbiAgICAgIHdpZHRoOiAyMXB4O1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tbywgMCk7XG4gICAgICB9XG5cbiAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIC0tbzogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmK2xhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgJjpub3QoLnN3aXRjaCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1pbm5lcik7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgIHRvcDogNHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSh2YXIoLS1yLCAyMGRlZykpO1xuICAgICAgfVxuXG4gICAgICAmOmNoZWNrZWQge1xuICAgICAgICAtLXI6IDQzZGVnO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuc3dpdGNoIHtcbiAgICAgIHdpZHRoOiAzOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWIsIHZhcigtLWJvcmRlcikpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0teCwgMCkpO1xuICAgICAgfVxuXG4gICAgICAmOmNoZWNrZWQge1xuICAgICAgICAtLWFiOiB2YXIoLS1hY3RpdmUtaW5uZXIpO1xuICAgICAgICAtLXg6IDE3cHg7XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAmOm5vdCg6Y2hlY2tlZCkge1xuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogLjY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgJjphZnRlciB7XG4gICAgICB3aWR0aDogMTlweDtcbiAgICAgIGhlaWdodDogMTlweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1pbm5lcik7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1zLCAuNykpO1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAtLXM6IC41O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-list',
                templateUrl: './pokemon-list.component.html',
                styleUrls: ['./pokemon-list.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"] }]; }, { virtualScroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollerComponent"]]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "ceT6":
/*!************************************!*\
  !*** ./src/app/router-strategy.ts ***!
  \************************************/
/*! exports provided: CustomRouteReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouteReuseStrategy", function() { return CustomRouteReuseStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CustomRouteReuseStrategy {
    constructor() {
        this.routesToCache = ['pokemon'];
        this.storedRouteHandles = new Map();
    }
    // Decides if the route should be stored
    shouldDetach(route) {
        return this.routesToCache.indexOf(route.routeConfig.path) > -1;
    }
    // Store the information for the route we're destructing
    store(route, handle) {
        this.storedRouteHandles.set(route.routeConfig.path, handle);
    }
    // Return true if we have a stored route object for the next route
    shouldAttach(route) {
        return this.storedRouteHandles.has(route.routeConfig.path);
    }
    // If we returned true in shouldAttach(), now return the actual route data for restoration
    retrieve(route) {
        return this.storedRouteHandles.get(route.routeConfig.path);
    }
    // Reuse the route if we're going to and from the same route
    shouldReuseRoute(future, curr) {
        return future.routeConfig === curr.routeConfig;
    }
}
CustomRouteReuseStrategy.ɵfac = function CustomRouteReuseStrategy_Factory(t) { return new (t || CustomRouteReuseStrategy)(); };
CustomRouteReuseStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomRouteReuseStrategy, factory: CustomRouteReuseStrategy.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomRouteReuseStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "de+6":
/*!************************************************************!*\
  !*** ./src/app/pokemon-detail/pokemon-detail.component.ts ***!
  \************************************************************/
/*! exports provided: PokemonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailComponent", function() { return PokemonDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pokemon.service */ "+biT");
/* harmony import */ var _shared_pokemon_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pokemon.model */ "703N");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









function PokemonDetailComponent_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("genera text-capitalize ", ctx_r1.pokemon.color, " rounded fadeIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemonGenera);
} }
function PokemonDetailComponent_div_1_div_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { "fIn": a0 }; };
const _c1 = function () { return []; };
function PokemonDetailComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonDetailComponent_div_1_div_7_ng_container_2_Template, 2, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.BubblesVisible));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1).constructor(200));
} }
function PokemonDetailComponent_div_1_span_30_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c2 = function (a0) { return { "hiddenAbility": a0 }; };
const _c3 = function (a0, a1) { return { "display": a0, "margin-top": a1 }; };
function PokemonDetailComponent_div_1_span_30_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_span_30_ng_container_1_Template, 2, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_span_30_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r12 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.selectAbility(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ability_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r12 == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ability ", ctx_r3.pokemon.color, " text-uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ability_r11["isH"]))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c3, i_r12 == 2 ? "inline-block" : "unset", i_r12 == 2 ? "5px" : "0px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ability_r11["n"]);
} }
function PokemonDetailComponent_div_1_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-capitalize row icon ", type_r16["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r16["n"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r16["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_span_41_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c4 = function (a0) { return { selectedForm: a0 }; };
function PokemonDetailComponent_div_1_span_41_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_span_41_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const i_r18 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.selectForm(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonDetailComponent_div_1_span_41_ng_container_3_Template, 2, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formName_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("variety ", ctx_r5.pokemon.color, " text-uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, ctx_r5.selectedFormNo === i_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](formName_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (i_r18 + 1) % 2 == 0);
} }
const _c5 = function (a0, a1) { return { "fIn": a0, "sigil-end": a1 }; };
function PokemonDetailComponent_div_1_img_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c5, ctx_r6.SigilVisible, ctx_r6.sigilEnd));
} }
function PokemonDetailComponent_div_1_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 45);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r7.SphereVisible));
} }
function PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Pok\u00E9mon does not evolve.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r40["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r40["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_div_10_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stage_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.pokemonService.pokemons[stage_r34[1] - 1].types);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r38.evolutionDesc[i_r35], " ");
} }
const _c6 = function (a0) { return { "selectedEvo": a0 }; };
function PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_div_2_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const stage_r34 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r43.selectEvolution(stage_r34[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const stage_r34 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r45.selectEvolution(stage_r34[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_div_10_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_div_11_Template, 3, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const stage_r34 = ctx.$implicit;
    const i_r35 = ctx.index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.evolutionChain.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r33.pad(stage_r34[1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", stage_r34[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", stage_r34[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", stage_r34[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r33.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c6, ctx_r33.selectedEvolutionId === stage_r34[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stage_r34[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.pokemonService.pokemons[stage_r34[1] - 1] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r35 < ctx_r33.evolutionChain.length - 1);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_6_ng_container_1_Template, 12, 14, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.evolutionChain);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r57["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r57["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_div_9_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stage_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.pokemonService.pokemons[stage_r47[1] - 1].types);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r53.evolutionDesc[i_r48], " ");
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_ng_template_11_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evolutionSideDesc_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", evolutionSideDesc_r61, " ");
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_ng_template_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_ng_template_11_ng_container_1_div_1_Template, 4, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r48 < ctx_r60.evolutionChain.length - 1);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_ng_template_11_ng_container_1_Template, 2, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.evolutionDesc[i_r48]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const stage_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r66.selectEvolution(stage_r47[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const stage_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r69.selectEvolution(stage_r47[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_div_9_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_ng_container_10_Template, 4, 1, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_ng_template_11_Template, 2, 1, "ng-template", null, 76, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const stage_r47 = ctx_r71.$implicit;
    const i_r48 = ctx_r71.index;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r49.pad(stage_r47[1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", stage_r47[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", stage_r47[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", stage_r47[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r49.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c6, ctx_r49.selectedEvolutionId === stage_r47[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stage_r47[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.pokemonService.pokemons[stage_r47[1] - 1] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r48 < ctx_r49.evolutionChain.length - 2)("ngIfElse", _r54);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_ng_container_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r76["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r76["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_ng_container_1_div_9_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sideStage_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r74.pokemonService.pokemons[sideStage_r73[1] - 1].types);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_ng_container_1_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const sideStage_r73 = ctx.$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r78.selectEvolution(sideStage_r73[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_ng_container_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const sideStage_r73 = ctx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r80.selectEvolution(sideStage_r73[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_ng_container_1_div_9_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sideStage_r73 = ctx.$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r72.pad(sideStage_r73[1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", sideStage_r73[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", sideStage_r73[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", sideStage_r73[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r72.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c6, ctx_r72.selectedEvolutionId === sideStage_r73[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sideStage_r73[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r72.pokemonService.pokemons[sideStage_r73[1] - 1] != undefined);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_ng_container_1_Template, 10, 12, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stage_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stage_r47);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_container_1_Template, 13, 14, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_ng_template_2_Template, 2, 1, "ng-template", null, 75, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r48 = ctx.index;
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r48 < ctx_r46.evolutionChain.length - 1)("ngIfElse", _r50);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_7_ng_container_1_Template, 4, 2, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.evolutionChain);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r93["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r93["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_div_9_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stage_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r88.pokemonService.pokemons[stage_r83[1] - 1].types);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r89.evolutionDesc[i_r84], " ");
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_ng_template_11_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evolutionSideDesc_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", evolutionSideDesc_r97, " ");
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_ng_template_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_ng_template_11_ng_container_1_div_1_Template, 4, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r84 < ctx_r96.evolutionChain.length - 1);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_ng_template_11_ng_container_1_Template, 2, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r91.evolutionDesc[i_r84]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const stage_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r102.selectEvolution(stage_r83[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const stage_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r105.selectEvolution(stage_r83[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_div_9_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_ng_container_10_Template, 4, 1, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_ng_template_11_Template, 2, 1, "ng-template", null, 76, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const stage_r83 = ctx_r107.$implicit;
    const i_r84 = ctx_r107.index;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r85.pad(stage_r83[1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", stage_r83[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", stage_r83[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", stage_r83[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r85.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c6, ctx_r85.selectedEvolutionId === stage_r83[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stage_r83[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r85.pokemonService.pokemons[stage_r83[1] - 1] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r84 < ctx_r85.evolutionChain.length - 3)("ngIfElse", _r90);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r115["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r115["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_1_div_9_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sideStage_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r113.pokemonService.pokemons[sideStage_r112[1] - 1].types);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_1_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const sideStage_r112 = ctx.$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r117.selectEvolution(sideStage_r112[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const sideStage_r112 = ctx.$implicit; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r119.selectEvolution(sideStage_r112[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_1_div_9_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sideStage_r112 = ctx.$implicit;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r108.pad(sideStage_r112[1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", sideStage_r112[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", sideStage_r112[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", sideStage_r112[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r108.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c6, ctx_r108.selectedEvolutionId === sideStage_r112[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sideStage_r112[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r108.pokemonService.pokemons[sideStage_r112[1] - 1] != undefined);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r109.evolutionDesc[i_r84], " ");
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_template_3_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evolutionSideDesc_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", evolutionSideDesc_r122, " ");
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_template_3_ng_container_1_div_1_Template, 4, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r84 < ctx_r121.evolutionChain.length - 1);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_template_3_ng_container_1_Template, 2, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r111.evolutionDesc[i_r84]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_1_Template, 10, 12, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_container_2_Template, 4, 1, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_ng_template_3_Template, 2, 1, "ng-template", null, 76, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const stage_r83 = ctx_r127.$implicit;
    const i_r84 = ctx_r127.index;
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stage_r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r84 < ctx_r87.evolutionChain.length - 3)("ngIfElse", _r110);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_container_1_Template, 13, 14, "ng-container", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_ng_template_2_Template, 5, 3, "ng-template", null, 75, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r84 = ctx.index;
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r84 < ctx_r82.evolutionChain.length - 2)("ngIfElse", _r86);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_8_ng_container_1_Template, 4, 2, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.evolutionChain);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r139["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r139["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_2_div_9_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row1_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r137.pokemonService.pokemons[row1_r135[1] - 1].types);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_2_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const row1_r135 = ctx.$implicit; const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r141.selectEvolution(row1_r135[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_2_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const row1_r135 = ctx.$implicit; const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r143.selectEvolution(row1_r135[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_2_div_9_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row1_r135 = ctx.$implicit;
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r128.pad(row1_r135[1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", row1_r135[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", row1_r135[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", row1_r135[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r128.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c6, ctx_r128.selectedEvolutionId === row1_r135[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row1_r135[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r128.pokemonService.pokemons[row1_r135[1] - 1] != undefined);
} }
const _c7 = function (a0, a1) { return { "corner1": a0, "corner2": a1 }; };
function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const evolutionSideDesc_r144 = ctx.$implicit;
    const i_r145 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, i_r145 === 0, i_r145 == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", evolutionSideDesc_r144, " ");
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r147 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r147["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r147["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_9_div_14_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r130.pokemonService.pokemons[ctx_r130.evolutionChain[1][3][1] - 1].types);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r149 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r149["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r149["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_9_div_27_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r131.pokemonService.pokemons[ctx_r131.evolutionChain[0][1] - 1].types);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r151 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r151["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r151["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_9_div_40_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r132.pokemonService.pokemons[ctx_r132.evolutionChain[1][4][1] - 1].types);
} }
const _c8 = function (a0, a1, a2) { return { "corner3": a0, "corner3-4": a1, "corner4": a2 }; };
function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const evolutionSideDesc_r152 = ctx.$implicit;
    const i_r153 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c8, i_r153 === 0, i_r153 == 1, i_r153 == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", evolutionSideDesc_r152, " ");
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_44_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r158["n"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r158["n"], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_44_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_44_div_9_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row1_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r156.pokemonService.pokemons[row1_r154[1] - 1].types);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_44_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); const row1_r154 = ctx.$implicit; const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r160.selectEvolution(row1_r154[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_44_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); const row1_r154 = ctx.$implicit; const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r162.selectEvolution(row1_r154[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_44_div_9_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row1_r154 = ctx.$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r134.pad(row1_r154[1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", row1_r154[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", row1_r154[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", row1_r154[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r134.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c6, ctx_r134.selectedEvolutionId === row1_r154[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row1_r154[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r134.pokemonService.pokemons[row1_r154[1] - 1] != undefined);
} }
function PokemonDetailComponent_div_1_div_114_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_2_Template, 10, 12, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_4_Template, 5, 5, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r163.selectEvolution(ctx_r163.evolutionChain[1][3][1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r165.selectEvolution(ctx_r165.evolutionChain[1][3][1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PokemonDetailComponent_div_1_div_114_ng_container_9_div_14_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_Template_img_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r166.selectEvolution(ctx_r166.evolutionChain[0][1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r167.selectEvolution(ctx_r167.evolutionChain[0][1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PokemonDetailComponent_div_1_div_114_ng_container_9_div_27_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_Template_img_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r168.selectEvolution(ctx_r168.evolutionChain[1][4][1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_div_114_ng_container_9_Template_div_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r169.selectEvolution(ctx_r169.evolutionChain[1][4][1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PokemonDetailComponent_div_1_div_114_ng_container_9_div_40_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_42_Template, 5, 6, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PokemonDetailComponent_div_1_div_114_ng_container_9_ng_container_44_Template, 10, 12, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.evolutionChain[1].slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.evolutionDesc[0].slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r25.pad(ctx_r25.evolutionChain[1][3][1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r25.evolutionChain[1][3][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r25.evolutionChain[1][3][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r25.evolutionChain[1][3][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r25.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c6, ctx_r25.selectedEvolutionId === ctx_r25.evolutionChain[1][3][1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.evolutionChain[1][3][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.pokemonService.pokemons[ctx_r25.evolutionChain[1][3][1] - 1] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.evolutionDesc[0][3], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r25.pad(ctx_r25.evolutionChain[0][1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r25.evolutionChain[0][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r25.evolutionChain[0][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r25.evolutionChain[0][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r25.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c6, ctx_r25.selectedEvolutionId === ctx_r25.evolutionChain[0][1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.evolutionChain[0][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.pokemonService.pokemons[ctx_r25.evolutionChain[0][1] - 1] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.evolutionDesc[0][4], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/thumbnails-compressed/", ctx_r25.pad(ctx_r25.evolutionChain[1][4][1], 4) + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r25.evolutionChain[1][4][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r25.evolutionChain[1][3][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r25.evolutionChain[1][4][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("evo-name ", ctx_r25.pokemon.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c6, ctx_r25.selectedEvolutionId === ctx_r25.evolutionChain[1][4][1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.evolutionChain[1][4][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.pokemonService.pokemons[ctx_r25.evolutionChain[1][4][1] - 1] != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.evolutionDesc[0].slice(5, 8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.evolutionChain[1].slice(5, 8));
} }
function PokemonDetailComponent_div_1_div_114_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forms Info.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r26.pokemon.color);
} }
function PokemonDetailComponent_div_1_div_114_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gender Info.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r27.pokemon.color);
} }
function PokemonDetailComponent_div_1_div_114_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r171 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r171, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r171, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_div_41_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.typeDefences["0x"]);
} }
function PokemonDetailComponent_div_1_div_114_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r173, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r173, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_div_46_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.typeDefences["0.25x"]);
} }
function PokemonDetailComponent_div_1_div_114_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r175 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r175, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r175, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_div_51_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.typeDefences["0.5x"]);
} }
function PokemonDetailComponent_div_1_div_114_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r177 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r177, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r177, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_div_56_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.typeDefences["2x"]);
} }
function PokemonDetailComponent_div_1_div_114_div_61_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r179 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon ", type_r179, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/type-icons/png/", type_r179, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonDetailComponent_div_1_div_114_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_div_114_div_61_div_1_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.typeDefences["4x"]);
} }
function PokemonDetailComponent_div_1_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Evolution Chain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonDetailComponent_div_1_div_114_ng_container_6_Template, 2, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PokemonDetailComponent_div_1_div_114_ng_container_7_Template, 2, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PokemonDetailComponent_div_1_div_114_ng_container_8_Template, 2, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonDetailComponent_div_1_div_114_ng_container_9_Template, 45, 42, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "A faire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Alternative Forms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Gender Differences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PokemonDetailComponent_div_1_div_114_tr_30_Template, 4, 1, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PokemonDetailComponent_div_1_div_114_tr_31_Template, 4, 1, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Typing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "0x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PokemonDetailComponent_div_1_div_114_div_41_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "0.25x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PokemonDetailComponent_div_1_div_114_div_46_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "0.5x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PokemonDetailComponent_div_1_div_114_div_51_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, PokemonDetailComponent_div_1_div_114_div_56_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "4x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PokemonDetailComponent_div_1_div_114_div_61_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.pokemon.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r8.exceptionalChainType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r8.exceptionalChainType === "112" || ctx_r8.exceptionalChainType === "12" || ctx_r8.exceptionalChainType === "13" ? ctx_r8.exceptionalChainType : "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "122");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "18");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.pokemon.color + "-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.pokemonForms.length - 1 === 0 ? "No" : "Yes", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.pokemon.color + "-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.pokemon.speciesDetails["GDi"] == true ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.pokemon.speciesDetails["FD"] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.genderDifferences[ctx_r8.pad(ctx_r8.pokemon.id, 3)] !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.typeDefences != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.typeDefences != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.typeDefences != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.typeDefences != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.typeDefences != undefined);
} }
const _c9 = function (a0) { return { fOut: a0 }; };
const _c10 = function (a0, a1) { return { fadeImg: a0, fOut: a1 }; };
const _c11 = function (a0) { return { "width": a0 }; };
function PokemonDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonDetailComponent_div_1_span_5_Template, 2, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PokemonDetailComponent_div_1_div_7_Template, 3, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Abilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PokemonDetailComponent_div_1_span_30_Template, 4, 12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PokemonDetailComponent_div_1_div_36_Template, 5, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Forms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PokemonDetailComponent_div_1_span_41_Template, 4, 8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function PokemonDetailComponent_div_1_Template_img_load_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r180.imagePreload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, PokemonDetailComponent_div_1_img_45_Template, 1, 4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PokemonDetailComponent_div_1_div_46_Template, 1, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r182.showStats("base"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Base ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r183.showStats("min"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonDetailComponent_div_1_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181); const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r184.showStats("max"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Max ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "HP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Defence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Sp. Attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sp. Defence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, PokemonDetailComponent_div_1_div_114_Template, 62, 21, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c9, !ctx_r0.visible));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.pokemon.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pokemonGenera != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.megaEvolving);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c9, !ctx_r0.visible));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r0.pokemon.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.heightInMetres + "m ( " + ctx_r0.heightInFeetInches + " )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.weightInKgs + "kg ( " + ctx_r0.weightInPounds + "lbs. )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pokemon.abilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pokemon.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.formattedFormNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.pokemonImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](42, _c10, !ctx_r0.imageLoading, !ctx_r0.imageVisible));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.megaEvolving);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.megaEvolving);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedStat == "base" ? ctx_r0.pokemon.color : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedStat == "min" ? ctx_r0.pokemon.color : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedStat == "max" ? ctx_r0.pokemon.color : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.pokemon.color)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c11, ctx_r0.stats[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.statsToShow[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.pokemon.color)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c11, ctx_r0.stats[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.statsToShow[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.pokemon.color)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c11, ctx_r0.stats[2]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.statsToShow[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.pokemon.color)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c11, ctx_r0.stats[3]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.statsToShow[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.pokemon.color)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c11, ctx_r0.stats[4]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.statsToShow[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.pokemon.color)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c11, ctx_r0.stats[5]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.statsToShow[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.totalBaseStats(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.evolutionChain.length > 0);
} }
class PokemonDetailComponent {
    constructor(activatedRoute, pokemonService) {
        this.activatedRoute = activatedRoute;
        this.pokemonService = pokemonService;
        this.maxPokemonStats = [];
        this.minPokemonStats = [];
        this.statsToShow = [];
        this.selectedStat = 'base';
        this.stats = ['0%', '0%', '0%', '0%', '0%', '0%'];
        this.imageLoading = true;
        this.abilities = [];
        this.abilitySelected = 0;
        this.allAbilitiesReceived = false;
        this.pokemonForms = [];
        this.formattedFormNames = [];
        this.selectedFormNo = 0;
        // varietiesReversed = false; // For Magearna
        this.formColors = {
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
            'minior-orange-meteor': 'red',
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
        this.formNameFormatted = {
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
        this.visible = true;
        this.imageVisible = true;
        // Mega Evolution Animation
        this.megaEvolving = false;
        this.megaEvolveAnimationEnabled = true;
        this.SphereVisible = false;
        this.SigilVisible = false;
        this.sigilEnd = false;
        this.BubblesVisible = false;
        this.imageLoadedForMegaEvolution = false;
        this.imageLoadedForMegaEvolutionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.evoChainsFetched = false;
        this.evolutionChain = [];
        this.evolutionDesc = [];
        this.evolutionChainExceptions_112 = [
            'oddish',
            'poliwag',
            'ralts',
            'cosmog'
        ];
        this.evolutionChainExceptions_12 = [
            'meowth',
            'slowpoke',
            'nincada',
            'snorunt',
            'clamperl',
            'burmy',
            'applin',
            'yamask'
        ]; //toxel,kubfu after form specific chains?
        this.evolutionChainExceptions_122 = [
            'wurmple',
        ];
        this.evolutionChainExceptions_13 = [
            'tyrogue'
        ];
        this.evolutionChainExceptions_18 = [
            'eevee'
        ];
        this.typeDefences = { '4x': [], '2x': [], '1x': [], '0.5x': [], '0.25x': [], '0x': [] };
        this.typeChart = [{ 'name': 'normal', 'immunes': ['ghost'], 'weaknesses': ['rock', 'steel'], 'strengths': [] },
            { 'name': 'fire', 'immunes': [], 'weaknesses': ['fire', 'water', 'rock', 'dragon'], 'strengths': ['grass', 'ice', 'bug', 'steel'] },
            { 'name': 'water', 'immunes': [], 'weaknesses': ['water', 'grass', 'dragon'], 'strengths': ['fire', 'ground', 'rock'] },
            { 'name': 'electric', 'immunes': ['ground'], 'weaknesses': ['electric', 'grass', 'dragon'], 'strengths': ['water', 'flying'] },
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
            { 'name': 'poison', 'immunes': ['steel'], 'weaknesses': ['poison', 'ground', 'rock', 'ghost'], 'strengths': ['grass', 'fairy'] },
            {
                'name': 'ground',
                'immunes': ['flying'],
                'weaknesses': ['grass', 'bug'],
                'strengths': ['fire', 'electric', 'poison', 'rock', 'steel']
            },
            { 'name': 'flying', 'immunes': [], 'weaknesses': ['electric', 'rock', 'steel'], 'strengths': ['grass', 'fighting', 'bug'] },
            { 'name': 'psychic', 'immunes': ['dark'], 'weaknesses': ['psychic', 'steel'], 'strengths': ['fighting', 'poison'] },
            {
                'name': 'bug',
                'immunes': [],
                'weaknesses': ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'],
                'strengths': ['grass', 'psychic', 'dark']
            },
            { 'name': 'rock', 'immunes': [], 'weaknesses': ['fighting', 'ground', 'steel'], 'strengths': ['fire', 'ice', 'flying', 'bug'] },
            { 'name': 'ghost', 'immunes': ['normal'], 'weaknesses': ['dark'], 'strengths': ['psychic', 'ghost'] },
            { 'name': 'dragon', 'immunes': ['fairy'], 'weaknesses': ['steel'], 'strengths': ['dragon'] },
            { 'name': 'dark', 'immunes': [], 'weaknesses': ['fighting', 'dark', 'fairy'], 'strengths': ['psychic', 'ghost'] },
            { 'name': 'steel', 'immunes': [], 'weaknesses': ['fire', 'water', 'electric', 'steel'], 'strengths': ['ice', 'rock', 'fairy'] },
            { 'name': 'fairy', 'immunes': [], 'weaknesses': ['fire', 'poison', 'steel'], 'strengths': ['fighting', 'dragon', 'dark'] }];
        this.types = [
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
            'shadow'
        ];
        this.genderDifferences = {
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
        this.movesList = [];
        this.delayMovesListLoad = true;
        this.movesListLoaded = false;
        this.levelUpMovesList = [];
        this.machineMovesList = [];
        this.eggMovesList = [];
        this.tutorMovesList = [];
        this.selectedMove = 'level-up';
        this.selectedMoveFirstColHeader = { 'level-up': 'Level', 'machine': '#', 'egg': '-', 'tutor': '-' };
        this.versions = {
            'red-blue': 1, 'yellow': 2, 'gold-silver': 3, 'crystal': 4, 'ruby-sapphire': 5, 'emerald': 6,
            'firered-leafgreen': 7, 'diamond-pearl': 8, 'platinum': 9, 'heartgold-soulsilver': 10, 'black-white': 11, 'colosseum': 12,
            'xd': 13, 'black-2-white-2': 14, 'x-y': 15, 'omega-ruby-alpha-sapphire': 16, 'sun-moon': 17, 'ultra-sun-ultra-moon': 18, "lets-go-pikachu-lets-go-eevee": 19, "sword-shield": 20
        };
        this.generations = {
            'generation-i': 1,
            'generation-ii': 2,
            'generation-iii': 3,
            'generation-iv': 4,
            'generation-v': 5,
            'generation-vi': 6,
            'generation-vii': 7,
            'generation-viii': 8
        };
        this.versionToGeneration = {
            'red-blue': 1, 'yellow': 1, 'gold-silver': 2, 'crystal': 2, 'ruby-sapphire': 3, 'emerald': 3,
            'firered-leafgreen': 3, 'diamond-pearl': 4, 'platinum': 4, 'heartgold-soulsilver': 4, 'black-white': 5, 'black-2-white-2': 5, 'x-y': 6, 'omega-ruby-alpha-sapphire': 6, 'sun-moon': 7, 'ultra-sun-ultra-moon': 7, "lets-go-pikachu-lets-go-eevee": 7, "sword-shield": 8
        };
        this.currentMoveID = null;
        this.moveDetails = [];
        this.moveLevelDetails = [];
        this.moveMachineDetails = [];
        this.moveEggDetails = [];
        this.moveTutorDetails = [];
        this.moveContestType = ['cool', 'beauty', 'cute', 'smart', 'tough'];
        this.megaEvolveAnimationEnabled = !this.pokemonService.isMobile;
    }
    ngOnInit() {
        if (this.pokemonService.versionMainSwitch) {
            this.selectedGameVersion = localStorage.getItem('SelectedVersion');
        }
        else {
            this.selectedGameVersion = 'sword-shield';
            localStorage.setItem('SelectedVersion', this.selectedGameVersion);
        }
        // Initialization Logic after Pokemon Fetching in Both If and Else Conditions
        this.activatedRoute.params.subscribe((params) => {
            this.pokemonId = params['id'];
            this.pokemonForms = [];
            this.formattedFormNames = [];
            // From List
            if (this.pokemonService.pokemons[this.pokemonId - 1]) {
                this.initializePokemonAndForms();
                // Directly From Link
            }
            else {
                this.pokemonService.EverythingLoaded.subscribe(res => {
                    this.initializePokemonAndForms();
                });
            }
        });
        // Subscribe to online check
        this.pokemonService.createOnline$().subscribe(isOnline => {
            this.isOnline = isOnline;
        });
    }
    initializePokemonAndForms() {
        const pokemonFromList = this.pokemonService.pokemons[this.pokemonId - 1];
        this.pokemon = new _shared_pokemon_model__WEBPACK_IMPORTED_MODULE_3__["Pokemon"](pokemonFromList.name, pokemonFromList.id, pokemonFromList.galarId, pokemonFromList.isolarmureId, pokemonFromList.couronneigeId, pokemonFromList.types, pokemonFromList.abilities, pokemonFromList.height, pokemonFromList.weight, pokemonFromList.baseExperience, pokemonFromList.heldItems, pokemonFromList.is_default, pokemonFromList.moves, pokemonFromList.stats, pokemonFromList.species, pokemonFromList.speciesDetails, pokemonFromList.color, pokemonFromList.genera, pokemonFromList.varieties, pokemonFromList.evolutionChainID);
        this.pokemonDefaultColor = this.pokemon.color;
        this.pokemonService.activePokemon.next(this.pokemon);
        this.requestForms();
        this.formatFormNames();
        // Store as first form in array
        this.pokemonForms[0] = new _shared_pokemon_model__WEBPACK_IMPORTED_MODULE_3__["Pokemon"](this.pokemon.name, this.pokemon.id, this.pokemon.galarId, this.pokemon.isolarmureId, this.pokemon.couronneigeId, this.pokemon.types, this.pokemon.abilities, this.pokemon.height, this.pokemon.weight, this.pokemon.baseExperience, this.pokemon.heldItems, this.pokemon.is_default, this.pokemon.moves, this.pokemon.stats, this.pokemon.species, this.pokemon.speciesDetails, this.pokemon.color, this.pokemon.genera, this.pokemon.varieties, this.pokemon.evolutionChainID);
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
        }
        else {
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
        }
        else {
            this.imageLoadedForMegaEvolutionSubject.next(true);
            this.imageLoadedForMegaEvolution = true;
        }
    }
    calculateStats() {
        for (let i = 0; i < 6; i++) {
            let calculatedStat = this.pokemonStats[i] / this.maxStat * 100;
            if (calculatedStat > 10) {
                this.stats[i] = calculatedStat + '%';
            }
            else {
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
        }
        else {
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
        }
        else {
            this.minPokemonStats[0] = Math.floor((2 * this.pokemonStats[0]) * 100 / 100 + 100 + 10);
        }
        for (let i = 1; i < 6; i++) {
            this.minPokemonStats[i] = Math.floor(Math.floor((2 * this.pokemonStats[i]) * 100 / 100 + 5) * 0.9);
        }
        this.maxMinStat = Math.max(...this.minPokemonStats);
    }
    showStats(type) {
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
            }
            else {
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
    selectAbility(no) {
        this.abilitySelected = no;
        this.unavailableAbilityText = '';
        if (['red-blue', 'yellow', 'gold-silver', 'crystal', 'lets-go-pikachu-lets-go-eevee'].indexOf(this.selectedGameVersion) !== -1) {
            this.unavailableAbilityText = 'Abilities unavailable in the selected games!';
        }
        else if (!this.availableInSelectedGen(this.abilities[no]['generation'])) {
            this.unavailableAbilityText = 'This ability didn\'t exist in the selected games!';
        }
        else {
            this.selectedAbilityFlavorText = this.abilities[no]['flavor_text_entries'][this.versions[this.selectedGameVersion]];
            if (this.abilities[no]['effect_entries'] == undefined) {
                this.selectedAbilityEffect = "Unavailable";
                this.selectedAbilityShortEffect = "Unavailable";
            }
            else {
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
                    continue; // Skipping these forms
                }
                else if (name.indexOf('-mega') !== -1 || name.indexOf('-primal') !== -1 || name === 'greninja-ash') {
                    const re = '(' + this.pokemon.species['n'] + ')[-]([a-z]*)';
                    const regExp = new RegExp(re, 'g');
                    formattedName = name.replace(regExp, '$2 $1');
                    formattedName = formattedName.replace(/-/g, ' ');
                }
                else if (name.indexOf('-alola') !== -1 && this.pokemon.id !== 25) { // Excluding Alola-Cap Pikachu
                    formattedName = 'Alolan ' + this.pokemon.species['n'];
                }
                else if (name.indexOf('-galar') !== -1) {
                    formattedName = 'Galarian ' + this.pokemon.species['n'];
                }
                else if (name.indexOf('-hisui') !== -1) {
                    formattedName = 'Hisuian ' + this.pokemon.species['n'];
                }
                else if (name.indexOf('-gmax') !== -1) {
                    formattedName = 'Gigantamax ' + this.pokemon.species['n'];
                }
                else { // Rest Species
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
                    continue; // Skipping these forms
                }
                formIDs.push(variety['id']);
                // formRequests.push(this.pokemonService.getPokemonByURL(variety['id']));
            }
        }
        else {
            for (const variety of this.pokemon.varieties.slice(1)) {
                if (variety['n'] === 'minior-red' || variety['n'] === 'minior-red-meteor') {
                    formIDs.push(variety['id']);
                }
            }
        }
        let i = 1;
        for (const id of formIDs) {
            const form = this.pokemonService.pokemonJSON[id.toString()];
            this.pokemonForms[i] = new _shared_pokemon_model__WEBPACK_IMPORTED_MODULE_3__["Pokemon"](form['N'], form['id'], null, null, null, form['T'], form['Ab'], form['H'], form['W'], form['BE'], form['HI'], form['isD'], this.pokemonService.pokemonMovesCSV[id.toString()], form['St'], form['Sp'], this.pokemon.speciesDetails, this.pokemon.color, this.pokemon.genera, this.pokemon.varieties, this.pokemon.evolutionChainID);
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
        }
        else {
            this.imageVisible = false;
            // this.megaEvolveAnimationEnabled = false;
        }
        setTimeout(() => {
            this.selectedFormNo = i;
            if (this.pokemonForms[i].name === this.pokemon.species['n']) {
                this.pokemon.name = this.pokemon.species['n'];
            }
            else if ((this.pokemon.id !== 25) // excluding Pikachu
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
                )) {
                this.pokemon.name = this.formattedFormNames[i];
            }
            else {
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
            }
            else {
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
        }
        else if (this.evolutionChainExceptions_12.indexOf(chain['species']['name']) > -1) {
            this.exceptionalChainType = '12';
        }
        else if (this.evolutionChainExceptions_13.indexOf(chain['species']['name']) > -1) {
            this.exceptionalChainType = '13';
        }
        else if (this.evolutionChainExceptions_18.indexOf(chain['species']['name']) > -1) {
            this.exceptionalChainType = '18';
        }
        else if (this.evolutionChainExceptions_122.indexOf(chain['species']['name']) > -1) {
            this.exceptionalChainType = '122';
        }
        var nextChain, i;
        switch (this.exceptionalChainType) {
            case '': // Normal Case
                do {
                    this.evolutionChain.push([
                        chain['species']['name'],
                        chain['species']['id'],
                        chain['is_baby'],
                        chain['evolution_details'] // 3
                    ]);
                    chain = chain['evolves_to'][0];
                } while (chain !== undefined);
                break;
            case '112':
                nextChain = chain;
                this.evolutionChain.push([
                    nextChain['species']['name'],
                    nextChain['species']['id'],
                    nextChain['is_baby'],
                    nextChain['evolution_details'] // 3
                ]);
                nextChain = chain['evolves_to'][0];
                this.evolutionChain.push([
                    nextChain['species']['name'],
                    nextChain['species']['id'],
                    nextChain['is_baby'],
                    nextChain['evolution_details'] // 3
                ]);
                this.evolutionChain[2] = [];
                i = 0;
                while (chain['evolves_to'][0]['evolves_to'][i] !== undefined) {
                    nextChain = chain['evolves_to'][0]['evolves_to'][i];
                    this.evolutionChain[2].push([
                        nextChain['species']['name'],
                        nextChain['species']['id'],
                        nextChain['is_baby'],
                        nextChain['evolution_details'] // 3
                    ]);
                    i++;
                }
                break;
            case '12':
            case '13':
            case '18':
                nextChain = chain;
                this.evolutionChain.push([
                    nextChain['species']['name'],
                    nextChain['species']['id'],
                    nextChain['is_baby'],
                    nextChain['evolution_details'] // 3
                ]);
                this.evolutionChain[1] = [];
                i = 0;
                while (chain['evolves_to'][i] !== undefined) {
                    nextChain = chain['evolves_to'][i];
                    this.evolutionChain[1].push([
                        nextChain['species']['name'],
                        nextChain['species']['id'],
                        nextChain['is_baby'],
                        nextChain['evolution_details'] // 3
                    ]);
                    i++;
                }
                break;
            case '122':
                nextChain = chain;
                this.evolutionChain.push([
                    nextChain['species']['name'],
                    nextChain['species']['id'],
                    nextChain['is_baby'],
                    nextChain['evolution_details'] // 3
                ]);
                this.evolutionChain[1] = [];
                nextChain = chain['evolves_to'][0]; // silcoon
                this.evolutionChain[1].push([
                    nextChain['species']['name'],
                    nextChain['species']['id'],
                    nextChain['is_baby'],
                    nextChain['evolution_details'] // 3
                ]);
                nextChain = chain['evolves_to'][1]; // cascoon
                this.evolutionChain[1].push([
                    nextChain['species']['name'],
                    nextChain['species']['id'],
                    nextChain['is_baby'],
                    nextChain['evolution_details'] // 3
                ]);
                this.evolutionChain[2] = [];
                nextChain = chain['evolves_to'][0]['evolves_to'][0]; // Beautifly
                this.evolutionChain[2].push([
                    nextChain['species']['name'],
                    nextChain['species']['id'],
                    nextChain['is_baby'],
                    nextChain['evolution_details'] // 3
                ]);
                nextChain = chain['evolves_to'][1]['evolves_to'][0]; // Dustox
                this.evolutionChain[2].push([
                    nextChain['species']['name'],
                    nextChain['species']['id'],
                    nextChain['is_baby'],
                    nextChain['evolution_details'] // 3
                ]);
        }
        this.generateEvolutionMethods();
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
                    }
                    else {
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
                    }
                    else {
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
                }
                else {
                    desc = 'Level up';
                }
                if (stage['gender'] !== null) {
                    let gender;
                    if (stage['gender'] === 2) {
                        gender = '(Male)';
                    }
                    else {
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
                    }
                    else if (stage['relative_physical_stats'] === -1) {
                        sign = '<';
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
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
                desc = 'Train in the Tower of Darkness/ Waters'; // Add forms support to Evolution Chain (sometime... someday...)
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
    getIdfromURL(url) {
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
    getExperiencePoints(growth_rate) {
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
        this.typeDefences = { '4x': [], '2x': [], '1x': [], '0.5x': [], '0.25x': [], '0x': [] };
        let type1 = this.pokemon.types[0]['n'];
        let type2;
        if (this.pokemon.types[1] !== undefined) {
            type2 = this.pokemon.types[1]['n'];
        }
        else {
            type2 = '';
        }
        for (const type of this.typeChart) {
            if ((type['immunes'].indexOf(type1) !== -1) || (type['immunes'].indexOf(type2) !== -1)) { // 0x
                this.typeDefences['0x'].push(type['name']);
            }
            else if ((type['weaknesses'].indexOf(type1) !== -1) && (type['weaknesses'].indexOf(type2) !== -1)) { // 0.25x
                this.typeDefences['0.25x'].push(type['name']);
            }
            else if (((type['strengths'].indexOf(type1) !== -1) && (type['strengths'].indexOf(type2) !== -1))) { // 4x
                this.typeDefences['4x'].push(type['name']);
            }
            else if (((type['strengths'].indexOf(type1) !== -1) && (type['weaknesses'].indexOf(type2) !== -1))
                || (((type['strengths'].indexOf(type2) !== -1) && (type['weaknesses'].indexOf(type1) !== -1)))) { // 1x
                this.typeDefences['1x'].push(type['name']);
            }
            else if (((type['strengths'].indexOf(type1) === -1) && (type['weaknesses'].indexOf(type2) !== -1))
                || (((type['strengths'].indexOf(type2) === -1) && (type['weaknesses'].indexOf(type1) !== -1)))) { // 0.5x
                this.typeDefences['0.5x'].push(type['name']);
            }
            else if (((type['strengths'].indexOf(type1) !== -1) && (type['weaknesses'].indexOf(type2) === -1))
                || (((type['strengths'].indexOf(type2) !== -1) && (type['weaknesses'].indexOf(type1) === -1)))) { // 2x
                this.typeDefences['2x'].push(type['name']);
            }
            else {
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
        }
        else if (friendship > 70) {
            return 'Higher than Normal';
        }
        else if (friendship === 70) {
            return 'Normal';
        }
        else if (friendship >= 35) {
            return 'Lower than Normal';
        }
        else if (friendship > 0) {
            return 'Low';
        }
        else {
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
        }
        else {
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
                }
                else {
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
    selectMovesByLearnMethod(moveToSelect) {
        if (this.selectedMove === moveToSelect) {
            return;
        }
        else {
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
    selectGameVersion(name) {
        if (this.selectedGameVersion === name) {
            return;
        }
        else {
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
            this.moveShortEffect = "Unavailable";
            this.moveEffect = "Unavailable";
        }
        else if (this.currentMoveData['effect_chance'] !== null) {
            this.moveShortEffect = this.currentMoveData['effect_entries']['short_effect'].replace(/\$effect_chance/g, this.movesList[id][2].effect_chance);
            this.moveEffect = this.currentMoveData['effect_entries']['effect'].replace(/\$effect_chance/g, this.movesList[id][2].effect_chance);
        }
        else {
            this.moveShortEffect = this.currentMoveData['effect_entries']['short_effect'];
            this.moveEffect = this.currentMoveData['effect_entries']['effect'];
        }
        //Flavor Text
        if (this.selectedGameVersion === 'red-blue' || this.selectedGameVersion === 'yellow') {
            this.moveFlavorTextEntry = 'Selected games had no flavor text entries!';
        }
        else {
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
    capitalizeSplitJoin(str, split, join) {
        str = str.split(split);
        for (let i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        return str.join(join);
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
PokemonDetailComponent.ɵfac = function PokemonDetailComponent_Factory(t) { return new (t || PokemonDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"])); };
PokemonDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonDetailComponent, selectors: [["app-pokemon-detail"]], decls: 2, vars: 1, consts: [["rel", "prefetch", "href", "assets/Mega-Evolution-Sigil.png"], ["class", "col-12 fadeIn MainDiv", 4, "ngIf"], [1, "col-12", "fadeIn", "MainDiv"], [1, "text-center", "text-uppercase", "Section-Heading", 3, "ngClass"], [1, "justify-content-center", "text-center"], ["style", "padding: 4px", "data-toggle", "modal", "data-target", "#descModal", 3, "class", 4, "ngIf"], [1, "row", "justify-content-center", 2, "position", "relative", "padding-bottom", "3rem"], ["class", "bubbles", 3, "ngClass", 4, "ngIf"], [1, "col-lg-3", "col-md-2", "bioDiv", "d-flex", "flex-wrap", "justify-content-center", 3, "ngClass"], [1, "inner"], [1, "table", "table-borderless"], [1, "text-right", "font-weight-bold"], [2, "white-space", "nowrap"], ["class", "abilities", 4, "ngFor", "ngForOf"], [1, "text-right", "font-weight-bold", 2, "vertical-align", "middle"], ["data-toggle", "modal", "data-target", "#typesModal", 1, "row", 2, "flex-wrap", "nowrap"], [3, "class", 4, "ngFor", "ngForOf"], [1, "formsBlock", "text-capitalize"], ["class", "varieties", "style", "white-space: pre;", 4, "ngFor", "ngForOf"], [1, "col-lg-5", "d-flex", "flex-wrap", "align-items-center"], [1, "image-container"], ["alt", "", 1, "Image", "img-fluid", "mx-auto", "my-auto", "d-block", "fadeInOut", 3, "src", "ngClass", "load"], ["alt", "", "class", "mega-sigil", "src", "assets/Mega-Evolution-Sigil.png", 3, "ngClass", 4, "ngIf"], ["class", "megaSphere", 3, "ngClass", 4, "ngIf"], [1, "col-lg-3", "col-md-2", "statDiv", "my-auto", "mx-auto", "d-flex", "flex-wrap", "justify-content-center"], [1, "btn", "rounded-pill", "font-weight-bold", 3, "ngClass", "click"], [1, "text-right", "font-weight-bold", 2, "white-space", "nowrap"], ["colspan", "3"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "", "aria-valuemin", "0", "aria-valuemax", "255", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "rounded-sm", 3, "ngClass", "ngStyle"], ["class", "container", "style", "padding-bottom: 3rem", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#descModal", 2, "padding", "4px"], [1, "bubbles", 3, "ngClass"], [1, "bubble-wrap"], [4, "ngFor", "ngForOf"], [1, "bubble"], [1, "abilities"], [4, "ngIf"], ["role", "button", "data-toggle", "modal", "data-target", "#abilityModal", 2, "white-space", "nowrap", 3, "ngClass", "ngStyle", "click"], [1, "col-8", "text-white"], [1, "col-4"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "varieties", 2, "white-space", "pre"], [3, "ngClass", "click"], ["alt", "", "src", "assets/Mega-Evolution-Sigil.png", 1, "mega-sigil", 3, "ngClass"], [1, "megaSphere", 3, "ngClass"], [1, "container", 2, "padding-bottom", "3rem"], [1, "Heading", "text-center", "text-uppercase", 2, "margin-bottom", "1.5rem"], [1, "rounded", 2, "padding", "2px 4px 4px", 3, "ngClass"], [1, "row", "justify-content-center", 2, "padding-bottom", "3rem"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "row", "justify-content-center", "SubSections"], [1, "col-lg", "col-md-4", "col-sm-6", "justify-content-center"], [1, "Heading", "text-center", "text-uppercase"], [1, "table", "table-borderless", 2, "width", "auto", "margin", "auto auto 1rem"], [1, "text-capitalize"], [1, "col-lg", "col-md-4", "col-sm-6", "justify-content-center", "TypeEffDiv"], [1, "table"], ["class", "typeDefencesRow", "style", "padding: 0;", 4, "ngIf"], ["class", "text-capitalize", 4, "ngFor", "ngForOf"], [1, "col-sm", "evo-div", 2, "padding", "10px"], ["class", "DNE", 4, "ngIf"], ["alt", "", 1, "evo-img", "mx-auto", "d-block", 3, "src", "routerLink", "click"], [1, "evo-id", "text-center"], [1, "evo-name", "text-uppercase", "text-center", 2, "padding", "0", "bottom", "0", 3, "routerLink", "click"], [3, "ngClass"], ["class", "evo-types col-xs-5", "style", "padding: 0;", 4, "ngIf"], ["class", "col-sm arrow-div evo-desc", 4, "ngIf"], [1, "DNE"], [1, "evo-types", "col-xs-5", 2, "padding", "0"], ["alt", "", 3, "src"], [1, "col-sm", "arrow-div", "evo-desc"], ["alt", "", "src", "assets/right-arrow.png", 1, "evo-arrow"], [4, "ngIf", "ngIfElse"], ["MultiStage", ""], ["MultiArrowStage", ""], [1, "multi-arrow-stage"], ["class", "arrow-div", 4, "ngIf"], [1, "arrow-div"], [1, "col-sm", "evo-desc"], [1, "col-sm", "multi-evo-stage"], [1, "eeveeRow1"], [1, "eeveeRow2"], [1, "eeveeRow3"], [1, "col-sm", "evo-div", "text-capitalize", 2, "padding", "10px"], ["alt", "", "src", "assets/right-arrow.png", 1, "evo-arrow", 2, "transform", "rotate(180deg)"], ["alt", "", "src", "assets/right-arrow.png", 1, "evo-arrow", 2, "transform", "rotate(0deg)"], [1, "col-sm", "evo-desc", 3, "ngClass"], ["colspan", "2", 1, "text-center"], ["data-toggle", "modal", "data-target", "#formsModal", 1, "ColoredButton", 3, "ngClass"], ["data-toggle", "modal", "data-target", "#genderModal", 1, "ColoredButton", 3, "ngClass"], [1, "typeDefencesRow", 2, "padding", "0"]], template: function PokemonDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_Template, 115, 57, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemon !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".MainDiv[_ngcontent-%COMP%] {\n  color: #505050;\n}\n\n.bioDiv[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #505050;\n}\n\n.statDiv[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child {\n  color: #505050;\n}\n\n.statDiv[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  color: #505050;\n}\n\n.icon[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 30px;\n  width: 90px;\n  filter: saturate(100%) brightness(110%);\n  transition: 200ms all;\n  margin: 0 0 0 15px;\n}\n\n.Section-Heading[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.6s ease-in-out;\n  color: #6d6d6d;\n}\n\n.Heading[_ngcontent-%COMP%] {\n  font-size: x-large;\n  color: #6d6d6d;\n}\n\n.bioDiv[_ngcontent-%COMP%] {\n  padding-right: 0;\n  margin-right: 0;\n  opacity: 1;\n  transition: opacity 0.6s ease-in-out;\n}\n\n.Image[_ngcontent-%COMP%] {\n  z-index: 100;\n  max-width: 85%;\n  height: auto;\n  padding-top: 10px;\n  opacity: 1;\n  transition: opacity 0.6s ease-in-out;\n}\n\n.statDiv[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 3rem !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.icon[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.icon[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%] {\n  padding: 5px 0 0 5px;\n  margin: 0 0 0 0;\n}\n\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 60%;\n}\n\n.abilities[_ngcontent-%COMP%], .varieties[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.ability[_ngcontent-%COMP%], .variety[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  padding: 2px 3px;\n  margin-right: 6px;\n  white-space: nowrap;\n  line-height: initial;\n}\n\n.variety[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  display: inline-block;\n}\n\n.formsBlock[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n.hiddenAbility[_ngcontent-%COMP%], .selectedForm[_ngcontent-%COMP%], .selectedEvo[_ngcontent-%COMP%] {\n  filter: brightness(110%) saturate(50%);\n}\n\n.fadeInOut[_ngcontent-%COMP%] {\n  transition: opacity 2s ease-out;\n  opacity: 0;\n}\n\n.fadeImg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation: fadein 1s;\n  \n  \n  \n  animation: fadein 1s;\n  -webkit-animation-name: fadein;\n          animation-name: fadein;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n\n\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n\n\n\n@media only screen and (min-width: 992px) {\n  .bioDiv[_ngcontent-%COMP%] {\n    perspective: 400px;\n    margin: auto 0;\n    width: 37em;\n  }\n\n  .bioDiv[_ngcontent-%COMP%]:hover   .inner[_ngcontent-%COMP%] {\n    transform: rotate(0);\n  }\n\n  .bioDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    transition: 0.3s;\n    transform: rotateY(30deg);\n  }\n\n  .statDiv[_ngcontent-%COMP%] {\n    perspective: 400px;\n    margin: 4em auto;\n    width: 37em;\n    padding-left: 0;\n    padding-right: 1rem;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  .statDiv[_ngcontent-%COMP%]:hover   .inner[_ngcontent-%COMP%] {\n    transform: rotate(0);\n  }\n\n  .statDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    transition: 0.3s;\n    transform: rotateY(-30deg);\n  }\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 0;\n  font-size: 1rem;\n  text-align: right;\n}\n\n.progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.black-text[_ngcontent-%COMP%] {\n  color: #607d8b !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.blue-text[_ngcontent-%COMP%] {\n  color: #3aaee4 !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.brown-text[_ngcontent-%COMP%] {\n  color: #a69791 !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.gray-text[_ngcontent-%COMP%] {\n  color: #949393 !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.green-text[_ngcontent-%COMP%] {\n  color: #68c96d !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.pink-text[_ngcontent-%COMP%] {\n  color: #ea89ab !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.purple-text[_ngcontent-%COMP%] {\n  color: #ad8ee7 !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: #ff8a80 !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: dimgray !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.yellow-text[_ngcontent-%COMP%] {\n  color: #dcb800 !important;\n  transition: color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.black[_ngcontent-%COMP%] {\n  background-color: #607d8b !important;\n  color: white !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.blue[_ngcontent-%COMP%] {\n  background-color: #81d4fa !important;\n  color: white !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.brown[_ngcontent-%COMP%] {\n  background-color: #bcaaa4 !important;\n  color: white !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.gray[_ngcontent-%COMP%] {\n  background-color: #a6a6a6 !important;\n  color: white !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: #81c784 !important;\n  color: white !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.pink[_ngcontent-%COMP%] {\n  background-color: #f8bbd0 !important;\n  color: white !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.purple[_ngcontent-%COMP%] {\n  background-color: #ad8ee7 !important;\n  color: white !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: #ff8a80 !important;\n  color: white !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.white[_ngcontent-%COMP%] {\n  background-color: #d5dbe1 !important;\n  color: dimgray !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.yellow[_ngcontent-%COMP%] {\n  background-color: #ffd600 !important;\n  color: white !important;\n  transition: background-color 1000ms ease-in, width 1500ms ease-in-out;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.13);\n}\n\n.genera[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n@media (max-width: 991px) {\n  .bioDiv[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n\n  .bioDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  .ability[_ngcontent-%COMP%], .variety[_ngcontent-%COMP%] {\n    white-space: pre !important;\n  }\n\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n\n  .formsBlock[_ngcontent-%COMP%] {\n    padding-top: 4px !important;\n  }\n}\n\n@media (max-width: 500px) {\n  .Section-Heading[_ngcontent-%COMP%] {\n    font-size: x-large;\n  }\n\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n\n  .abilities[_ngcontent-%COMP%], .varieties[_ngcontent-%COMP%] {\n    font-size: small !important;\n  }\n\n  .varieties[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n\n  .bioDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    width: -webkit-min-content;\n    width: -moz-min-content;\n    width: min-content;\n  }\n\n  .statDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n  }\n\n  .statDiv[_ngcontent-%COMP%] {\n    padding-right: 0 !important;\n  }\n\n  #abilityModal[_ngcontent-%COMP%] {\n    font-size: small !important;\n  }\n\n  #descModal[_ngcontent-%COMP%] {\n    font-size: small !important;\n  }\n}\n\n@media (max-width: 340px) {\n  .statDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    font-size: x-small !important;\n    padding-top: 1rem;\n  }\n\n  #abilityModal[_ngcontent-%COMP%] {\n    font-size: x-small !important;\n  }\n\n  #descModal[_ngcontent-%COMP%] {\n    font-size: x-small !important;\n  }\n}\n\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: calc(85% + 10px);\n  \n  height: 0;\n  margin: auto;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.mega-sigil[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 1s ease-in-out;\n  position: absolute !important;\n  top: 50% !important;\n  left: 50% !important;\n  transform: translate(-50%, -50%);\n  z-index: 103;\n  width: auto;\n  height: 50%;\n  -webkit-animation-name: sigil-animation;\n          animation-name: sigil-animation;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.sigil-animate[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n}\n\n.sigil-end[_ngcontent-%COMP%] {\n  -webkit-animation-name: sigil-end;\n          animation-name: sigil-end;\n  -webkit-animation-duration: 2.1s;\n          animation-duration: 2.1s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n}\n\n@-webkit-keyframes sigil-animation {\n  0% {\n    filter: brightness(100%) saturate(100%);\n  }\n  25% {\n    filter: brightness(125%) saturate(125%);\n  }\n  50% {\n    filter: brightness(150%) saturate(150%);\n  }\n  100% {\n    filter: brightness(100%) saturate(100%);\n  }\n}\n\n@keyframes sigil-animation {\n  0% {\n    filter: brightness(100%) saturate(100%);\n  }\n  25% {\n    filter: brightness(125%) saturate(125%);\n  }\n  50% {\n    filter: brightness(150%) saturate(150%);\n  }\n  100% {\n    filter: brightness(100%) saturate(100%);\n  }\n}\n\n@-webkit-keyframes sigil-end {\n  0% {\n    transform: scale(1) translate(-50%, -50%);\n  }\n  25% {\n    opacity: 1;\n    filter: brightness(125%) saturate(125%);\n    transform: scale(1.1) translate(-50%, -50%);\n  }\n  100% {\n    opacity: 0;\n    filter: brightness(150%) saturate(150%);\n    transform: scale(1.2) translate(-50%, -50%);\n  }\n}\n\n@keyframes sigil-end {\n  0% {\n    transform: scale(1) translate(-50%, -50%);\n  }\n  25% {\n    opacity: 1;\n    filter: brightness(125%) saturate(125%);\n    transform: scale(1.1) translate(-50%, -50%);\n  }\n  100% {\n    opacity: 0;\n    filter: brightness(150%) saturate(150%);\n    transform: scale(1.2) translate(-50%, -50%);\n  }\n}\n\n.megaSphere[_ngcontent-%COMP%] {\n  will-change: opacity, transform;\n  opacity: 0;\n  transition: opacity 1s ease-in-out;\n  position: absolute !important;\n  top: 50% !important;\n  left: 50% !important;\n  transform: translate(-50%, -50%) scale(0.9);\n  z-index: 101;\n  width: 87%;\n  height: 98%;\n  border-radius: 50%;\n  -webkit-animation-name: mega-sphere;\n          animation-name: mega-sphere;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  box-shadow: inset 0 0 20px 0px #fff, inset 0 0 50px 10px #fff, inset 0 -20px 30px 0px #f0f, inset 0 -40px 30px 10px #4574f5, inset 0 -45px 45px 40px #8cc2ff, inset 0 -90px 40px 30px #45ff5e, inset 0 -120px 40px 30px #c1ff45, inset 0 10px 10px 40px #fdffb5, inset 0 20px 300px 10px #f9ff42, 0 0 50px #fff, 0 0px 10px #f0f;\n}\n\n@-webkit-keyframes mega-sphere {\n  0% {\n    transform: translate(-50%, -50%) scale(0.9);\n  }\n  25% {\n    transform: translate(-50%, -50%) scale(0.8);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(0.9);\n  }\n  75% {\n    transform: translate(-50%, -50%) scale(0.8);\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(0.9);\n  }\n}\n\n@keyframes mega-sphere {\n  0% {\n    transform: translate(-50%, -50%) scale(0.9);\n  }\n  25% {\n    transform: translate(-50%, -50%) scale(0.8);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(0.9);\n  }\n  75% {\n    transform: translate(-50%, -50%) scale(0.8);\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(0.9);\n  }\n}\n\n@-webkit-keyframes move {\n  100% {\n    transform: translate3d(0, 0, -1000px);\n  }\n}\n\n@keyframes move {\n  100% {\n    transform: translate3d(0, 0, -1000px);\n  }\n}\n\n.bubbles[_ngcontent-%COMP%] {\n  will-change: opacity;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 1s ease-in-out;\n  position: absolute;\n  z-index: 102;\n  height: 100%;\n  padding: 0;\n  width: 100%;\n  transform-style: preserve-3d;\n  overflow: hidden;\n}\n\n.bubble-wrap[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transform-origin: center center;\n  perspective: 600px;\n}\n\n.bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background: black;\n  opacity: 0.7;\n  border-radius: 50%;\n  -webkit-animation: move 2s infinite;\n          animation: move 2s infinite;\n  animation-direction: reverse;\n  box-shadow: 0 0 10px 5px #fff, inset 0 0 10px 1px #FFF;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(1) {\n  top: 31%;\n  left: 39%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n  transform: translate3d(210px, 15px, 3015px);\n  background: #a6f2bf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(2) {\n  top: 76%;\n  left: 52%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n  transform: translate3d(-905px, -753px, 2661px);\n  background: #a6f2b5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(3) {\n  top: 79%;\n  left: 68%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n  transform: translate3d(-938px, -376px, 1841px);\n  background: #c7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(4) {\n  top: 46%;\n  left: 37%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n  transform: translate3d(-288px, 738px, 2126px);\n  background: #a6f2cf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(5) {\n  top: 55%;\n  left: 45%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n  transform: translate3d(615px, 367px, 617px);\n  background: #f2dba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(6) {\n  top: 49%;\n  left: 62%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n  transform: translate3d(891px, 692px, 3398px);\n  background: #a6f2a7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(7) {\n  top: 23%;\n  left: 38%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n  transform: translate3d(13px, -546px, 1441px);\n  background: #eda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(8) {\n  top: 39%;\n  left: 23%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n  transform: translate3d(-330px, 768px, 1443px);\n  background: #f2aba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(9) {\n  top: 54%;\n  left: 67%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n  transform: translate3d(-626px, 526px, 3530px);\n  background: #f2eca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(10) {\n  top: 57%;\n  left: 76%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n  transform: translate3d(681px, 26px, 3052px);\n  background: #a7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(11) {\n  top: 57%;\n  left: 35%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n  transform: translate3d(-238px, -991px, 2583px);\n  background: #f2a6c7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(12) {\n  top: 75%;\n  left: 33%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -1.2s;\n          animation-delay: -1.2s;\n  transform: translate3d(969px, 191px, 3870px);\n  background: #dfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(13) {\n  top: 62%;\n  left: 55%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -1.3s;\n          animation-delay: -1.3s;\n  transform: translate3d(383px, -938px, 299px);\n  background: #a6f2de;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(14) {\n  top: 47%;\n  left: 74%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -1.4s;\n          animation-delay: -1.4s;\n  transform: translate3d(-142px, -411px, 2826px);\n  background: #d5f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(15) {\n  top: 60%;\n  left: 72%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -1.5s;\n          animation-delay: -1.5s;\n  transform: translate3d(975px, -355px, 3180px);\n  background: #f2a6e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(16) {\n  top: 24%;\n  left: 30%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -1.6s;\n          animation-delay: -1.6s;\n  transform: translate3d(346px, -85px, 863px);\n  background: #d0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(17) {\n  top: 64%;\n  left: 46%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -1.7s;\n          animation-delay: -1.7s;\n  transform: translate3d(782px, -89px, 3264px);\n  background: #f2e2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(18) {\n  top: 78%;\n  left: 70%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -1.8s;\n          animation-delay: -1.8s;\n  transform: translate3d(935px, 68px, 3204px);\n  background: #adf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(19) {\n  top: 76%;\n  left: 26%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -1.9s;\n          animation-delay: -1.9s;\n  transform: translate3d(-244px, 162px, 3969px);\n  background: #f2a6cf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(20) {\n  top: 81%;\n  left: 29%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -2s;\n          animation-delay: -2s;\n  transform: translate3d(310px, -853px, 1755px);\n  background: #cbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(21) {\n  top: 37%;\n  left: 51%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -2.1s;\n          animation-delay: -2.1s;\n  transform: translate3d(-121px, -969px, 1421px);\n  background: #a6d4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(22) {\n  top: 29%;\n  left: 47%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -2.2s;\n          animation-delay: -2.2s;\n  transform: translate3d(-230px, -437px, 2611px);\n  background: #a6f2c9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(23) {\n  top: 52%;\n  left: 85%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -2.3s;\n          animation-delay: -2.3s;\n  transform: translate3d(375px, 555px, 949px);\n  background: #f2afa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(24) {\n  top: 28%;\n  left: 35%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -2.4s;\n          animation-delay: -2.4s;\n  transform: translate3d(-194px, 597px, 3351px);\n  background: #f2d0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(25) {\n  top: 37%;\n  left: 81%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -2.5s;\n          animation-delay: -2.5s;\n  transform: translate3d(-155px, 996px, 3068px);\n  background: #a6bbf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(26) {\n  top: 22%;\n  left: 24%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -2.6s;\n          animation-delay: -2.6s;\n  transform: translate3d(631px, 929px, 1225px);\n  background: #f2a6aa;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(27) {\n  top: 64%;\n  left: 69%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -2.7s;\n          animation-delay: -2.7s;\n  transform: translate3d(75px, 526px, 2481px);\n  background: #dfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(28) {\n  top: 20%;\n  left: 46%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -2.8s;\n          animation-delay: -2.8s;\n  transform: translate3d(110px, -472px, 867px);\n  background: #a6f2a8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(29) {\n  top: 42%;\n  left: 76%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -2.9s;\n          animation-delay: -2.9s;\n  transform: translate3d(-301px, 0px, 2697px);\n  background: #b8f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(30) {\n  top: 42%;\n  left: 25%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -3s;\n          animation-delay: -3s;\n  transform: translate3d(729px, 738px, 3209px);\n  background: #a6f2aa;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(31) {\n  top: 48%;\n  left: 83%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -3.1s;\n          animation-delay: -3.1s;\n  transform: translate3d(991px, 715px, 3826px);\n  background: #a6cbf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(32) {\n  top: 64%;\n  left: 43%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -3.2s;\n          animation-delay: -3.2s;\n  transform: translate3d(827px, 328px, 3165px);\n  background: #a6e2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(33) {\n  top: 41%;\n  left: 53%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -3.3s;\n          animation-delay: -3.3s;\n  transform: translate3d(-799px, -593px, 3038px);\n  background: #cfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(34) {\n  top: 29%;\n  left: 77%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -3.4s;\n          animation-delay: -3.4s;\n  transform: translate3d(787px, -114px, 2037px);\n  background: #d5f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(35) {\n  top: 40%;\n  left: 81%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -3.5s;\n          animation-delay: -3.5s;\n  transform: translate3d(260px, 752px, 2060px);\n  background: #a6c8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(36) {\n  top: 28%;\n  left: 46%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -3.6s;\n          animation-delay: -3.6s;\n  transform: translate3d(-729px, 408px, 2650px);\n  background: #f2a6c9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(37) {\n  top: 65%;\n  left: 55%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -3.7s;\n          animation-delay: -3.7s;\n  transform: translate3d(257px, -896px, 3561px);\n  background: #a6dff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(38) {\n  top: 48%;\n  left: 52%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -3.8s;\n          animation-delay: -3.8s;\n  transform: translate3d(875px, -34px, 2392px);\n  background: #d9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(39) {\n  top: 85%;\n  left: 57%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -3.9s;\n          animation-delay: -3.9s;\n  transform: translate3d(-571px, 300px, 2606px);\n  background: #a6f2b6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(40) {\n  top: 39%;\n  left: 28%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -4s;\n          animation-delay: -4s;\n  transform: translate3d(-451px, -223px, 3987px);\n  background: #f2e4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(41) {\n  top: 68%;\n  left: 45%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -4.1s;\n          animation-delay: -4.1s;\n  transform: translate3d(-167px, 465px, 1996px);\n  background: #f2a6ee;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(42) {\n  top: 84%;\n  left: 43%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -4.2s;\n          animation-delay: -4.2s;\n  transform: translate3d(303px, 653px, 1844px);\n  background: #f2a6de;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(43) {\n  top: 20%;\n  left: 17%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -4.3s;\n          animation-delay: -4.3s;\n  transform: translate3d(682px, 940px, 1344px);\n  background: #f2dfa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(44) {\n  top: 45%;\n  left: 20%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -4.4s;\n          animation-delay: -4.4s;\n  transform: translate3d(-575px, -813px, 2944px);\n  background: #f2aaa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(45) {\n  top: 42%;\n  left: 50%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -4.5s;\n          animation-delay: -4.5s;\n  transform: translate3d(-495px, 929px, 2899px);\n  background: #a6f2d2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(46) {\n  top: 44%;\n  left: 44%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -4.6s;\n          animation-delay: -4.6s;\n  transform: translate3d(-60px, -39px, 2994px);\n  background: #d9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(47) {\n  top: 22%;\n  left: 85%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -4.7s;\n          animation-delay: -4.7s;\n  transform: translate3d(495px, 7px, 2116px);\n  background: #d0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(48) {\n  top: 69%;\n  left: 82%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -4.8s;\n          animation-delay: -4.8s;\n  transform: translate3d(347px, -824px, 2333px);\n  background: #a6c4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(49) {\n  top: 19%;\n  left: 24%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -4.9s;\n          animation-delay: -4.9s;\n  transform: translate3d(952px, -790px, 3686px);\n  background: #f2a6e3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(50) {\n  top: 26%;\n  left: 20%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -5s;\n          animation-delay: -5s;\n  transform: translate3d(134px, 164px, 3975px);\n  background: #a7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(51) {\n  top: 18%;\n  left: 19%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -5.1s;\n          animation-delay: -5.1s;\n  transform: translate3d(411px, -208px, 2332px);\n  background: #daa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(52) {\n  top: 68%;\n  left: 68%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -5.2s;\n          animation-delay: -5.2s;\n  transform: translate3d(387px, 213px, 81px);\n  background: #a6b4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(53) {\n  top: 40%;\n  left: 25%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -5.3s;\n          animation-delay: -5.3s;\n  transform: translate3d(388px, -862px, 3598px);\n  background: #a6e6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(54) {\n  top: 22%;\n  left: 70%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -5.4s;\n          animation-delay: -5.4s;\n  transform: translate3d(-650px, 111px, 34px);\n  background: #cbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(55) {\n  top: 73%;\n  left: 51%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -5.5s;\n          animation-delay: -5.5s;\n  transform: translate3d(922px, 153px, 2490px);\n  background: #c9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(56) {\n  top: 25%;\n  left: 22%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -5.6s;\n          animation-delay: -5.6s;\n  transform: translate3d(772px, -39px, 2067px);\n  background: #f2a6da;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(57) {\n  top: 36%;\n  left: 66%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -5.7s;\n          animation-delay: -5.7s;\n  transform: translate3d(983px, 569px, 756px);\n  background: #f2f0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(58) {\n  top: 51%;\n  left: 73%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -5.8s;\n          animation-delay: -5.8s;\n  transform: translate3d(-625px, -589px, 3940px);\n  background: #aaa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(59) {\n  top: 18%;\n  left: 55%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -5.9s;\n          animation-delay: -5.9s;\n  transform: translate3d(678px, -686px, 2395px);\n  background: #d0a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(60) {\n  top: 63%;\n  left: 69%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -6s;\n          animation-delay: -6s;\n  transform: translate3d(853px, 516px, 3520px);\n  background: #c7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(61) {\n  top: 26%;\n  left: 81%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -6.1s;\n          animation-delay: -6.1s;\n  transform: translate3d(-373px, -518px, 3531px);\n  background: #f2a6b0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(62) {\n  top: 21%;\n  left: 56%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -6.2s;\n          animation-delay: -6.2s;\n  transform: translate3d(328px, -927px, 3320px);\n  background: #b3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(63) {\n  top: 30%;\n  left: 85%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -6.3s;\n          animation-delay: -6.3s;\n  transform: translate3d(-742px, 539px, 3750px);\n  background: #a6b4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(64) {\n  top: 51%;\n  left: 74%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -6.4s;\n          animation-delay: -6.4s;\n  transform: translate3d(971px, -98px, 2543px);\n  background: #f2a6c8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(65) {\n  top: 17%;\n  left: 16%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -6.5s;\n          animation-delay: -6.5s;\n  transform: translate3d(-755px, -85px, 2342px);\n  background: #f2a6df;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(66) {\n  top: 42%;\n  left: 39%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -6.6s;\n          animation-delay: -6.6s;\n  transform: translate3d(438px, 342px, 266px);\n  background: #dbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(67) {\n  top: 16%;\n  left: 71%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -6.7s;\n          animation-delay: -6.7s;\n  transform: translate3d(-480px, -543px, 3108px);\n  background: #f2cfa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(68) {\n  top: 41%;\n  left: 33%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -6.8s;\n          animation-delay: -6.8s;\n  transform: translate3d(798px, -755px, 3852px);\n  background: #f2a6b1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(69) {\n  top: 55%;\n  left: 84%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -6.9s;\n          animation-delay: -6.9s;\n  transform: translate3d(-849px, -373px, 3082px);\n  background: #dba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(70) {\n  top: 78%;\n  left: 22%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -7s;\n          animation-delay: -7s;\n  transform: translate3d(-932px, 739px, 2571px);\n  background: #f2dba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(71) {\n  top: 64%;\n  left: 33%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -7.1s;\n          animation-delay: -7.1s;\n  transform: translate3d(-570px, 686px, 2599px);\n  background: #f2a6b4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(72) {\n  top: 35%;\n  left: 45%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -7.2s;\n          animation-delay: -7.2s;\n  transform: translate3d(-961px, -65px, 2936px);\n  background: #a6c4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(73) {\n  top: 66%;\n  left: 24%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -7.3s;\n          animation-delay: -7.3s;\n  transform: translate3d(-246px, 997px, 954px);\n  background: #cda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(74) {\n  top: 62%;\n  left: 17%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -7.4s;\n          animation-delay: -7.4s;\n  transform: translate3d(-62px, -680px, 2261px);\n  background: #f2a6e6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(75) {\n  top: 36%;\n  left: 50%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -7.5s;\n          animation-delay: -7.5s;\n  transform: translate3d(-166px, 339px, 536px);\n  background: #a6f2d6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(76) {\n  top: 76%;\n  left: 47%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -7.6s;\n          animation-delay: -7.6s;\n  transform: translate3d(-77px, -851px, 1684px);\n  background: #a6f2d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(77) {\n  top: 73%;\n  left: 43%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -7.7s;\n          animation-delay: -7.7s;\n  transform: translate3d(-3px, -857px, 979px);\n  background: #a6f2c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(78) {\n  top: 50%;\n  left: 54%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -7.8s;\n          animation-delay: -7.8s;\n  transform: translate3d(-933px, -641px, 725px);\n  background: #eba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(79) {\n  top: 37%;\n  left: 65%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -7.9s;\n          animation-delay: -7.9s;\n  transform: translate3d(-453px, -249px, 2659px);\n  background: #a6f2af;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(80) {\n  top: 65%;\n  left: 66%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -8s;\n          animation-delay: -8s;\n  transform: translate3d(-397px, -684px, 2227px);\n  background: #f2a6e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(81) {\n  top: 39%;\n  left: 70%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -8.1s;\n          animation-delay: -8.1s;\n  transform: translate3d(221px, -930px, 2471px);\n  background: #f2a6bf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(82) {\n  top: 48%;\n  left: 59%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -8.2s;\n          animation-delay: -8.2s;\n  transform: translate3d(819px, -841px, 2990px);\n  background: #c2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(83) {\n  top: 85%;\n  left: 40%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -8.3s;\n          animation-delay: -8.3s;\n  transform: translate3d(394px, 426px, 3833px);\n  background: #a6f0f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(84) {\n  top: 82%;\n  left: 82%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -8.4s;\n          animation-delay: -8.4s;\n  transform: translate3d(-326px, -191px, 3774px);\n  background: #f2a6d9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(85) {\n  top: 55%;\n  left: 34%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -8.5s;\n          animation-delay: -8.5s;\n  transform: translate3d(89px, 214px, 3503px);\n  background: #b9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(86) {\n  top: 26%;\n  left: 68%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -8.6s;\n          animation-delay: -8.6s;\n  transform: translate3d(429px, -476px, 3602px);\n  background: #a6f2c3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(87) {\n  top: 49%;\n  left: 65%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -8.7s;\n          animation-delay: -8.7s;\n  transform: translate3d(-385px, 482px, 217px);\n  background: #a6dff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(88) {\n  top: 32%;\n  left: 81%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -8.8s;\n          animation-delay: -8.8s;\n  transform: translate3d(701px, 646px, 331px);\n  background: #aca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(89) {\n  top: 66%;\n  left: 54%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -8.9s;\n          animation-delay: -8.9s;\n  transform: translate3d(-230px, 365px, 326px);\n  background: #cdf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(90) {\n  top: 71%;\n  left: 39%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -9s;\n          animation-delay: -9s;\n  transform: translate3d(98px, -169px, 2567px);\n  background: #f2c4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(91) {\n  top: 24%;\n  left: 76%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -9.1s;\n          animation-delay: -9.1s;\n  transform: translate3d(-388px, 21px, 3282px);\n  background: #f2a6ec;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(92) {\n  top: 31%;\n  left: 37%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -9.2s;\n          animation-delay: -9.2s;\n  transform: translate3d(-53px, -356px, 1004px);\n  background: #a6f2b8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(93) {\n  top: 62%;\n  left: 51%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -9.3s;\n          animation-delay: -9.3s;\n  transform: translate3d(1000px, 225px, 1864px);\n  background: #b0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(94) {\n  top: 65%;\n  left: 77%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -9.4s;\n          animation-delay: -9.4s;\n  transform: translate3d(257px, 795px, 2306px);\n  background: #e4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(95) {\n  top: 69%;\n  left: 16%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -9.5s;\n          animation-delay: -9.5s;\n  transform: translate3d(-297px, -850px, 2137px);\n  background: #a6f2e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(96) {\n  top: 71%;\n  left: 66%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -9.6s;\n          animation-delay: -9.6s;\n  transform: translate3d(-811px, 496px, 3062px);\n  background: #a6c8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(97) {\n  top: 82%;\n  left: 29%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -9.7s;\n          animation-delay: -9.7s;\n  transform: translate3d(337px, 18px, 3746px);\n  background: #a6f2f0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(98) {\n  top: 83%;\n  left: 49%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -9.8s;\n          animation-delay: -9.8s;\n  transform: translate3d(984px, -364px, 40px);\n  background: #f2a7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(99) {\n  top: 81%;\n  left: 36%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -9.9s;\n          animation-delay: -9.9s;\n  transform: translate3d(754px, 971px, 3241px);\n  background: #a6adf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(100) {\n  top: 82%;\n  left: 72%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -10s;\n          animation-delay: -10s;\n  transform: translate3d(-526px, 951px, 1471px);\n  background: #f2a6e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(101) {\n  top: 33%;\n  left: 49%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -10.1s;\n          animation-delay: -10.1s;\n  transform: translate3d(-36px, 490px, 2471px);\n  background: #f2a6b5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(102) {\n  top: 59%;\n  left: 79%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -10.2s;\n          animation-delay: -10.2s;\n  transform: translate3d(669px, -817px, 1215px);\n  background: #a6bff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(103) {\n  top: 30%;\n  left: 78%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -10.3s;\n          animation-delay: -10.3s;\n  transform: translate3d(78px, 644px, 2903px);\n  background: #f2a6dd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(104) {\n  top: 50%;\n  left: 81%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -10.4s;\n          animation-delay: -10.4s;\n  transform: translate3d(772px, -97px, 1528px);\n  background: #a6f2bd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(105) {\n  top: 73%;\n  left: 47%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -10.5s;\n          animation-delay: -10.5s;\n  transform: translate3d(718px, 890px, 1967px);\n  background: #f2a6ad;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(106) {\n  top: 60%;\n  left: 31%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -10.6s;\n          animation-delay: -10.6s;\n  transform: translate3d(-144px, 958px, 1885px);\n  background: #a6f2b9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(107) {\n  top: 26%;\n  left: 59%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -10.7s;\n          animation-delay: -10.7s;\n  transform: translate3d(524px, -902px, 3280px);\n  background: #a6f2b3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(108) {\n  top: 19%;\n  left: 63%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -10.8s;\n          animation-delay: -10.8s;\n  transform: translate3d(-508px, -393px, 3333px);\n  background: #eef2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(109) {\n  top: 81%;\n  left: 77%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -10.9s;\n          animation-delay: -10.9s;\n  transform: translate3d(-924px, 348px, 2135px);\n  background: #dbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(110) {\n  top: 76%;\n  left: 81%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -11s;\n          animation-delay: -11s;\n  transform: translate3d(-446px, -135px, 3565px);\n  background: #a6f2d9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(111) {\n  top: 25%;\n  left: 76%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -11.1s;\n          animation-delay: -11.1s;\n  transform: translate3d(-976px, -306px, 163px);\n  background: #e4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(112) {\n  top: 76%;\n  left: 26%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -11.2s;\n          animation-delay: -11.2s;\n  transform: translate3d(-864px, -698px, 3122px);\n  background: #d6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(113) {\n  top: 28%;\n  left: 16%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -11.3s;\n          animation-delay: -11.3s;\n  transform: translate3d(113px, -15px, 1070px);\n  background: #f2b8a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(114) {\n  top: 47%;\n  left: 41%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -11.4s;\n          animation-delay: -11.4s;\n  transform: translate3d(-698px, -478px, 2733px);\n  background: #c9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(115) {\n  top: 79%;\n  left: 17%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -11.5s;\n          animation-delay: -11.5s;\n  transform: translate3d(330px, 817px, 1308px);\n  background: #baa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(116) {\n  top: 62%;\n  left: 67%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -11.6s;\n          animation-delay: -11.6s;\n  transform: translate3d(-998px, 455px, 3417px);\n  background: #b1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(117) {\n  top: 45%;\n  left: 47%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -11.7s;\n          animation-delay: -11.7s;\n  transform: translate3d(654px, -583px, 1926px);\n  background: #f2a6ad;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(118) {\n  top: 41%;\n  left: 76%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -11.8s;\n          animation-delay: -11.8s;\n  transform: translate3d(749px, 976px, 776px);\n  background: #a6aaf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(119) {\n  top: 59%;\n  left: 65%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -11.9s;\n          animation-delay: -11.9s;\n  transform: translate3d(786px, -162px, 3137px);\n  background: #a6bbf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(120) {\n  top: 61%;\n  left: 65%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -12s;\n          animation-delay: -12s;\n  transform: translate3d(640px, 263px, 24px);\n  background: #d1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(121) {\n  top: 20%;\n  left: 45%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -12.1s;\n          animation-delay: -12.1s;\n  transform: translate3d(-755px, -484px, 3003px);\n  background: #f2a6a7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(122) {\n  top: 83%;\n  left: 29%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -12.2s;\n          animation-delay: -12.2s;\n  transform: translate3d(-732px, 836px, 2141px);\n  background: #f2a6cb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(123) {\n  top: 33%;\n  left: 61%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -12.3s;\n          animation-delay: -12.3s;\n  transform: translate3d(-330px, 296px, 2927px);\n  background: #a6cdf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(124) {\n  top: 26%;\n  left: 69%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -12.4s;\n          animation-delay: -12.4s;\n  transform: translate3d(-955px, -574px, 2048px);\n  background: #b6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(125) {\n  top: 45%;\n  left: 77%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -12.5s;\n          animation-delay: -12.5s;\n  transform: translate3d(196px, 863px, 980px);\n  background: #a6f2ad;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(126) {\n  top: 24%;\n  left: 64%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -12.6s;\n          animation-delay: -12.6s;\n  transform: translate3d(899px, -473px, 2447px);\n  background: #d4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(127) {\n  top: 19%;\n  left: 49%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -12.7s;\n          animation-delay: -12.7s;\n  transform: translate3d(182px, -565px, 3220px);\n  background: #f2a6b3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(128) {\n  top: 49%;\n  left: 72%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -12.8s;\n          animation-delay: -12.8s;\n  transform: translate3d(-35px, 893px, 1112px);\n  background: #f2d9a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(129) {\n  top: 48%;\n  left: 80%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -12.9s;\n          animation-delay: -12.9s;\n  transform: translate3d(-658px, -634px, 2006px);\n  background: #a6abf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(130) {\n  top: 28%;\n  left: 57%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -13s;\n          animation-delay: -13s;\n  transform: translate3d(421px, 569px, 3639px);\n  background: #cba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(131) {\n  top: 38%;\n  left: 46%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -13.1s;\n          animation-delay: -13.1s;\n  transform: translate3d(-810px, -19px, 1526px);\n  background: #a6a8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(132) {\n  top: 56%;\n  left: 74%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -13.2s;\n          animation-delay: -13.2s;\n  transform: translate3d(-671px, -157px, 2210px);\n  background: #a6f2e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(133) {\n  top: 51%;\n  left: 56%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -13.3s;\n          animation-delay: -13.3s;\n  transform: translate3d(741px, 635px, 2108px);\n  background: #f2c9a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(134) {\n  top: 68%;\n  left: 71%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -13.4s;\n          animation-delay: -13.4s;\n  transform: translate3d(102px, 183px, 2650px);\n  background: #a6f2b3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(135) {\n  top: 82%;\n  left: 58%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -13.5s;\n          animation-delay: -13.5s;\n  transform: translate3d(158px, 187px, 303px);\n  background: #a6f2cd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(136) {\n  top: 83%;\n  left: 78%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -13.6s;\n          animation-delay: -13.6s;\n  transform: translate3d(-220px, 37px, 3571px);\n  background: #a6e8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(137) {\n  top: 51%;\n  left: 23%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -13.7s;\n          animation-delay: -13.7s;\n  transform: translate3d(-658px, -485px, 3283px);\n  background: #d9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(138) {\n  top: 77%;\n  left: 16%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -13.8s;\n          animation-delay: -13.8s;\n  transform: translate3d(133px, -224px, 84px);\n  background: #e9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(139) {\n  top: 61%;\n  left: 59%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -13.9s;\n          animation-delay: -13.9s;\n  transform: translate3d(360px, 845px, 3373px);\n  background: #f2a6e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(140) {\n  top: 24%;\n  left: 23%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -14s;\n          animation-delay: -14s;\n  transform: translate3d(570px, 145px, 3121px);\n  background: #f2d2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(141) {\n  top: 81%;\n  left: 65%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -14.1s;\n          animation-delay: -14.1s;\n  transform: translate3d(-352px, 248px, 665px);\n  background: #f2b5a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(142) {\n  top: 46%;\n  left: 82%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -14.2s;\n          animation-delay: -14.2s;\n  transform: translate3d(520px, -311px, 136px);\n  background: #f2dda6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(143) {\n  top: 78%;\n  left: 33%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -14.3s;\n          animation-delay: -14.3s;\n  transform: translate3d(799px, 402px, 754px);\n  background: #cca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(144) {\n  top: 69%;\n  left: 26%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -14.4s;\n          animation-delay: -14.4s;\n  transform: translate3d(-208px, -585px, 973px);\n  background: #d6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(145) {\n  top: 38%;\n  left: 60%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -14.5s;\n          animation-delay: -14.5s;\n  transform: translate3d(-152px, -52px, 3654px);\n  background: #a6f2ed;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(146) {\n  top: 81%;\n  left: 81%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -14.6s;\n          animation-delay: -14.6s;\n  transform: translate3d(-566px, 847px, 569px);\n  background: #a6f2d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(147) {\n  top: 60%;\n  left: 71%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -14.7s;\n          animation-delay: -14.7s;\n  transform: translate3d(736px, -268px, 1420px);\n  background: #f2a6c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(148) {\n  top: 85%;\n  left: 40%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -14.8s;\n          animation-delay: -14.8s;\n  transform: translate3d(-738px, -371px, 1535px);\n  background: #a6e0f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(149) {\n  top: 64%;\n  left: 27%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -14.9s;\n          animation-delay: -14.9s;\n  transform: translate3d(689px, -457px, 2480px);\n  background: #a6f2e6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(150) {\n  top: 37%;\n  left: 75%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -15s;\n          animation-delay: -15s;\n  transform: translate3d(-641px, -103px, 1392px);\n  background: #acf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(151) {\n  top: 54%;\n  left: 16%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -15.1s;\n          animation-delay: -15.1s;\n  transform: translate3d(649px, -431px, 2114px);\n  background: #f2a6d6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(152) {\n  top: 84%;\n  left: 63%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -15.2s;\n          animation-delay: -15.2s;\n  transform: translate3d(-386px, -979px, 2780px);\n  background: #f2a6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(153) {\n  top: 73%;\n  left: 55%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -15.3s;\n          animation-delay: -15.3s;\n  transform: translate3d(-416px, 558px, 943px);\n  background: #f2e8a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(154) {\n  top: 74%;\n  left: 74%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -15.4s;\n          animation-delay: -15.4s;\n  transform: translate3d(-39px, 304px, 2238px);\n  background: #f2d2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(155) {\n  top: 55%;\n  left: 82%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -15.5s;\n          animation-delay: -15.5s;\n  transform: translate3d(-76px, 63px, 2460px);\n  background: #a6b5f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(156) {\n  top: 79%;\n  left: 33%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -15.6s;\n          animation-delay: -15.6s;\n  transform: translate3d(33px, -891px, 120px);\n  background: #a6f2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(157) {\n  top: 42%;\n  left: 44%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -15.7s;\n          animation-delay: -15.7s;\n  transform: translate3d(-591px, -824px, 255px);\n  background: #a6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(158) {\n  top: 44%;\n  left: 52%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -15.8s;\n          animation-delay: -15.8s;\n  transform: translate3d(-485px, 920px, 3163px);\n  background: #e2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(159) {\n  top: 58%;\n  left: 50%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -15.9s;\n          animation-delay: -15.9s;\n  transform: translate3d(-565px, -548px, 216px);\n  background: #aff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(160) {\n  top: 66%;\n  left: 25%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -16s;\n          animation-delay: -16s;\n  transform: translate3d(392px, 921px, 3366px);\n  background: #a6e0f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(161) {\n  top: 23%;\n  left: 62%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -16.1s;\n          animation-delay: -16.1s;\n  transform: translate3d(-123px, 622px, 1876px);\n  background: #a6d1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(162) {\n  top: 77%;\n  left: 47%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -16.2s;\n          animation-delay: -16.2s;\n  transform: translate3d(-463px, -218px, 3390px);\n  background: #f2a6bd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(163) {\n  top: 44%;\n  left: 24%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -16.3s;\n          animation-delay: -16.3s;\n  transform: translate3d(-153px, 822px, 1807px);\n  background: #f2d2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(164) {\n  top: 28%;\n  left: 69%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -16.4s;\n          animation-delay: -16.4s;\n  transform: translate3d(609px, 349px, 2202px);\n  background: #a6a7f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(165) {\n  top: 41%;\n  left: 45%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -16.5s;\n          animation-delay: -16.5s;\n  transform: translate3d(-400px, -261px, 3349px);\n  background: #f2a6b9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(166) {\n  top: 81%;\n  left: 44%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -16.6s;\n          animation-delay: -16.6s;\n  transform: translate3d(-530px, -712px, 188px);\n  background: #a6f2be;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(167) {\n  top: 39%;\n  left: 70%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -16.7s;\n          animation-delay: -16.7s;\n  transform: translate3d(-648px, -73px, 1013px);\n  background: #b4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(168) {\n  top: 77%;\n  left: 49%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -16.8s;\n          animation-delay: -16.8s;\n  transform: translate3d(-310px, -333px, 3443px);\n  background: #f2e2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(169) {\n  top: 64%;\n  left: 60%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -16.9s;\n          animation-delay: -16.9s;\n  transform: translate3d(526px, -851px, 2212px);\n  background: #c6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(170) {\n  top: 50%;\n  left: 42%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -17s;\n          animation-delay: -17s;\n  transform: translate3d(782px, 893px, 769px);\n  background: #a6f2b1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(171) {\n  top: 22%;\n  left: 60%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -17.1s;\n          animation-delay: -17.1s;\n  transform: translate3d(-947px, 775px, 2399px);\n  background: #b0a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(172) {\n  top: 81%;\n  left: 26%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -17.2s;\n          animation-delay: -17.2s;\n  transform: translate3d(3px, 10px, 2256px);\n  background: #a6ebf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(173) {\n  top: 37%;\n  left: 24%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -17.3s;\n          animation-delay: -17.3s;\n  transform: translate3d(632px, 490px, 1418px);\n  background: #a6f2ba;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(174) {\n  top: 82%;\n  left: 76%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -17.4s;\n          animation-delay: -17.4s;\n  transform: translate3d(-644px, 739px, 1940px);\n  background: #bba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(175) {\n  top: 33%;\n  left: 59%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -17.5s;\n          animation-delay: -17.5s;\n  transform: translate3d(-13px, 676px, 3638px);\n  background: #f2c7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(176) {\n  top: 34%;\n  left: 36%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -17.6s;\n          animation-delay: -17.6s;\n  transform: translate3d(-716px, -298px, 160px);\n  background: #f2a6e8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(177) {\n  top: 29%;\n  left: 84%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -17.7s;\n          animation-delay: -17.7s;\n  transform: translate3d(555px, 786px, 2286px);\n  background: #e0a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(178) {\n  top: 54%;\n  left: 20%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -17.8s;\n          animation-delay: -17.8s;\n  transform: translate3d(964px, -340px, 3542px);\n  background: #f2baa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(179) {\n  top: 58%;\n  left: 69%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -17.9s;\n          animation-delay: -17.9s;\n  transform: translate3d(-104px, -159px, 807px);\n  background: #f2d6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(180) {\n  top: 44%;\n  left: 28%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -18s;\n          animation-delay: -18s;\n  transform: translate3d(-209px, 462px, 3935px);\n  background: #a6bbf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(181) {\n  top: 22%;\n  left: 21%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -18.1s;\n          animation-delay: -18.1s;\n  transform: translate3d(-792px, 455px, 639px);\n  background: #a6f2c7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(182) {\n  top: 79%;\n  left: 48%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -18.2s;\n          animation-delay: -18.2s;\n  transform: translate3d(-808px, -156px, 1384px);\n  background: #a6e0f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(183) {\n  top: 19%;\n  left: 55%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -18.3s;\n          animation-delay: -18.3s;\n  transform: translate3d(724px, -364px, 2785px);\n  background: #a6f2dd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(184) {\n  top: 64%;\n  left: 39%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -18.4s;\n          animation-delay: -18.4s;\n  transform: translate3d(55px, -809px, 779px);\n  background: #f2a6cf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(185) {\n  top: 33%;\n  left: 24%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -18.5s;\n          animation-delay: -18.5s;\n  transform: translate3d(152px, 550px, 3610px);\n  background: #a6d1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(186) {\n  top: 54%;\n  left: 42%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -18.6s;\n          animation-delay: -18.6s;\n  transform: translate3d(-90px, -638px, 2041px);\n  background: #e6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(187) {\n  top: 80%;\n  left: 64%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -18.7s;\n          animation-delay: -18.7s;\n  transform: translate3d(444px, -486px, 920px);\n  background: #f2a6af;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(188) {\n  top: 54%;\n  left: 83%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -18.8s;\n          animation-delay: -18.8s;\n  transform: translate3d(-988px, -216px, 1192px);\n  background: #afa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(189) {\n  top: 21%;\n  left: 31%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -18.9s;\n          animation-delay: -18.9s;\n  transform: translate3d(613px, 922px, 2145px);\n  background: #f2a6b5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(190) {\n  top: 31%;\n  left: 60%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -19s;\n          animation-delay: -19s;\n  transform: translate3d(916px, -322px, 1447px);\n  background: #c9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(191) {\n  top: 32%;\n  left: 52%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -19.1s;\n          animation-delay: -19.1s;\n  transform: translate3d(-779px, 288px, 2257px);\n  background: #d2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(192) {\n  top: 35%;\n  left: 57%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -19.2s;\n          animation-delay: -19.2s;\n  transform: translate3d(-250px, -965px, 3065px);\n  background: #a6bff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(193) {\n  top: 61%;\n  left: 60%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -19.3s;\n          animation-delay: -19.3s;\n  transform: translate3d(-176px, -969px, 2988px);\n  background: #bfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(194) {\n  top: 31%;\n  left: 25%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -19.4s;\n          animation-delay: -19.4s;\n  transform: translate3d(664px, -186px, 2807px);\n  background: #f2b0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(195) {\n  top: 54%;\n  left: 51%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -19.5s;\n          animation-delay: -19.5s;\n  transform: translate3d(-664px, -280px, 790px);\n  background: #a6bff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(196) {\n  top: 16%;\n  left: 73%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -19.6s;\n          animation-delay: -19.6s;\n  transform: translate3d(414px, 771px, 1482px);\n  background: #f2a6e8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(197) {\n  top: 73%;\n  left: 47%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -19.7s;\n          animation-delay: -19.7s;\n  transform: translate3d(-750px, 212px, 1553px);\n  background: #b4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(198) {\n  top: 54%;\n  left: 60%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -19.8s;\n          animation-delay: -19.8s;\n  transform: translate3d(-630px, -4px, 3754px);\n  background: #a6f2e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(199) {\n  top: 81%;\n  left: 60%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -19.9s;\n          animation-delay: -19.9s;\n  transform: translate3d(539px, 797px, 289px);\n  background: #a6f2de;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(200) {\n  top: 47%;\n  left: 64%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -20s;\n          animation-delay: -20s;\n  transform: translate3d(-502px, -529px, 1608px);\n  background: #f2e7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(201) {\n  top: 53%;\n  left: 80%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -20.1s;\n          animation-delay: -20.1s;\n  transform: translate3d(-789px, 171px, 960px);\n  background: #f2a6b5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(202) {\n  top: 20%;\n  left: 25%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -20.2s;\n          animation-delay: -20.2s;\n  transform: translate3d(408px, -303px, 2814px);\n  background: #bff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(203) {\n  top: 67%;\n  left: 57%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -20.3s;\n          animation-delay: -20.3s;\n  transform: translate3d(872px, -483px, 3234px);\n  background: #f2eca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(204) {\n  top: 74%;\n  left: 84%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -20.4s;\n          animation-delay: -20.4s;\n  transform: translate3d(357px, -844px, 1661px);\n  background: #a6cbf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(205) {\n  top: 76%;\n  left: 37%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -20.5s;\n          animation-delay: -20.5s;\n  transform: translate3d(-945px, -30px, 485px);\n  background: #b3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(206) {\n  top: 29%;\n  left: 76%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -20.6s;\n          animation-delay: -20.6s;\n  transform: translate3d(635px, 251px, 1171px);\n  background: #b3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(207) {\n  top: 47%;\n  left: 23%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -20.7s;\n          animation-delay: -20.7s;\n  transform: translate3d(-15px, -317px, 3782px);\n  background: #a6e2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(208) {\n  top: 80%;\n  left: 71%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -20.8s;\n          animation-delay: -20.8s;\n  transform: translate3d(222px, 907px, 2758px);\n  background: #a6f0f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(209) {\n  top: 27%;\n  left: 27%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -20.9s;\n          animation-delay: -20.9s;\n  transform: translate3d(-756px, -292px, 3191px);\n  background: #f2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(210) {\n  top: 18%;\n  left: 46%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -21s;\n          animation-delay: -21s;\n  transform: translate3d(-192px, -616px, 197px);\n  background: #a6f2c1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(211) {\n  top: 36%;\n  left: 54%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -21.1s;\n          animation-delay: -21.1s;\n  transform: translate3d(458px, 711px, 1398px);\n  background: #dbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(212) {\n  top: 60%;\n  left: 45%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -21.2s;\n          animation-delay: -21.2s;\n  transform: translate3d(502px, 767px, 3389px);\n  background: #f2e7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(213) {\n  top: 77%;\n  left: 41%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -21.3s;\n          animation-delay: -21.3s;\n  transform: translate3d(-550px, -906px, 2604px);\n  background: #eba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(214) {\n  top: 20%;\n  left: 63%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -21.4s;\n          animation-delay: -21.4s;\n  transform: translate3d(-990px, 425px, 1340px);\n  background: #f2a6a7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(215) {\n  top: 48%;\n  left: 78%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -21.5s;\n          animation-delay: -21.5s;\n  transform: translate3d(372px, 659px, 2252px);\n  background: #f2cda6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(216) {\n  top: 68%;\n  left: 34%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -21.6s;\n          animation-delay: -21.6s;\n  transform: translate3d(-97px, 1px, 2702px);\n  background: #a6d2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(217) {\n  top: 71%;\n  left: 76%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -21.7s;\n          animation-delay: -21.7s;\n  transform: translate3d(-126px, -222px, 90px);\n  background: #f2d4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(218) {\n  top: 22%;\n  left: 52%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -21.8s;\n          animation-delay: -21.8s;\n  transform: translate3d(315px, -255px, 3907px);\n  background: #f2c4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(219) {\n  top: 73%;\n  left: 47%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -21.9s;\n          animation-delay: -21.9s;\n  transform: translate3d(-540px, 202px, 3052px);\n  background: #cdf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(220) {\n  top: 46%;\n  left: 81%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -22s;\n          animation-delay: -22s;\n  transform: translate3d(787px, 604px, 231px);\n  background: #f2a6cb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(221) {\n  top: 20%;\n  left: 19%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -22.1s;\n          animation-delay: -22.1s;\n  transform: translate3d(300px, 751px, 3962px);\n  background: #a6b3f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(222) {\n  top: 58%;\n  left: 73%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -22.2s;\n          animation-delay: -22.2s;\n  transform: translate3d(-35px, 950px, 1005px);\n  background: #c4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(223) {\n  top: 74%;\n  left: 69%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -22.3s;\n          animation-delay: -22.3s;\n  transform: translate3d(-812px, -486px, 1839px);\n  background: #a6daf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(224) {\n  top: 66%;\n  left: 57%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -22.4s;\n          animation-delay: -22.4s;\n  transform: translate3d(434px, -907px, 2697px);\n  background: #a6f2a7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(225) {\n  top: 64%;\n  left: 71%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -22.5s;\n          animation-delay: -22.5s;\n  transform: translate3d(107px, -622px, 1567px);\n  background: #f2a6b1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(226) {\n  top: 44%;\n  left: 71%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -22.6s;\n          animation-delay: -22.6s;\n  transform: translate3d(495px, -355px, 1161px);\n  background: #f2a6d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(227) {\n  top: 32%;\n  left: 56%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -22.7s;\n          animation-delay: -22.7s;\n  transform: translate3d(-794px, -924px, 3896px);\n  background: #f2b5a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(228) {\n  top: 51%;\n  left: 39%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -22.8s;\n          animation-delay: -22.8s;\n  transform: translate3d(-606px, 344px, 535px);\n  background: #a6cdf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(229) {\n  top: 29%;\n  left: 39%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -22.9s;\n          animation-delay: -22.9s;\n  transform: translate3d(468px, 87px, 2696px);\n  background: #f2c7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(230) {\n  top: 59%;\n  left: 63%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -23s;\n          animation-delay: -23s;\n  transform: translate3d(652px, 816px, 3820px);\n  background: #f2a6bd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(231) {\n  top: 61%;\n  left: 71%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -23.1s;\n          animation-delay: -23.1s;\n  transform: translate3d(-84px, 536px, 1421px);\n  background: #a6f2af;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(232) {\n  top: 26%;\n  left: 59%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -23.2s;\n          animation-delay: -23.2s;\n  transform: translate3d(-513px, -284px, 877px);\n  background: #dff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(233) {\n  top: 28%;\n  left: 47%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -23.3s;\n          animation-delay: -23.3s;\n  transform: translate3d(248px, -197px, 3046px);\n  background: #f2a6b5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(234) {\n  top: 23%;\n  left: 82%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -23.4s;\n          animation-delay: -23.4s;\n  transform: translate3d(-483px, 28px, 3763px);\n  background: #f2b3a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(235) {\n  top: 77%;\n  left: 45%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -23.5s;\n          animation-delay: -23.5s;\n  transform: translate3d(780px, -751px, 3061px);\n  background: #f2d7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(236) {\n  top: 18%;\n  left: 48%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -23.6s;\n          animation-delay: -23.6s;\n  transform: translate3d(-423px, 18px, 3994px);\n  background: #f2aba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(237) {\n  top: 39%;\n  left: 82%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -23.7s;\n          animation-delay: -23.7s;\n  transform: translate3d(-773px, -998px, 1349px);\n  background: #d4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(238) {\n  top: 48%;\n  left: 67%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -23.8s;\n          animation-delay: -23.8s;\n  transform: translate3d(-553px, 346px, 1118px);\n  background: #f2bba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(239) {\n  top: 23%;\n  left: 62%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -23.9s;\n          animation-delay: -23.9s;\n  transform: translate3d(-316px, -252px, 2589px);\n  background: #f2f0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(240) {\n  top: 48%;\n  left: 51%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -24s;\n          animation-delay: -24s;\n  transform: translate3d(-80px, 690px, 893px);\n  background: #bdf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(241) {\n  top: 30%;\n  left: 41%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -24.1s;\n          animation-delay: -24.1s;\n  transform: translate3d(691px, 13px, 525px);\n  background: #b5a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(242) {\n  top: 58%;\n  left: 67%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -24.2s;\n          animation-delay: -24.2s;\n  transform: translate3d(-635px, 436px, 1695px);\n  background: #b8a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(243) {\n  top: 29%;\n  left: 17%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -24.3s;\n          animation-delay: -24.3s;\n  transform: translate3d(535px, 525px, 3308px);\n  background: #c4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(244) {\n  top: 71%;\n  left: 74%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -24.4s;\n          animation-delay: -24.4s;\n  transform: translate3d(477px, -325px, 1455px);\n  background: #a6e6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(245) {\n  top: 72%;\n  left: 17%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -24.5s;\n          animation-delay: -24.5s;\n  transform: translate3d(-441px, 876px, 1925px);\n  background: #cfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(246) {\n  top: 34%;\n  left: 17%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -24.6s;\n          animation-delay: -24.6s;\n  transform: translate3d(-577px, 889px, 2122px);\n  background: #f0a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(247) {\n  top: 17%;\n  left: 16%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -24.7s;\n          animation-delay: -24.7s;\n  transform: translate3d(489px, 111px, 1519px);\n  background: #f2a6b0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(248) {\n  top: 60%;\n  left: 70%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -24.8s;\n          animation-delay: -24.8s;\n  transform: translate3d(685px, -313px, 2242px);\n  background: #f2c1a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(249) {\n  top: 38%;\n  left: 83%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -24.9s;\n          animation-delay: -24.9s;\n  transform: translate3d(678px, -290px, 408px);\n  background: #a6f2d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(250) {\n  top: 63%;\n  left: 44%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -25s;\n          animation-delay: -25s;\n  transform: translate3d(-314px, 791px, 2908px);\n  background: #aaa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(251) {\n  top: 84%;\n  left: 82%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -25.1s;\n          animation-delay: -25.1s;\n  transform: translate3d(630px, 905px, 3437px);\n  background: #f2a6a8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(252) {\n  top: 62%;\n  left: 65%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -25.2s;\n          animation-delay: -25.2s;\n  transform: translate3d(268px, 60px, 2080px);\n  background: #eba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(253) {\n  top: 57%;\n  left: 55%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -25.3s;\n          animation-delay: -25.3s;\n  transform: translate3d(-254px, -730px, 847px);\n  background: #a6e3f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(254) {\n  top: 19%;\n  left: 55%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -25.4s;\n          animation-delay: -25.4s;\n  transform: translate3d(-145px, 950px, 1508px);\n  background: #f2cca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(255) {\n  top: 72%;\n  left: 81%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -25.5s;\n          animation-delay: -25.5s;\n  transform: translate3d(508px, 766px, 3314px);\n  background: #d6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(256) {\n  top: 73%;\n  left: 57%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -25.6s;\n          animation-delay: -25.6s;\n  transform: translate3d(161px, 92px, 65px);\n  background: #eea6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(257) {\n  top: 51%;\n  left: 63%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -25.7s;\n          animation-delay: -25.7s;\n  transform: translate3d(-541px, 131px, 1026px);\n  background: #ccf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(258) {\n  top: 85%;\n  left: 40%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -25.8s;\n          animation-delay: -25.8s;\n  transform: translate3d(-453px, -7px, 1833px);\n  background: #aba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(259) {\n  top: 34%;\n  left: 46%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -25.9s;\n          animation-delay: -25.9s;\n  transform: translate3d(-305px, -306px, 748px);\n  background: #f2c9a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(260) {\n  top: 72%;\n  left: 72%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -26s;\n          animation-delay: -26s;\n  transform: translate3d(-294px, 78px, 2385px);\n  background: #f2a6d2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(261) {\n  top: 67%;\n  left: 45%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -26.1s;\n          animation-delay: -26.1s;\n  transform: translate3d(-543px, 531px, 1224px);\n  background: #bba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(262) {\n  top: 50%;\n  left: 47%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -26.2s;\n          animation-delay: -26.2s;\n  transform: translate3d(113px, 604px, 476px);\n  background: #f2a6e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(263) {\n  top: 43%;\n  left: 40%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -26.3s;\n          animation-delay: -26.3s;\n  transform: translate3d(519px, -537px, 1111px);\n  background: #f2a6cf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(264) {\n  top: 53%;\n  left: 65%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -26.4s;\n          animation-delay: -26.4s;\n  transform: translate3d(6px, 294px, 233px);\n  background: #f2bfa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(265) {\n  top: 65%;\n  left: 60%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -26.5s;\n          animation-delay: -26.5s;\n  transform: translate3d(751px, 749px, 3296px);\n  background: #a6f2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(266) {\n  top: 61%;\n  left: 81%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -26.6s;\n          animation-delay: -26.6s;\n  transform: translate3d(-170px, 911px, 2931px);\n  background: #a6e3f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(267) {\n  top: 83%;\n  left: 75%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -26.7s;\n          animation-delay: -26.7s;\n  transform: translate3d(763px, 79px, 388px);\n  background: #c4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(268) {\n  top: 39%;\n  left: 32%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -26.8s;\n          animation-delay: -26.8s;\n  transform: translate3d(993px, 95px, 3029px);\n  background: #a6f2dd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(269) {\n  top: 19%;\n  left: 18%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -26.9s;\n          animation-delay: -26.9s;\n  transform: translate3d(574px, -684px, 3027px);\n  background: #ada6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(270) {\n  top: 50%;\n  left: 54%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -27s;\n          animation-delay: -27s;\n  transform: translate3d(-126px, 741px, 258px);\n  background: #f2e0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(271) {\n  top: 71%;\n  left: 59%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -27.1s;\n          animation-delay: -27.1s;\n  transform: translate3d(445px, 502px, 965px);\n  background: #f2f1a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(272) {\n  top: 19%;\n  left: 61%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -27.2s;\n          animation-delay: -27.2s;\n  transform: translate3d(-174px, -255px, 2178px);\n  background: #d6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(273) {\n  top: 75%;\n  left: 76%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -27.3s;\n          animation-delay: -27.3s;\n  transform: translate3d(-439px, 933px, 3599px);\n  background: #eda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(274) {\n  top: 83%;\n  left: 41%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -27.4s;\n          animation-delay: -27.4s;\n  transform: translate3d(377px, -38px, 3340px);\n  background: #dfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(275) {\n  top: 28%;\n  left: 66%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -27.5s;\n          animation-delay: -27.5s;\n  transform: translate3d(101px, 117px, 3825px);\n  background: #adf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(276) {\n  top: 39%;\n  left: 51%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -27.6s;\n          animation-delay: -27.6s;\n  transform: translate3d(-710px, 238px, 2663px);\n  background: #cda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(277) {\n  top: 63%;\n  left: 75%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -27.7s;\n          animation-delay: -27.7s;\n  transform: translate3d(-385px, -563px, 471px);\n  background: #a6f2b3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(278) {\n  top: 29%;\n  left: 28%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -27.8s;\n          animation-delay: -27.8s;\n  transform: translate3d(-995px, -42px, 2402px);\n  background: #a6c6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(279) {\n  top: 84%;\n  left: 19%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -27.9s;\n          animation-delay: -27.9s;\n  transform: translate3d(970px, -47px, 2800px);\n  background: #f2a6bd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(280) {\n  top: 24%;\n  left: 51%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -28s;\n          animation-delay: -28s;\n  transform: translate3d(-235px, -174px, 1161px);\n  background: #a6f2ee;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(281) {\n  top: 57%;\n  left: 18%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -28.1s;\n          animation-delay: -28.1s;\n  transform: translate3d(-554px, 706px, 1341px);\n  background: #f0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(282) {\n  top: 59%;\n  left: 80%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -28.2s;\n          animation-delay: -28.2s;\n  transform: translate3d(-179px, 343px, 1891px);\n  background: #a6f2aa;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(283) {\n  top: 55%;\n  left: 31%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -28.3s;\n          animation-delay: -28.3s;\n  transform: translate3d(658px, 586px, 1512px);\n  background: #e2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(284) {\n  top: 32%;\n  left: 36%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -28.4s;\n          animation-delay: -28.4s;\n  transform: translate3d(-932px, -736px, 3063px);\n  background: #a6f2af;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(285) {\n  top: 74%;\n  left: 82%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -28.5s;\n          animation-delay: -28.5s;\n  transform: translate3d(276px, -811px, 2394px);\n  background: #e0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(286) {\n  top: 55%;\n  left: 49%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -28.6s;\n          animation-delay: -28.6s;\n  transform: translate3d(275px, -858px, 1630px);\n  background: #ddf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(287) {\n  top: 17%;\n  left: 77%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -28.7s;\n          animation-delay: -28.7s;\n  transform: translate3d(-122px, -880px, 1843px);\n  background: #a6f2e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(288) {\n  top: 17%;\n  left: 70%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -28.8s;\n          animation-delay: -28.8s;\n  transform: translate3d(790px, 917px, 3862px);\n  background: #cdf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(289) {\n  top: 27%;\n  left: 84%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -28.9s;\n          animation-delay: -28.9s;\n  transform: translate3d(222px, -729px, 3976px);\n  background: #f2a6d9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(290) {\n  top: 82%;\n  left: 30%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -29s;\n          animation-delay: -29s;\n  transform: translate3d(-720px, -438px, 2406px);\n  background: #e8a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(291) {\n  top: 68%;\n  left: 52%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -29.1s;\n          animation-delay: -29.1s;\n  transform: translate3d(-253px, 499px, 3716px);\n  background: #f2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(292) {\n  top: 33%;\n  left: 65%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -29.2s;\n          animation-delay: -29.2s;\n  transform: translate3d(1000px, -373px, 67px);\n  background: #a6b3f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(293) {\n  top: 25%;\n  left: 43%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -29.3s;\n          animation-delay: -29.3s;\n  transform: translate3d(385px, -693px, 3696px);\n  background: #e7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(294) {\n  top: 66%;\n  left: 81%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -29.4s;\n          animation-delay: -29.4s;\n  transform: translate3d(-867px, 475px, 3077px);\n  background: #f2a6db;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(295) {\n  top: 61%;\n  left: 18%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -29.5s;\n          animation-delay: -29.5s;\n  transform: translate3d(994px, -571px, 2751px);\n  background: #b5f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(296) {\n  top: 54%;\n  left: 27%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -29.6s;\n          animation-delay: -29.6s;\n  transform: translate3d(596px, 821px, 1970px);\n  background: #d5a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(297) {\n  top: 66%;\n  left: 55%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -29.7s;\n          animation-delay: -29.7s;\n  transform: translate3d(410px, 928px, 2069px);\n  background: #a6ddf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(298) {\n  top: 79%;\n  left: 81%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -29.8s;\n          animation-delay: -29.8s;\n  transform: translate3d(360px, -629px, 3465px);\n  background: #f2a6b1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(299) {\n  top: 58%;\n  left: 44%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -29.9s;\n          animation-delay: -29.9s;\n  transform: translate3d(243px, 506px, 2696px);\n  background: #c9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(300) {\n  top: 48%;\n  left: 30%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -30s;\n          animation-delay: -30s;\n  transform: translate3d(-139px, -469px, 2541px);\n  background: #f2a6b4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(301) {\n  top: 36%;\n  left: 81%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -30.1s;\n          animation-delay: -30.1s;\n  transform: translate3d(873px, -297px, 1034px);\n  background: #f2a6d0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(302) {\n  top: 16%;\n  left: 43%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -30.2s;\n          animation-delay: -30.2s;\n  transform: translate3d(792px, -521px, 2772px);\n  background: #a6a8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(303) {\n  top: 33%;\n  left: 54%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -30.3s;\n          animation-delay: -30.3s;\n  transform: translate3d(-252px, 148px, 255px);\n  background: #adf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(304) {\n  top: 66%;\n  left: 56%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -30.4s;\n          animation-delay: -30.4s;\n  transform: translate3d(367px, 449px, 2953px);\n  background: #b0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(305) {\n  top: 29%;\n  left: 16%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -30.5s;\n          animation-delay: -30.5s;\n  transform: translate3d(887px, -258px, 2476px);\n  background: #f2cca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(306) {\n  top: 34%;\n  left: 24%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -30.6s;\n          animation-delay: -30.6s;\n  transform: translate3d(-934px, -489px, 3477px);\n  background: #aaf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(307) {\n  top: 52%;\n  left: 66%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -30.7s;\n          animation-delay: -30.7s;\n  transform: translate3d(837px, -225px, 1712px);\n  background: #a6b8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(308) {\n  top: 57%;\n  left: 45%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -30.8s;\n          animation-delay: -30.8s;\n  transform: translate3d(-996px, 333px, 2693px);\n  background: #f2c9a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(309) {\n  top: 43%;\n  left: 20%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -30.9s;\n          animation-delay: -30.9s;\n  transform: translate3d(-599px, 525px, 1299px);\n  background: #a6f2ec;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(310) {\n  top: 69%;\n  left: 38%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -31s;\n          animation-delay: -31s;\n  transform: translate3d(-603px, 415px, 978px);\n  background: #baf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(311) {\n  top: 40%;\n  left: 21%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -31.1s;\n          animation-delay: -31.1s;\n  transform: translate3d(237px, -852px, 1748px);\n  background: #e0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(312) {\n  top: 73%;\n  left: 23%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -31.2s;\n          animation-delay: -31.2s;\n  transform: translate3d(-440px, 677px, 736px);\n  background: #a6e3f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(313) {\n  top: 69%;\n  left: 29%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -31.3s;\n          animation-delay: -31.3s;\n  transform: translate3d(231px, 751px, 455px);\n  background: #a6bef2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(314) {\n  top: 29%;\n  left: 52%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -31.4s;\n          animation-delay: -31.4s;\n  transform: translate3d(-310px, 350px, 671px);\n  background: #baa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(315) {\n  top: 65%;\n  left: 57%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -31.5s;\n          animation-delay: -31.5s;\n  transform: translate3d(763px, 669px, 331px);\n  background: #a6b5f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(316) {\n  top: 85%;\n  left: 26%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -31.6s;\n          animation-delay: -31.6s;\n  transform: translate3d(134px, -377px, 1985px);\n  background: #a6f2cd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(317) {\n  top: 30%;\n  left: 28%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -31.7s;\n          animation-delay: -31.7s;\n  transform: translate3d(-966px, -303px, 3714px);\n  background: #e0a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(318) {\n  top: 37%;\n  left: 44%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -31.8s;\n          animation-delay: -31.8s;\n  transform: translate3d(-628px, 773px, 1466px);\n  background: #a6c6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(319) {\n  top: 30%;\n  left: 32%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -31.9s;\n          animation-delay: -31.9s;\n  transform: translate3d(801px, -769px, 2881px);\n  background: #f1f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(320) {\n  top: 23%;\n  left: 22%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -32s;\n          animation-delay: -32s;\n  transform: translate3d(348px, 652px, 3517px);\n  background: #f2c9a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(321) {\n  top: 29%;\n  left: 66%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -32.1s;\n          animation-delay: -32.1s;\n  transform: translate3d(-363px, -754px, 2861px);\n  background: #ecf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(322) {\n  top: 16%;\n  left: 39%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -32.2s;\n          animation-delay: -32.2s;\n  transform: translate3d(565px, 244px, 3467px);\n  background: #e7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(323) {\n  top: 20%;\n  left: 72%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -32.3s;\n          animation-delay: -32.3s;\n  transform: translate3d(-392px, -749px, 511px);\n  background: #a6f2dd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(324) {\n  top: 21%;\n  left: 46%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -32.4s;\n          animation-delay: -32.4s;\n  transform: translate3d(-927px, -395px, 2669px);\n  background: #f2a6e7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(325) {\n  top: 35%;\n  left: 70%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -32.5s;\n          animation-delay: -32.5s;\n  transform: translate3d(493px, 30px, 461px);\n  background: #b0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(326) {\n  top: 19%;\n  left: 45%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -32.6s;\n          animation-delay: -32.6s;\n  transform: translate3d(-803px, -321px, 2297px);\n  background: #f2ada6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(327) {\n  top: 29%;\n  left: 21%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -32.7s;\n          animation-delay: -32.7s;\n  transform: translate3d(-191px, 623px, 1284px);\n  background: #a6f2b6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(328) {\n  top: 74%;\n  left: 24%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -32.8s;\n          animation-delay: -32.8s;\n  transform: translate3d(-479px, 920px, 3817px);\n  background: #bdf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(329) {\n  top: 66%;\n  left: 48%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -32.9s;\n          animation-delay: -32.9s;\n  transform: translate3d(376px, 868px, 530px);\n  background: #b6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(330) {\n  top: 52%;\n  left: 31%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -33s;\n          animation-delay: -33s;\n  transform: translate3d(24px, 254px, 1882px);\n  background: #f2a6b3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(331) {\n  top: 33%;\n  left: 61%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -33.1s;\n          animation-delay: -33.1s;\n  transform: translate3d(64px, -578px, 924px);\n  background: #f2cba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(332) {\n  top: 65%;\n  left: 29%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -33.2s;\n          animation-delay: -33.2s;\n  transform: translate3d(-369px, 186px, 641px);\n  background: #f2a6d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(333) {\n  top: 26%;\n  left: 47%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -33.3s;\n          animation-delay: -33.3s;\n  transform: translate3d(198px, 50px, 2946px);\n  background: #a6f2c1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(334) {\n  top: 33%;\n  left: 48%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -33.4s;\n          animation-delay: -33.4s;\n  transform: translate3d(522px, 524px, 3853px);\n  background: #cda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(335) {\n  top: 22%;\n  left: 61%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -33.5s;\n          animation-delay: -33.5s;\n  transform: translate3d(-737px, -640px, 2626px);\n  background: #a6e9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(336) {\n  top: 61%;\n  left: 55%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -33.6s;\n          animation-delay: -33.6s;\n  transform: translate3d(407px, 820px, 291px);\n  background: #f2d7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(337) {\n  top: 33%;\n  left: 52%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -33.7s;\n          animation-delay: -33.7s;\n  transform: translate3d(-12px, -63px, 1063px);\n  background: #a6ddf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(338) {\n  top: 52%;\n  left: 22%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -33.8s;\n          animation-delay: -33.8s;\n  transform: translate3d(-694px, 118px, 1592px);\n  background: #a6f2cb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(339) {\n  top: 34%;\n  left: 81%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -33.9s;\n          animation-delay: -33.9s;\n  transform: translate3d(321px, 161px, 3952px);\n  background: #a6f2d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(340) {\n  top: 47%;\n  left: 33%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -34s;\n          animation-delay: -34s;\n  transform: translate3d(455px, 422px, 1584px);\n  background: #aaf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(341) {\n  top: 80%;\n  left: 68%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -34.1s;\n          animation-delay: -34.1s;\n  transform: translate3d(-27px, 598px, 1255px);\n  background: #e9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(342) {\n  top: 26%;\n  left: 27%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -34.2s;\n          animation-delay: -34.2s;\n  transform: translate3d(208px, 557px, 3964px);\n  background: #a6f2c4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(343) {\n  top: 41%;\n  left: 83%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -34.3s;\n          animation-delay: -34.3s;\n  transform: translate3d(-999px, -222px, 1731px);\n  background: #b1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(344) {\n  top: 28%;\n  left: 23%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -34.4s;\n          animation-delay: -34.4s;\n  transform: translate3d(988px, 152px, 541px);\n  background: #a6f2b3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(345) {\n  top: 25%;\n  left: 38%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -34.5s;\n          animation-delay: -34.5s;\n  transform: translate3d(-266px, -515px, 948px);\n  background: #a6e2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(346) {\n  top: 84%;\n  left: 39%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -34.6s;\n          animation-delay: -34.6s;\n  transform: translate3d(655px, -884px, 3177px);\n  background: #ecf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(347) {\n  top: 61%;\n  left: 65%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -34.7s;\n          animation-delay: -34.7s;\n  transform: translate3d(-468px, 139px, 2524px);\n  background: #f2a6b5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(348) {\n  top: 44%;\n  left: 55%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -34.8s;\n          animation-delay: -34.8s;\n  transform: translate3d(-313px, 710px, 1495px);\n  background: #bdf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(349) {\n  top: 18%;\n  left: 29%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -34.9s;\n          animation-delay: -34.9s;\n  transform: translate3d(-31px, -347px, 3091px);\n  background: #eca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(350) {\n  top: 76%;\n  left: 83%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -35s;\n          animation-delay: -35s;\n  transform: translate3d(-849px, -708px, 86px);\n  background: #f2d4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(351) {\n  top: 76%;\n  left: 36%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -35.1s;\n          animation-delay: -35.1s;\n  transform: translate3d(896px, 791px, 1333px);\n  background: #a6dff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(352) {\n  top: 21%;\n  left: 32%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -35.2s;\n          animation-delay: -35.2s;\n  transform: translate3d(261px, 910px, 1598px);\n  background: #f2aaa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(353) {\n  top: 73%;\n  left: 42%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -35.3s;\n          animation-delay: -35.3s;\n  transform: translate3d(-148px, 129px, 3366px);\n  background: #f2c3a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(354) {\n  top: 29%;\n  left: 43%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -35.4s;\n          animation-delay: -35.4s;\n  transform: translate3d(262px, -43px, 2737px);\n  background: #cfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(355) {\n  top: 32%;\n  left: 55%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -35.5s;\n          animation-delay: -35.5s;\n  transform: translate3d(59px, -103px, 1887px);\n  background: #a6a7f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(356) {\n  top: 17%;\n  left: 51%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -35.6s;\n          animation-delay: -35.6s;\n  transform: translate3d(160px, 919px, 2794px);\n  background: #a6d4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(357) {\n  top: 26%;\n  left: 23%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -35.7s;\n          animation-delay: -35.7s;\n  transform: translate3d(986px, -971px, 1848px);\n  background: #a6f2ad;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(358) {\n  top: 27%;\n  left: 47%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -35.8s;\n          animation-delay: -35.8s;\n  transform: translate3d(179px, 665px, 393px);\n  background: #a6c2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(359) {\n  top: 16%;\n  left: 38%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -35.9s;\n          animation-delay: -35.9s;\n  transform: translate3d(628px, 697px, 3701px);\n  background: #a6f2d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(360) {\n  top: 48%;\n  left: 28%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -36s;\n          animation-delay: -36s;\n  transform: translate3d(-714px, -3px, 2442px);\n  background: #b9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(361) {\n  top: 41%;\n  left: 40%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -36.1s;\n          animation-delay: -36.1s;\n  transform: translate3d(-679px, 63px, 2022px);\n  background: #cdf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(362) {\n  top: 26%;\n  left: 67%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -36.2s;\n          animation-delay: -36.2s;\n  transform: translate3d(-411px, 441px, 519px);\n  background: #bfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(363) {\n  top: 62%;\n  left: 75%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -36.3s;\n          animation-delay: -36.3s;\n  transform: translate3d(852px, 935px, 2878px);\n  background: #a6dbf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(364) {\n  top: 43%;\n  left: 62%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -36.4s;\n          animation-delay: -36.4s;\n  transform: translate3d(-713px, -935px, 2712px);\n  background: #bba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(365) {\n  top: 19%;\n  left: 41%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -36.5s;\n          animation-delay: -36.5s;\n  transform: translate3d(-351px, 562px, 732px);\n  background: #f2a6cd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(366) {\n  top: 22%;\n  left: 25%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -36.6s;\n          animation-delay: -36.6s;\n  transform: translate3d(784px, 145px, 2717px);\n  background: #f2e4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(367) {\n  top: 78%;\n  left: 67%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -36.7s;\n          animation-delay: -36.7s;\n  transform: translate3d(787px, -419px, 274px);\n  background: #a6d4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(368) {\n  top: 26%;\n  left: 38%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -36.8s;\n          animation-delay: -36.8s;\n  transform: translate3d(-758px, -805px, 1917px);\n  background: #f2c8a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(369) {\n  top: 65%;\n  left: 79%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -36.9s;\n          animation-delay: -36.9s;\n  transform: translate3d(-552px, -328px, 3831px);\n  background: #a6f2b1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(370) {\n  top: 78%;\n  left: 66%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -37s;\n          animation-delay: -37s;\n  transform: translate3d(-355px, 952px, 2018px);\n  background: #d4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(371) {\n  top: 24%;\n  left: 26%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -37.1s;\n          animation-delay: -37.1s;\n  transform: translate3d(-761px, 37px, 1241px);\n  background: #a6f2e7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(372) {\n  top: 74%;\n  left: 49%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -37.2s;\n          animation-delay: -37.2s;\n  transform: translate3d(-989px, 532px, 1271px);\n  background: #a6d0f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(373) {\n  top: 46%;\n  left: 53%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -37.3s;\n          animation-delay: -37.3s;\n  transform: translate3d(309px, -663px, 387px);\n  background: #ebf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(374) {\n  top: 50%;\n  left: 51%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -37.4s;\n          animation-delay: -37.4s;\n  transform: translate3d(61px, 565px, 197px);\n  background: #a6bdf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(375) {\n  top: 55%;\n  left: 68%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -37.5s;\n          animation-delay: -37.5s;\n  transform: translate3d(699px, -780px, 1506px);\n  background: #a6e8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(376) {\n  top: 24%;\n  left: 47%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -37.6s;\n          animation-delay: -37.6s;\n  transform: translate3d(649px, 155px, 3341px);\n  background: #f2aaa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(377) {\n  top: 78%;\n  left: 22%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -37.7s;\n          animation-delay: -37.7s;\n  transform: translate3d(-790px, 410px, 2440px);\n  background: #bfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(378) {\n  top: 46%;\n  left: 70%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -37.8s;\n          animation-delay: -37.8s;\n  transform: translate3d(-128px, 561px, 3604px);\n  background: #a6f2cb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(379) {\n  top: 47%;\n  left: 43%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -37.9s;\n          animation-delay: -37.9s;\n  transform: translate3d(-952px, 355px, 2634px);\n  background: #f2b6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(380) {\n  top: 43%;\n  left: 25%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -38s;\n          animation-delay: -38s;\n  transform: translate3d(93px, 23px, 1758px);\n  background: #b5a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(381) {\n  top: 59%;\n  left: 43%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -38.1s;\n          animation-delay: -38.1s;\n  transform: translate3d(-301px, -409px, 406px);\n  background: #afa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(382) {\n  top: 57%;\n  left: 77%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -38.2s;\n          animation-delay: -38.2s;\n  transform: translate3d(-348px, -275px, 988px);\n  background: #a6bef2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(383) {\n  top: 16%;\n  left: 51%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -38.3s;\n          animation-delay: -38.3s;\n  transform: translate3d(-435px, 38px, 3360px);\n  background: #f2a6e6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(384) {\n  top: 41%;\n  left: 85%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -38.4s;\n          animation-delay: -38.4s;\n  transform: translate3d(-672px, 33px, 3468px);\n  background: #bda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(385) {\n  top: 44%;\n  left: 42%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -38.5s;\n          animation-delay: -38.5s;\n  transform: translate3d(158px, 245px, 460px);\n  background: #b0a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(386) {\n  top: 53%;\n  left: 27%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -38.6s;\n          animation-delay: -38.6s;\n  transform: translate3d(551px, 275px, 2531px);\n  background: #a6f2c8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(387) {\n  top: 67%;\n  left: 65%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -38.7s;\n          animation-delay: -38.7s;\n  transform: translate3d(380px, 783px, 1338px);\n  background: #a6f2c1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(388) {\n  top: 65%;\n  left: 48%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -38.8s;\n          animation-delay: -38.8s;\n  transform: translate3d(916px, 472px, 1247px);\n  background: #cca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(389) {\n  top: 65%;\n  left: 67%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -38.9s;\n          animation-delay: -38.9s;\n  transform: translate3d(361px, -752px, 2943px);\n  background: #f2a6b1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(390) {\n  top: 47%;\n  left: 79%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -39s;\n          animation-delay: -39s;\n  transform: translate3d(113px, -99px, 1528px);\n  background: #f2a6c3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(391) {\n  top: 49%;\n  left: 35%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -39.1s;\n          animation-delay: -39.1s;\n  transform: translate3d(-38px, -107px, 653px);\n  background: #a6ddf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(392) {\n  top: 61%;\n  left: 20%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -39.2s;\n          animation-delay: -39.2s;\n  transform: translate3d(934px, -496px, 327px);\n  background: #a6f2d2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(393) {\n  top: 65%;\n  left: 51%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -39.3s;\n          animation-delay: -39.3s;\n  transform: translate3d(123px, -627px, 2005px);\n  background: #a6f1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(394) {\n  top: 33%;\n  left: 50%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -39.4s;\n          animation-delay: -39.4s;\n  transform: translate3d(744px, -905px, 2665px);\n  background: #e6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(395) {\n  top: 39%;\n  left: 50%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -39.5s;\n          animation-delay: -39.5s;\n  transform: translate3d(-697px, 911px, 3619px);\n  background: #f2a6be;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(396) {\n  top: 75%;\n  left: 21%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -39.6s;\n          animation-delay: -39.6s;\n  transform: translate3d(-959px, 900px, 3363px);\n  background: #a6f2b0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(397) {\n  top: 70%;\n  left: 20%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -39.7s;\n          animation-delay: -39.7s;\n  transform: translate3d(918px, 861px, 3718px);\n  background: #f2e2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(398) {\n  top: 35%;\n  left: 26%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -39.8s;\n          animation-delay: -39.8s;\n  transform: translate3d(-148px, 354px, 3199px);\n  background: #f2a6e8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(399) {\n  top: 41%;\n  left: 78%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -39.9s;\n          animation-delay: -39.9s;\n  transform: translate3d(475px, 529px, 1652px);\n  background: #c9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(400) {\n  top: 30%;\n  left: 22%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -40s;\n          animation-delay: -40s;\n  transform: translate3d(-964px, 825px, 850px);\n  background: #b8a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(401) {\n  top: 30%;\n  left: 64%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -40.1s;\n          animation-delay: -40.1s;\n  transform: translate3d(-641px, 668px, 1791px);\n  background: #bef2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(402) {\n  top: 16%;\n  left: 45%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -40.2s;\n          animation-delay: -40.2s;\n  transform: translate3d(975px, -853px, 930px);\n  background: #a6e9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(403) {\n  top: 77%;\n  left: 26%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -40.3s;\n          animation-delay: -40.3s;\n  transform: translate3d(-144px, 966px, 1036px);\n  background: #e6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(404) {\n  top: 81%;\n  left: 17%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -40.4s;\n          animation-delay: -40.4s;\n  transform: translate3d(-410px, 74px, 1464px);\n  background: #f2a6eb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(405) {\n  top: 68%;\n  left: 57%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -40.5s;\n          animation-delay: -40.5s;\n  transform: translate3d(46px, 674px, 308px);\n  background: #a6ddf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(406) {\n  top: 69%;\n  left: 51%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -40.6s;\n          animation-delay: -40.6s;\n  transform: translate3d(945px, 164px, 2970px);\n  background: #ebf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(407) {\n  top: 83%;\n  left: 17%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -40.7s;\n          animation-delay: -40.7s;\n  transform: translate3d(864px, -357px, 2597px);\n  background: #f2e2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(408) {\n  top: 78%;\n  left: 25%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -40.8s;\n          animation-delay: -40.8s;\n  transform: translate3d(589px, -559px, 3189px);\n  background: #f2d4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(409) {\n  top: 74%;\n  left: 30%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -40.9s;\n          animation-delay: -40.9s;\n  transform: translate3d(-637px, 495px, 2107px);\n  background: #f2a6bd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(410) {\n  top: 75%;\n  left: 38%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -41s;\n          animation-delay: -41s;\n  transform: translate3d(167px, -684px, 3569px);\n  background: #ecf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(411) {\n  top: 82%;\n  left: 52%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -41.1s;\n          animation-delay: -41.1s;\n  transform: translate3d(-564px, -464px, 562px);\n  background: #a6c4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(412) {\n  top: 75%;\n  left: 17%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -41.2s;\n          animation-delay: -41.2s;\n  transform: translate3d(93px, 71px, 2909px);\n  background: #f2e8a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(413) {\n  top: 66%;\n  left: 58%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -41.3s;\n          animation-delay: -41.3s;\n  transform: translate3d(830px, -385px, 371px);\n  background: #f2a6aa;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(414) {\n  top: 28%;\n  left: 35%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -41.4s;\n          animation-delay: -41.4s;\n  transform: translate3d(-814px, 793px, 3807px);\n  background: #a6d4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(415) {\n  top: 21%;\n  left: 48%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -41.5s;\n          animation-delay: -41.5s;\n  transform: translate3d(78px, -162px, 1418px);\n  background: #bff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(416) {\n  top: 78%;\n  left: 58%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -41.6s;\n          animation-delay: -41.6s;\n  transform: translate3d(-197px, 78px, 1576px);\n  background: #f2dda6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(417) {\n  top: 82%;\n  left: 30%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -41.7s;\n          animation-delay: -41.7s;\n  transform: translate3d(209px, 57px, 3570px);\n  background: #f2c4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(418) {\n  top: 46%;\n  left: 63%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -41.8s;\n          animation-delay: -41.8s;\n  transform: translate3d(-475px, -578px, 3192px);\n  background: #f2e9a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(419) {\n  top: 45%;\n  left: 43%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -41.9s;\n          animation-delay: -41.9s;\n  transform: translate3d(-119px, 650px, 1567px);\n  background: #f2daa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(420) {\n  top: 25%;\n  left: 32%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -42s;\n          animation-delay: -42s;\n  transform: translate3d(-428px, -33px, 602px);\n  background: #a6d7f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(421) {\n  top: 57%;\n  left: 50%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -42.1s;\n          animation-delay: -42.1s;\n  transform: translate3d(-32px, -425px, 3388px);\n  background: #f2d6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(422) {\n  top: 58%;\n  left: 39%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -42.2s;\n          animation-delay: -42.2s;\n  transform: translate3d(678px, -111px, 3083px);\n  background: #d5a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(423) {\n  top: 49%;\n  left: 65%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -42.3s;\n          animation-delay: -42.3s;\n  transform: translate3d(-800px, -365px, 2654px);\n  background: #a6aff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(424) {\n  top: 64%;\n  left: 79%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -42.4s;\n          animation-delay: -42.4s;\n  transform: translate3d(725px, -157px, 1520px);\n  background: #f2d6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(425) {\n  top: 26%;\n  left: 44%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -42.5s;\n          animation-delay: -42.5s;\n  transform: translate3d(-931px, -870px, 2289px);\n  background: #e2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(426) {\n  top: 81%;\n  left: 67%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -42.6s;\n          animation-delay: -42.6s;\n  transform: translate3d(86px, 836px, 1607px);\n  background: #f2a6d0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(427) {\n  top: 83%;\n  left: 83%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -42.7s;\n          animation-delay: -42.7s;\n  transform: translate3d(122px, 376px, 3047px);\n  background: #a6cdf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(428) {\n  top: 28%;\n  left: 73%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -42.8s;\n          animation-delay: -42.8s;\n  transform: translate3d(-678px, -829px, 1041px);\n  background: #f2e3a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(429) {\n  top: 22%;\n  left: 45%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -42.9s;\n          animation-delay: -42.9s;\n  transform: translate3d(-533px, 995px, 3802px);\n  background: #f2aba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(430) {\n  top: 64%;\n  left: 58%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -43s;\n          animation-delay: -43s;\n  transform: translate3d(448px, 240px, 3141px);\n  background: #e4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(431) {\n  top: 28%;\n  left: 54%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -43.1s;\n          animation-delay: -43.1s;\n  transform: translate3d(-112px, -637px, 3804px);\n  background: #dff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(432) {\n  top: 63%;\n  left: 57%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -43.2s;\n          animation-delay: -43.2s;\n  transform: translate3d(-584px, 557px, 136px);\n  background: #f2bfa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(433) {\n  top: 66%;\n  left: 58%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -43.3s;\n          animation-delay: -43.3s;\n  transform: translate3d(749px, -691px, 789px);\n  background: #f2e7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(434) {\n  top: 66%;\n  left: 39%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -43.4s;\n          animation-delay: -43.4s;\n  transform: translate3d(-451px, 78px, 2105px);\n  background: #f2a6ba;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(435) {\n  top: 32%;\n  left: 18%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -43.5s;\n          animation-delay: -43.5s;\n  transform: translate3d(614px, -165px, 1950px);\n  background: #f2a6bf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(436) {\n  top: 72%;\n  left: 78%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -43.6s;\n          animation-delay: -43.6s;\n  transform: translate3d(-599px, 435px, 2701px);\n  background: #f2c8a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(437) {\n  top: 82%;\n  left: 64%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -43.7s;\n          animation-delay: -43.7s;\n  transform: translate3d(-931px, -457px, 3735px);\n  background: #a6f2b1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(438) {\n  top: 85%;\n  left: 47%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -43.8s;\n          animation-delay: -43.8s;\n  transform: translate3d(112px, -499px, 3991px);\n  background: #f2b4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(439) {\n  top: 29%;\n  left: 75%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -43.9s;\n          animation-delay: -43.9s;\n  transform: translate3d(-817px, -265px, 3616px);\n  background: #a7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(440) {\n  top: 58%;\n  left: 66%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -44s;\n          animation-delay: -44s;\n  transform: translate3d(-178px, 456px, 3971px);\n  background: #eef2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(441) {\n  top: 50%;\n  left: 52%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -44.1s;\n          animation-delay: -44.1s;\n  transform: translate3d(-55px, -376px, 880px);\n  background: #f2cda6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(442) {\n  top: 58%;\n  left: 61%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -44.2s;\n          animation-delay: -44.2s;\n  transform: translate3d(695px, -167px, 794px);\n  background: #d1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(443) {\n  top: 28%;\n  left: 56%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -44.3s;\n          animation-delay: -44.3s;\n  transform: translate3d(-170px, -770px, 815px);\n  background: #d6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(444) {\n  top: 70%;\n  left: 81%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -44.4s;\n          animation-delay: -44.4s;\n  transform: translate3d(843px, 528px, 530px);\n  background: #cbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(445) {\n  top: 85%;\n  left: 62%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -44.5s;\n          animation-delay: -44.5s;\n  transform: translate3d(180px, 121px, 1629px);\n  background: #a6adf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(446) {\n  top: 65%;\n  left: 16%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -44.6s;\n          animation-delay: -44.6s;\n  transform: translate3d(951px, -254px, 3927px);\n  background: #a6ebf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(447) {\n  top: 36%;\n  left: 38%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -44.7s;\n          animation-delay: -44.7s;\n  transform: translate3d(909px, -480px, 2428px);\n  background: #cda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(448) {\n  top: 24%;\n  left: 16%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -44.8s;\n          animation-delay: -44.8s;\n  transform: translate3d(761px, -360px, 345px);\n  background: #a6dff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(449) {\n  top: 27%;\n  left: 68%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -44.9s;\n          animation-delay: -44.9s;\n  transform: translate3d(-447px, -770px, 1909px);\n  background: #e6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(450) {\n  top: 42%;\n  left: 78%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -45s;\n          animation-delay: -45s;\n  transform: translate3d(432px, -211px, 3467px);\n  background: #f2afa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(451) {\n  top: 31%;\n  left: 24%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -45.1s;\n          animation-delay: -45.1s;\n  transform: translate3d(50px, -279px, 1374px);\n  background: #f2a6c8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(452) {\n  top: 35%;\n  left: 55%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -45.2s;\n          animation-delay: -45.2s;\n  transform: translate3d(-150px, 582px, 3029px);\n  background: #a6f2a7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(453) {\n  top: 68%;\n  left: 67%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -45.3s;\n          animation-delay: -45.3s;\n  transform: translate3d(326px, -22px, 1948px);\n  background: #a6bbf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(454) {\n  top: 43%;\n  left: 51%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -45.4s;\n          animation-delay: -45.4s;\n  transform: translate3d(-725px, -697px, 1897px);\n  background: #f2f1a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(455) {\n  top: 22%;\n  left: 66%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -45.5s;\n          animation-delay: -45.5s;\n  transform: translate3d(-268px, 530px, 251px);\n  background: #a6f2e6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(456) {\n  top: 72%;\n  left: 56%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -45.6s;\n          animation-delay: -45.6s;\n  transform: translate3d(485px, 833px, 838px);\n  background: #f2a6d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(457) {\n  top: 27%;\n  left: 63%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -45.7s;\n          animation-delay: -45.7s;\n  transform: translate3d(802px, 895px, 1779px);\n  background: #f2d4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(458) {\n  top: 80%;\n  left: 32%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -45.8s;\n          animation-delay: -45.8s;\n  transform: translate3d(-563px, 937px, 1003px);\n  background: #f1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(459) {\n  top: 80%;\n  left: 54%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -45.9s;\n          animation-delay: -45.9s;\n  transform: translate3d(141px, 41px, 2870px);\n  background: #f2a6cb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(460) {\n  top: 64%;\n  left: 31%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -46s;\n          animation-delay: -46s;\n  transform: translate3d(-487px, -218px, 3587px);\n  background: #a6f2bb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(461) {\n  top: 64%;\n  left: 47%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -46.1s;\n          animation-delay: -46.1s;\n  transform: translate3d(-507px, 781px, 3647px);\n  background: #abf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(462) {\n  top: 28%;\n  left: 73%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -46.2s;\n          animation-delay: -46.2s;\n  transform: translate3d(950px, 893px, 2637px);\n  background: #a6bef2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(463) {\n  top: 37%;\n  left: 59%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -46.3s;\n          animation-delay: -46.3s;\n  transform: translate3d(269px, -675px, 53px);\n  background: #a6baf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(464) {\n  top: 37%;\n  left: 81%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -46.4s;\n          animation-delay: -46.4s;\n  transform: translate3d(109px, -811px, 2620px);\n  background: #f2ada6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(465) {\n  top: 27%;\n  left: 75%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -46.5s;\n          animation-delay: -46.5s;\n  transform: translate3d(-590px, -688px, 1986px);\n  background: #c3f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(466) {\n  top: 38%;\n  left: 76%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -46.6s;\n          animation-delay: -46.6s;\n  transform: translate3d(-854px, -606px, 530px);\n  background: #a6f2d9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(467) {\n  top: 36%;\n  left: 78%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -46.7s;\n          animation-delay: -46.7s;\n  transform: translate3d(194px, 464px, 493px);\n  background: #f2bea6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(468) {\n  top: 28%;\n  left: 64%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -46.8s;\n          animation-delay: -46.8s;\n  transform: translate3d(993px, -850px, 1525px);\n  background: #b1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(469) {\n  top: 34%;\n  left: 43%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -46.9s;\n          animation-delay: -46.9s;\n  transform: translate3d(-707px, 897px, 2149px);\n  background: #a6f2d5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(470) {\n  top: 81%;\n  left: 42%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -47s;\n          animation-delay: -47s;\n  transform: translate3d(-779px, 922px, 941px);\n  background: #a6f2ee;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(471) {\n  top: 82%;\n  left: 29%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -47.1s;\n          animation-delay: -47.1s;\n  transform: translate3d(581px, -771px, 3313px);\n  background: #e7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(472) {\n  top: 39%;\n  left: 52%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -47.2s;\n          animation-delay: -47.2s;\n  transform: translate3d(90px, -873px, 2166px);\n  background: #a6d6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(473) {\n  top: 77%;\n  left: 44%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -47.3s;\n          animation-delay: -47.3s;\n  transform: translate3d(430px, -917px, 1509px);\n  background: #f2a6bb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(474) {\n  top: 85%;\n  left: 37%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -47.4s;\n          animation-delay: -47.4s;\n  transform: translate3d(433px, -280px, 1962px);\n  background: #d2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(475) {\n  top: 68%;\n  left: 40%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -47.5s;\n          animation-delay: -47.5s;\n  transform: translate3d(-424px, -469px, 1869px);\n  background: #a6f2e0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(476) {\n  top: 69%;\n  left: 40%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -47.6s;\n          animation-delay: -47.6s;\n  transform: translate3d(-501px, -776px, 800px);\n  background: #f2a6da;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(477) {\n  top: 45%;\n  left: 56%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -47.7s;\n          animation-delay: -47.7s;\n  transform: translate3d(975px, 364px, 1166px);\n  background: #e4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(478) {\n  top: 79%;\n  left: 34%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -47.8s;\n          animation-delay: -47.8s;\n  transform: translate3d(-838px, 821px, 2414px);\n  background: #a6f2c9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(479) {\n  top: 35%;\n  left: 61%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -47.9s;\n          animation-delay: -47.9s;\n  transform: translate3d(-328px, 320px, 3444px);\n  background: #f2a6af;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(480) {\n  top: 83%;\n  left: 63%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -48s;\n          animation-delay: -48s;\n  transform: translate3d(-508px, -879px, 2450px);\n  background: #cca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(481) {\n  top: 21%;\n  left: 20%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -48.1s;\n          animation-delay: -48.1s;\n  transform: translate3d(-273px, 859px, 2441px);\n  background: #b3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(482) {\n  top: 68%;\n  left: 19%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -48.2s;\n          animation-delay: -48.2s;\n  transform: translate3d(861px, -762px, 2157px);\n  background: #f2cca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(483) {\n  top: 27%;\n  left: 40%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -48.3s;\n          animation-delay: -48.3s;\n  transform: translate3d(662px, -867px, 938px);\n  background: #f2a6e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(484) {\n  top: 80%;\n  left: 59%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -48.4s;\n          animation-delay: -48.4s;\n  transform: translate3d(-901px, -872px, 2211px);\n  background: #f2a6b9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(485) {\n  top: 73%;\n  left: 71%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -48.5s;\n          animation-delay: -48.5s;\n  transform: translate3d(-705px, 589px, 1022px);\n  background: #cfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(486) {\n  top: 36%;\n  left: 36%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -48.6s;\n          animation-delay: -48.6s;\n  transform: translate3d(570px, 56px, 1263px);\n  background: #cda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(487) {\n  top: 30%;\n  left: 42%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -48.7s;\n          animation-delay: -48.7s;\n  transform: translate3d(849px, -150px, 1088px);\n  background: #f2a6e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(488) {\n  top: 20%;\n  left: 73%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -48.8s;\n          animation-delay: -48.8s;\n  transform: translate3d(604px, 306px, 3630px);\n  background: #f2a6c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(489) {\n  top: 70%;\n  left: 43%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -48.9s;\n          animation-delay: -48.9s;\n  transform: translate3d(281px, -247px, 3582px);\n  background: #e7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(490) {\n  top: 45%;\n  left: 83%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -49s;\n          animation-delay: -49s;\n  transform: translate3d(85px, -769px, 3336px);\n  background: #b3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(491) {\n  top: 82%;\n  left: 23%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -49.1s;\n          animation-delay: -49.1s;\n  transform: translate3d(289px, 557px, 1023px);\n  background: #f2a6d0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(492) {\n  top: 18%;\n  left: 35%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -49.2s;\n          animation-delay: -49.2s;\n  transform: translate3d(231px, -668px, 3445px);\n  background: #f2c3a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(493) {\n  top: 77%;\n  left: 44%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -49.3s;\n          animation-delay: -49.3s;\n  transform: translate3d(827px, 124px, 2938px);\n  background: #f2e0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(494) {\n  top: 38%;\n  left: 67%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -49.4s;\n          animation-delay: -49.4s;\n  transform: translate3d(658px, 636px, 1509px);\n  background: #aff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(495) {\n  top: 58%;\n  left: 73%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -49.5s;\n          animation-delay: -49.5s;\n  transform: translate3d(432px, -533px, 429px);\n  background: #a6f2b3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(496) {\n  top: 43%;\n  left: 59%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -49.6s;\n          animation-delay: -49.6s;\n  transform: translate3d(940px, 332px, 3335px);\n  background: #f2a6bf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(497) {\n  top: 37%;\n  left: 68%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -49.7s;\n          animation-delay: -49.7s;\n  transform: translate3d(478px, 617px, 2749px);\n  background: #f0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(498) {\n  top: 43%;\n  left: 73%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -49.8s;\n          animation-delay: -49.8s;\n  transform: translate3d(-294px, 883px, 685px);\n  background: #a6f2e4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(499) {\n  top: 31%;\n  left: 70%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -49.9s;\n          animation-delay: -49.9s;\n  transform: translate3d(189px, 724px, 3698px);\n  background: #f2d5a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(500) {\n  top: 36%;\n  left: 84%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -50s;\n          animation-delay: -50s;\n  transform: translate3d(-712px, -894px, 389px);\n  background: #d1f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(501) {\n  top: 72%;\n  left: 54%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -50.1s;\n          animation-delay: -50.1s;\n  transform: translate3d(-61px, -522px, 2162px);\n  background: #f2a6af;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(502) {\n  top: 41%;\n  left: 20%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -50.2s;\n          animation-delay: -50.2s;\n  transform: translate3d(975px, -20px, 553px);\n  background: #e9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(503) {\n  top: 54%;\n  left: 64%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -50.3s;\n          animation-delay: -50.3s;\n  transform: translate3d(-786px, 518px, 720px);\n  background: #a6b4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(504) {\n  top: 75%;\n  left: 27%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -50.4s;\n          animation-delay: -50.4s;\n  transform: translate3d(-921px, 197px, 2701px);\n  background: #a6abf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(505) {\n  top: 49%;\n  left: 77%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -50.5s;\n          animation-delay: -50.5s;\n  transform: translate3d(-219px, -758px, 1904px);\n  background: #e2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(506) {\n  top: 16%;\n  left: 77%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -50.6s;\n          animation-delay: -50.6s;\n  transform: translate3d(881px, -462px, 2692px);\n  background: #f2cda6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(507) {\n  top: 32%;\n  left: 66%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -50.7s;\n          animation-delay: -50.7s;\n  transform: translate3d(475px, -723px, 518px);\n  background: #eda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(508) {\n  top: 79%;\n  left: 43%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -50.8s;\n          animation-delay: -50.8s;\n  transform: translate3d(-437px, -950px, 3454px);\n  background: #a6f2c3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(509) {\n  top: 40%;\n  left: 71%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -50.9s;\n          animation-delay: -50.9s;\n  transform: translate3d(878px, -270px, 3617px);\n  background: #a6c8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(510) {\n  top: 24%;\n  left: 24%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -51s;\n          animation-delay: -51s;\n  transform: translate3d(-770px, 203px, 306px);\n  background: #ddf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(511) {\n  top: 85%;\n  left: 76%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -51.1s;\n          animation-delay: -51.1s;\n  transform: translate3d(-697px, 64px, 1292px);\n  background: #f2a6de;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(512) {\n  top: 24%;\n  left: 41%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -51.2s;\n          animation-delay: -51.2s;\n  transform: translate3d(-189px, 36px, 2537px);\n  background: #b4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(513) {\n  top: 82%;\n  left: 40%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -51.3s;\n          animation-delay: -51.3s;\n  transform: translate3d(-479px, -504px, 1675px);\n  background: #f2a6da;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(514) {\n  top: 34%;\n  left: 17%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -51.4s;\n          animation-delay: -51.4s;\n  transform: translate3d(-793px, -753px, 3129px);\n  background: #bfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(515) {\n  top: 43%;\n  left: 34%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -51.5s;\n          animation-delay: -51.5s;\n  transform: translate3d(445px, 185px, 313px);\n  background: #a6f2e6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(516) {\n  top: 21%;\n  left: 85%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -51.6s;\n          animation-delay: -51.6s;\n  transform: translate3d(-664px, 499px, 3937px);\n  background: #f2e8a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(517) {\n  top: 67%;\n  left: 58%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -51.7s;\n          animation-delay: -51.7s;\n  transform: translate3d(-59px, 264px, 1197px);\n  background: #a6b4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(518) {\n  top: 25%;\n  left: 46%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -51.8s;\n          animation-delay: -51.8s;\n  transform: translate3d(258px, 857px, 916px);\n  background: #f2a6c8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(519) {\n  top: 28%;\n  left: 20%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -51.9s;\n          animation-delay: -51.9s;\n  transform: translate3d(392px, -157px, 930px);\n  background: #bda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(520) {\n  top: 68%;\n  left: 30%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -52s;\n          animation-delay: -52s;\n  transform: translate3d(-784px, 0px, 276px);\n  background: #f2a6cf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(521) {\n  top: 83%;\n  left: 26%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -52.1s;\n          animation-delay: -52.1s;\n  transform: translate3d(-870px, 280px, 3728px);\n  background: #c9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(522) {\n  top: 64%;\n  left: 80%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -52.2s;\n          animation-delay: -52.2s;\n  transform: translate3d(701px, -773px, 1115px);\n  background: #a6f2d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(523) {\n  top: 33%;\n  left: 45%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -52.3s;\n          animation-delay: -52.3s;\n  transform: translate3d(-808px, 581px, 3013px);\n  background: #e4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(524) {\n  top: 58%;\n  left: 16%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -52.4s;\n          animation-delay: -52.4s;\n  transform: translate3d(89px, 973px, 3270px);\n  background: #a6baf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(525) {\n  top: 16%;\n  left: 37%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -52.5s;\n          animation-delay: -52.5s;\n  transform: translate3d(482px, 327px, 1232px);\n  background: #d6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(526) {\n  top: 57%;\n  left: 27%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -52.6s;\n          animation-delay: -52.6s;\n  transform: translate3d(-98px, 34px, 867px);\n  background: #a6f2bd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(527) {\n  top: 32%;\n  left: 45%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -52.7s;\n          animation-delay: -52.7s;\n  transform: translate3d(-182px, 39px, 1497px);\n  background: #f2a6e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(528) {\n  top: 53%;\n  left: 22%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -52.8s;\n          animation-delay: -52.8s;\n  transform: translate3d(-772px, -190px, 1786px);\n  background: #a6f2ba;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(529) {\n  top: 40%;\n  left: 74%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -52.9s;\n          animation-delay: -52.9s;\n  transform: translate3d(-961px, -516px, 1856px);\n  background: #f2a6b8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(530) {\n  top: 26%;\n  left: 32%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -53s;\n          animation-delay: -53s;\n  transform: translate3d(-244px, 253px, 2598px);\n  background: #a6baf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(531) {\n  top: 63%;\n  left: 20%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -53.1s;\n          animation-delay: -53.1s;\n  transform: translate3d(-354px, 308px, 1267px);\n  background: #f2dea6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(532) {\n  top: 78%;\n  left: 52%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -53.2s;\n          animation-delay: -53.2s;\n  transform: translate3d(745px, 528px, 572px);\n  background: #f2b9a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(533) {\n  top: 69%;\n  left: 41%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -53.3s;\n          animation-delay: -53.3s;\n  transform: translate3d(814px, -500px, 3300px);\n  background: #f2a6c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(534) {\n  top: 67%;\n  left: 39%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -53.4s;\n          animation-delay: -53.4s;\n  transform: translate3d(502px, 735px, 2174px);\n  background: #a6d1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(535) {\n  top: 53%;\n  left: 55%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -53.5s;\n          animation-delay: -53.5s;\n  transform: translate3d(-99px, 252px, 2511px);\n  background: #c6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(536) {\n  top: 46%;\n  left: 80%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -53.6s;\n          animation-delay: -53.6s;\n  transform: translate3d(-722px, -848px, 1006px);\n  background: #d2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(537) {\n  top: 22%;\n  left: 65%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -53.7s;\n          animation-delay: -53.7s;\n  transform: translate3d(-153px, 998px, 1291px);\n  background: #a6f2b4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(538) {\n  top: 83%;\n  left: 49%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -53.8s;\n          animation-delay: -53.8s;\n  transform: translate3d(705px, -870px, 3298px);\n  background: #bfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(539) {\n  top: 69%;\n  left: 43%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -53.9s;\n          animation-delay: -53.9s;\n  transform: translate3d(629px, -712px, 959px);\n  background: #f2a6c1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(540) {\n  top: 43%;\n  left: 53%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -54s;\n          animation-delay: -54s;\n  transform: translate3d(-404px, -714px, 861px);\n  background: #b0a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(541) {\n  top: 39%;\n  left: 60%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -54.1s;\n          animation-delay: -54.1s;\n  transform: translate3d(318px, 912px, 2479px);\n  background: #a6f2e6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(542) {\n  top: 55%;\n  left: 18%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -54.2s;\n          animation-delay: -54.2s;\n  transform: translate3d(326px, 488px, 711px);\n  background: #f2a6f0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(543) {\n  top: 58%;\n  left: 41%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -54.3s;\n          animation-delay: -54.3s;\n  transform: translate3d(152px, 239px, 2044px);\n  background: #e9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(544) {\n  top: 54%;\n  left: 79%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -54.4s;\n          animation-delay: -54.4s;\n  transform: translate3d(-85px, 828px, 863px);\n  background: #a6f2ad;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(545) {\n  top: 44%;\n  left: 45%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -54.5s;\n          animation-delay: -54.5s;\n  transform: translate3d(-286px, -639px, 2690px);\n  background: #b6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(546) {\n  top: 61%;\n  left: 27%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -54.6s;\n          animation-delay: -54.6s;\n  transform: translate3d(342px, -643px, 1550px);\n  background: #f2bfa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(547) {\n  top: 41%;\n  left: 29%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -54.7s;\n          animation-delay: -54.7s;\n  transform: translate3d(754px, 611px, 676px);\n  background: #a6b5f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(548) {\n  top: 72%;\n  left: 49%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -54.8s;\n          animation-delay: -54.8s;\n  transform: translate3d(100px, 971px, 2170px);\n  background: #f2eca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(549) {\n  top: 58%;\n  left: 38%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -54.9s;\n          animation-delay: -54.9s;\n  transform: translate3d(132px, -284px, 3372px);\n  background: #d7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(550) {\n  top: 58%;\n  left: 54%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -55s;\n          animation-delay: -55s;\n  transform: translate3d(-83px, 53px, 1980px);\n  background: #f2a6b1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(551) {\n  top: 17%;\n  left: 79%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -55.1s;\n          animation-delay: -55.1s;\n  transform: translate3d(-460px, 644px, 3983px);\n  background: #a6ebf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(552) {\n  top: 80%;\n  left: 43%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -55.2s;\n          animation-delay: -55.2s;\n  transform: translate3d(310px, -675px, 470px);\n  background: #a6ebf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(553) {\n  top: 36%;\n  left: 43%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -55.3s;\n          animation-delay: -55.3s;\n  transform: translate3d(-24px, 987px, 3695px);\n  background: #a6b0f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(554) {\n  top: 51%;\n  left: 63%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -55.4s;\n          animation-delay: -55.4s;\n  transform: translate3d(810px, 821px, 1918px);\n  background: #e3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(555) {\n  top: 81%;\n  left: 27%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -55.5s;\n          animation-delay: -55.5s;\n  transform: translate3d(-423px, -687px, 1247px);\n  background: #f2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(556) {\n  top: 53%;\n  left: 82%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -55.6s;\n          animation-delay: -55.6s;\n  transform: translate3d(615px, -642px, 624px);\n  background: #f2a6c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(557) {\n  top: 38%;\n  left: 40%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -55.7s;\n          animation-delay: -55.7s;\n  transform: translate3d(986px, 436px, 1010px);\n  background: #c4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(558) {\n  top: 47%;\n  left: 70%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -55.8s;\n          animation-delay: -55.8s;\n  transform: translate3d(864px, 85px, 1036px);\n  background: #b1f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(559) {\n  top: 71%;\n  left: 23%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -55.9s;\n          animation-delay: -55.9s;\n  transform: translate3d(86px, -198px, 1327px);\n  background: #aca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(560) {\n  top: 19%;\n  left: 49%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -56s;\n          animation-delay: -56s;\n  transform: translate3d(-975px, -22px, 1541px);\n  background: #a6d4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(561) {\n  top: 27%;\n  left: 33%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -56.1s;\n          animation-delay: -56.1s;\n  transform: translate3d(-50px, -565px, 3583px);\n  background: #e0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(562) {\n  top: 72%;\n  left: 79%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -56.2s;\n          animation-delay: -56.2s;\n  transform: translate3d(-994px, -985px, 940px);\n  background: #b0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(563) {\n  top: 20%;\n  left: 57%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -56.3s;\n          animation-delay: -56.3s;\n  transform: translate3d(-643px, 596px, 3943px);\n  background: #dda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(564) {\n  top: 64%;\n  left: 43%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -56.4s;\n          animation-delay: -56.4s;\n  transform: translate3d(917px, -87px, 2120px);\n  background: #f2a6d0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(565) {\n  top: 63%;\n  left: 83%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -56.5s;\n          animation-delay: -56.5s;\n  transform: translate3d(-59px, -696px, 3251px);\n  background: #d7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(566) {\n  top: 53%;\n  left: 35%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -56.6s;\n          animation-delay: -56.6s;\n  transform: translate3d(-349px, 246px, 2259px);\n  background: #cca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(567) {\n  top: 18%;\n  left: 83%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -56.7s;\n          animation-delay: -56.7s;\n  transform: translate3d(730px, 738px, 918px);\n  background: #bba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(568) {\n  top: 83%;\n  left: 45%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -56.8s;\n          animation-delay: -56.8s;\n  transform: translate3d(184px, 693px, 2059px);\n  background: #f2c6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(569) {\n  top: 74%;\n  left: 60%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -56.9s;\n          animation-delay: -56.9s;\n  transform: translate3d(-259px, 195px, 2428px);\n  background: #b5f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(570) {\n  top: 60%;\n  left: 29%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -57s;\n          animation-delay: -57s;\n  transform: translate3d(192px, -395px, 110px);\n  background: #c7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(571) {\n  top: 49%;\n  left: 40%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -57.1s;\n          animation-delay: -57.1s;\n  transform: translate3d(826px, -658px, 158px);\n  background: #f2b5a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(572) {\n  top: 57%;\n  left: 61%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -57.2s;\n          animation-delay: -57.2s;\n  transform: translate3d(233px, -553px, 3642px);\n  background: #f2a6d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(573) {\n  top: 44%;\n  left: 63%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -57.3s;\n          animation-delay: -57.3s;\n  transform: translate3d(-295px, -741px, 3464px);\n  background: #a6f2d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(574) {\n  top: 76%;\n  left: 30%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -57.4s;\n          animation-delay: -57.4s;\n  transform: translate3d(561px, 788px, 739px);\n  background: #f2a6cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(575) {\n  top: 61%;\n  left: 20%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -57.5s;\n          animation-delay: -57.5s;\n  transform: translate3d(450px, 939px, 964px);\n  background: #f2a6bb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(576) {\n  top: 64%;\n  left: 77%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -57.6s;\n          animation-delay: -57.6s;\n  transform: translate3d(-901px, -669px, 844px);\n  background: #f2dfa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(577) {\n  top: 18%;\n  left: 33%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -57.7s;\n          animation-delay: -57.7s;\n  transform: translate3d(-822px, 236px, 3237px);\n  background: #e2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(578) {\n  top: 80%;\n  left: 79%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -57.8s;\n          animation-delay: -57.8s;\n  transform: translate3d(-350px, 939px, 210px);\n  background: #a6f2c2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(579) {\n  top: 63%;\n  left: 40%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -57.9s;\n          animation-delay: -57.9s;\n  transform: translate3d(-555px, -22px, 403px);\n  background: #a6f2d4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(580) {\n  top: 46%;\n  left: 75%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -58s;\n          animation-delay: -58s;\n  transform: translate3d(-571px, 448px, 2725px);\n  background: #f2a6d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(581) {\n  top: 73%;\n  left: 65%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -58.1s;\n          animation-delay: -58.1s;\n  transform: translate3d(639px, -665px, 3904px);\n  background: #dfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(582) {\n  top: 57%;\n  left: 69%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -58.2s;\n          animation-delay: -58.2s;\n  transform: translate3d(91px, -138px, 1054px);\n  background: #a6f2c1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(583) {\n  top: 27%;\n  left: 26%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -58.3s;\n          animation-delay: -58.3s;\n  transform: translate3d(-995px, 153px, 3485px);\n  background: #f2aba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(584) {\n  top: 58%;\n  left: 84%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -58.4s;\n          animation-delay: -58.4s;\n  transform: translate3d(-849px, -348px, 3852px);\n  background: #f2a6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(585) {\n  top: 37%;\n  left: 42%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -58.5s;\n          animation-delay: -58.5s;\n  transform: translate3d(926px, 188px, 3077px);\n  background: #a6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(586) {\n  top: 56%;\n  left: 43%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -58.6s;\n          animation-delay: -58.6s;\n  transform: translate3d(-967px, 639px, 2344px);\n  background: #f2e8a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(587) {\n  top: 79%;\n  left: 84%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -58.7s;\n          animation-delay: -58.7s;\n  transform: translate3d(820px, -218px, 3051px);\n  background: #f2a6b4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(588) {\n  top: 81%;\n  left: 65%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -58.8s;\n          animation-delay: -58.8s;\n  transform: translate3d(-261px, -281px, 129px);\n  background: #e6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(589) {\n  top: 26%;\n  left: 55%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -58.9s;\n          animation-delay: -58.9s;\n  transform: translate3d(519px, 712px, 368px);\n  background: #c4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(590) {\n  top: 50%;\n  left: 38%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -59s;\n          animation-delay: -59s;\n  transform: translate3d(-434px, 396px, 3675px);\n  background: #e6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(591) {\n  top: 54%;\n  left: 58%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -59.1s;\n          animation-delay: -59.1s;\n  transform: translate3d(239px, -683px, 1617px);\n  background: #f2a6e7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(592) {\n  top: 24%;\n  left: 49%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -59.2s;\n          animation-delay: -59.2s;\n  transform: translate3d(-563px, 490px, 2762px);\n  background: #a6f2cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(593) {\n  top: 25%;\n  left: 62%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -59.3s;\n          animation-delay: -59.3s;\n  transform: translate3d(123px, 371px, 1349px);\n  background: #a6dbf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(594) {\n  top: 52%;\n  left: 44%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -59.4s;\n          animation-delay: -59.4s;\n  transform: translate3d(447px, 197px, 1925px);\n  background: #a6b9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(595) {\n  top: 55%;\n  left: 22%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -59.5s;\n          animation-delay: -59.5s;\n  transform: translate3d(-242px, 315px, 188px);\n  background: #a6f2c9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(596) {\n  top: 45%;\n  left: 41%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -59.6s;\n          animation-delay: -59.6s;\n  transform: translate3d(-841px, 382px, 1386px);\n  background: #a6b6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(597) {\n  top: 35%;\n  left: 49%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -59.7s;\n          animation-delay: -59.7s;\n  transform: translate3d(-464px, -28px, 3280px);\n  background: #a6f2ec;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(598) {\n  top: 76%;\n  left: 78%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -59.8s;\n          animation-delay: -59.8s;\n  transform: translate3d(-297px, -771px, 3000px);\n  background: #f2a6cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(599) {\n  top: 79%;\n  left: 85%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -59.9s;\n          animation-delay: -59.9s;\n  transform: translate3d(577px, -976px, 2878px);\n  background: #a6f2e8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(600) {\n  top: 46%;\n  left: 83%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -60s;\n          animation-delay: -60s;\n  transform: translate3d(-358px, 449px, 69px);\n  background: #a6f2d6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(601) {\n  top: 55%;\n  left: 29%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -60.1s;\n          animation-delay: -60.1s;\n  transform: translate3d(984px, 791px, 3723px);\n  background: #e8f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(602) {\n  top: 57%;\n  left: 37%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -60.2s;\n          animation-delay: -60.2s;\n  transform: translate3d(283px, 486px, 3164px);\n  background: #a6f2d5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(603) {\n  top: 54%;\n  left: 55%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -60.3s;\n          animation-delay: -60.3s;\n  transform: translate3d(-487px, 895px, 3596px);\n  background: #cca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(604) {\n  top: 60%;\n  left: 29%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -60.4s;\n          animation-delay: -60.4s;\n  transform: translate3d(-338px, -215px, 1910px);\n  background: #f2a6bf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(605) {\n  top: 67%;\n  left: 50%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -60.5s;\n          animation-delay: -60.5s;\n  transform: translate3d(827px, 750px, 561px);\n  background: #a7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(606) {\n  top: 77%;\n  left: 53%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -60.6s;\n          animation-delay: -60.6s;\n  transform: translate3d(347px, -275px, 2182px);\n  background: #e2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(607) {\n  top: 33%;\n  left: 31%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -60.7s;\n          animation-delay: -60.7s;\n  transform: translate3d(878px, -324px, 3001px);\n  background: #e7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(608) {\n  top: 84%;\n  left: 68%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -60.8s;\n          animation-delay: -60.8s;\n  transform: translate3d(805px, 80px, 3158px);\n  background: #a6f2d5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(609) {\n  top: 50%;\n  left: 66%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -60.9s;\n          animation-delay: -60.9s;\n  transform: translate3d(-866px, 782px, 3046px);\n  background: #f2a6ab;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(610) {\n  top: 19%;\n  left: 71%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -61s;\n          animation-delay: -61s;\n  transform: translate3d(90px, -801px, 1071px);\n  background: #dff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(611) {\n  top: 37%;\n  left: 53%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -61.1s;\n          animation-delay: -61.1s;\n  transform: translate3d(81px, -963px, 2558px);\n  background: #f0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(612) {\n  top: 44%;\n  left: 80%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -61.2s;\n          animation-delay: -61.2s;\n  transform: translate3d(896px, 767px, 3290px);\n  background: #bea6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(613) {\n  top: 85%;\n  left: 79%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -61.3s;\n          animation-delay: -61.3s;\n  transform: translate3d(-940px, 516px, 3317px);\n  background: #a6f2e6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(614) {\n  top: 82%;\n  left: 58%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -61.4s;\n          animation-delay: -61.4s;\n  transform: translate3d(374px, -95px, 2344px);\n  background: #a6f1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(615) {\n  top: 78%;\n  left: 74%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -61.5s;\n          animation-delay: -61.5s;\n  transform: translate3d(-55px, 32px, 1956px);\n  background: #a6f2b3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(616) {\n  top: 70%;\n  left: 18%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -61.6s;\n          animation-delay: -61.6s;\n  transform: translate3d(-213px, 21px, 637px);\n  background: #a6f2b0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(617) {\n  top: 20%;\n  left: 51%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -61.7s;\n          animation-delay: -61.7s;\n  transform: translate3d(879px, -33px, 1777px);\n  background: #a6f2ac;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(618) {\n  top: 41%;\n  left: 20%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -61.8s;\n          animation-delay: -61.8s;\n  transform: translate3d(447px, 827px, 2793px);\n  background: #a6cff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(619) {\n  top: 26%;\n  left: 60%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -61.9s;\n          animation-delay: -61.9s;\n  transform: translate3d(-91px, -7px, 2346px);\n  background: #baa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(620) {\n  top: 69%;\n  left: 24%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -62s;\n          animation-delay: -62s;\n  transform: translate3d(849px, 924px, 107px);\n  background: #f2a6d9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(621) {\n  top: 77%;\n  left: 46%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -62.1s;\n          animation-delay: -62.1s;\n  transform: translate3d(-514px, -98px, 520px);\n  background: #f2a6cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(622) {\n  top: 53%;\n  left: 84%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -62.2s;\n          animation-delay: -62.2s;\n  transform: translate3d(152px, -185px, 1961px);\n  background: #f2a8a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(623) {\n  top: 63%;\n  left: 34%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -62.3s;\n          animation-delay: -62.3s;\n  transform: translate3d(-151px, -878px, 3195px);\n  background: #f2a6b4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(624) {\n  top: 50%;\n  left: 37%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -62.4s;\n          animation-delay: -62.4s;\n  transform: translate3d(-496px, 96px, 3356px);\n  background: #f2cca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(625) {\n  top: 24%;\n  left: 58%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -62.5s;\n          animation-delay: -62.5s;\n  transform: translate3d(56px, 712px, 1199px);\n  background: #f2a6e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(626) {\n  top: 71%;\n  left: 56%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -62.6s;\n          animation-delay: -62.6s;\n  transform: translate3d(250px, 43px, 905px);\n  background: #a6f2b8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(627) {\n  top: 75%;\n  left: 35%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -62.7s;\n          animation-delay: -62.7s;\n  transform: translate3d(-278px, 483px, 2529px);\n  background: #f2a6e0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(628) {\n  top: 50%;\n  left: 51%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -62.8s;\n          animation-delay: -62.8s;\n  transform: translate3d(944px, -164px, 991px);\n  background: #a6f2aa;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(629) {\n  top: 66%;\n  left: 77%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -62.9s;\n          animation-delay: -62.9s;\n  transform: translate3d(400px, 282px, 540px);\n  background: #f2a6e0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(630) {\n  top: 50%;\n  left: 42%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -63s;\n          animation-delay: -63s;\n  transform: translate3d(-478px, 205px, 1629px);\n  background: #a6cff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(631) {\n  top: 77%;\n  left: 83%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -63.1s;\n          animation-delay: -63.1s;\n  transform: translate3d(-839px, -21px, 3247px);\n  background: #d4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(632) {\n  top: 81%;\n  left: 71%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -63.2s;\n          animation-delay: -63.2s;\n  transform: translate3d(518px, -574px, 231px);\n  background: #afa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(633) {\n  top: 69%;\n  left: 56%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -63.3s;\n          animation-delay: -63.3s;\n  transform: translate3d(-477px, -266px, 2823px);\n  background: #a6f2d2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(634) {\n  top: 27%;\n  left: 18%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -63.4s;\n          animation-delay: -63.4s;\n  transform: translate3d(-608px, 427px, 2126px);\n  background: #a7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(635) {\n  top: 40%;\n  left: 38%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -63.5s;\n          animation-delay: -63.5s;\n  transform: translate3d(443px, -647px, 141px);\n  background: #a6bff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(636) {\n  top: 50%;\n  left: 26%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -63.6s;\n          animation-delay: -63.6s;\n  transform: translate3d(550px, -710px, 849px);\n  background: #f2a6ed;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(637) {\n  top: 81%;\n  left: 17%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -63.7s;\n          animation-delay: -63.7s;\n  transform: translate3d(-773px, -324px, 2548px);\n  background: #a6e8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(638) {\n  top: 58%;\n  left: 75%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -63.8s;\n          animation-delay: -63.8s;\n  transform: translate3d(-696px, 721px, 3229px);\n  background: #a6f2c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(639) {\n  top: 42%;\n  left: 51%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -63.9s;\n          animation-delay: -63.9s;\n  transform: translate3d(-707px, -830px, 1411px);\n  background: #a7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(640) {\n  top: 62%;\n  left: 21%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -64s;\n          animation-delay: -64s;\n  transform: translate3d(467px, -68px, 906px);\n  background: #dea6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(641) {\n  top: 28%;\n  left: 36%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -64.1s;\n          animation-delay: -64.1s;\n  transform: translate3d(914px, -130px, 2921px);\n  background: #f2b0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(642) {\n  top: 20%;\n  left: 30%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -64.2s;\n          animation-delay: -64.2s;\n  transform: translate3d(636px, 661px, 1591px);\n  background: #b0a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(643) {\n  top: 73%;\n  left: 54%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -64.3s;\n          animation-delay: -64.3s;\n  transform: translate3d(496px, 455px, 3126px);\n  background: #a6a7f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(644) {\n  top: 74%;\n  left: 78%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -64.4s;\n          animation-delay: -64.4s;\n  transform: translate3d(-589px, 165px, 3873px);\n  background: #a6d0f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(645) {\n  top: 43%;\n  left: 29%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -64.5s;\n          animation-delay: -64.5s;\n  transform: translate3d(-541px, -77px, 2448px);\n  background: #f2dfa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(646) {\n  top: 53%;\n  left: 56%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -64.6s;\n          animation-delay: -64.6s;\n  transform: translate3d(456px, 127px, 1040px);\n  background: #e9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(647) {\n  top: 33%;\n  left: 76%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -64.7s;\n          animation-delay: -64.7s;\n  transform: translate3d(287px, -323px, 3825px);\n  background: #f2c2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(648) {\n  top: 72%;\n  left: 24%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -64.8s;\n          animation-delay: -64.8s;\n  transform: translate3d(-507px, 500px, 2819px);\n  background: #f2a6cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(649) {\n  top: 47%;\n  left: 43%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -64.9s;\n          animation-delay: -64.9s;\n  transform: translate3d(-4px, 478px, 3659px);\n  background: #a6e9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(650) {\n  top: 69%;\n  left: 66%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -65s;\n          animation-delay: -65s;\n  transform: translate3d(485px, 934px, 1905px);\n  background: #a6a7f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(651) {\n  top: 68%;\n  left: 61%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -65.1s;\n          animation-delay: -65.1s;\n  transform: translate3d(-462px, -437px, 2756px);\n  background: #f2c1a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(652) {\n  top: 71%;\n  left: 63%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -65.2s;\n          animation-delay: -65.2s;\n  transform: translate3d(-976px, -91px, 3991px);\n  background: #f2a6a8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(653) {\n  top: 61%;\n  left: 43%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -65.3s;\n          animation-delay: -65.3s;\n  transform: translate3d(-393px, -924px, 1699px);\n  background: #f2a6aa;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(654) {\n  top: 53%;\n  left: 63%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -65.4s;\n          animation-delay: -65.4s;\n  transform: translate3d(-715px, 697px, 2280px);\n  background: #a6a7f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(655) {\n  top: 37%;\n  left: 32%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -65.5s;\n          animation-delay: -65.5s;\n  transform: translate3d(-751px, -359px, 326px);\n  background: #a6f2ab;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(656) {\n  top: 76%;\n  left: 24%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -65.6s;\n          animation-delay: -65.6s;\n  transform: translate3d(-743px, 867px, 1626px);\n  background: #a6f2f0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(657) {\n  top: 59%;\n  left: 25%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -65.7s;\n          animation-delay: -65.7s;\n  transform: translate3d(-133px, 791px, 1829px);\n  background: #a6f2d2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(658) {\n  top: 56%;\n  left: 41%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -65.8s;\n          animation-delay: -65.8s;\n  transform: translate3d(-396px, 368px, 643px);\n  background: #a6c6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(659) {\n  top: 79%;\n  left: 31%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -65.9s;\n          animation-delay: -65.9s;\n  transform: translate3d(-197px, 165px, 903px);\n  background: #aba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(660) {\n  top: 51%;\n  left: 66%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -66s;\n          animation-delay: -66s;\n  transform: translate3d(160px, 740px, 1685px);\n  background: #a6f2bb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(661) {\n  top: 56%;\n  left: 59%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -66.1s;\n          animation-delay: -66.1s;\n  transform: translate3d(-817px, -571px, 2320px);\n  background: #f2a6e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(662) {\n  top: 27%;\n  left: 65%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -66.2s;\n          animation-delay: -66.2s;\n  transform: translate3d(685px, 959px, 3671px);\n  background: #c3f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(663) {\n  top: 23%;\n  left: 32%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -66.3s;\n          animation-delay: -66.3s;\n  transform: translate3d(29px, 160px, 1394px);\n  background: #a6f2c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(664) {\n  top: 61%;\n  left: 35%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -66.4s;\n          animation-delay: -66.4s;\n  transform: translate3d(-415px, 305px, 1799px);\n  background: #a6f2da;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(665) {\n  top: 24%;\n  left: 49%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -66.5s;\n          animation-delay: -66.5s;\n  transform: translate3d(-226px, -531px, 1431px);\n  background: #f2a6e7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(666) {\n  top: 30%;\n  left: 46%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -66.6s;\n          animation-delay: -66.6s;\n  transform: translate3d(606px, -513px, 1708px);\n  background: #a6bdf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(667) {\n  top: 59%;\n  left: 67%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -66.7s;\n          animation-delay: -66.7s;\n  transform: translate3d(-948px, -353px, 220px);\n  background: #a6f2c3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(668) {\n  top: 44%;\n  left: 64%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -66.8s;\n          animation-delay: -66.8s;\n  transform: translate3d(254px, 75px, 1522px);\n  background: #daf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(669) {\n  top: 55%;\n  left: 67%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -66.9s;\n          animation-delay: -66.9s;\n  transform: translate3d(931px, -725px, 533px);\n  background: #a6bbf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(670) {\n  top: 67%;\n  left: 39%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -67s;\n          animation-delay: -67s;\n  transform: translate3d(161px, 984px, 3984px);\n  background: #b6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(671) {\n  top: 80%;\n  left: 16%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -67.1s;\n          animation-delay: -67.1s;\n  transform: translate3d(-221px, 108px, 3858px);\n  background: #a6e9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(672) {\n  top: 40%;\n  left: 48%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -67.2s;\n          animation-delay: -67.2s;\n  transform: translate3d(316px, -804px, 1916px);\n  background: #ccf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(673) {\n  top: 72%;\n  left: 32%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -67.3s;\n          animation-delay: -67.3s;\n  transform: translate3d(78px, 756px, 2108px);\n  background: #f1f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(674) {\n  top: 55%;\n  left: 66%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -67.4s;\n          animation-delay: -67.4s;\n  transform: translate3d(-168px, 283px, 495px);\n  background: #d9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(675) {\n  top: 19%;\n  left: 51%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -67.5s;\n          animation-delay: -67.5s;\n  transform: translate3d(-385px, -413px, 1345px);\n  background: #d2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(676) {\n  top: 40%;\n  left: 32%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -67.6s;\n          animation-delay: -67.6s;\n  transform: translate3d(-18px, 624px, 1458px);\n  background: #d9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(677) {\n  top: 47%;\n  left: 39%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -67.7s;\n          animation-delay: -67.7s;\n  transform: translate3d(-568px, -699px, 3619px);\n  background: #f2b0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(678) {\n  top: 71%;\n  left: 23%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -67.8s;\n          animation-delay: -67.8s;\n  transform: translate3d(813px, 976px, 3630px);\n  background: #a6f2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(679) {\n  top: 76%;\n  left: 46%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -67.9s;\n          animation-delay: -67.9s;\n  transform: translate3d(594px, -111px, 380px);\n  background: #f2aaa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(680) {\n  top: 66%;\n  left: 42%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -68s;\n          animation-delay: -68s;\n  transform: translate3d(-710px, -246px, 3466px);\n  background: #a6f2ac;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(681) {\n  top: 61%;\n  left: 45%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -68.1s;\n          animation-delay: -68.1s;\n  transform: translate3d(572px, -133px, 722px);\n  background: #a6dff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(682) {\n  top: 29%;\n  left: 20%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -68.2s;\n          animation-delay: -68.2s;\n  transform: translate3d(732px, -192px, 898px);\n  background: #e2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(683) {\n  top: 59%;\n  left: 68%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -68.3s;\n          animation-delay: -68.3s;\n  transform: translate3d(317px, -399px, 2969px);\n  background: #f1f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(684) {\n  top: 20%;\n  left: 21%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -68.4s;\n          animation-delay: -68.4s;\n  transform: translate3d(246px, 457px, 1198px);\n  background: #f2c7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(685) {\n  top: 20%;\n  left: 51%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -68.5s;\n          animation-delay: -68.5s;\n  transform: translate3d(-244px, -798px, 3050px);\n  background: #abf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(686) {\n  top: 57%;\n  left: 57%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -68.6s;\n          animation-delay: -68.6s;\n  transform: translate3d(-689px, 482px, 1174px);\n  background: #f1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(687) {\n  top: 64%;\n  left: 57%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -68.7s;\n          animation-delay: -68.7s;\n  transform: translate3d(-632px, 774px, 3610px);\n  background: #f2dda6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(688) {\n  top: 18%;\n  left: 17%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -68.8s;\n          animation-delay: -68.8s;\n  transform: translate3d(687px, 656px, 3943px);\n  background: #e2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(689) {\n  top: 85%;\n  left: 30%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -68.9s;\n          animation-delay: -68.9s;\n  transform: translate3d(-265px, 221px, 3787px);\n  background: #b6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(690) {\n  top: 26%;\n  left: 75%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -69s;\n          animation-delay: -69s;\n  transform: translate3d(-969px, -856px, 3569px);\n  background: #a6daf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(691) {\n  top: 80%;\n  left: 32%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -69.1s;\n          animation-delay: -69.1s;\n  transform: translate3d(-611px, -418px, 161px);\n  background: #f2aaa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(692) {\n  top: 83%;\n  left: 41%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -69.2s;\n          animation-delay: -69.2s;\n  transform: translate3d(919px, 112px, 3125px);\n  background: #dbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(693) {\n  top: 49%;\n  left: 36%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -69.3s;\n          animation-delay: -69.3s;\n  transform: translate3d(-294px, 16px, 736px);\n  background: #a6f2cb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(694) {\n  top: 82%;\n  left: 36%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -69.4s;\n          animation-delay: -69.4s;\n  transform: translate3d(-468px, -548px, 3723px);\n  background: #d2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(695) {\n  top: 61%;\n  left: 21%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -69.5s;\n          animation-delay: -69.5s;\n  transform: translate3d(241px, -269px, 2277px);\n  background: #cbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(696) {\n  top: 71%;\n  left: 44%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -69.6s;\n          animation-delay: -69.6s;\n  transform: translate3d(-816px, -443px, 650px);\n  background: #a6f1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(697) {\n  top: 73%;\n  left: 62%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -69.7s;\n          animation-delay: -69.7s;\n  transform: translate3d(563px, 22px, 639px);\n  background: #f2a6f0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(698) {\n  top: 44%;\n  left: 33%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -69.8s;\n          animation-delay: -69.8s;\n  transform: translate3d(591px, 446px, 3632px);\n  background: #f2e8a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(699) {\n  top: 55%;\n  left: 47%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -69.9s;\n          animation-delay: -69.9s;\n  transform: translate3d(653px, 618px, 2726px);\n  background: #f2a6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(700) {\n  top: 60%;\n  left: 42%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -70s;\n          animation-delay: -70s;\n  transform: translate3d(485px, -25px, 1591px);\n  background: #a6f2b5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(701) {\n  top: 23%;\n  left: 20%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -70.1s;\n          animation-delay: -70.1s;\n  transform: translate3d(-266px, 794px, 1411px);\n  background: #f2d1a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(702) {\n  top: 52%;\n  left: 27%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -70.2s;\n          animation-delay: -70.2s;\n  transform: translate3d(808px, -110px, 3005px);\n  background: #a6ebf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(703) {\n  top: 39%;\n  left: 49%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -70.3s;\n          animation-delay: -70.3s;\n  transform: translate3d(-800px, -72px, 3723px);\n  background: #bbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(704) {\n  top: 50%;\n  left: 80%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -70.4s;\n          animation-delay: -70.4s;\n  transform: translate3d(643px, 695px, 702px);\n  background: #dff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(705) {\n  top: 27%;\n  left: 16%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -70.5s;\n          animation-delay: -70.5s;\n  transform: translate3d(-424px, 711px, 1031px);\n  background: #f2a6cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(706) {\n  top: 47%;\n  left: 18%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -70.6s;\n          animation-delay: -70.6s;\n  transform: translate3d(945px, -34px, 975px);\n  background: #eea6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(707) {\n  top: 61%;\n  left: 61%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -70.7s;\n          animation-delay: -70.7s;\n  transform: translate3d(70px, -428px, 190px);\n  background: #a6f2d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(708) {\n  top: 43%;\n  left: 36%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -70.8s;\n          animation-delay: -70.8s;\n  transform: translate3d(-947px, 611px, 2582px);\n  background: #b5f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(709) {\n  top: 76%;\n  left: 39%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -70.9s;\n          animation-delay: -70.9s;\n  transform: translate3d(94px, 864px, 2787px);\n  background: #f2a6d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(710) {\n  top: 38%;\n  left: 24%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -71s;\n          animation-delay: -71s;\n  transform: translate3d(643px, -190px, 2840px);\n  background: #a6f2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(711) {\n  top: 24%;\n  left: 57%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -71.1s;\n          animation-delay: -71.1s;\n  transform: translate3d(144px, 339px, 2622px);\n  background: #f2c2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(712) {\n  top: 49%;\n  left: 24%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -71.2s;\n          animation-delay: -71.2s;\n  transform: translate3d(52px, 77px, 742px);\n  background: #a6c1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(713) {\n  top: 49%;\n  left: 63%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -71.3s;\n          animation-delay: -71.3s;\n  transform: translate3d(-836px, 680px, 1785px);\n  background: #a6e3f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(714) {\n  top: 59%;\n  left: 26%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -71.4s;\n          animation-delay: -71.4s;\n  transform: translate3d(19px, -474px, 1623px);\n  background: #f2bfa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(715) {\n  top: 41%;\n  left: 75%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -71.5s;\n          animation-delay: -71.5s;\n  transform: translate3d(345px, -218px, 2944px);\n  background: #cba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(716) {\n  top: 80%;\n  left: 33%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -71.6s;\n          animation-delay: -71.6s;\n  transform: translate3d(-787px, 535px, 1289px);\n  background: #f2a6d0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(717) {\n  top: 31%;\n  left: 77%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -71.7s;\n          animation-delay: -71.7s;\n  transform: translate3d(842px, -134px, 3078px);\n  background: #a6f2c7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(718) {\n  top: 73%;\n  left: 38%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -71.8s;\n          animation-delay: -71.8s;\n  transform: translate3d(-217px, 164px, 1315px);\n  background: #f2e7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(719) {\n  top: 64%;\n  left: 72%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -71.9s;\n          animation-delay: -71.9s;\n  transform: translate3d(-835px, 145px, 1986px);\n  background: #a6daf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(720) {\n  top: 31%;\n  left: 49%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -72s;\n          animation-delay: -72s;\n  transform: translate3d(-423px, -982px, 2868px);\n  background: #f2a6a8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(721) {\n  top: 51%;\n  left: 26%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -72.1s;\n          animation-delay: -72.1s;\n  transform: translate3d(88px, -881px, 2166px);\n  background: #f2a6e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(722) {\n  top: 60%;\n  left: 83%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -72.2s;\n          animation-delay: -72.2s;\n  transform: translate3d(0px, 146px, 3195px);\n  background: #f2e9a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(723) {\n  top: 32%;\n  left: 39%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -72.3s;\n          animation-delay: -72.3s;\n  transform: translate3d(906px, -159px, 2080px);\n  background: #b6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(724) {\n  top: 17%;\n  left: 32%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -72.4s;\n          animation-delay: -72.4s;\n  transform: translate3d(180px, 519px, 3155px);\n  background: #a6f2bb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(725) {\n  top: 79%;\n  left: 34%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -72.5s;\n          animation-delay: -72.5s;\n  transform: translate3d(-457px, -644px, 193px);\n  background: #a6f2b3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(726) {\n  top: 32%;\n  left: 25%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -72.6s;\n          animation-delay: -72.6s;\n  transform: translate3d(-122px, 90px, 3593px);\n  background: #b3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(727) {\n  top: 60%;\n  left: 43%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -72.7s;\n          animation-delay: -72.7s;\n  transform: translate3d(-963px, 573px, 3278px);\n  background: #f2a6cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(728) {\n  top: 62%;\n  left: 40%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -72.8s;\n          animation-delay: -72.8s;\n  transform: translate3d(629px, 795px, 615px);\n  background: #a6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(729) {\n  top: 65%;\n  left: 20%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -72.9s;\n          animation-delay: -72.9s;\n  transform: translate3d(721px, 888px, 1292px);\n  background: #f2bea6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(730) {\n  top: 42%;\n  left: 53%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -73s;\n          animation-delay: -73s;\n  transform: translate3d(-420px, -632px, 3067px);\n  background: #b5f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(731) {\n  top: 38%;\n  left: 70%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -73.1s;\n          animation-delay: -73.1s;\n  transform: translate3d(-626px, 622px, 1371px);\n  background: #f2cba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(732) {\n  top: 28%;\n  left: 44%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -73.2s;\n          animation-delay: -73.2s;\n  transform: translate3d(379px, 55px, 3879px);\n  background: #f2a6da;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(733) {\n  top: 43%;\n  left: 57%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -73.3s;\n          animation-delay: -73.3s;\n  transform: translate3d(560px, -264px, 3075px);\n  background: #d9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(734) {\n  top: 50%;\n  left: 85%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -73.4s;\n          animation-delay: -73.4s;\n  transform: translate3d(-441px, 34px, 3002px);\n  background: #a6f2cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(735) {\n  top: 39%;\n  left: 81%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -73.5s;\n          animation-delay: -73.5s;\n  transform: translate3d(366px, 255px, 2896px);\n  background: #aaa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(736) {\n  top: 76%;\n  left: 32%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -73.6s;\n          animation-delay: -73.6s;\n  transform: translate3d(133px, -155px, 3366px);\n  background: #c1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(737) {\n  top: 29%;\n  left: 19%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -73.7s;\n          animation-delay: -73.7s;\n  transform: translate3d(418px, -856px, 3373px);\n  background: #dda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(738) {\n  top: 36%;\n  left: 70%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -73.8s;\n          animation-delay: -73.8s;\n  transform: translate3d(-726px, 157px, 3391px);\n  background: #eca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(739) {\n  top: 64%;\n  left: 33%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -73.9s;\n          animation-delay: -73.9s;\n  transform: translate3d(-302px, -982px, 1585px);\n  background: #a6f2c3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(740) {\n  top: 82%;\n  left: 54%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -74s;\n          animation-delay: -74s;\n  transform: translate3d(317px, 479px, 3174px);\n  background: #f2a6d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(741) {\n  top: 53%;\n  left: 52%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -74.1s;\n          animation-delay: -74.1s;\n  transform: translate3d(-754px, 667px, 2864px);\n  background: #a6f2b4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(742) {\n  top: 37%;\n  left: 51%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -74.2s;\n          animation-delay: -74.2s;\n  transform: translate3d(962px, -638px, 925px);\n  background: #f2e0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(743) {\n  top: 58%;\n  left: 32%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -74.3s;\n          animation-delay: -74.3s;\n  transform: translate3d(-214px, -31px, 2342px);\n  background: #f2a6ee;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(744) {\n  top: 35%;\n  left: 28%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -74.4s;\n          animation-delay: -74.4s;\n  transform: translate3d(936px, -202px, 3687px);\n  background: #daf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(745) {\n  top: 33%;\n  left: 25%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -74.5s;\n          animation-delay: -74.5s;\n  transform: translate3d(-953px, 968px, 158px);\n  background: #b9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(746) {\n  top: 36%;\n  left: 59%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -74.6s;\n          animation-delay: -74.6s;\n  transform: translate3d(-485px, 168px, 2727px);\n  background: #f2eea6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(747) {\n  top: 31%;\n  left: 64%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -74.7s;\n          animation-delay: -74.7s;\n  transform: translate3d(933px, -666px, 844px);\n  background: #a6f2f1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(748) {\n  top: 45%;\n  left: 54%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -74.8s;\n          animation-delay: -74.8s;\n  transform: translate3d(-733px, 414px, 1873px);\n  background: #a6f2c7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(749) {\n  top: 44%;\n  left: 63%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -74.9s;\n          animation-delay: -74.9s;\n  transform: translate3d(969px, 69px, 3946px);\n  background: #f2a6c1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(750) {\n  top: 23%;\n  left: 81%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -75s;\n          animation-delay: -75s;\n  transform: translate3d(774px, -153px, 2874px);\n  background: #f2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(751) {\n  top: 27%;\n  left: 30%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -75.1s;\n          animation-delay: -75.1s;\n  transform: translate3d(198px, -141px, 2208px);\n  background: #a7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(752) {\n  top: 38%;\n  left: 18%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -75.2s;\n          animation-delay: -75.2s;\n  transform: translate3d(-164px, -59px, 1139px);\n  background: #cfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(753) {\n  top: 57%;\n  left: 25%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -75.3s;\n          animation-delay: -75.3s;\n  transform: translate3d(208px, -476px, 3128px);\n  background: #bef2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(754) {\n  top: 72%;\n  left: 28%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -75.4s;\n          animation-delay: -75.4s;\n  transform: translate3d(-66px, 269px, 1420px);\n  background: #f2a6d0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(755) {\n  top: 60%;\n  left: 64%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -75.5s;\n          animation-delay: -75.5s;\n  transform: translate3d(544px, 320px, 2997px);\n  background: #a6f2d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(756) {\n  top: 66%;\n  left: 26%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -75.6s;\n          animation-delay: -75.6s;\n  transform: translate3d(663px, 348px, 97px);\n  background: #d9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(757) {\n  top: 60%;\n  left: 44%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -75.7s;\n          animation-delay: -75.7s;\n  transform: translate3d(368px, -633px, 445px);\n  background: #e4f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(758) {\n  top: 81%;\n  left: 61%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -75.8s;\n          animation-delay: -75.8s;\n  transform: translate3d(530px, -337px, 641px);\n  background: #e2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(759) {\n  top: 75%;\n  left: 23%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -75.9s;\n          animation-delay: -75.9s;\n  transform: translate3d(-930px, 578px, 1398px);\n  background: #f2cda6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(760) {\n  top: 42%;\n  left: 65%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -76s;\n          animation-delay: -76s;\n  transform: translate3d(-404px, -37px, 2286px);\n  background: #e9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(761) {\n  top: 18%;\n  left: 50%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -76.1s;\n          animation-delay: -76.1s;\n  transform: translate3d(146px, 977px, 442px);\n  background: #cff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(762) {\n  top: 42%;\n  left: 19%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -76.2s;\n          animation-delay: -76.2s;\n  transform: translate3d(44px, -777px, 944px);\n  background: #f2a6e3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(763) {\n  top: 65%;\n  left: 61%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -76.3s;\n          animation-delay: -76.3s;\n  transform: translate3d(825px, -343px, 1774px);\n  background: #f1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(764) {\n  top: 49%;\n  left: 65%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -76.4s;\n          animation-delay: -76.4s;\n  transform: translate3d(-299px, 99px, 1756px);\n  background: #a6c8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(765) {\n  top: 49%;\n  left: 54%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -76.5s;\n          animation-delay: -76.5s;\n  transform: translate3d(-651px, -126px, 3194px);\n  background: #a6f2ec;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(766) {\n  top: 46%;\n  left: 73%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -76.6s;\n          animation-delay: -76.6s;\n  transform: translate3d(197px, 350px, 1577px);\n  background: #f2f0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(767) {\n  top: 20%;\n  left: 42%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -76.7s;\n          animation-delay: -76.7s;\n  transform: translate3d(24px, -817px, 3466px);\n  background: #a6f2c3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(768) {\n  top: 74%;\n  left: 45%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -76.8s;\n          animation-delay: -76.8s;\n  transform: translate3d(-978px, -737px, 206px);\n  background: #a6f2b6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(769) {\n  top: 79%;\n  left: 76%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -76.9s;\n          animation-delay: -76.9s;\n  transform: translate3d(22px, -169px, 2080px);\n  background: #bba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(770) {\n  top: 56%;\n  left: 21%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -77s;\n          animation-delay: -77s;\n  transform: translate3d(-218px, 749px, 1638px);\n  background: #a6b1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(771) {\n  top: 57%;\n  left: 78%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -77.1s;\n          animation-delay: -77.1s;\n  transform: translate3d(-200px, -521px, 24px);\n  background: #f2a6c8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(772) {\n  top: 49%;\n  left: 82%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -77.2s;\n          animation-delay: -77.2s;\n  transform: translate3d(238px, -267px, 1906px);\n  background: #abf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(773) {\n  top: 48%;\n  left: 67%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -77.3s;\n          animation-delay: -77.3s;\n  transform: translate3d(-733px, 30px, 15px);\n  background: #eca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(774) {\n  top: 35%;\n  left: 83%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -77.4s;\n          animation-delay: -77.4s;\n  transform: translate3d(-524px, -232px, 3386px);\n  background: #f2a6c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(775) {\n  top: 74%;\n  left: 30%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -77.5s;\n          animation-delay: -77.5s;\n  transform: translate3d(600px, -623px, 651px);\n  background: #e6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(776) {\n  top: 63%;\n  left: 24%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -77.6s;\n          animation-delay: -77.6s;\n  transform: translate3d(933px, -567px, 1176px);\n  background: #a6c9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(777) {\n  top: 16%;\n  left: 59%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -77.7s;\n          animation-delay: -77.7s;\n  transform: translate3d(-193px, -108px, 649px);\n  background: #a6a7f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(778) {\n  top: 57%;\n  left: 49%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -77.8s;\n          animation-delay: -77.8s;\n  transform: translate3d(656px, 369px, 2521px);\n  background: #f2a6ba;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(779) {\n  top: 46%;\n  left: 69%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -77.9s;\n          animation-delay: -77.9s;\n  transform: translate3d(-864px, -239px, 2556px);\n  background: #d7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(780) {\n  top: 31%;\n  left: 85%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -78s;\n          animation-delay: -78s;\n  transform: translate3d(426px, -710px, 2583px);\n  background: #a6c4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(781) {\n  top: 43%;\n  left: 75%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -78.1s;\n          animation-delay: -78.1s;\n  transform: translate3d(619px, 945px, 1035px);\n  background: #dff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(782) {\n  top: 51%;\n  left: 58%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -78.2s;\n          animation-delay: -78.2s;\n  transform: translate3d(94px, -241px, 1635px);\n  background: #f2a6c4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(783) {\n  top: 53%;\n  left: 16%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -78.3s;\n          animation-delay: -78.3s;\n  transform: translate3d(-839px, 667px, 1484px);\n  background: #f2c7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(784) {\n  top: 65%;\n  left: 44%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -78.4s;\n          animation-delay: -78.4s;\n  transform: translate3d(835px, -768px, 976px);\n  background: #f2b4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(785) {\n  top: 74%;\n  left: 47%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -78.5s;\n          animation-delay: -78.5s;\n  transform: translate3d(-74px, -892px, 327px);\n  background: #a6daf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(786) {\n  top: 47%;\n  left: 42%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -78.6s;\n          animation-delay: -78.6s;\n  transform: translate3d(971px, 373px, 1495px);\n  background: #a6c8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(787) {\n  top: 27%;\n  left: 74%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -78.7s;\n          animation-delay: -78.7s;\n  transform: translate3d(-830px, -800px, 297px);\n  background: #a6f2bf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(788) {\n  top: 70%;\n  left: 84%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -78.8s;\n          animation-delay: -78.8s;\n  transform: translate3d(816px, -408px, 2018px);\n  background: #aba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(789) {\n  top: 43%;\n  left: 21%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -78.9s;\n          animation-delay: -78.9s;\n  transform: translate3d(-480px, 192px, 248px);\n  background: #cda6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(790) {\n  top: 26%;\n  left: 24%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -79s;\n          animation-delay: -79s;\n  transform: translate3d(336px, -647px, 2539px);\n  background: #ada6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(791) {\n  top: 40%;\n  left: 49%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -79.1s;\n          animation-delay: -79.1s;\n  transform: translate3d(-608px, -16px, 1371px);\n  background: #f2a6c4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(792) {\n  top: 70%;\n  left: 35%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -79.2s;\n          animation-delay: -79.2s;\n  transform: translate3d(-940px, 344px, 2455px);\n  background: #a6f2f0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(793) {\n  top: 19%;\n  left: 27%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -79.3s;\n          animation-delay: -79.3s;\n  transform: translate3d(328px, -293px, 280px);\n  background: #a6d5f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(794) {\n  top: 24%;\n  left: 46%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -79.4s;\n          animation-delay: -79.4s;\n  transform: translate3d(8px, -896px, 2304px);\n  background: #a6e9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(795) {\n  top: 40%;\n  left: 68%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -79.5s;\n          animation-delay: -79.5s;\n  transform: translate3d(-64px, 881px, 3129px);\n  background: #f2c7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(796) {\n  top: 78%;\n  left: 75%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -79.6s;\n          animation-delay: -79.6s;\n  transform: translate3d(-568px, 297px, 3555px);\n  background: #c7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(797) {\n  top: 73%;\n  left: 23%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -79.7s;\n          animation-delay: -79.7s;\n  transform: translate3d(-975px, 842px, 1769px);\n  background: #f2a6af;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(798) {\n  top: 58%;\n  left: 43%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -79.8s;\n          animation-delay: -79.8s;\n  transform: translate3d(-459px, -350px, 1210px);\n  background: #cfa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(799) {\n  top: 29%;\n  left: 67%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -79.9s;\n          animation-delay: -79.9s;\n  transform: translate3d(395px, -334px, 289px);\n  background: #f2a6b8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(800) {\n  top: 83%;\n  left: 49%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -80s;\n          animation-delay: -80s;\n  transform: translate3d(79px, -519px, 964px);\n  background: #f2cca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(801) {\n  top: 71%;\n  left: 42%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -80.1s;\n          animation-delay: -80.1s;\n  transform: translate3d(-302px, -205px, 3556px);\n  background: #a6f2de;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(802) {\n  top: 74%;\n  left: 76%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -80.2s;\n          animation-delay: -80.2s;\n  transform: translate3d(78px, -896px, 3312px);\n  background: #f2a6c9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(803) {\n  top: 59%;\n  left: 35%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -80.3s;\n          animation-delay: -80.3s;\n  transform: translate3d(-649px, -912px, 2263px);\n  background: #f2a6b6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(804) {\n  top: 25%;\n  left: 70%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -80.4s;\n          animation-delay: -80.4s;\n  transform: translate3d(-100px, -975px, 64px);\n  background: #f2e6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(805) {\n  top: 49%;\n  left: 45%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -80.5s;\n          animation-delay: -80.5s;\n  transform: translate3d(-968px, -518px, 264px);\n  background: #b3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(806) {\n  top: 77%;\n  left: 62%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -80.6s;\n          animation-delay: -80.6s;\n  transform: translate3d(-283px, -193px, 3284px);\n  background: #f2daa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(807) {\n  top: 81%;\n  left: 16%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -80.7s;\n          animation-delay: -80.7s;\n  transform: translate3d(234px, 934px, 2105px);\n  background: #a6f0f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(808) {\n  top: 17%;\n  left: 65%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -80.8s;\n          animation-delay: -80.8s;\n  transform: translate3d(87px, -691px, 3559px);\n  background: #b0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(809) {\n  top: 77%;\n  left: 32%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -80.9s;\n          animation-delay: -80.9s;\n  transform: translate3d(-147px, -657px, 1668px);\n  background: #a6f2d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(810) {\n  top: 47%;\n  left: 33%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -81s;\n          animation-delay: -81s;\n  transform: translate3d(812px, -487px, 799px);\n  background: #f2aca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(811) {\n  top: 27%;\n  left: 25%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -81.1s;\n          animation-delay: -81.1s;\n  transform: translate3d(162px, 112px, 3933px);\n  background: #e7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(812) {\n  top: 66%;\n  left: 20%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -81.2s;\n          animation-delay: -81.2s;\n  transform: translate3d(-822px, -933px, 2801px);\n  background: #eea6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(813) {\n  top: 48%;\n  left: 32%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -81.3s;\n          animation-delay: -81.3s;\n  transform: translate3d(700px, -568px, 952px);\n  background: #a8f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(814) {\n  top: 75%;\n  left: 18%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -81.4s;\n          animation-delay: -81.4s;\n  transform: translate3d(991px, 729px, 524px);\n  background: #f2a6d5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(815) {\n  top: 27%;\n  left: 32%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -81.5s;\n          animation-delay: -81.5s;\n  transform: translate3d(77px, -585px, 227px);\n  background: #e2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(816) {\n  top: 82%;\n  left: 60%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -81.6s;\n          animation-delay: -81.6s;\n  transform: translate3d(708px, -633px, 2840px);\n  background: #f2afa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(817) {\n  top: 54%;\n  left: 57%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -81.7s;\n          animation-delay: -81.7s;\n  transform: translate3d(887px, 250px, 3695px);\n  background: #a6f2cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(818) {\n  top: 77%;\n  left: 55%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -81.8s;\n          animation-delay: -81.8s;\n  transform: translate3d(766px, -852px, 2915px);\n  background: #a6f2bd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(819) {\n  top: 33%;\n  left: 33%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -81.9s;\n          animation-delay: -81.9s;\n  transform: translate3d(-455px, 114px, 1602px);\n  background: #a6ebf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(820) {\n  top: 27%;\n  left: 25%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -82s;\n          animation-delay: -82s;\n  transform: translate3d(-951px, -831px, 3821px);\n  background: #a6daf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(821) {\n  top: 43%;\n  left: 39%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -82.1s;\n          animation-delay: -82.1s;\n  transform: translate3d(600px, 285px, 3853px);\n  background: #a6cff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(822) {\n  top: 33%;\n  left: 45%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -82.2s;\n          animation-delay: -82.2s;\n  transform: translate3d(-416px, -744px, 3299px);\n  background: #a6d5f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(823) {\n  top: 78%;\n  left: 80%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -82.3s;\n          animation-delay: -82.3s;\n  transform: translate3d(774px, -702px, 3932px);\n  background: #bbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(824) {\n  top: 60%;\n  left: 26%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -82.4s;\n          animation-delay: -82.4s;\n  transform: translate3d(476px, 166px, 3719px);\n  background: #f2a6d5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(825) {\n  top: 69%;\n  left: 35%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -82.5s;\n          animation-delay: -82.5s;\n  transform: translate3d(-554px, -236px, 3120px);\n  background: #a6a8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(826) {\n  top: 81%;\n  left: 27%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -82.6s;\n          animation-delay: -82.6s;\n  transform: translate3d(-642px, -3px, 1417px);\n  background: #f2b0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(827) {\n  top: 56%;\n  left: 18%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -82.7s;\n          animation-delay: -82.7s;\n  transform: translate3d(764px, -195px, 478px);\n  background: #a6d9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(828) {\n  top: 17%;\n  left: 28%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -82.8s;\n          animation-delay: -82.8s;\n  transform: translate3d(759px, 984px, 2084px);\n  background: #cba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(829) {\n  top: 71%;\n  left: 75%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -82.9s;\n          animation-delay: -82.9s;\n  transform: translate3d(-226px, 921px, 2497px);\n  background: #f2e4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(830) {\n  top: 58%;\n  left: 18%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -83s;\n          animation-delay: -83s;\n  transform: translate3d(-344px, -81px, 3785px);\n  background: #d9a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(831) {\n  top: 69%;\n  left: 29%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -83.1s;\n          animation-delay: -83.1s;\n  transform: translate3d(574px, -562px, 1479px);\n  background: #a6c2f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(832) {\n  top: 17%;\n  left: 60%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -83.2s;\n          animation-delay: -83.2s;\n  transform: translate3d(539px, 903px, 3524px);\n  background: #f2a6e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(833) {\n  top: 34%;\n  left: 56%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -83.3s;\n          animation-delay: -83.3s;\n  transform: translate3d(-373px, 513px, 1855px);\n  background: #f2a6f0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(834) {\n  top: 45%;\n  left: 67%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -83.4s;\n          animation-delay: -83.4s;\n  transform: translate3d(-260px, -285px, 2106px);\n  background: #a6f2ec;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(835) {\n  top: 57%;\n  left: 69%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -83.5s;\n          animation-delay: -83.5s;\n  transform: translate3d(-243px, 178px, 2041px);\n  background: #b5a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(836) {\n  top: 67%;\n  left: 81%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -83.6s;\n          animation-delay: -83.6s;\n  transform: translate3d(-374px, 393px, 553px);\n  background: #daa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(837) {\n  top: 85%;\n  left: 84%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -83.7s;\n          animation-delay: -83.7s;\n  transform: translate3d(-489px, 786px, 2910px);\n  background: #a6c9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(838) {\n  top: 66%;\n  left: 38%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -83.8s;\n          animation-delay: -83.8s;\n  transform: translate3d(-682px, -521px, 2946px);\n  background: #a7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(839) {\n  top: 22%;\n  left: 19%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -83.9s;\n          animation-delay: -83.9s;\n  transform: translate3d(836px, -767px, 3686px);\n  background: #f2a6e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(840) {\n  top: 19%;\n  left: 74%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -84s;\n          animation-delay: -84s;\n  transform: translate3d(-554px, 47px, 385px);\n  background: #a6f2d9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(841) {\n  top: 40%;\n  left: 26%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -84.1s;\n          animation-delay: -84.1s;\n  transform: translate3d(591px, -916px, 1689px);\n  background: #d4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(842) {\n  top: 17%;\n  left: 29%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -84.2s;\n          animation-delay: -84.2s;\n  transform: translate3d(-730px, 46px, 2545px);\n  background: #f2ada6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(843) {\n  top: 30%;\n  left: 80%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -84.3s;\n          animation-delay: -84.3s;\n  transform: translate3d(199px, 800px, 2192px);\n  background: #b3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(844) {\n  top: 82%;\n  left: 35%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -84.4s;\n          animation-delay: -84.4s;\n  transform: translate3d(972px, 780px, 340px);\n  background: #a6dff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(845) {\n  top: 73%;\n  left: 64%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -84.5s;\n          animation-delay: -84.5s;\n  transform: translate3d(367px, 995px, 1704px);\n  background: #bbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(846) {\n  top: 79%;\n  left: 66%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -84.6s;\n          animation-delay: -84.6s;\n  transform: translate3d(688px, 532px, 3797px);\n  background: #bef2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(847) {\n  top: 48%;\n  left: 40%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -84.7s;\n          animation-delay: -84.7s;\n  transform: translate3d(-54px, -498px, 3899px);\n  background: #f2a6aa;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(848) {\n  top: 42%;\n  left: 65%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -84.8s;\n          animation-delay: -84.8s;\n  transform: translate3d(-992px, 852px, 731px);\n  background: #dba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(849) {\n  top: 75%;\n  left: 60%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -84.9s;\n          animation-delay: -84.9s;\n  transform: translate3d(-760px, -799px, 2970px);\n  background: #d7a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(850) {\n  top: 46%;\n  left: 78%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -85s;\n          animation-delay: -85s;\n  transform: translate3d(703px, 474px, 1212px);\n  background: #dea6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(851) {\n  top: 73%;\n  left: 34%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -85.1s;\n          animation-delay: -85.1s;\n  transform: translate3d(-568px, 667px, 3476px);\n  background: #f2a6e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(852) {\n  top: 65%;\n  left: 52%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -85.2s;\n          animation-delay: -85.2s;\n  transform: translate3d(-924px, 646px, 1264px);\n  background: #f2dea6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(853) {\n  top: 32%;\n  left: 79%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -85.3s;\n          animation-delay: -85.3s;\n  transform: translate3d(-804px, 591px, 1412px);\n  background: #c7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(854) {\n  top: 78%;\n  left: 39%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -85.4s;\n          animation-delay: -85.4s;\n  transform: translate3d(221px, -926px, 1300px);\n  background: #d2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(855) {\n  top: 64%;\n  left: 35%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -85.5s;\n          animation-delay: -85.5s;\n  transform: translate3d(-852px, -157px, 940px);\n  background: #aaf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(856) {\n  top: 37%;\n  left: 70%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -85.6s;\n          animation-delay: -85.6s;\n  transform: translate3d(-237px, -91px, 100px);\n  background: #a6def2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(857) {\n  top: 67%;\n  left: 54%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -85.7s;\n          animation-delay: -85.7s;\n  transform: translate3d(-761px, -271px, 3902px);\n  background: #a6f2d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(858) {\n  top: 77%;\n  left: 54%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -85.8s;\n          animation-delay: -85.8s;\n  transform: translate3d(964px, -567px, 3204px);\n  background: #e7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(859) {\n  top: 66%;\n  left: 84%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -85.9s;\n          animation-delay: -85.9s;\n  transform: translate3d(729px, 747px, 2227px);\n  background: #f2cda6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(860) {\n  top: 28%;\n  left: 54%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -86s;\n          animation-delay: -86s;\n  transform: translate3d(-763px, -213px, 396px);\n  background: #a6f2c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(861) {\n  top: 72%;\n  left: 19%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -86.1s;\n          animation-delay: -86.1s;\n  transform: translate3d(-14px, -315px, 1595px);\n  background: #f2f0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(862) {\n  top: 35%;\n  left: 28%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -86.2s;\n          animation-delay: -86.2s;\n  transform: translate3d(-336px, -514px, 530px);\n  background: #f0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(863) {\n  top: 65%;\n  left: 16%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -86.3s;\n          animation-delay: -86.3s;\n  transform: translate3d(996px, 769px, 2191px);\n  background: #f2d0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(864) {\n  top: 78%;\n  left: 17%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -86.4s;\n          animation-delay: -86.4s;\n  transform: translate3d(-603px, 876px, 2095px);\n  background: #bba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(865) {\n  top: 55%;\n  left: 53%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -86.5s;\n          animation-delay: -86.5s;\n  transform: translate3d(327px, -51px, 2750px);\n  background: #eef2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(866) {\n  top: 53%;\n  left: 41%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -86.6s;\n          animation-delay: -86.6s;\n  transform: translate3d(434px, -404px, 2733px);\n  background: #c7f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(867) {\n  top: 61%;\n  left: 58%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -86.7s;\n          animation-delay: -86.7s;\n  transform: translate3d(-736px, 650px, 1690px);\n  background: #c1f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(868) {\n  top: 76%;\n  left: 61%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -86.8s;\n          animation-delay: -86.8s;\n  transform: translate3d(415px, -780px, 2883px);\n  background: #a6f2cf;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(869) {\n  top: 55%;\n  left: 27%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -86.9s;\n          animation-delay: -86.9s;\n  transform: translate3d(-468px, -574px, 1547px);\n  background: #a6adf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(870) {\n  top: 78%;\n  left: 33%;\n  height: 7px;\n  width: 7px;\n  -webkit-animation-delay: -87s;\n          animation-delay: -87s;\n  transform: translate3d(-511px, 427px, 3290px);\n  background: #a6f2f1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(871) {\n  top: 38%;\n  left: 68%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -87.1s;\n          animation-delay: -87.1s;\n  transform: translate3d(672px, -627px, 3584px);\n  background: #a6e7f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(872) {\n  top: 21%;\n  left: 41%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -87.2s;\n          animation-delay: -87.2s;\n  transform: translate3d(560px, -574px, 489px);\n  background: #f2a6cd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(873) {\n  top: 34%;\n  left: 25%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -87.3s;\n          animation-delay: -87.3s;\n  transform: translate3d(88px, -701px, 2004px);\n  background: #a6dff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(874) {\n  top: 55%;\n  left: 62%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -87.4s;\n          animation-delay: -87.4s;\n  transform: translate3d(310px, -652px, 3073px);\n  background: #f2c2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(875) {\n  top: 66%;\n  left: 68%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -87.5s;\n          animation-delay: -87.5s;\n  transform: translate3d(341px, -588px, 511px);\n  background: #f2b4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(876) {\n  top: 36%;\n  left: 73%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -87.6s;\n          animation-delay: -87.6s;\n  transform: translate3d(475px, 930px, 2143px);\n  background: #ccf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(877) {\n  top: 31%;\n  left: 30%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -87.7s;\n          animation-delay: -87.7s;\n  transform: translate3d(-757px, -661px, 2889px);\n  background: #f2a6e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(878) {\n  top: 19%;\n  left: 39%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -87.8s;\n          animation-delay: -87.8s;\n  transform: translate3d(-711px, 434px, 792px);\n  background: #cbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(879) {\n  top: 83%;\n  left: 47%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -87.9s;\n          animation-delay: -87.9s;\n  transform: translate3d(330px, 223px, 344px);\n  background: #f2a6ac;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(880) {\n  top: 19%;\n  left: 34%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -88s;\n          animation-delay: -88s;\n  transform: translate3d(-606px, -140px, 3663px);\n  background: #a6aff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(881) {\n  top: 19%;\n  left: 25%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -88.1s;\n          animation-delay: -88.1s;\n  transform: translate3d(868px, 84px, 3753px);\n  background: #f2b0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(882) {\n  top: 40%;\n  left: 77%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -88.2s;\n          animation-delay: -88.2s;\n  transform: translate3d(-815px, 133px, 3050px);\n  background: #f2a6ad;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(883) {\n  top: 38%;\n  left: 40%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -88.3s;\n          animation-delay: -88.3s;\n  transform: translate3d(-332px, 244px, 698px);\n  background: #c2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(884) {\n  top: 61%;\n  left: 27%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -88.4s;\n          animation-delay: -88.4s;\n  transform: translate3d(-761px, 811px, 613px);\n  background: #f2b6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(885) {\n  top: 74%;\n  left: 54%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -88.5s;\n          animation-delay: -88.5s;\n  transform: translate3d(639px, -621px, 58px);\n  background: #c3f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(886) {\n  top: 81%;\n  left: 74%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -88.6s;\n          animation-delay: -88.6s;\n  transform: translate3d(380px, -35px, 286px);\n  background: #a6f2ac;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(887) {\n  top: 22%;\n  left: 21%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -88.7s;\n          animation-delay: -88.7s;\n  transform: translate3d(-795px, -970px, 2754px);\n  background: #f2d1a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(888) {\n  top: 21%;\n  left: 25%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -88.8s;\n          animation-delay: -88.8s;\n  transform: translate3d(-773px, 775px, 1459px);\n  background: #f2a6e2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(889) {\n  top: 24%;\n  left: 52%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -88.9s;\n          animation-delay: -88.9s;\n  transform: translate3d(613px, 667px, 3210px);\n  background: #f2a6d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(890) {\n  top: 18%;\n  left: 35%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -89s;\n          animation-delay: -89s;\n  transform: translate3d(821px, 686px, 2139px);\n  background: #f2a6af;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(891) {\n  top: 57%;\n  left: 49%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -89.1s;\n          animation-delay: -89.1s;\n  transform: translate3d(-71px, 571px, 3050px);\n  background: #b8a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(892) {\n  top: 50%;\n  left: 80%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -89.2s;\n          animation-delay: -89.2s;\n  transform: translate3d(355px, -902px, 3802px);\n  background: #cdf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(893) {\n  top: 61%;\n  left: 56%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -89.3s;\n          animation-delay: -89.3s;\n  transform: translate3d(-333px, -879px, 3071px);\n  background: #d6f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(894) {\n  top: 38%;\n  left: 36%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -89.4s;\n          animation-delay: -89.4s;\n  transform: translate3d(-779px, -364px, 2161px);\n  background: #aba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(895) {\n  top: 78%;\n  left: 45%;\n  height: 11px;\n  width: 11px;\n  -webkit-animation-delay: -89.5s;\n          animation-delay: -89.5s;\n  transform: translate3d(832px, -679px, 2155px);\n  background: #f2daa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(896) {\n  top: 67%;\n  left: 68%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -89.6s;\n          animation-delay: -89.6s;\n  transform: translate3d(709px, 479px, 3184px);\n  background: #cca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(897) {\n  top: 67%;\n  left: 31%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -89.7s;\n          animation-delay: -89.7s;\n  transform: translate3d(-955px, -682px, 1551px);\n  background: #cff2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(898) {\n  top: 83%;\n  left: 47%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -89.8s;\n          animation-delay: -89.8s;\n  transform: translate3d(343px, -789px, 2828px);\n  background: #f2a6d2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(899) {\n  top: 26%;\n  left: 79%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -89.9s;\n          animation-delay: -89.9s;\n  transform: translate3d(531px, -381px, 3299px);\n  background: #a6f2f0;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(900) {\n  top: 36%;\n  left: 80%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -90s;\n          animation-delay: -90s;\n  transform: translate3d(-566px, 258px, 2237px);\n  background: #f2a6ec;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(901) {\n  top: 24%;\n  left: 20%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -90.1s;\n          animation-delay: -90.1s;\n  transform: translate3d(-915px, 941px, 932px);\n  background: #d9f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(902) {\n  top: 85%;\n  left: 55%;\n  height: 3px;\n  width: 3px;\n  -webkit-animation-delay: -90.2s;\n          animation-delay: -90.2s;\n  transform: translate3d(-406px, 262px, 1268px);\n  background: #f2d6a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(903) {\n  top: 35%;\n  left: 53%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -90.3s;\n          animation-delay: -90.3s;\n  transform: translate3d(634px, -242px, 141px);\n  background: #f2a6d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(904) {\n  top: 31%;\n  left: 39%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -90.4s;\n          animation-delay: -90.4s;\n  transform: translate3d(-284px, 256px, 2209px);\n  background: #e8a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(905) {\n  top: 29%;\n  left: 61%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -90.5s;\n          animation-delay: -90.5s;\n  transform: translate3d(-27px, 338px, 1346px);\n  background: #e6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(906) {\n  top: 27%;\n  left: 52%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -90.6s;\n          animation-delay: -90.6s;\n  transform: translate3d(9px, 304px, 1017px);\n  background: #d0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(907) {\n  top: 45%;\n  left: 18%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -90.7s;\n          animation-delay: -90.7s;\n  transform: translate3d(490px, -264px, 2334px);\n  background: #bba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(908) {\n  top: 69%;\n  left: 70%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -90.8s;\n          animation-delay: -90.8s;\n  transform: translate3d(-178px, 370px, 2738px);\n  background: #a6f2ec;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(909) {\n  top: 54%;\n  left: 65%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -90.9s;\n          animation-delay: -90.9s;\n  transform: translate3d(149px, 55px, 2894px);\n  background: #a6d1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(910) {\n  top: 68%;\n  left: 82%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -91s;\n          animation-delay: -91s;\n  transform: translate3d(-98px, 296px, 3647px);\n  background: #f2a6bb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(911) {\n  top: 16%;\n  left: 68%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -91.1s;\n          animation-delay: -91.1s;\n  transform: translate3d(-732px, -534px, 934px);\n  background: #b5f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(912) {\n  top: 85%;\n  left: 31%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -91.2s;\n          animation-delay: -91.2s;\n  transform: translate3d(470px, 159px, 3412px);\n  background: #eca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(913) {\n  top: 47%;\n  left: 76%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -91.3s;\n          animation-delay: -91.3s;\n  transform: translate3d(-865px, 344px, 3034px);\n  background: #b1a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(914) {\n  top: 44%;\n  left: 84%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -91.4s;\n          animation-delay: -91.4s;\n  transform: translate3d(280px, -300px, 1986px);\n  background: #f2a6e9;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(915) {\n  top: 16%;\n  left: 59%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -91.5s;\n          animation-delay: -91.5s;\n  transform: translate3d(185px, -324px, 3824px);\n  background: #a6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(916) {\n  top: 31%;\n  left: 29%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -91.6s;\n          animation-delay: -91.6s;\n  transform: translate3d(564px, -421px, 2568px);\n  background: #b3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(917) {\n  top: 44%;\n  left: 26%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -91.7s;\n          animation-delay: -91.7s;\n  transform: translate3d(-661px, -234px, 2634px);\n  background: #a6f2aa;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(918) {\n  top: 54%;\n  left: 66%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -91.8s;\n          animation-delay: -91.8s;\n  transform: translate3d(-192px, 946px, 3809px);\n  background: #bbf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(919) {\n  top: 20%;\n  left: 27%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -91.9s;\n          animation-delay: -91.9s;\n  transform: translate3d(863px, -330px, 1235px);\n  background: #c6a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(920) {\n  top: 51%;\n  left: 58%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -92s;\n          animation-delay: -92s;\n  transform: translate3d(-816px, 633px, 154px);\n  background: #a6f2d5;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(921) {\n  top: 83%;\n  left: 66%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -92.1s;\n          animation-delay: -92.1s;\n  transform: translate3d(-123px, -89px, 1196px);\n  background: #f2b9a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(922) {\n  top: 55%;\n  left: 50%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -92.2s;\n          animation-delay: -92.2s;\n  transform: translate3d(934px, -291px, 3194px);\n  background: #d0f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(923) {\n  top: 80%;\n  left: 21%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -92.3s;\n          animation-delay: -92.3s;\n  transform: translate3d(317px, -734px, 2078px);\n  background: #f2a6c8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(924) {\n  top: 37%;\n  left: 36%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -92.4s;\n          animation-delay: -92.4s;\n  transform: translate3d(-486px, -518px, 2269px);\n  background: #f2c4a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(925) {\n  top: 51%;\n  left: 25%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -92.5s;\n          animation-delay: -92.5s;\n  transform: translate3d(-768px, 256px, 1787px);\n  background: #f2aca6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(926) {\n  top: 46%;\n  left: 35%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -92.6s;\n          animation-delay: -92.6s;\n  transform: translate3d(791px, 596px, 4px);\n  background: #a6f2e6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(927) {\n  top: 39%;\n  left: 34%;\n  height: 10px;\n  width: 10px;\n  -webkit-animation-delay: -92.7s;\n          animation-delay: -92.7s;\n  transform: translate3d(-358px, 295px, 1804px);\n  background: #a6a8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(928) {\n  top: 50%;\n  left: 31%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -92.8s;\n          animation-delay: -92.8s;\n  transform: translate3d(-932px, 287px, 932px);\n  background: #f2a6f1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(929) {\n  top: 76%;\n  left: 83%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -92.9s;\n          animation-delay: -92.9s;\n  transform: translate3d(-508px, -833px, 2222px);\n  background: #f2baa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(930) {\n  top: 60%;\n  left: 57%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -93s;\n          animation-delay: -93s;\n  transform: translate3d(132px, -378px, 2768px);\n  background: #a6b9f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(931) {\n  top: 84%;\n  left: 33%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -93.1s;\n          animation-delay: -93.1s;\n  transform: translate3d(-9px, -782px, 3392px);\n  background: #a6a7f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(932) {\n  top: 35%;\n  left: 84%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -93.2s;\n          animation-delay: -93.2s;\n  transform: translate3d(19px, -374px, 924px);\n  background: #f2a6dd;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(933) {\n  top: 34%;\n  left: 60%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -93.3s;\n          animation-delay: -93.3s;\n  transform: translate3d(670px, -639px, 3956px);\n  background: #c8a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(934) {\n  top: 79%;\n  left: 17%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -93.4s;\n          animation-delay: -93.4s;\n  transform: translate3d(-550px, -490px, 1872px);\n  background: #f2a6cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(935) {\n  top: 28%;\n  left: 17%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -93.5s;\n          animation-delay: -93.5s;\n  transform: translate3d(-593px, -572px, 2009px);\n  background: #f2e7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(936) {\n  top: 84%;\n  left: 26%;\n  height: 5px;\n  width: 5px;\n  -webkit-animation-delay: -93.6s;\n          animation-delay: -93.6s;\n  transform: translate3d(-846px, 558px, 2037px);\n  background: #e2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(937) {\n  top: 65%;\n  left: 73%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -93.7s;\n          animation-delay: -93.7s;\n  transform: translate3d(631px, -269px, 999px);\n  background: #f2a6a7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(938) {\n  top: 33%;\n  left: 34%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -93.8s;\n          animation-delay: -93.8s;\n  transform: translate3d(551px, -602px, 3518px);\n  background: #a6f2ec;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(939) {\n  top: 82%;\n  left: 72%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -93.9s;\n          animation-delay: -93.9s;\n  transform: translate3d(-270px, 444px, 3491px);\n  background: #f2a6b8;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(940) {\n  top: 84%;\n  left: 19%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -94s;\n          animation-delay: -94s;\n  transform: translate3d(377px, 288px, 1841px);\n  background: #a6e3f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(941) {\n  top: 55%;\n  left: 59%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -94.1s;\n          animation-delay: -94.1s;\n  transform: translate3d(-254px, 356px, 3238px);\n  background: #f2ada6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(942) {\n  top: 35%;\n  left: 23%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -94.2s;\n          animation-delay: -94.2s;\n  transform: translate3d(473px, 84px, 3805px);\n  background: #a6f2e7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(943) {\n  top: 35%;\n  left: 52%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -94.3s;\n          animation-delay: -94.3s;\n  transform: translate3d(-295px, -57px, 3719px);\n  background: #d2f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(944) {\n  top: 83%;\n  left: 67%;\n  height: 12px;\n  width: 12px;\n  -webkit-animation-delay: -94.4s;\n          animation-delay: -94.4s;\n  transform: translate3d(161px, 795px, 673px);\n  background: #a6c1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(945) {\n  top: 36%;\n  left: 64%;\n  height: 26px;\n  width: 26px;\n  -webkit-animation-delay: -94.5s;\n          animation-delay: -94.5s;\n  transform: translate3d(85px, 799px, 2474px);\n  background: #a6f2c3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(946) {\n  top: 63%;\n  left: 21%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -94.6s;\n          animation-delay: -94.6s;\n  transform: translate3d(-336px, -943px, 1222px);\n  background: #f2baa6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(947) {\n  top: 38%;\n  left: 77%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -94.7s;\n          animation-delay: -94.7s;\n  transform: translate3d(-99px, 346px, 461px);\n  background: #a6f2d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(948) {\n  top: 68%;\n  left: 56%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -94.8s;\n          animation-delay: -94.8s;\n  transform: translate3d(736px, -327px, 162px);\n  background: #a6a8f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(949) {\n  top: 65%;\n  left: 55%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -94.9s;\n          animation-delay: -94.9s;\n  transform: translate3d(-30px, -730px, 2967px);\n  background: #aca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(950) {\n  top: 76%;\n  left: 33%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -95s;\n          animation-delay: -95s;\n  transform: translate3d(74px, 307px, 3751px);\n  background: #f2a6cc;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(951) {\n  top: 62%;\n  left: 78%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -95.1s;\n          animation-delay: -95.1s;\n  transform: translate3d(785px, -426px, 816px);\n  background: #a6c1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(952) {\n  top: 85%;\n  left: 68%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -95.2s;\n          animation-delay: -95.2s;\n  transform: translate3d(-235px, -105px, 3967px);\n  background: #d4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(953) {\n  top: 26%;\n  left: 58%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -95.3s;\n          animation-delay: -95.3s;\n  transform: translate3d(-710px, 533px, 1999px);\n  background: #f2d0a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(954) {\n  top: 52%;\n  left: 83%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -95.4s;\n          animation-delay: -95.4s;\n  transform: translate3d(-725px, 466px, 2095px);\n  background: #afa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(955) {\n  top: 23%;\n  left: 56%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -95.5s;\n          animation-delay: -95.5s;\n  transform: translate3d(144px, 983px, 63px);\n  background: #a6f2ed;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(956) {\n  top: 51%;\n  left: 54%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -95.6s;\n          animation-delay: -95.6s;\n  transform: translate3d(331px, -215px, 1984px);\n  background: #ebf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(957) {\n  top: 20%;\n  left: 63%;\n  height: 29px;\n  width: 29px;\n  -webkit-animation-delay: -95.7s;\n          animation-delay: -95.7s;\n  transform: translate3d(999px, -664px, 350px);\n  background: #a6ddf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(958) {\n  top: 43%;\n  left: 45%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -95.8s;\n          animation-delay: -95.8s;\n  transform: translate3d(479px, -514px, 932px);\n  background: #f2a6aa;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(959) {\n  top: 77%;\n  left: 44%;\n  height: 14px;\n  width: 14px;\n  -webkit-animation-delay: -95.9s;\n          animation-delay: -95.9s;\n  transform: translate3d(-569px, 855px, 3940px);\n  background: #f2a6b4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(960) {\n  top: 75%;\n  left: 21%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -96s;\n          animation-delay: -96s;\n  transform: translate3d(-112px, -570px, 1255px);\n  background: #f2a7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(961) {\n  top: 69%;\n  left: 56%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -96.1s;\n          animation-delay: -96.1s;\n  transform: translate3d(309px, -108px, 3170px);\n  background: #c8a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(962) {\n  top: 24%;\n  left: 75%;\n  height: 16px;\n  width: 16px;\n  -webkit-animation-delay: -96.2s;\n          animation-delay: -96.2s;\n  transform: translate3d(477px, -529px, 2101px);\n  background: #a6f2d6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(963) {\n  top: 32%;\n  left: 53%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -96.3s;\n          animation-delay: -96.3s;\n  transform: translate3d(-346px, -580px, 2060px);\n  background: #f2a6da;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(964) {\n  top: 31%;\n  left: 67%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -96.4s;\n          animation-delay: -96.4s;\n  transform: translate3d(508px, 658px, 3115px);\n  background: #a6f2a7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(965) {\n  top: 32%;\n  left: 53%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -96.5s;\n          animation-delay: -96.5s;\n  transform: translate3d(231px, 622px, 2765px);\n  background: #a6f2b6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(966) {\n  top: 78%;\n  left: 29%;\n  height: 27px;\n  width: 27px;\n  -webkit-animation-delay: -96.6s;\n          animation-delay: -96.6s;\n  transform: translate3d(-575px, -767px, 553px);\n  background: #a6f2d7;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(967) {\n  top: 70%;\n  left: 27%;\n  height: 2px;\n  width: 2px;\n  -webkit-animation-delay: -96.7s;\n          animation-delay: -96.7s;\n  transform: translate3d(391px, -819px, 1253px);\n  background: #a6f2ba;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(968) {\n  top: 62%;\n  left: 54%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -96.8s;\n          animation-delay: -96.8s;\n  transform: translate3d(505px, -618px, 2306px);\n  background: #b1f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(969) {\n  top: 28%;\n  left: 43%;\n  height: 4px;\n  width: 4px;\n  -webkit-animation-delay: -96.9s;\n          animation-delay: -96.9s;\n  transform: translate3d(254px, 235px, 1915px);\n  background: #f2a6d4;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(970) {\n  top: 69%;\n  left: 39%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -97s;\n          animation-delay: -97s;\n  transform: translate3d(638px, -705px, 2766px);\n  background: #f2c1a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(971) {\n  top: 33%;\n  left: 69%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -97.1s;\n          animation-delay: -97.1s;\n  transform: translate3d(503px, 191px, 1435px);\n  background: #cca6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(972) {\n  top: 22%;\n  left: 17%;\n  height: 19px;\n  width: 19px;\n  -webkit-animation-delay: -97.2s;\n          animation-delay: -97.2s;\n  transform: translate3d(-69px, -563px, 2539px);\n  background: #a6dff2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(973) {\n  top: 20%;\n  left: 45%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -97.3s;\n          animation-delay: -97.3s;\n  transform: translate3d(990px, 649px, 1255px);\n  background: #f2a6d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(974) {\n  top: 57%;\n  left: 17%;\n  height: 22px;\n  width: 22px;\n  -webkit-animation-delay: -97.4s;\n          animation-delay: -97.4s;\n  transform: translate3d(-335px, 404px, 1015px);\n  background: #cba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(975) {\n  top: 63%;\n  left: 81%;\n  height: 25px;\n  width: 25px;\n  -webkit-animation-delay: -97.5s;\n          animation-delay: -97.5s;\n  transform: translate3d(-374px, -736px, 2324px);\n  background: #e3a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(976) {\n  top: 66%;\n  left: 57%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -97.6s;\n          animation-delay: -97.6s;\n  transform: translate3d(-563px, -775px, 2526px);\n  background: #f2a6c3;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(977) {\n  top: 56%;\n  left: 23%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -97.7s;\n          animation-delay: -97.7s;\n  transform: translate3d(-613px, -686px, 1437px);\n  background: #f2a7a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(978) {\n  top: 26%;\n  left: 27%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -97.8s;\n          animation-delay: -97.8s;\n  transform: translate3d(866px, -352px, 3470px);\n  background: #a6f2db;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(979) {\n  top: 63%;\n  left: 51%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -97.9s;\n          animation-delay: -97.9s;\n  transform: translate3d(-786px, 516px, 2913px);\n  background: #f2a6ac;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(980) {\n  top: 39%;\n  left: 45%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -98s;\n          animation-delay: -98s;\n  transform: translate3d(620px, -317px, 1022px);\n  background: #e3f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(981) {\n  top: 17%;\n  left: 63%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -98.1s;\n          animation-delay: -98.1s;\n  transform: translate3d(52px, -175px, 2144px);\n  background: #bba6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(982) {\n  top: 52%;\n  left: 38%;\n  height: 30px;\n  width: 30px;\n  -webkit-animation-delay: -98.2s;\n          animation-delay: -98.2s;\n  transform: translate3d(-659px, -395px, 756px);\n  background: #a6b1f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(983) {\n  top: 79%;\n  left: 28%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -98.3s;\n          animation-delay: -98.3s;\n  transform: translate3d(329px, 550px, 1953px);\n  background: #f2a6ee;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(984) {\n  top: 69%;\n  left: 76%;\n  height: 13px;\n  width: 13px;\n  -webkit-animation-delay: -98.4s;\n          animation-delay: -98.4s;\n  transform: translate3d(-721px, -765px, 1266px);\n  background: #ada6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(985) {\n  top: 36%;\n  left: 40%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -98.5s;\n          animation-delay: -98.5s;\n  transform: translate3d(169px, 501px, 1367px);\n  background: #edf2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(986) {\n  top: 51%;\n  left: 84%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -98.6s;\n          animation-delay: -98.6s;\n  transform: translate3d(-512px, 568px, 2847px);\n  background: #f0a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(987) {\n  top: 58%;\n  left: 71%;\n  height: 18px;\n  width: 18px;\n  -webkit-animation-delay: -98.7s;\n          animation-delay: -98.7s;\n  transform: translate3d(379px, 475px, 1144px);\n  background: #eea6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(988) {\n  top: 21%;\n  left: 20%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -98.8s;\n          animation-delay: -98.8s;\n  transform: translate3d(909px, 996px, 2347px);\n  background: #e3f2a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(989) {\n  top: 37%;\n  left: 33%;\n  height: 23px;\n  width: 23px;\n  -webkit-animation-delay: -98.9s;\n          animation-delay: -98.9s;\n  transform: translate3d(658px, -643px, 863px);\n  background: #d2a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(990) {\n  top: 42%;\n  left: 56%;\n  height: 28px;\n  width: 28px;\n  -webkit-animation-delay: -99s;\n          animation-delay: -99s;\n  transform: translate3d(-29px, 799px, 2220px);\n  background: #f2eba6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(991) {\n  top: 53%;\n  left: 39%;\n  height: 20px;\n  width: 20px;\n  -webkit-animation-delay: -99.1s;\n          animation-delay: -99.1s;\n  transform: translate3d(-559px, -860px, 2961px);\n  background: #a6d4f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(992) {\n  top: 31%;\n  left: 52%;\n  height: 6px;\n  width: 6px;\n  -webkit-animation-delay: -99.2s;\n          animation-delay: -99.2s;\n  transform: translate3d(-319px, -771px, 2595px);\n  background: #f2f1a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(993) {\n  top: 61%;\n  left: 46%;\n  height: 8px;\n  width: 8px;\n  -webkit-animation-delay: -99.3s;\n          animation-delay: -99.3s;\n  transform: translate3d(436px, -965px, 3440px);\n  background: #f2a6d1;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(994) {\n  top: 83%;\n  left: 83%;\n  height: 21px;\n  width: 21px;\n  -webkit-animation-delay: -99.4s;\n          animation-delay: -99.4s;\n  transform: translate3d(-844px, -773px, 1445px);\n  background: #f2a6c6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(995) {\n  top: 25%;\n  left: 50%;\n  height: 17px;\n  width: 17px;\n  -webkit-animation-delay: -99.5s;\n          animation-delay: -99.5s;\n  transform: translate3d(690px, -867px, 2287px);\n  background: #f2f1a6;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(996) {\n  top: 56%;\n  left: 48%;\n  height: 24px;\n  width: 24px;\n  -webkit-animation-delay: -99.6s;\n          animation-delay: -99.6s;\n  transform: translate3d(550px, -668px, 1204px);\n  background: #c4a6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(997) {\n  top: 72%;\n  left: 38%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -99.7s;\n          animation-delay: -99.7s;\n  transform: translate3d(385px, 378px, 2528px);\n  background: #aaa6f2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(998) {\n  top: 35%;\n  left: 28%;\n  height: 9px;\n  width: 9px;\n  -webkit-animation-delay: -99.8s;\n          animation-delay: -99.8s;\n  transform: translate3d(-403px, -135px, 887px);\n  background: #a6acf2;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(999) {\n  top: 73%;\n  left: 65%;\n  height: 15px;\n  width: 15px;\n  -webkit-animation-delay: -99.9s;\n          animation-delay: -99.9s;\n  transform: translate3d(-187px, 385px, 2668px);\n  background: #a6f2bb;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(1000) {\n  top: 59%;\n  left: 22%;\n  height: 1px;\n  width: 1px;\n  -webkit-animation-delay: -100s;\n          animation-delay: -100s;\n  transform: translate3d(-686px, -269px, 3612px);\n  background: #a6ecf2;\n}\n\n.fOut[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.4s ease-in-out;\n}\n\n.fIn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.DNE[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #626262;\n  padding: 0.3rem;\n}\n\n.evo-img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.evo-img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.evo-div[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.multi-evo-stage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.evo-name[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  border-radius: 2px;\n  padding: 2px 3px;\n  white-space: nowrap;\n  line-height: initial;\n}\n\n.evo-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.evo-id[_ngcontent-%COMP%] {\n  color: #626262;\n  padding-bottom: 2px;\n}\n\n.evo-types[_ngcontent-%COMP%], .typeDefencesRow[_ngcontent-%COMP%], .moveTypes[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\n\n.evo-types[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .typeDefencesRow[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .moveTypes[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  height: 30px;\n  width: 30px;\n  transition: 200ms all;\n  margin: 5px;\n  display: inline-flex;\n}\n\n.evo-types[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover, .typeDefencesRow[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover, .moveTypes[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  filter: saturate(200%);\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.evo-types[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .typeDefencesRow[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .moveTypes[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 60%;\n}\n\n.arrow-div[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n  flex-direction: column-reverse;\n  display: flex;\n}\n\n.evo-arrow[_ngcontent-%COMP%] {\n  width: auto;\n  height: 40px;\n  margin: auto;\n}\n\n.evo-desc[_ngcontent-%COMP%] {\n  color: #626262;\n}\n\n.multi-arrow-stage[_ngcontent-%COMP%] {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.multi-arrow-stage[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  padding-bottom: 70px;\n  padding-top: 70px;\n}\n\n.eeveeRow1[_ngcontent-%COMP%], .eeveeRow2[_ngcontent-%COMP%], .eeveeRow3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  flex-direction: row;\n}\n\n.eeveeRow2[_ngcontent-%COMP%]   .arrow-div[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n\n.eeveeRow2[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.eeveeRow2[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n\n.eeveeRow3[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%] {\n  flex-basis: 100% !important;\n}\n\n.corner1[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 50%;\n}\n\n.corner1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-135deg) !important;\n}\n\n.corner2[_ngcontent-%COMP%] {\n  padding-right: 50%;\n  padding-left: 0;\n}\n\n.corner2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-45deg) !important;\n}\n\n.corner3[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 50%;\n}\n\n.corner3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(135deg) !important;\n}\n\n.corner3-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(90deg) !important;\n}\n\n.corner4[_ngcontent-%COMP%] {\n  padding-right: 50%;\n  padding-left: 0;\n}\n\n.corner4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(45deg) !important;\n}\n\n.SubSections[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: auto;\n  padding-bottom: 0.25rem;\n  padding-top: 0.25rem;\n}\n\n.SubSections[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #505050;\n}\n\n.typeDefencesRow[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-bottom: initial;\n  padding-top: initial;\n}\n\n.TypeEffDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  \n  \n}\n\n.TypeEffDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.TypeEffDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .TypeEffDiv[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.gender-male[_ngcontent-%COMP%] {\n  color: skyblue !important;\n}\n\n.gender-female[_ngcontent-%COMP%] {\n  color: hotpink !important;\n}\n\n.ColoredButton[_ngcontent-%COMP%] {\n  padding: 2px 3px;\n  border-radius: 0.25rem;\n}\n\n.ColoredButton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flow-root !important;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  background-color: #9fb7c2;\n  cursor: pointer;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: white;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  cursor: pointer;\n  background-color: #a3e2ff;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: white;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .brown[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  cursor: pointer;\n  background-color: #d0c7c5;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .brown[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: white;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  cursor: pointer;\n  background-color: #cccccc;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: white;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  cursor: pointer;\n  background-color: #b2deb4;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: white;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  cursor: pointer;\n  background-color: #fbd2e1;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: white;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .purple[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  cursor: pointer;\n  background-color: #c9b2f3;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .purple[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: white;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  cursor: pointer;\n  background-color: #ffb4ad;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: white;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  cursor: pointer;\n  background-color: #ffffff;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: dimgray;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.NotFoundText) {\n  cursor: pointer;\n  background-color: #ffe15f;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.NotFoundText) {\n  color: white;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow-y: auto;\n  width: 100%;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n}\n\n.scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::after, .scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]::after, .scrollableTable[_ngcontent-%COMP%]   .table-fixed[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]::after {\n  content: \"\";\n  clear: both;\n  display: block;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  background-color: #abf098;\n  border-radius: 6px;\n}\n\n.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 200;\n  color: white;\n  border-top: none;\n}\n\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  min-width: 260px;\n  background-color: #f4ffe6;\n  transition: 0.5s height ease-in-out;\n}\n\n.table-responsive.white[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 200;\n  color: #505050;\n}\n\n.black[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #f3f8fa;\n}\n\n.blue[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #ecf9ff;\n}\n\n.brown[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n}\n\n.gray[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n\n.green[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #eeffef;\n}\n\n.pink[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #fff7fa;\n}\n\n.purple[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #f7f2ff;\n}\n\n.red[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #fff9f9;\n}\n\n.white[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #f6f7f8;\n}\n\n.yellow[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #fffade;\n}\n\n.damage-cat[_ngcontent-%COMP%] {\n  max-width: 33px;\n  margin-bottom: 0;\n  margin-top: 7px;\n}\n\n.moveTypes[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin: -5px;\n  padding: 0;\n}\n\n.GameVersions[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex-basis: 11.11%;\n}\n\n.moveDetails[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 0 4px 0 4px;\n}\n\n.moveDetails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 55%;\n  height: 55%;\n}\n\n.Physical[_ngcontent-%COMP%] {\n  background: #D3425F;\n  box-shadow: 0 0 20px #D3425F;\n}\n\n.Special[_ngcontent-%COMP%] {\n  background: #0C69C8;\n  box-shadow: 0 0 20px #0C69C8;\n}\n\n.Status[_ngcontent-%COMP%] {\n  background: #929292;\n  box-shadow: 0 0 20px #929292;\n}\n\n.beauty[_ngcontent-%COMP%] {\n  background: #539DDF;\n  box-shadow: 0 0 20px #539DDF;\n}\n\n.cool[_ngcontent-%COMP%] {\n  background-color: #ffc619;\n  box-shadow: 0 0 20px #ffc619;\n}\n\n.cute[_ngcontent-%COMP%] {\n  background-color: #ff6096;\n  box-shadow: 0 0 20px #ff6096;\n}\n\n.smart[_ngcontent-%COMP%] {\n  background: #5FBD58;\n  box-shadow: 0 0 20px #5FBD58;\n}\n\n.tough[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  box-shadow: 0 0 20px #607d8b;\n}\n\n.damage-icon[_ngcontent-%COMP%] {\n  max-width: 33px;\n}\n\n@media (min-width: 1301px) {\n  .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.33rem;\n  }\n}\n\n@media (max-width: 1300px) and (min-width: 992px) {\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-right: 0rem;\n    padding-left: 0.5rem;\n  }\n\n  .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.25rem;\n  }\n}\n\n@media (max-width: 991px) {\n  .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.25rem;\n  }\n\n  .GameVersions[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex-basis: 10%;\n  }\n}\n\n@media (max-width: 767px) {\n  .row[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%] {\n    flex-basis: unset;\n  }\n\n  .evo-arrow[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 10px;\n  }\n\n  .multi-evo-stage[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .multi-arrow-stage[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-top: 0.5rem;\n    flex-basis: 100%;\n  }\n  .multi-arrow-stage[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%] {\n    padding-bottom: initial;\n    padding-top: initial;\n  }\n  .multi-arrow-stage[_ngcontent-%COMP%]   .arrow-div[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  .Heading[_ngcontent-%COMP%] {\n    font-size: medium;\n  }\n\n  .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    font-size: small;\n    width: auto;\n  }\n  .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.25rem;\n  }\n\n  .damage-cat[_ngcontent-%COMP%] {\n    max-width: 28px;\n  }\n\n  .SubSections[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex-basis: unset;\n  }\n\n  .evo-img[_ngcontent-%COMP%] {\n    max-width: 64px;\n  }\n\n  .GameVersions[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex-basis: 16% !important;\n  }\n\n  .MovesTable[_ngcontent-%COMP%] {\n    padding-bottom: 3rem;\n    padding-left: 0;\n    padding-right: 0;\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n    max-width: 100%;\n  }\n  .MovesTable[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  .MovesTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  .MovesTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .damage-icon[_ngcontent-%COMP%] {\n    max-width: 28px;\n  }\n\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col1[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col3[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col4[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col5[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col6[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col7[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col1[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col3[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col4[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col5[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col6[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col7[_ngcontent-%COMP%] {\n    flex: 0 0 9.722222%;\n    max-width: 9.722222%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col2[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col2[_ngcontent-%COMP%] {\n    flex: 0 0 41.666666%;\n    max-width: 41.666666%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col8[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col9[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col8[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col9[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 500px) {\n  .evo-div[_ngcontent-%COMP%] {\n    font-size: x-small;\n    padding: 0 !important;\n  }\n\n  .evo-img[_ngcontent-%COMP%] {\n    max-width: 50px;\n  }\n\n  .evo-desc[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n\n  .Heading[_ngcontent-%COMP%] {\n    font-size: medium;\n  }\n\n  .damage-cat[_ngcontent-%COMP%] {\n    max-width: 28px;\n  }\n\n  .SubSections[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex-basis: 50%;\n  }\n  .SubSections[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n\n  .GameVersions[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex-basis: 21% !important;\n  }\n\n  #moveModal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col1[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col1[_ngcontent-%COMP%] {\n    flex: 0 0 13%;\n    max-width: 13%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col2[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col2[_ngcontent-%COMP%] {\n    flex: 0 0 36.666666%;\n    max-width: 36.666666%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col3[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col3[_ngcontent-%COMP%] {\n    flex: 0 0 8.722222%;\n    max-width: 8.722222%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col4[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col4[_ngcontent-%COMP%] {\n    flex: 0 0 8.722222%;\n    max-width: 8.722222%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col5[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col5[_ngcontent-%COMP%] {\n    flex: 0 0 11.722222%;\n    max-width: 11.722222%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col7[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col7[_ngcontent-%COMP%] {\n    padding-left: 0;\n    flex: 0 0 11.444444%;\n    max-width: 11.444444%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col8[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col9[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col8[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col9[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col3[_ngcontent-%COMP%] {\n    flex: 0 0 17.444444%;\n    max-width: 17.444444%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col4[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col5[_ngcontent-%COMP%] {\n    flex: 0 0 12.722222%;\n    max-width: 12.722222%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col6[_ngcontent-%COMP%] {\n    flex: 0 0 8.722222%;\n    max-width: 8.722222%;\n  }\n}\n\n@media (max-width: 400px) {\n  .scrollableTable[_ngcontent-%COMP%] {\n    font-size: smaller !important;\n    width: auto;\n  }\n\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col1[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col1[_ngcontent-%COMP%] {\n    flex: 0 0 13%;\n    max-width: 13%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col2[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col2[_ngcontent-%COMP%] {\n    flex: 0 0 35.666666%;\n    max-width: 35.666666%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col3[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col3[_ngcontent-%COMP%] {\n    flex: 0 0 8.722222%;\n    max-width: 8.722222%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col4[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col4[_ngcontent-%COMP%] {\n    flex: 0 0 8.722222%;\n    max-width: 8.722222%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col5[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col5[_ngcontent-%COMP%] {\n    flex: 0 0 11.722222%;\n    max-width: 11.722222%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col7[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col7[_ngcontent-%COMP%] {\n    padding-left: 0;\n    flex: 0 0 12.444444%;\n    max-width: 12.444444%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col8[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col9[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col8[_ngcontent-%COMP%], .scrollableTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .Col9[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col3[_ngcontent-%COMP%] {\n    flex: 0 0 17.444444%;\n    max-width: 17.444444%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col4[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col5[_ngcontent-%COMP%] {\n    flex: 0 0 12.722222%;\n    max-width: 12.722222%;\n  }\n  .scrollableTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .Col6[_ngcontent-%COMP%] {\n    flex: 0 0 8.722222%;\n    max-width: 8.722222%;\n  }\n}\n\n@media (max-width: 380px) {\n  .GameVersions[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex-basis: 26% !important;\n  }\n\n  .damage-icon[_ngcontent-%COMP%] {\n    max-width: 23px !important;\n  }\n\n  .moveTypes[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    height: 18px;\n    width: 18px;\n  }\n}\n\n@media (max-width: 355px) {\n  .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    font-size: x-small;\n    width: auto;\n  }\n\n  .ability[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n}\n\n@media (max-width: 320px) {\n  .statDiv[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: xx-small;\n  }\n\n  .evo-div[_ngcontent-%COMP%] {\n    font-size: xx-small;\n    padding: 0 !important;\n  }\n\n  .evo-img[_ngcontent-%COMP%] {\n    max-width: 50px;\n  }\n\n  .evo-desc[_ngcontent-%COMP%] {\n    font-size: xx-small;\n  }\n\n  .SubSections[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    font-size: x-small;\n    width: auto;\n  }\n\n  .damage-cat[_ngcontent-%COMP%] {\n    max-width: 22px;\n  }\n}\n\n.disableClicking[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.loadingCursor[_ngcontent-%COMP%] {\n  cursor: progress;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9rZW1vbi1kZXRhaWwvcG9rZW1vbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBR0U7RUFDRSxjQUFBO0FBQUo7O0FBT0U7RUFDRSxjQUFBO0FBSko7O0FBT0U7RUFDRSxjQUFBO0FBTEo7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBWUE7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUNFLGdCQUFBO0VBRUEsZUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQVZGOztBQWFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7QUFWRjs7QUFlQTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFaRjs7QUF5QkE7RUFDRSxZQUFBO0FBdEJGOztBQXlCQTtFQUNFLFVBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBdEJGOztBQWlDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBOUJGOztBQW1DQTs7RUFFRSxlQUFBO0FBaENGOztBQW1DQTs7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBaENGOztBQW1DQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQWhDRjs7QUFtQ0E7RUFDRSxnQkFBQTtBQWhDRjs7QUFtQ0E7OztFQUdFLHNDQUFBO0FBaENGOztBQW9DQTtFQUlFLCtCQUFBO0VBQ0EsVUFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxVQUFBO0FBakNGOztBQXFDQTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFFQSxpQkFB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QUE7RUE0M1NGOztFQXgzU0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7RUEyM1NKOztFQXYzU0E7SUFDRSxlQUFBO0VBMDNTRjtBQUNGOztBQXYzU0E7RUFDRSxvQkFBQTtBQXkzU0Y7O0FBdDNTQTtFQUNFLGdCQUFBO0FBeTNTRiIsImZpbGUiOiJzcmMvYXBwL3Bva2Vtb24tZGV0YWlsL3Bva2Vtb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk1haW5EaXYge1xuICBjb2xvcjogIzUwNTA1MDtcbn1cblxuLmJpb0RpdiB7XG4gICoge1xuICAgIGNvbG9yOiAjNTA1MDUwO1xuICB9XG59XG5cbi5zdGF0RGl2IHtcblxuXG4gIC50YWJsZT50cj50ZDpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6ICM1MDUwNTA7XG4gIH1cblxuICAudGFibGU+dHI6Zmlyc3QtY2hpbGQ+dGQ+YnV0dG9uIHtcbiAgICBjb2xvcjogIzUwNTA1MDtcbiAgfVxuXG59XG5cbi8vVHlwZSBCb3hcbi5pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBmaWx0ZXI6IHNhdHVyYXRlKDEwMCUpIGJyaWdodG5lc3MoMTEwJSk7XG4gIHRyYW5zaXRpb246IDIwMG1zIGFsbDtcbiAgbWFyZ2luOiAwIDAgMCAxNXB4O1xuXG59XG5cbi5TZWN0aW9uLUhlYWRpbmcge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42cyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICM2ZDZkNmQ7XG59XG5cbi5IZWFkaW5nIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjb2xvcjogIzZkNmQ2ZDtcbn1cblxuLmJpb0RpdiB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIC8vcGFkZGluZy1sZWZ0OiA1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uSW1hZ2Uge1xuICB6LWluZGV4OiAxMDA7XG4gIG1heC13aWR0aDogODUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42cyBlYXNlLWluLW91dDtcbn1cblxuLy8gZk91dCBhdCB0aGUgQnV0dG9tXG5cbi5zdGF0RGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uc3RhdERpdiAuaW5uZXIge1xuICAvL3BhZGRpbmctcmlnaHQ6IDNyZW07XG59XG5cbi5wcm9ncmVzcyB7XG4gIC8vd2lkdGg6IDMwMHB4O1xufVxuXG5cbi8vIFR5cGUgSWNvbnNcbi5pY29uIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pY29uIC5jb2wtNCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pY29uIC5jb2wtOCB7XG4gIHBhZGRpbmc6IDVweCAwIDAgNXB4O1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgLy93aWxsLWNoYW5nZTogZmlsdGVyO1xuICAvL2ZpbHRlcjogc2F0dXJhdGUoMTIwJSkgYnJpZ2h0bmVzcygxMTUlKTtcbiAgLy90cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAvL3RyYW5zZm9ybTogc2NhbGUoMS4wMSkgcm90YXRlM2QoMCwxLDAsMzYwZGVnKTtcbiAgLy9jdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uIGltZyB7XG4gIGhlaWdodDogNjAlO1xuICB3aWR0aDogNjAlO1xufVxuXG5cbi8vIEFiaWxpdGllcyBTdHlsaW5nXG4uYWJpbGl0aWVzLFxuLnZhcmlldGllczpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFiaWxpdHksXG4udmFyaWV0eSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMnB4IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xufVxuXG4udmFyaWV0eSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9ybXNCbG9jayB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5oaWRkZW5BYmlsaXR5LFxuLnNlbGVjdGVkRm9ybSxcbi5zZWxlY3RlZEV2byB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKSBzYXR1cmF0ZSg1MCUpO1xufVxuXG4vLyBGYWRlLUluIEVmZmVjdCBGb3IgSW1hZ2Vcbi5mYWRlSW5PdXQge1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlLW91dDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZhZGVJbWcge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vLyBGYWRlLUluIEVmZmVjdCBGb3IgT3RoZXIgRWxlbWVudHNcbi5mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDFzO1xuICAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC8qIEZpcmVmb3ggPCAxNiAqL1xuICAtby1hbmltYXRpb246IGZhZGVpbiAxcztcbiAgLyogT3BlcmEgPCAxMi4xICovXG4gIGFuaW1hdGlvbjogZmFkZWluIDFzO1xuICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLyogRmlyZWZveCA8IDE2ICovXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiBPcGVyYSA8IDEyLjEgKi9cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8vIFBlcnNwZWN0aXZlIG9ubHkgZm9yIGRlc2t0b3BzXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgLy8gQmlvREl2XG4gIC5iaW9EaXYge1xuICAgIHBlcnNwZWN0aXZlOiA0MDBweDsgLy8gSW5jcmVhc2VzIEVmZmVjdFxuICAgIG1hcmdpbjogYXV0byAwO1xuICAgIHdpZHRoOiAzN2VtO1xuICB9XG5cbiAgLmJpb0Rpdjpob3ZlciAuaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApXG4gIH1cblxuICAuYmlvRGl2IC5pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzMGRlZyk7XG4gIH1cblxuICAvLyBzdGF0RGl2XG4gIC5zdGF0RGl2IHtcbiAgICBwZXJzcGVjdGl2ZTogNDAwcHg7XG4gICAgbWFyZ2luOiA0ZW0gYXV0bztcbiAgICB3aWR0aDogMzdlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgLy8gQ2hhbmdlZCAwIGVhcmxpZXJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICAgIC8vLXdlYmtpdC1maWx0ZXI6IGJsdXIoMCk7XG4gICAgLy8td2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAvLy13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEuMCwgMS4wKTtcbiAgICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAvL21hcmdpbi1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5zdGF0RGl2OmhvdmVyIC5pbm5lciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cblxuICAuc3RhdERpdiAuaW5uZXIge1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcbiAgfVxufVxuXG4vL0luaXRpYWwgU3RhdCBCYXIgQ29sb3Jcbi5wcm9ncmVzcyB7XG4gIC8vaGVpZ2h0OiAyMHB4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAwO1xuICAvL2hlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgLy90cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cblxuLy8gVGV4dC1Pbmx5IENvbG9yc1xuLmJsYWNrLXRleHQge1xuICBjb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAxMDAwbXMgZWFzZS1pbiwgd2lkdGggMTUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uYmx1ZS10ZXh0IHtcbiAgY29sb3I6ICMzYWFlZTQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zIGVhc2UtaW4sIHdpZHRoIDE1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmJyb3duLXRleHQge1xuICBjb2xvcjogI2E2OTc5MSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAxMDAwbXMgZWFzZS1pbiwgd2lkdGggMTUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uZ3JheS10ZXh0IHtcbiAgY29sb3I6ICM5NDkzOTMgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zIGVhc2UtaW4sIHdpZHRoIDE1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmdyZWVuLXRleHQge1xuICBjb2xvcjogIzY4Yzk2ZCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAxMDAwbXMgZWFzZS1pbiwgd2lkdGggMTUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ucGluay10ZXh0IHtcbiAgY29sb3I6ICNlYTg5YWIgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zIGVhc2UtaW4sIHdpZHRoIDE1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLnB1cnBsZS10ZXh0IHtcbiAgY29sb3I6ICNhZDhlZTcgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zIGVhc2UtaW4sIHdpZHRoIDE1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLnJlZC10ZXh0IHtcbiAgY29sb3I6ICNmZjhhODAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zIGVhc2UtaW4sIHdpZHRoIDE1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLndoaXRlLXRleHQge1xuICBjb2xvcjogZGltZ3JheSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAxMDAwbXMgZWFzZS1pbiwgd2lkdGggMTUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ueWVsbG93LXRleHQge1xuICBjb2xvcjogI2RjYjgwMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAxMDAwbXMgZWFzZS1pbiwgd2lkdGggMTUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBDb2xvcnNcbi5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwMG1zIGVhc2UtaW4sIHdpZHRoIDE1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFkNGZhICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMDBtcyBlYXNlLWluLCB3aWR0aCAxNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5icm93biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2FhYTQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwMG1zIGVhc2UtaW4sIHdpZHRoIDE1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMDBtcyBlYXNlLWluLCB3aWR0aCAxNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWM3ODQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwMG1zIGVhc2UtaW4sIHdpZHRoIDE1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLnBpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiYmQwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMDBtcyBlYXNlLWluLCB3aWR0aCAxNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wdXJwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ4ZWU3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMDBtcyBlYXNlLWluLCB3aWR0aCAxNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YTgwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMDBtcyBlYXNlLWluLCB3aWR0aCAxNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWRiZTEgIWltcG9ydGFudDtcbiAgY29sb3I6IGRpbWdyYXkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDAwbXMgZWFzZS1pbiwgd2lkdGggMTUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ueWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDAwbXMgZWFzZS1pbiwgd2lkdGggMTUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5cbi8vIENvbG9ycyBGb3IgQWJpbGl0aWVzXG4ubW9kYWwtY29udGVudCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA5cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuXG5cbi5nZW5lcmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iaW9EaXYge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJpb0RpdiAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hYmlsaXR5LFxuICAudmFyaWV0eSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDAuNTByZW07XG4gIH1cblxuICAuZm9ybXNCbG9jayB7XG4gICAgcGFkZGluZy10b3A6IDRweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5TZWN0aW9uLUhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgfVxuXG4gIHRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAwLjUwcmVtO1xuICB9XG5cbiAgLmFiaWxpdGllcyxcbiAgLnZhcmlldGllcyB7XG4gICAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnZhcmlldGllcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyBuZXdcbiAgfVxuXG4gIC8vLmZvcm1zQmxvY2sge1xuICAvLyAgbWF4LXdpZHRoOiA3NXZ3O1xuICAvL31cbiAgLmJpb0RpdiAuaW5uZXIge1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgfVxuXG4gIC5zdGF0RGl2IC5pbm5lciB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cblxuICAuc3RhdERpdiB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2FiaWxpdHlNb2RhbCB7XG4gICAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2Rlc2NNb2RhbCB7XG4gICAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDM0MHB4KSB7XG5cbiAgLy8uYWJpbGl0aWVzLCAudmFyaWV0aWVzIHtcbiAgLy8gIGZvbnQtc2l6ZTogeC1zbWFsbCAhaW1wb3J0YW50O1xuICAvL31cbiAgLnN0YXREaXYgLmlubmVyIHtcbiAgICBmb250LXNpemU6IHgtc21hbGwgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgfVxuXG4gICNhYmlsaXR5TW9kYWwge1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2Rlc2NNb2RhbCB7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8ucGttbi1yZWQge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbi8vfVxuLy9cbi8vLnBrbW4tZ3JlZW4ge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuLy99XG4vL1xuLy8ucGttbi1ibHVlIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuLy99XG4vL1xuLy8ucGttbi15ZWxsb3cge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbi8vfVxuLy9cbi8vLnBrbW4tZ29sZCB7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbi8vfVxuLy9cbi8vLnBrbW4tc2lsdmVyIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG4vL31cbi8vXG4vLy5wa21uLWNyeXN0YWwge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuLy99XG4vL1xuLy8ucGttbi1ydWJ5IHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG4vL31cbi8vXG4vLy5wa21uLXNhcHBoaXJlIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuLy99XG4vL1xuLy8ucGttbi1lbWVyYWxkIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBmb3Jlc3RncmVlbjtcbi8vfVxuLy9cbi8vLnBrbW4tZmlyZXJlZCB7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuLy99XG4vL1xuLy8ucGttbi1sZWFmZ3JlZW4ge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuLy99XG4vL1xuLy8ucGttbi1kaWFtb25kIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vL31cbi8vXG4vLy5wa21uLXBlYXJsIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbi8vfVxuLy9cbi8vLnBrbW4tcGxhdGludW0ge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4vL31cbi8vXG4vLy5wa21uLWhlYXJ0Z29sZCB7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuLy99XG4vL1xuLy8ucGttbi1zb3Vsc2lsdmVyIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbi8vfVxuLy9cbi8vLnBrbW4tYmxhY2sge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuLy99XG4vL1xuLy8ucGttbi13aGl0ZSB7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vL31cbi8vXG4vLy5wa21uLWJsYWNrMiB7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4vL31cbi8vXG4vLy5wa21uLXdoaXRlMiB7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vL31cbi8vXG4vLy5wa21uLXgge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4vL31cbi8vXG4vLy5wa21uLXkge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbi8vfVxuLy9cbi8vLnBrbW4tb21lZ2FydWJ5IHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbi8vfVxuLy9cbi8vLnBrbW4tYWxwaGFzYXBwaGlyZSB7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbi8vfVxuLy9cbi8vLnBrbW4tc3VuIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vL31cbi8vXG4vLy5wa21uLW1vb24ge1xuLy8gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuLy99XG4vL1xuLy8ucGttbi11bHRyYXN1biB7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbi8vfVxuLy9cbi8vLnBrbW4tdWx0cmFtb29uIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vL31cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoODUlICsgMTBweCk7XG4gIC8qIHJhdGlvIG9mIGltYWdlIGhlaWdodCB0byB3aWR0aCAqL1xuICBoZWlnaHQ6IDA7XG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbiAgLy8gZGlzcGxheTogY29udGVudHM7IC8vdG8gZml4IHZlcnRpY2FsIGFsaWduIGJ1ZyBhZnRlciBmaXhpbmcgdGhlIHNwZWNpZXMgcHJlbG9hZCBpc3N1ZVxufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAvL2hlaWdodDogYXV0bztcbn1cblxuXG4vLyBNZWdhLVNpZ2lsXG5cbi5tZWdhLXNpZ2lsIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogMTAzO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA1MCU7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaWdpbC1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uc2lnaWwtYW5pbWF0ZSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG59XG5cbi5zaWdpbC1lbmQge1xuICBhbmltYXRpb24tbmFtZTogc2lnaWwtZW5kO1xuICBhbmltYXRpb24tZHVyYXRpb246IDIuMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG59XG5cbkBrZXlmcmFtZXMgc2lnaWwtYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKSBzYXR1cmF0ZSgxMDAlKTtcbiAgfVxuXG4gIDI1JSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpIHNhdHVyYXRlKDEyNSUpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTUwJSkgc2F0dXJhdGUoMTUwJSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSkgc2F0dXJhdGUoMTAwJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaWdpbC1lbmQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTI1JSkgc2F0dXJhdGUoMTI1JSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpIHNhdHVyYXRlKDE1MCUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICAvLzEwMCUge1xuICAvLyAgb3BhY2l0eTogMDtcbiAgLy8gIGZpbHRlcjogYnJpZ2h0bmVzcygyMDAlKSBzYXR1cmF0ZSgyMDAlKTtcbiAgLy8gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vfVxufVxuXG4vLyBNZWdhIFNwaGVyZVxuXG4ubWVnYVNwaGVyZSB7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICBsZWZ0OiA1MCUgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45KTtcbiAgei1pbmRleDogMTAxO1xuICB3aWR0aDogODclO1xuICBoZWlnaHQ6IDk4JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb24tbmFtZTogbWVnYS1zcGhlcmU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAvL3RyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggMHB4ICNmZmYsXG4gICAgLyp3aGl0ZS1ib3JkZXIqL1xuICAgIGluc2V0IDAgMCA1MHB4IDEwcHggI2ZmZixcbiAgICAvKndoaXRlKi9cbiAgICBpbnNldCAwIC0yMHB4IDMwcHggMHB4ICNmMGYsXG4gICAgLypwaW5rKi9cbiAgICBpbnNldCAwIC00MHB4IDMwcHggMTBweCAjNDU3NGY1LFxuICAgIC8qYmx1ZSovXG4gICAgaW5zZXQgMCAtNDVweCA0NXB4IDQwcHggIzhjYzJmZixcbiAgICAvKnNreS1ibHVlKi9cbiAgICBpbnNldCAwIC05MHB4IDQwcHggMzBweCAjNDVmZjVlLFxuICAgIC8qZ3JlZW4qL1xuICAgIGluc2V0IDAgLTEyMHB4IDQwcHggMzBweCAjYzFmZjQ1LFxuICAgIC8qeWVsbG93LWdyZWVuKi9cbiAgICBpbnNldCAwIDEwcHggMTBweCA0MHB4ICNmZGZmYjUsXG4gICAgLyp5ZWxsb3ctd2hpdGUqL1xuICAgIGluc2V0IDAgMjBweCAzMDBweCAxMHB4ICNmOWZmNDIsXG4gICAgLyp5ZWxsb3cqL1xuICAgIDAgMCA1MHB4ICNmZmYsXG4gICAgMCAwcHggMTBweCAjZjBmLFxuICAgIC8vMCAtNXB4IDMwcHggMHB4ICNmOWZmNDIsXG4gICAgLy8wIDEwcHggODBweCAjZjBmO1xufVxuXG5Aa2V5ZnJhbWVzIG1lZ2Etc3BoZXJlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOSk7XG4gIH1cblxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOCk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOSk7XG4gIH1cblxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjkpO1xuICB9XG59XG5cbi8vIEJ1YmJsZXNcbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgLTEwMDBweCk7XG4gIH1cbn1cblxuLmJ1YmJsZXMge1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ1YmJsZS13cmFwIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufVxuXG4uYnViYmxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogLjc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBtb3ZlIDJzIGluZmluaXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggI2ZmZixcbiAgICBpbnNldCAwIDAgMTBweCAxcHggI0ZGRjtcbn1cblxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMDAwIHtcbiAgLmJ1YmJsZTpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAkc2l6ZTogcmFuZG9tKDMwKStweDtcbiAgICB0b3A6IChyYW5kb20oNzApKjElKSsxNSU7XG4gICAgbGVmdDogKHJhbmRvbSg3MCkqMSUpKzE1JTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0kaSAqIC4xcztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKChyYW5kb20oMjAwMCkgKiAxcHgpLTEwMDBweCwgKHJhbmRvbSgyMDAwKSAqIDFweCktMTAwMHB4LCAocmFuZG9tKDQwMDApICogMXB4KSk7XG4gICAgYmFja2dyb3VuZDogaHNsKHJhbmRvbSgzNjApLCA3NSUsIDgwJSk7XG4gIH1cblxufVxuXG5cbi5mT3V0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uZkluIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLkRORSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2MjYyNjI7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbn1cblxuLmV2by1pbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5ldm8taW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXZvLWRpdiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm11bHRpLWV2by1zdGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ldm8tbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICBzcGFuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDJweCAzcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xufVxuXG4uZXZvLWlkIHtcbiAgY29sb3I6ICM2MjYyNjI7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi5ldm8tdHlwZXMsXG4udHlwZURlZmVuY2VzUm93LFxuLm1vdmVUeXBlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuXG4gIC5pY29uIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBhbGw7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICAuaWNvbjpob3ZlciB7XG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgyMDAlKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIC8vbWFyZ2luOiAyMCU7XG4gIH1cbn1cblxuLmFycm93LWRpdiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ldm8tYXJyb3cge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ldm8tZGVzYyB7XG4gIGNvbG9yOiAjNjI2MjYyO1xufVxuXG4ubXVsdGktYXJyb3ctc3RhZ2Uge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLmNvbC1zbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gIH1cbn1cblxuXG4uZWV2ZWVSb3cxLFxuLmVldmVlUm93Mixcbi5lZXZlZVJvdzMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZWV2ZWVSb3cyIHtcbiAgLmFycm93LWRpdiB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgfVxuXG4gIC5jb2wtc20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIH1cbiAgfVxufVxuXG4uZWV2ZWVSb3czIHtcbiAgLmNvbC1zbSB7XG4gICAgZmxleC1iYXNpczogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jb3JuZXIxIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiA1MCU7XG5cbiAgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jb3JuZXIyIHtcbiAgcGFkZGluZy1yaWdodDogNTAlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmNvcm5lcjMge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDUwJTtcblxuICBpbWcge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZykgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY29ybmVyMy00IHtcbiAgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY29ybmVyNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gIGltZyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLlN1YlNlY3Rpb25zIHtcbiAgZGl2IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgfVxuXG4gICoge1xuICAgIGNvbG9yOiAjNTA1MDUwO1xuICB9XG59XG5cbi50eXBlRGVmZW5jZXNSb3cge1xuICBkaXYge1xuICAgIHBhZGRpbmctYm90dG9tOiBpbml0aWFsO1xuICAgIHBhZGRpbmctdG9wOiBpbml0aWFsO1xuICB9XG59XG5cbi5UeXBlRWZmRGl2IHtcbiAgLmlubmVyIHtcblxuICAgIC8qIFJlbW92ZSB0aGUgdG9wIGJvcmRlciB3aGVuIGEgdGFibGUgaXMgbWlzc2luZyB0aGUgaGVhZGVyICovXG4gICAgLnRhYmxlPnRyOmZpcnN0LWNoaWxkPnRkIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAvKiBJbmNsdWRlIHRoZSBib3JkZXIgd2hlbiB0aGVyZSdzIGEgaGVhZGVyICovXG4gICAgLy8udGFibGUgPiB0aGVhZCArIHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCB7XG4gICAgLy8gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgIC8vfVxuICAgIHRhYmxlIHRoLFxuICAgIHRhYmxlIHRkIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG59XG5cblxuLmdlbmRlci1tYWxlIHtcbiAgY29sb3I6IHNreWJsdWUgIWltcG9ydGFudDtcbn1cblxuLmdlbmRlci1mZW1hbGUge1xuICBjb2xvcjogaG90cGluayAhaW1wb3J0YW50O1xufVxuXG4uQ29sb3JlZEJ1dHRvbiB7XG4gIHBhZGRpbmc6IDJweCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5Db2xvcmVkQnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5zY3JvbGxhYmxlVGFibGUge1xuICAudGFibGUtZml4ZWQgdHIge1xuICAgIGRpc3BsYXk6IGZsb3ctcm9vdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJsYWNrIHtcbiAgICB0Ym9keSB0cjpob3Zlcjpub3QoLk5vdEZvdW5kVGV4dCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlmYjdjMjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICB0cjpob3ZlciB0ZDpub3QoLk5vdEZvdW5kVGV4dCkge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5ibHVlIHtcbiAgICB0Ym9keSB0cjpob3Zlcjpub3QoLk5vdEZvdW5kVGV4dCkge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTJmZjtcbiAgICB9XG5cbiAgICB0cjpob3ZlciB0ZDpub3QoLk5vdEZvdW5kVGV4dCkge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5icm93biB7XG4gICAgdGJvZHkgdHI6aG92ZXI6bm90KC5Ob3RGb3VuZFRleHQpIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGM3YzU7XG4gICAgfVxuXG4gICAgdHI6aG92ZXIgdGQ6bm90KC5Ob3RGb3VuZFRleHQpIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAuZ3JheSB7XG4gICAgdGJvZHkgdHI6aG92ZXI6bm90KC5Ob3RGb3VuZFRleHQpIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgfVxuXG4gICAgdHI6aG92ZXIgdGQ6bm90KC5Ob3RGb3VuZFRleHQpIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAuZ3JlZW4ge1xuICAgIHRib2R5IHRyOmhvdmVyOm5vdCguTm90Rm91bmRUZXh0KSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkZWI0O1xuICAgIH1cblxuICAgIHRyOmhvdmVyIHRkOm5vdCguTm90Rm91bmRUZXh0KSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLnBpbmsge1xuICAgIHRib2R5IHRyOmhvdmVyOm5vdCguTm90Rm91bmRUZXh0KSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJkMmUxO1xuICAgIH1cblxuICAgIHRyOmhvdmVyIHRkOm5vdCguTm90Rm91bmRUZXh0KSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLnB1cnBsZSB7XG4gICAgdGJvZHkgdHI6aG92ZXI6bm90KC5Ob3RGb3VuZFRleHQpIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWIyZjM7XG4gICAgfVxuXG4gICAgdHI6aG92ZXIgdGQ6bm90KC5Ob3RGb3VuZFRleHQpIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAucmVkIHtcbiAgICB0Ym9keSB0cjpob3Zlcjpub3QoLk5vdEZvdW5kVGV4dCkge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjRhZDtcbiAgICB9XG5cbiAgICB0cjpob3ZlciB0ZDpub3QoLk5vdEZvdW5kVGV4dCkge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC53aGl0ZSB7XG4gICAgdGJvZHkgdHI6aG92ZXI6bm90KC5Ob3RGb3VuZFRleHQpIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgdHI6aG92ZXIgdGQ6bm90KC5Ob3RGb3VuZFRleHQpIHtcbiAgICAgIGNvbG9yOiBkaW1ncmF5O1xuICAgIH1cbiAgfVxuXG4gIC55ZWxsb3cge1xuICAgIHRib2R5IHRyOmhvdmVyOm5vdCguTm90Rm91bmRUZXh0KSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMTVmO1xuICAgIH1cblxuICAgIHRyOmhvdmVyIHRkOm5vdCguTm90Rm91bmRUZXh0KSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLnRhYmxlLWZpeGVkIHRib2R5IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGFibGUtZml4ZWQgdGhlYWQsXG4gIC50YWJsZS1maXhlZCB0Ym9keSxcbiAgLnRhYmxlLWZpeGVkIHRyLFxuICAudGFibGUtZml4ZWQgdGQsXG4gIC50YWJsZS1maXhlZCB0aCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudGFibGUtZml4ZWQgdGJvZHkgdGQsXG4gIC50YWJsZS1maXhlZCB0Ym9keSB0aCxcbiAgLnRhYmxlLWZpeGVkIHRoZWFkPnRyPnRoIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiZjA5ODtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gIHRoIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgdGJvZHkge1xuICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZmZlNjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGhlaWdodCBlYXNlLWluLW91dDtcbiAgfVxufVxuXG4udGFibGUtcmVzcG9uc2l2ZS53aGl0ZSB7XG4gIHRoIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGNvbG9yOiAjNTA1MDUwO1xuICB9XG59XG5cbi5ibGFjayAudGFibGUgdGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGZhO1xufVxuXG4uYmx1ZSAudGFibGUgdGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmOWZmO1xufVxuXG4uYnJvd24gLnRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbn1cblxuLmdyYXkgLnRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cblxuLmdyZWVuIC50YWJsZSB0Ym9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWZmZWY7XG59XG5cbi5waW5rIC50YWJsZSB0Ym9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZmE7XG59XG5cbi5wdXJwbGUgLnRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjJmZjtcbn1cblxuLnJlZCAudGFibGUgdGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWY5O1xufVxuXG4ud2hpdGUgLnRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmODtcbn1cblxuLnllbGxvdyAudGFibGUgdGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWRlO1xufVxuXG5cbi5kYW1hZ2UtY2F0IHtcbiAgbWF4LXdpZHRoOiAzM3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5tb3ZlVHlwZXMge1xuICAuaWNvbiB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbjogLTVweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi5HYW1lVmVyc2lvbnMgLmNvbCB7XG4gIGZsZXgtYmFzaXM6IDExLjExJTtcbn1cblxuLm1vdmVEZXRhaWxzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgNHB4IDAgNHB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgfVxufVxuXG4uUGh5c2ljYWwge1xuICBiYWNrZ3JvdW5kOiAjRDM0MjVGO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAjRDM0MjVGO1xufVxuXG4uU3BlY2lhbCB7XG4gIGJhY2tncm91bmQ6ICMwQzY5Qzg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICMwQzY5Qzg7XG59XG5cbi5TdGF0dXMge1xuICBiYWNrZ3JvdW5kOiAjOTI5MjkyO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAjOTI5MjkyO1xufVxuXG4uYmVhdXR5IHtcbiAgYmFja2dyb3VuZDogIzUzOURERjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggIzUzOURERjtcbn1cblxuLmNvb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNjE5O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAjZmZjNjE5O1xufVxuXG4uY3V0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYwOTY7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNmZjYwOTY7XG59XG5cbi5zbWFydCB7XG4gIGJhY2tncm91bmQ6ICM1RkJENTg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICM1RkJENTg7XG59XG5cbi50b3VnaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICM2MDdkOGI7XG59XG5cbi5kYW1hZ2UtaWNvbiB7XG4gIG1heC13aWR0aDogMzNweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDFweCkge1xuICAuU3ViU2VjdGlvbnMge1xuICAgIC5pbm5lciB7XG5cbiAgICAgIHRhYmxlIHRoLFxuICAgICAgdGFibGUgdGQge1xuICAgICAgICBwYWRkaW5nOiAwLjMzcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAudGFibGUgdGgsXG4gIC50YWJsZSB0ZCB7XG4gICAgcGFkZGluZy1yaWdodDogMC4wcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICB9XG5cbiAgLlN1YlNlY3Rpb25zIHtcbiAgICAuaW5uZXIge1xuXG4gICAgICB0YWJsZSB0aCxcbiAgICAgIHRhYmxlIHRkIHtcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5TdWJTZWN0aW9ucyB7XG4gICAgLmlubmVyIHtcblxuICAgICAgdGFibGUgdGgsXG4gICAgICB0YWJsZSB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLkdhbWVWZXJzaW9ucyAuY29sIHtcbiAgICBmbGV4LWJhc2lzOiAxMCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5yb3cgLmNvbC1zbSB7XG4gICAgZmxleC1iYXNpczogdW5zZXQ7XG4gIH1cblxuICAuZXZvLWFycm93IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5tdWx0aS1ldm8tc3RhZ2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAuYXJyb3ctZGl2IHtcbiAgICAvL3BhZGRpbmctdG9wOiAxcmVtO1xuICB9XG5cbiAgLm11bHRpLWFycm93LXN0YWdlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgZmxleC1iYXNpczogMTAwJTtcblxuICAgIC5jb2wtc20ge1xuICAgICAgcGFkZGluZy1ib3R0b206IGluaXRpYWw7XG4gICAgICBwYWRkaW5nLXRvcDogaW5pdGlhbDtcbiAgICB9XG5cbiAgICAuYXJyb3ctZGl2IHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLkhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG5cbiAgLlN1YlNlY3Rpb25zIHtcbiAgICAuaW5uZXIge1xuICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgICB0YWJsZSB0aCxcbiAgICAgIHRhYmxlIHRkIHtcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGFtYWdlLWNhdCB7XG4gICAgbWF4LXdpZHRoOiAyOHB4O1xuICB9XG5cbiAgLlN1YlNlY3Rpb25zIC5yb3cgLmNvbCB7XG4gICAgZmxleC1iYXNpczogdW5zZXQ7XG4gIH1cblxuICAuZXZvLWltZyB7XG4gICAgbWF4LXdpZHRoOiA2NHB4O1xuICB9XG5cbiAgLkdhbWVWZXJzaW9ucyAuY29sIHtcbiAgICBmbGV4LWJhc2lzOiAxNiUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5Nb3Zlc1RhYmxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgLmNvbCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIC5kYW1hZ2UtaWNvbiB7XG4gICAgICAgIG1heC13aWR0aDogMjhweDtcbiAgICAgIH1cblxuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICAuc2Nyb2xsYWJsZVRhYmxlIHtcblxuICAgIHRoZWFkLFxuICAgIHRib2R5IHtcblxuICAgICAgLkNvbDEsXG4gICAgICAuQ29sMyxcbiAgICAgIC5Db2w0LFxuICAgICAgLkNvbDUsXG4gICAgICAuQ29sNixcbiAgICAgIC5Db2w3IHtcbiAgICAgICAgZmxleDogMCAwIDkuNzIyMjIyJTtcbiAgICAgICAgbWF4LXdpZHRoOiA5LjcyMjIyMiU7XG4gICAgICB9XG5cbiAgICAgIC5Db2wyIHtcbiAgICAgICAgZmxleDogMCAwIDQxLjY2NjY2NiU7XG4gICAgICAgIG1heC13aWR0aDogNDEuNjY2NjY2JTtcbiAgICAgIH1cblxuICAgICAgLkNvbDgsXG4gICAgICAuQ29sOSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5ldm8tZGl2IHtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmV2by1pbWcge1xuICAgIC8vbWF4LXdpZHRoOiA3NSU7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLmV2by1kZXNjIHtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gIH1cblxuICAuSGVhZGluZyB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gIH1cblxuICAuZGFtYWdlLWNhdCB7XG4gICAgbWF4LXdpZHRoOiAyOHB4O1xuICB9XG5cbiAgLlN1YlNlY3Rpb25zIC5yb3cgLmNvbCB7XG4gICAgZmxleC1iYXNpczogNTAlO1xuXG4gICAgLmJ0biB7XG4gICAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgfVxuICB9XG5cbiAgLkdhbWVWZXJzaW9ucyAuY29sIHtcbiAgICBmbGV4LWJhc2lzOiAyMSUgIWltcG9ydGFudDtcbiAgfVxuXG4gICNtb3ZlTW9kYWwgLm1vZGFsLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cblxuICAuc2Nyb2xsYWJsZVRhYmxlIHtcblxuICAgIHRoZWFkLFxuICAgIHRib2R5IHtcbiAgICAgIC5Db2wxIHtcbiAgICAgICAgZmxleDogMCAwIDEzJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMyU7XG4gICAgICB9XG5cbiAgICAgIC5Db2wyIHtcbiAgICAgICAgZmxleDogMCAwIDM2LjY2NjY2NiU7XG4gICAgICAgIG1heC13aWR0aDogMzYuNjY2NjY2JTtcbiAgICAgIH1cblxuICAgICAgLkNvbDMge1xuICAgICAgICBmbGV4OiAwIDAgOC43MjIyMjIlO1xuICAgICAgICBtYXgtd2lkdGg6IDguNzIyMjIyJTtcbiAgICAgIH1cblxuICAgICAgLkNvbDQge1xuICAgICAgICBmbGV4OiAwIDAgOC43MjIyMjIlO1xuICAgICAgICBtYXgtd2lkdGg6IDguNzIyMjIyJTtcbiAgICAgIH1cblxuICAgICAgLkNvbDUge1xuICAgICAgICBmbGV4OiAwIDAgMTEuNzIyMjIyJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMS43MjIyMjIlO1xuICAgICAgfVxuXG4gICAgICAuQ29sNyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgZmxleDogMCAwIDExLjQ0NDQ0NCU7XG4gICAgICAgIG1heC13aWR0aDogMTEuNDQ0NDQ0JTtcbiAgICAgIH1cblxuICAgICAgLkNvbDgsXG4gICAgICAuQ29sOSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgLkNvbDMge1xuICAgICAgICBmbGV4OiAwIDAgMTcuNDQ0NDQ0JTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNy40NDQ0NDQlO1xuICAgICAgfVxuXG4gICAgICAuQ29sNCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5Db2w1IHtcbiAgICAgICAgZmxleDogMCAwIDEyLjcyMjIyMiU7XG4gICAgICAgIG1heC13aWR0aDogMTIuNzIyMjIyJTtcbiAgICAgIH1cblxuICAgICAgLkNvbDYge1xuICAgICAgICBmbGV4OiAwIDAgOC43MjIyMjIlO1xuICAgICAgICBtYXgtd2lkdGg6IDguNzIyMjIyJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnNjcm9sbGFibGVUYWJsZSB7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAuc2Nyb2xsYWJsZVRhYmxlIHtcblxuICAgIHRoZWFkLFxuICAgIHRib2R5IHtcbiAgICAgIC5Db2wxIHtcbiAgICAgICAgZmxleDogMCAwIDEzJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMyU7XG4gICAgICB9XG5cbiAgICAgIC5Db2wyIHtcbiAgICAgICAgZmxleDogMCAwIDM1LjY2NjY2NiU7XG4gICAgICAgIG1heC13aWR0aDogMzUuNjY2NjY2JTtcbiAgICAgIH1cblxuICAgICAgLkNvbDMge1xuICAgICAgICBmbGV4OiAwIDAgOC43MjIyMjIlO1xuICAgICAgICBtYXgtd2lkdGg6IDguNzIyMjIyJTtcbiAgICAgIH1cblxuICAgICAgLkNvbDQge1xuICAgICAgICBmbGV4OiAwIDAgOC43MjIyMjIlO1xuICAgICAgICBtYXgtd2lkdGg6IDguNzIyMjIyJTtcbiAgICAgIH1cblxuICAgICAgLkNvbDUge1xuICAgICAgICBmbGV4OiAwIDAgMTEuNzIyMjIyJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMS43MjIyMjIlO1xuICAgICAgfVxuXG4gICAgICAuQ29sNyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgZmxleDogMCAwIDEyLjQ0NDQ0NCU7XG4gICAgICAgIG1heC13aWR0aDogMTIuNDQ0NDQ0JTtcbiAgICAgIH1cblxuICAgICAgLkNvbDgsXG4gICAgICAuQ29sOSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgLkNvbDMge1xuICAgICAgICBmbGV4OiAwIDAgMTcuNDQ0NDQ0JTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNy40NDQ0NDQlO1xuICAgICAgfVxuXG4gICAgICAuQ29sNCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5Db2w1IHtcbiAgICAgICAgZmxleDogMCAwIDEyLjcyMjIyMiU7XG4gICAgICAgIG1heC13aWR0aDogMTIuNzIyMjIyJTtcbiAgICAgIH1cblxuICAgICAgLkNvbDYge1xuICAgICAgICBmbGV4OiAwIDAgOC43MjIyMjIlO1xuICAgICAgICBtYXgtd2lkdGg6IDguNzIyMjIyJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIC5HYW1lVmVyc2lvbnMgLmNvbCB7XG4gICAgZmxleC1iYXNpczogMjYlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGFtYWdlLWljb24ge1xuICAgIG1heC13aWR0aDogMjNweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1vdmVUeXBlcyAuaWNvbiB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDM1NXB4KSB7XG4gIC5TdWJTZWN0aW9ucyB7XG4gICAgLmlubmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC5hYmlsaXR5IHtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5zdGF0RGl2IHtcbiAgICAuYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gICAgfVxuICB9XG5cbiAgLmV2by1kaXYge1xuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmV2by1pbWcge1xuICAgIC8vbWF4LXdpZHRoOiA3NSU7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLmV2by1kZXNjIHtcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xuICB9XG5cbiAgLlN1YlNlY3Rpb25zIHtcbiAgICAuaW5uZXIge1xuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLmRhbWFnZS1jYXQge1xuICAgIG1heC13aWR0aDogMjJweDtcbiAgfVxufVxuXG4uZGlzYWJsZUNsaWNraW5nIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5sb2FkaW5nQ3Vyc29yIHtcbiAgY3Vyc29yOiBwcm9ncmVzcztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-detail',
                templateUrl: './pokemon-detail.component.html',
                styleUrls: ['./pokemon-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/pokemon.service */ "+biT");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _shared_pwa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pwa.service */ "QlOP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











const _c0 = ["menu"];
function HeaderComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Open this menu anytime by clicking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pok\u00E9Dex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Preloading thumbnails for offline usage.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "App will be ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ready after that completes. Main images require internet connection but once loaded they will be available offline. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_span_36_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.installPwa(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "INSTALL APP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "back-arrow-fade": a0 }; };
const _c2 = function (a0) { return { "search-fade": a0 }; };
const _c3 = function (a0) { return { "d-none": a0 }; };
class HeaderComponent {
    constructor(pokemonService, Pwa, meta, lc) {
        this.pokemonService = pokemonService;
        this.Pwa = Pwa;
        this.meta = meta;
        this.lc = lc;
        this.searchText = '';
        this.showSearch = true;
        this._timeout = null;
    }
    ngOnInit() {
        if (localStorage.getItem('megaEnabled') == null) {
            localStorage.setItem('megaEnabled', 'true');
        }
        if (localStorage.getItem('saveSelectedVersion') == null) {
            localStorage.setItem('saveSelectedVersion', 'true');
        }
        if (localStorage.getItem('SelectedVersion') == null) {
            localStorage.setItem('SelectedVersion', 'sword-shield');
        }
        this.megaSwitch = localStorage.getItem('megaEnabled') == 'true';
        this.versionSwitch = localStorage.getItem('saveSelectedVersion') == 'true';
        this.pokemonService.megaSwitchSubscription.next(this.megaSwitch);
        this.pokemonService.versionSwitchSubscription.next(this.versionSwitch);
        this.color = this.pokemonService.activePokemon.subscribe(response => {
            if (response === null) {
                this.color = 'navbar';
                this.showSearch = true;
            }
            else {
                this.color = response.color;
                this.showSearch = false;
            }
            this.setTitleBarColor(this.color);
        });
    }
    setTitleBarColor(color) {
        let hexColor = '#FFFFFF';
        switch (color) {
            case 'black': {
                hexColor = '#607d8b';
                break;
            }
            case 'blue': {
                hexColor = '#81d4fa';
                break;
            }
            case 'brown': {
                hexColor = '#bcaaa4';
                break;
            }
            case 'gray': {
                hexColor = '#a6a6a6';
                break;
            }
            case 'green': {
                hexColor = '#81c784';
                break;
            }
            case 'pink': {
                hexColor = '#f8bbd0';
                break;
            }
            case 'purple': {
                hexColor = '#ad8ee7';
                break;
            }
            case 'red': {
                hexColor = '#ff8a80';
                break;
            }
            case 'white': {
                hexColor = '#d5dbe1';
                break;
            }
            case 'yellow': {
                hexColor = '#ffd600';
                break;
            }
            default: {
                hexColor = '#FFFFFF';
            }
        }
        this.meta.updateTag({ name: 'theme-color', content: hexColor });
        this.meta.updateTag({ name: 'msapplication-navbutton-color', content: hexColor });
        this.meta.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: hexColor });
    }
    checkBoxMega(values) {
        this.pokemonService.megaSwitchSubscription.next(values.currentTarget.checked);
        localStorage.setItem('megaEnabled', values.currentTarget.checked.toString());
    }
    checkBoxVersion(values) {
        this.pokemonService.versionSwitchSubscription.next(values.currentTarget.checked);
        localStorage.setItem('saveSelectedVersion', values.currentTarget.checked.toString());
    }
    openMenu() {
        this.menu.nativeElement.click();
    }
    installPwa() {
        this.Pwa.promptEvent.prompt();
    }
    typingStopped() {
        if (this._timeout) {
            // if there is already a timeout in process cancel it
            window.clearTimeout(this._timeout);
        }
        this._timeout = window.setTimeout(() => {
            this._timeout = null;
            this.lc.run(() => {
                this.pokemonService.searchItemSubject.next(this.searchText);
            });
        }, 50);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pwa_service__WEBPACK_IMPORTED_MODULE_3__["PwaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    } }, decls: 105, vars: 15, consts: [["id", "header", 1, "navbar", "sticky-top", "navbar-expand", 3, "ngClass"], [1, "navbar-nav", "mt-2"], ["type", "button", "routerLink", "/pokedex", 1, "btn", "back-arrow", 3, "ngClass"], [1, "icon-left-big"], [1, "nav-item", "search-bar-form", 2, "display", "inline-flex", 3, "ngClass"], [1, "bg-light", "rounded", "rounded-pill", "shadow-sm", "align-content-center", 2, "max-width", "40vw"], [1, "search-bar", "input-group", "rounded-pill", 2, "background-color", "#f6f6f6"], ["name", "search", "autocomplete", "off", "placeholder", "Search...", "type", "text", "aria-describedby", "button-addon1", 1, "form-control", "border-0", "rounded-pill", 2, "background-color", "#f6f6f6", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["id", "searchIcon", "type", "submit", 1, "btn", "btn-link", "text-primary"], [1, "icon-search"], ["type", "button", "routerLink", "/pokedex", 1, "btn"], ["type", "button", "routerLink", "/pokedex/galar", 1, "btn"], ["type", "button", "routerLink", "/pokedex/isolarmure", 1, "btn"], ["type", "button", "routerLink", "/pokedex/couronneige", 1, "btn"], ["data-toggle", "modal", "data-target", "#aboutModal", 1, "navbar-brand", "ml-auto"], ["menu", ""], ["id", "aboutModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "aboutModal", "aria-hidden", "true", 1, "modal", "fade"], ["aboutModal", ""], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "text-center"], [1, "row", 2, "margin-top", "20px"], [1, "col-12", "text-uppercase", "text-center"], [2, "margin-top", "10px", "margin-bottom", "5px"], [1, "modal-body", "justify-content-center", "text-center"], [4, "ngIf"], ["class", "installBtn", 3, "click", 4, "ngIf"], [3, "ngClass"], [1, "heading", "text-center", "font-weight-bolder"], [1, "row", "my-1"], [1, "col-8", "text-right", 2, "font-size", "medium"], [1, "col-4", "text-left", 2, "align-self", "center"], ["type", "checkbox", "checked", "", "name", "megaSwitch", 1, "switch", 3, "ngModel", "ngModelChange", "change"], ["type", "checkbox", "checked", "", "name", "versionSwitch", 1, "switch", 3, "ngModel", "ngModelChange", "change"], [1, "icon-heart"], ["href", "https://github.com/PokeAPI/pokeapi", "target", "_blank"], ["href", "https://github.com/veekun/pokedex", "target", "_blank"], ["href", "https://bulbapedia.bulbagarden.net/wiki/Main_Page", "target", "_blank"], ["href", "https://github.com/duiker101/pokemon-type-svg-icons", "target", "_blank"], [2, "white-space", "pre-wrap"], ["aria-hidden", "true", 1, "icon-star"], ["href", "https://github.com/HybridShivam/pokedex-angular-app", "target", "_blank"], ["href", "https://github.com/HybridShivam/Pokemon", "target", "_blank"], ["href", "mailto:shivamunlimited@gmail.com"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["aria-hidden", "true", 1, "icon-spin1", "animate-spin"], [1, "installBtn", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchText = $event; })("ngModelChange", function HeaderComponent_Template_input_ngModelChange_8_listener() { return ctx.typingStopped(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "National");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Galar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Isolarmure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Couronneige");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pok\u00E9Dex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Welcome to the Pok\u00E9Dex!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HeaderComponent_div_34_Template, 14, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HeaderComponent_span_36_Template, 2, 0, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Mega Evolution Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_44_listener($event) { return ctx.megaSwitch = $event; })("change", function HeaderComponent_Template_input_change_44_listener($event) { return ctx.checkBoxMega($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "If enabled, the animation takes place once for each species after the base form's image has been downloaded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save Selected Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_51_listener($event) { return ctx.versionSwitch = $event; })("change", function HeaderComponent_Template_input_change_51_listener($event) { return ctx.checkBoxVersion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "If enabled, the selected game version is saved, else the latest version is used. Game versions affect moves and ability flavor texts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "v2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "The current Pok\u00E9Dex is up to date with the data from the Pok\u00E9API (Uptu Gen VIII). Earlier in Development this app used to call the API but now all the data is completely stored locally to facilitate offline usage. The Pok\u00E9API database is accurate but its not perfect. Therefore, some data might be inconsistent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " for Pok\u00E9mon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "SPECIAL THANKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Pok\u00E9API.co");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Veekun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " for the data, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Bulbapedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " for the images, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "duiker101");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " for the type icons and of course to Nintendo, Game Freak, and The Pok\u00E9mon Company for making such an awesome series of games.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " If you liked it you can ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " the repo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "@Github/Pok\u00E9Dex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " And here's the repo. containing all other resources (images) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "@Github/Pok\u00E9mon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Report any bugs to my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "MailBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "DISCLAIMER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "This is an unofficial, fan-made app and is NOT affiliated, endorsed or supported by Nintendo, Game Freak and The Pok\u00E9mon Company in any way. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "No copyright infringement intended. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.showSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, !ctx.showSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemonService.firstTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Pwa.promptEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.pokemonService.isMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.megaSwitch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.versionSwitch);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"]], styles: [".navbar[_ngcontent-%COMP%] {\n  color: gray;\n  background-color: white;\n  box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.18);\n  transition: background-color 500ms ease-in, color 500ms ease-in;\n}\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2b2b2b;\n  cursor: pointer;\n}\n.modal[_ngcontent-%COMP%] {\n  color: gray;\n}\n.modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.modal[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n.installBtn[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 3px 4px;\n  border-radius: 4px;\n  transition: all 250ms ease-in-out;\n  font-size: x-large;\n}\n.installBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: gray;\n  cursor: pointer;\n}\n.switch[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  padding: 0;\n}\n@media (max-width: 575px) {\n  .navbar[_ngcontent-%COMP%] {\n    height: 2.5rem;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding-bottom: 0.2rem;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n@media (max-width: 316px) {\n  .navbar[_ngcontent-%COMP%] {\n    height: 2.3rem;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding-bottom: 0.2rem;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 270px) {\n  .navbar[_ngcontent-%COMP%] {\n    height: 2rem;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n    padding-bottom: 0.2rem;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n.black[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  color: white;\n}\n.blue[_ngcontent-%COMP%] {\n  background-color: #81d4fa;\n  color: white;\n}\n.brown[_ngcontent-%COMP%] {\n  background-color: #bcaaa4;\n  color: white;\n}\n.gray[_ngcontent-%COMP%] {\n  background-color: #a6a6a6;\n  color: white;\n}\n.green[_ngcontent-%COMP%] {\n  background-color: #81c784;\n  color: white;\n}\n.pink[_ngcontent-%COMP%] {\n  background-color: #f8bbd0;\n  color: white;\n}\n.purple[_ngcontent-%COMP%] {\n  background-color: #ad8ee7;\n  color: white;\n}\n.red[_ngcontent-%COMP%] {\n  background-color: #ff8a80;\n  color: white;\n}\n.white[_ngcontent-%COMP%] {\n  background-color: #d5dbe1;\n  color: dimgray;\n}\n.yellow[_ngcontent-%COMP%] {\n  background-color: #ffd600;\n  color: white;\n}\n.search-bar[_ngcontent-%COMP%] {\n  margin-top: -7px !important;\n}\n.search-bar-form[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 1s;\n  visibility: visible;\n}\n.search-fade[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n}\n.back-arrow[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 0;\n  padding-left: 0;\n  opacity: 1;\n  transition: opacity 1s;\n  visibility: visible;\n}\n.back-arrow-fade[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n@supports (-webkit-appearance: none) or (-moz-appearance: none) {\n  input[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n    --active: gray;\n    --active-inner: #fff;\n    --focus: 2px black;\n    --border: gray;\n    --border-hover: black;\n    --background: #fff;\n    --disabled: #F6F8FF;\n    --disabled-inner: #E1E6F9;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    height: 21px;\n    outline: none;\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n    margin: 0;\n    cursor: pointer;\n    border: 1px solid var(--bc, var(--border));\n    background: var(--b, var(--background));\n    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:after, input[type=radio][_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: block;\n    left: 0;\n    top: 0;\n    position: absolute;\n    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked {\n    --b: var(--active);\n    --bc: var(--active);\n    --d-o: .3s;\n    --d-t: .6s;\n    --d-t-e: cubic-bezier(.2, .85, .32, 1.2);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:disabled, input[type=radio][_ngcontent-%COMP%]:disabled {\n    --b: var(--disabled);\n    cursor: not-allowed;\n    opacity: 0.9;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:disabled:checked, input[type=radio][_ngcontent-%COMP%]:disabled:checked {\n    --b: var(--disabled-inner);\n    --bc: var(--border);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%] {\n    cursor: not-allowed;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:hover:not(:checked):not(:disabled), input[type=radio][_ngcontent-%COMP%]:hover:not(:checked):not(:disabled) {\n    --bc: var(--border-hover);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:focus, input[type=radio][_ngcontent-%COMP%]:focus {\n    box-shadow: 0 0 0 var(--focus);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch), input[type=radio][_ngcontent-%COMP%]:not(.switch) {\n    width: 21px;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch):after, input[type=radio][_ngcontent-%COMP%]:not(.switch):after {\n    opacity: var(--o, 0);\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch):checked, input[type=radio][_ngcontent-%COMP%]:not(.switch):checked {\n    --o: 1;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 21px;\n    display: inline-block;\n    vertical-align: top;\n    cursor: pointer;\n    margin-left: 4px;\n  }\n\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch) {\n    border-radius: 7px;\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch):after {\n    width: 5px;\n    height: 9px;\n    border: 2px solid var(--active-inner);\n    border-top: 0;\n    border-left: 0;\n    left: 7px;\n    top: 4px;\n    transform: rotate(var(--r, 20deg));\n  }\n  input[type=checkbox][_ngcontent-%COMP%]:not(.switch):checked {\n    --r: 43deg;\n  }\n  input[type=checkbox].switch[_ngcontent-%COMP%] {\n    width: 38px;\n    border-radius: 11px;\n  }\n  input[type=checkbox].switch[_ngcontent-%COMP%]:after {\n    left: 2px;\n    top: 2px;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    background: var(--ab, var(--border));\n    transform: translateX(var(--x, 0));\n  }\n  input[type=checkbox].switch[_ngcontent-%COMP%]:checked {\n    --ab: var(--active-inner);\n    --x: 17px;\n  }\n  input[type=checkbox].switch[_ngcontent-%COMP%]:disabled:not(:checked):after {\n    opacity: 0.6;\n  }\n\n  input[type=radio][_ngcontent-%COMP%] {\n    border-radius: 50%;\n  }\n  input[type=radio][_ngcontent-%COMP%]:after {\n    width: 19px;\n    height: 19px;\n    border-radius: 50%;\n    background: var(--active-inner);\n    opacity: 0;\n    transform: scale(var(--s, 0.7));\n  }\n  input[type=radio][_ngcontent-%COMP%]:checked {\n    --s: .5;\n  }\n}\n@media (max-width: 575px) {\n  form[_ngcontent-%COMP%] {\n    padding-bottom: 0px;\n    padding-top: 6px !important;\n  }\n\n  .search-bar[_ngcontent-%COMP%] {\n    margin-top: -7px !important;\n    max-height: 26px;\n  }\n  .search-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    max-height: 26px;\n  }\n\n  .modal-body[_ngcontent-%COMP%] {\n    font-size: smaller;\n  }\n  .modal-body[_ngcontent-%COMP%]   .installBtn[_ngcontent-%COMP%] {\n    font-size: medium;\n  }\n\n  #searchIcon[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFZQSx1QkFBQTtFQUdBLGdEQUFBO0VBQ0EsK0RBQUE7QUFWRjtBQUxFO0VBQ0UsY0FBQTtBQU9KO0FBTkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQVFOO0FBT0E7RUFDRSxXQUFBO0FBSkY7QUFNRTtFQUNFLHFCQUFBO0FBSko7QUFPRTtFQUNFLGlCQUFBO0FBTEo7QUFTQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVNBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQU5GO0FBU0E7RUFDRSxlQUFBO0FBTkY7QUFTQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQU5GO0FBdUJBO0VBQ0U7SUFDRSxjQUFBO0VBcEJGOztFQXVCQTtJQUNFLGVBQUE7SUFDQSxzQkFBQTtFQXBCRjs7RUF1QkE7SUFDRSxpQkFBQTtFQXBCRjtBQUNGO0FBdUJBO0VBQ0U7SUFDRSxjQUFBO0VBckJGOztFQXdCQTtJQUNFLGlCQUFBO0lBQ0Esc0JBQUE7RUFyQkY7O0VBd0JBO0lBQ0UsZUFBQTtFQXJCRjtBQUNGO0FBd0JBO0VBQ0U7SUFDRSxZQUFBO0VBdEJGOztFQXlCQTtJQUNFLGlCQUFBO0lBQ0Esc0JBQUE7RUF0QkY7O0VBeUJBO0lBQ0UsaUJBQUE7RUF0QkY7QUFDRjtBQTJCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQXpCRjtBQTRCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTZCQTtFQUNFLDJCQUFBO0FBMUJGO0FBNkJBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUExQkY7QUE2QkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUExQkY7QUE2QkE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTFCRjtBQTZCQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQTFCRjtBQTZCQTtFQUNFLGdCQUFBO0FBMUJGO0FBOEJBO0VBRUU7O0lBRUUsY0FBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSx3QkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtJQUNBLDBDQUFBO0lBQ0EsdUNBQUE7SUFDQSwrREFBQTtFQTVCRjtFQThCRTs7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0Esa0JBQUE7SUFDQSxtRkFBQTtFQTNCSjtFQThCRTs7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSx3Q0FBQTtFQTNCSjtFQThCRTs7SUFDRSxvQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQTNCSjtFQTZCSTs7SUFDRSwwQkFBQTtJQUNBLG1CQUFBO0VBMUJOO0VBNkJJOztJQUNFLG1CQUFBO0VBMUJOO0VBZ0NNOztJQUNFLHlCQUFBO0VBN0JSO0VBa0NFOztJQUNFLDhCQUFBO0VBL0JKO0VBa0NFOztJQUNFLFdBQUE7RUEvQko7RUFpQ0k7O0lBQ0Usb0JBQUE7RUE5Qk47RUFpQ0k7O0lBQ0UsTUFBQTtFQTlCTjtFQWtDRTs7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBL0JKOztFQW9DRTtJQUNFLGtCQUFBO0VBakNKO0VBbUNJO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxxQ0FBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxrQ0FBQTtFQWpDTjtFQW9DSTtJQUNFLFVBQUE7RUFsQ047RUFzQ0U7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUFwQ0o7RUFzQ0k7SUFDRSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxvQ0FBQTtJQUNBLGtDQUFBO0VBcENOO0VBdUNJO0lBQ0UseUJBQUE7SUFDQSxTQUFBO0VBckNOO0VBMENRO0lBQ0UsWUFBQTtFQXhDVjs7RUErQ0E7SUFDRSxrQkFBQTtFQTVDRjtFQThDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSwrQkFBQTtJQUNBLFVBQUE7SUFDQSwrQkFBQTtFQTVDSjtFQStDRTtJQUNFLE9BQUE7RUE3Q0o7QUFDRjtBQWlEQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSwyQkFBQTtFQS9DRjs7RUFrREE7SUFDRSwyQkFBQTtJQUNBLGdCQUFBO0VBL0NGO0VBaURFO0lBQ0UsZ0JBQUE7RUEvQ0o7O0VBbURBO0lBQ0Usa0JBQUE7RUFoREY7RUFrREU7SUFDRSxpQkFBQTtFQWhESjs7RUFvREE7SUFDRSxpQkFBQTtFQWpERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBjb2xvcjogZ3JheTtcbiAgYSwgYnV0dG9uIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAmOmhvdmVye1xuICAgICAgY29sb3I6ICMyYjJiMmI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG4gIC8vIGE6aG92ZXJ7XG4gIC8vICAgICBjb2xvcjogIzJiMmIyYjtcbiAgLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgLy8gfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDQwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZS1pbixcbiAgY29sb3IgNTAwbXMgZWFzZS1pbjtcbn1cblxuLm1vZGFsIHtcbiAgY29sb3I6IGdyYXk7XG5cbiAgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB9XG59XG5cbi5pbnN0YWxsQnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogM3B4IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLmluc3RhbGxCdG46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN3aXRjaCB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8vIC5uYXYtbGluayB7XG4vLyAgIHBhZGRpbmctdG9wOiAwO1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMDtcbi8vICAgZm9udC1zaXplOiB4LWxhcmdlO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuLy8gfVxuXG4vLyAubmF2LWxpbms6aG92ZXIge1xuLy8gICBjb2xvcjogIzJiMmIyYjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGhlaWdodDogMi41cmVtO1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICB9XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMxNnB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGhlaWdodDogMi4zcmVtO1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICB9XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDI3MHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGhlaWdodDogMi4wcmVtO1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICB9XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn1cblxuXG4vLyBDb2xvcnNcbi5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGIgO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxZDRmYSA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJyb3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYWFhNCA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE2IDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFjNzg0IDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGJiZDAgO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wdXJwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ4ZWU3IDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGE4MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkYmUxIDtcbiAgY29sb3I6IGRpbWdyYXk7XG59XG5cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNjAwIDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vLyBTZWFyY2hCYXJcbi5zZWFyY2gtYmFyIHtcbiAgbWFyZ2luLXRvcDogLTdweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWJhci1mb3JtIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uc2VhcmNoLWZhZGUge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5iYWNrLWFycm93IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFjay1hcnJvdy1mYWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLy8gTWF0ZXJpYWwgQnV0dG9uc1xuQHN1cHBvcnRzICgtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUpIG9yICgtbW96LWFwcGVhcmFuY2U6IG5vbmUpIHtcblxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddLFxuICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICAtLWFjdGl2ZTogZ3JheTtcbiAgICAtLWFjdGl2ZS1pbm5lcjogI2ZmZjtcbiAgICAtLWZvY3VzOiAycHggYmxhY2s7XG4gICAgLS1ib3JkZXI6IGdyYXk7XG4gICAgLS1ib3JkZXItaG92ZXI6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLWRpc2FibGVkOiAjRjZGOEZGO1xuICAgIC0tZGlzYWJsZWQtaW5uZXI6ICNFMUU2Rjk7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYywgdmFyKC0tYm9yZGVyKSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYiwgdmFyKC0tYmFja2dyb3VuZCkpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzLCBib3JkZXItY29sb3IgLjNzLCBib3gtc2hhZG93IC4ycztcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tZC10LCAuM3MpIHZhcigtLWQtdC1lLCBlYXNlKSwgb3BhY2l0eSB2YXIoLS1kLW8sIC4ycyk7XG4gICAgfVxuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgIC0tYjogdmFyKC0tYWN0aXZlKTtcbiAgICAgIC0tYmM6IHZhcigtLWFjdGl2ZSk7XG4gICAgICAtLWQtbzogLjNzO1xuICAgICAgLS1kLXQ6IC42cztcbiAgICAgIC0tZC10LWU6IGN1YmljLWJlemllciguMiwgLjg1LCAuMzIsIDEuMik7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICAtLWI6IHZhcigtLWRpc2FibGVkKTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAuOTtcblxuICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgLS1iOiB2YXIoLS1kaXNhYmxlZC1pbm5lcik7XG4gICAgICAgIC0tYmM6IHZhcigtLWJvcmRlcik7XG4gICAgICB9XG5cbiAgICAgICYrbGFiZWwge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgJjpub3QoOmNoZWNrZWQpIHtcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgLS1iYzogdmFyKC0tYm9yZGVyLWhvdmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tZm9jdXMpO1xuICAgIH1cblxuICAgICY6bm90KC5zd2l0Y2gpIHtcbiAgICAgIHdpZHRoOiAyMXB4O1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tbywgMCk7XG4gICAgICB9XG5cbiAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIC0tbzogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmK2xhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgJjpub3QoLnN3aXRjaCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1pbm5lcik7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgIHRvcDogNHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSh2YXIoLS1yLCAyMGRlZykpO1xuICAgICAgfVxuXG4gICAgICAmOmNoZWNrZWQge1xuICAgICAgICAtLXI6IDQzZGVnO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuc3dpdGNoIHtcbiAgICAgIHdpZHRoOiAzOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWIsIHZhcigtLWJvcmRlcikpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0teCwgMCkpO1xuICAgICAgfVxuXG4gICAgICAmOmNoZWNrZWQge1xuICAgICAgICAtLWFiOiB2YXIoLS1hY3RpdmUtaW5uZXIpO1xuICAgICAgICAtLXg6IDE3cHg7XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAmOm5vdCg6Y2hlY2tlZCkge1xuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogLjY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgJjphZnRlciB7XG4gICAgICB3aWR0aDogMTlweDtcbiAgICAgIGhlaWdodDogMTlweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1pbm5lcik7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1zLCAuNykpO1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAtLXM6IC41O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgZm9ybSB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2VhcmNoLWJhciB7XG4gICAgbWFyZ2luLXRvcDogLTdweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDI2cHg7XG5cbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIG1heC1oZWlnaHQ6IDI2cHg7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcblxuICAgIC5pbnN0YWxsQnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIH1cbiAgfVxuXG4gICNzZWFyY2hJY29uIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _shared_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"] }, { type: _shared_pwa_service__WEBPACK_IMPORTED_MODULE_3__["PwaService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['menu']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemon-list/pokemon-list.component */ "aBNB");
/* harmony import */ var _pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon-detail/pokemon-detail.component */ "de+6");






const routes = [
    {
        path: '', redirectTo: '/pokedex', pathMatch: 'full'
    },
    {
        path: 'pokedex', component: _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__["PokemonListComponent"]
    },
    { path: 'pokedex/:region', component: _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__["PokemonListComponent"] },
    { path: 'pokemon/:id', component: _pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_3__["PokemonDetailComponent"] },
    { path: '**', redirectTo: '/pokedex' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yODE":
/*!*********************************************************!*\
  !*** ./src/app/shared/french-national-pokemon.model.ts ***!
  \*********************************************************/
/*! exports provided: FrenchNationalPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrenchNationalPokemon", function() { return FrenchNationalPokemon; });
class FrenchNationalPokemon {
    constructor(frenchName, nationalId, galarId, isolarmureId, couronneigeId) {
        this.frenchName = frenchName;
        this.nationalId = nationalId;
        this.galarId = galarId;
        this.isolarmureId = isolarmureId;
        this.couronneigeId = couronneigeId;
    }
}
// export interface Root {
//   "National Dex": number
//   "Pokemon Name": string
//   "French Name": string
//   Generation: number
//   Type: string
//   "Kanto Dex RBYFRLG)": number
//   "Kanto Dex(LGPE)": number
//   "New Dex(GSC)": number
//   "Johto Dex(HGSS)": number
//   "Hoenn Dex(RSE)": string
//   "Hoenn Dex(ORAS)": string
//   "Sinnoh Dex(DPBDSP)": string
//   "Sinnoh Dex(Pt)": string
//   "Unova Dex(BW)": string
//   "Unova Dex(B2W2)": string
//   "Central Kalos Dex(XY)": number
//   "Coastal Kalos Dex(XY)": string
//   "Mount Kalos Dex(XY)": string
//   "Alola Dex(SM)": string
//   "Melemele Dex(SM)": string
//   "Akala Dex(SM)": string
//   "Ula'ula Dex(SM)": string
//   "Poni Dex(SM)": string
//   "Alola Dex(USUM)": string
//   "Melemele Dex(USUM)": string
//   "Akala Dex(USUM)": string
//   "Ula'ula Dex(USUM)": string
//   "Poni Dex(USUM)": string
//   "Galar Dex(SwSh)": string
//   "Isle of Armor Dex(SwSh)": number
//   "Crown Tund Dex(SwSh)": string
//   "Hisui Dex(LA)": string
//   "Paldea Dex(SV)": string
//   "Kitakami Dex (SV)": string
//   "Blueberry Dex (SV)": number
//   "Type I": string
//   "Type II": string
//   "Evolution Method": string
// }


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map