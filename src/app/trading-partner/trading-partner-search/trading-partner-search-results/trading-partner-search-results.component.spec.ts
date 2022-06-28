import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerSearchResultsComponent } from './trading-partner-search-results.component';

describe('TradingPartnerSearchResultsComponent', () => {
  let component: TradingPartnerSearchResultsComponent;
  let fixture: ComponentFixture<TradingPartnerSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPartnerSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingPartnerSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
