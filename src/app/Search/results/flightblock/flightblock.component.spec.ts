import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightblockComponent } from './flightblock.component';

describe('FlightblockComponent', () => {
  let component: FlightblockComponent;
  let fixture: ComponentFixture<FlightblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
