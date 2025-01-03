import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemiExtensionTableauResumeComponent } from './demi-extension-tableau-resume.component';

describe('DemiExtensionTableauResumeComponent', () => {
  let component: DemiExtensionTableauResumeComponent;
  let fixture: ComponentFixture<DemiExtensionTableauResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemiExtensionTableauResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemiExtensionTableauResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
