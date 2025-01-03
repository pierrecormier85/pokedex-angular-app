import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CarteDetail} from '../../shared/carte-detail.model';

@Component({
  selector: 'app-carte-tcgp-item',
  templateUrl: './carte-tcgp-item.component.html',
  styleUrl: './carte-tcgp-item.component.scss'
})
export class CarteTcgpItemComponent {
  @Input() carte: CarteDetail;
  @Input() extensionCode: string;
  @Input() cartesTrouvees: string[];

  @Output() cartesTrouveesEvent = new EventEmitter<string[]>();

  isCarteTrouvee() {
    return this.cartesTrouvees.indexOf(this.carte.number) > -1;
  }

  changeCarteTrouvee() {

    if (this.cartesTrouvees.indexOf(this.carte.number) > -1) {
      const index = this.cartesTrouvees.indexOf(this.carte.number);
      this.cartesTrouvees.splice(index, 1);
    } else {
      this.cartesTrouvees.push(this.carte.number);
    }

    localStorage.removeItem(this.extensionCode);
    localStorage.setItem(this.extensionCode, JSON.stringify(this.cartesTrouvees));

    this.cartesTrouveesEvent.emit(this.cartesTrouvees);
  }
}
