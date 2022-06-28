import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerSearchCockpitComponent } from './trading-partner-search-cockpit.component';

describe('TradingPartnerSearchCockpitComponent', () => {
  let component: TradingPartnerSearchCockpitComponent;
  let fixture: ComponentFixture<TradingPartnerSearchCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPartnerSearchCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingPartnerSearchCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
