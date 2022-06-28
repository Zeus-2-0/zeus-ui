import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerAddComponent } from './trading-partner-add.component';

describe('TradingPartnerAddComponent', () => {
  let component: TradingPartnerAddComponent;
  let fixture: ComponentFixture<TradingPartnerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPartnerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingPartnerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
