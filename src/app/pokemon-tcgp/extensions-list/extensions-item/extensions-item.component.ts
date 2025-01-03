import {Component, Input} from '@angular/core';
import {Extension} from '../../shared/extensions.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-extensions-item',
  templateUrl: './extensions-item.component.html',
  styleUrl: './extensions-item.component.scss'
})
export class ExtensionsItemComponent {
  @Input() extension: Extension;

  constructor(private router: Router) {
  }

  afficherDetailsExtension() {
    this.router.navigate(['/tcgp', this.extension.code]);
  }
}
