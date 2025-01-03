import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteTcgpItemComponent } from './carte-tcgp-item.component';

describe('CarteTcgpItemComponent', () => {
  let component: CarteTcgpItemComponent;
  let fixture: ComponentFixture<CarteTcgpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteTcgpItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteTcgpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
