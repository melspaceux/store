import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareProductCard } from './square-product-card';

describe('SquareProductCard', () => {
  let component: SquareProductCard;
  let fixture: ComponentFixture<SquareProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareProductCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SquareProductCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
