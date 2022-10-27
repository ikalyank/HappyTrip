import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforflightsComponent } from './searchforflights.component';

describe('SearchforflightsComponent', () => {
  let component: SearchforflightsComponent;
  let fixture: ComponentFixture<SearchforflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchforflightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchforflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
