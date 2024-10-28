import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollerComponent } from './ngx-virtual-scroller.component';

export interface VirtualScrollerDefaultOptions {
	checkResizeInterval: number
	modifyOverflowStyleOfParentScroll: boolean,
	resizeBypassRefreshThreshold: number,
	scrollAnimationTime: number;
	scrollDebounceTime: number;
	scrollThrottlingTime: number;
	scrollbarHeight?: number;
	scrollbarWidth?: number;
	stripedTable: boolean
}

export function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY(): VirtualScrollerDefaultOptions {
	return {
		checkResizeInterval: 1000,
		modifyOverflowStyleOfParentScroll: true,
		resizeBypassRefreshThreshold: 5,
		scrollAnimationTime: 750,
		scrollDebounceTime: 0,
		scrollThrottlingTime: 0,
		stripedTable: false
	};
}

@NgModule({
  declarations: [
    VirtualScrollerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VirtualScrollerComponent
  ],
  providers: [
		{
			provide: 'virtual-scroller-default-options',
			useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
		}
	]
})
export class VirtualScrollerModule { }
