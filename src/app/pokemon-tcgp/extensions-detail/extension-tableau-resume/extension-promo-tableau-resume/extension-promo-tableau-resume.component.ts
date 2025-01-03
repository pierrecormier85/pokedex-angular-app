import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CartesTrouveesDetail} from '../../../shared/cartes-trouvees-detail.model';

@Component({
    selector: 'app-extension-promo-tableau-resume',
    templateUrl: './extension-promo-tableau-resume.component.html',
    styleUrl: './extension-promo-tableau-resume.component.scss'
})
export class ExtensionPromoTableauResumeComponent implements OnChanges {
    @Input() cartesTrouveesDetail: CartesTrouveesDetail[];

    displayedColumns: string[] = ['pack', 'promo'];

    promoDetail: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        if (changes.cartesTrouveesDetail) {
            let nombreTrouvee = 0;
            let nombreTotale = 0;

            changes.cartesTrouveesDetail.currentValue.forEach(ctd => ctd.raretes.forEach(rd => {
                nombreTrouvee += rd.nombreTrouvee;
                nombreTotale += rd.nombreTotale;
            }));

            const tmp = [];
            tmp.push(`${nombreTrouvee} / ${nombreTotale}`);

            this.promoDetail = tmp;
        }
    }
}
