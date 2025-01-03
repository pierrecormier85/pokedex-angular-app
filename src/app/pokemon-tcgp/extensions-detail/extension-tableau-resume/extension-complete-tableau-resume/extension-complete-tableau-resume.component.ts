import {Component, Input} from '@angular/core';
import {CartesTrouveesDetail} from '../../../shared/cartes-trouvees-detail.model';
import {CartesTrouveesRareteDetail} from '../../../shared/cartes-trouvees-rarete-detail.model';

@Component({
  selector: 'app-extension-complete-tableau-resume',
  templateUrl: './extension-complete-tableau-resume.component.html',
  styleUrl: './extension-complete-tableau-resume.component.scss'
})
export class ExtensionCompleteTableauResumeComponent {
  @Input() cartesTrouveesDetail: CartesTrouveesDetail[];

  listeRarete: string[] = ['1d', '2d', '3d', '4d', '1s', '2s', '3s', '1c'];
  displayedColumns: string[] = ['pack', '1d', '2d', '3d', '4d', '1s', '2s', '3s', '1c', 'total'];

  getNomPack(ctd: CartesTrouveesDetail) {
    let nomPack;

    if (ctd.sousSeries != null) {
      nomPack = ctd.sousSeries;
    } else {
      nomPack = 'Tous pack';
    }

    return nomPack;
  }

  getRareteDetail(ctd: CartesTrouveesDetail, rarete: string) {
    const rareteDetail: CartesTrouveesRareteDetail = ctd.raretes.find(rd => rd.rarete === rarete);
    let texteAfficher;

    if (rareteDetail == null) {
      texteAfficher = '0 / 0';
    } else {
      texteAfficher = `${rareteDetail.nombreTrouvee} / ${rareteDetail.nombreTotale}`;
    }

    return texteAfficher;
  }

  getTotal(ctd: CartesTrouveesDetail) {
    let nombreTrouvee = 0;
    let nombreTotale = 0;

    ctd.raretes.forEach(rd => {
      nombreTrouvee += rd.nombreTrouvee;
      nombreTotale += rd.nombreTotale;
    });

    return `${nombreTrouvee} / ${nombreTotale}`;
  }
}
