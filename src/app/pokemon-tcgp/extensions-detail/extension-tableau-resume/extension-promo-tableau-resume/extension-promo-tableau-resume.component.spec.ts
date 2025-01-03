import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionPromoTableauResumeComponent } from './extension-promo-tableau-resume.component';

describe('ExtensionPromoTableauResumeComponent', () => {
  let component: ExtensionPromoTableauResumeComponent;
  let fixture: ComponentFixture<ExtensionPromoTableauResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionPromoTableauResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionPromoTableauResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
