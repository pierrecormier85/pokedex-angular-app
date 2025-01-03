import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsDetailComponent } from './extensions-detail.component';

describe('ExtensionsDetailComponent', () => {
  let component: ExtensionsDetailComponent;
  let fixture: ComponentFixture<ExtensionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
