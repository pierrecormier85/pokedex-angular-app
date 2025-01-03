import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsListComponent } from './extensions-list.component';

describe('ExtensionsListComponent', () => {
  let component: ExtensionsListComponent;
  let fixture: ComponentFixture<ExtensionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
