import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsItemComponent } from './extensions-item.component';

describe('ExtensionsItemComponent', () => {
  let component: ExtensionsItemComponent;
  let fixture: ComponentFixture<ExtensionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
