import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerDetailComponent } from './trading-partner-detail.component';

describe('TradingPartnerDetailComponent', () => {
  let component: TradingPartnerDetailComponent;
  let fixture: ComponentFixture<TradingPartnerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPartnerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingPartnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
