import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExtensionsListComponent} from './extensions-list/extensions-list.component';
import {ExtensionsDetailComponent} from './extensions-detail/extensions-detail.component';



@NgModule({
  declarations: [
    ExtensionsListComponent,
    ExtensionsDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonTcgpModule { }
