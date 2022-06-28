import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSearchCockpitComponent } from './account-search-cockpit.component';

describe('AccountSearchCockpitComponent', () => {
  let component: AccountSearchCockpitComponent;
  let fixture: ComponentFixture<AccountSearchCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSearchCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSearchCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
