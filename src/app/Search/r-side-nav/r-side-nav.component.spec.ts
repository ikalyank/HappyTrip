import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSideNavComponent } from './r-side-nav.component';

describe('RSideNavComponent', () => {
  let component: RSideNavComponent;
  let fixture: ComponentFixture<RSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
