import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionCompleteTableauResumeComponent } from './extension-complete-tableau-resume.component';

describe('ExtensionCompleteTableauResumeComponent', () => {
  let component: ExtensionCompleteTableauResumeComponent;
  let fixture: ComponentFixture<ExtensionCompleteTableauResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionCompleteTableauResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionCompleteTableauResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
