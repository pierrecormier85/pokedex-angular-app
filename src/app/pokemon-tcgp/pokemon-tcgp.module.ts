import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExtensionsListComponent} from './extensions-list/extensions-list.component';
import {ExtensionsDetailComponent} from './extensions-detail/extensions-detail.component';
import {ExtensionsItemComponent} from './extensions-list/extensions-item/extensions-item.component';
import {CarteTcgpItemComponent} from './extensions-detail/carte-tcgp-item/carte-tcgp-item.component';
import {MatTableModule} from '@angular/material/table';
import {
  DemiExtensionTableauResumeComponent
} from './extensions-detail/extension-tableau-resume/demi-extension-tableau-resume/demi-extension-tableau-resume.component';
import {
  ExtensionCompleteTableauResumeComponent
} from './extensions-detail/extension-tableau-resume/extension-complete-tableau-resume/extension-complete-tableau-resume.component';
import {
  ExtensionPromoTableauResumeComponent
} from './extensions-detail/extension-tableau-resume/extension-promo-tableau-resume/extension-promo-tableau-resume.component';


@NgModule({
  declarations: [
    ExtensionsListComponent,
    ExtensionsDetailComponent,
    ExtensionsItemComponent,
    CarteTcgpItemComponent,
    DemiExtensionTableauResumeComponent,
    ExtensionCompleteTableauResumeComponent,
    ExtensionPromoTableauResumeComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class PokemonTcgpModule {
}
