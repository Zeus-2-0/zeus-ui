import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSearchResultsComponent } from './account-search-results.component';

describe('AccountSearchResultsComponent', () => {
  let component: AccountSearchResultsComponent;
  let fixture: ComponentFixture<AccountSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
