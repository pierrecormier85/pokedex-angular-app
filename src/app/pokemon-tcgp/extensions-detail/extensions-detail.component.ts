import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExtensionDetail} from '../shared/extension-detail.model';
import {HttpClient} from '@angular/common/http';
import {of, zip} from 'rxjs';
import {concatMap, groupBy, mergeMap, toArray} from 'rxjs/operators';
import {CarteDetail} from '../shared/carte-detail.model';
import {CartesTrouveesRareteDetail} from '../shared/cartes-trouvees-rarete-detail.model';
import {CartesTrouveesDetail} from '../shared/cartes-trouvees-detail.model';

@Component({
  selector: 'app-extensions-detail',
  templateUrl: './extensions-detail.component.html',
  styleUrl: './extensions-detail.component.scss'
})
export class ExtensionsDetailComponent implements OnInit {
  extensionCode;
  extensionDetail: ExtensionDetail;
  cartesTrouvees: string[];
  cartesTrouveesDetail: CartesTrouveesDetail[] = [];

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.extensionCode = params['extension'];

        if (localStorage.getItem(this.extensionCode) == null) {
          this.cartesTrouvees = [];
          this.cartesTrouvees.push('1', '106', '200');
        } else {
          this.cartesTrouvees = JSON.parse(localStorage.getItem(this.extensionCode));
        }

        this.http.get<ExtensionDetail>(`assets/tcgp/data/${this.extensionCode}.json`).subscribe(
          (response) => {
            this.extensionDetail = response;
            this.calculerNombreCarte();
          }
        );
      }
    );
  }

  mettreAJourCarteTrouvees(element) {
    this.cartesTrouvees = element;
    this.cartesTrouveesDetail = [];
    this.calculerNombreCarte();
  }

  private calculerNombreCarte() {
    const cartes = this.extensionDetail.cards;

    this.groupBySousSeries(cartes).subscribe((grouped: any) => {
      const sousSeries = grouped[0];
      const cartesSousSeries: CarteDetail[] = grouped[1];
      const raretes: CartesTrouveesRareteDetail[] = [];
      this.groupByRarete(cartesSousSeries).subscribe((grouped: any) => {
        const rarete = grouped[0];
        const cartesRarete: CarteDetail[] = grouped[1];
        let nombreTrouvee = 0;
        cartesRarete.forEach(carte => {
          if (this.cartesTrouvees.indexOf(carte.number) > -1) {
            nombreTrouvee++;
          }
        });
        raretes.push({
          rarete: rarete,
          nombreTotale: cartesRarete.length,
          nombreTrouvee: nombreTrouvee
        });
      });
      this.cartesTrouveesDetail.push({
        sousSeries: sousSeries,
        raretes: raretes
      });
    });
  }

  private groupBySousSeries(cartes: CarteDetail[]) {
    return of(cartes).pipe(
      concatMap(res => res),
      groupBy(item => item.subseries),
      mergeMap(group => zip(
        of(group.key), group.pipe(toArray())
      )));
  }

  private groupByRarete(cartesSousSeries: CarteDetail[]) {
    return of(cartesSousSeries).pipe(
      concatMap(res => res),
      groupBy(item => item.rarity),
      mergeMap(group => zip(
        of(group.key), group.pipe(toArray())
      )));
  }
}
