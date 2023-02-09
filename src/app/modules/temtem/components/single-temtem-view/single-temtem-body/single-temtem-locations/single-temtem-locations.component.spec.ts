import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTemtemLocationsComponent } from './single-temtem-locations.component';

describe('SingleTemtemLocationsComponent', () => {
  let component: SingleTemtemLocationsComponent;
  let fixture: ComponentFixture<SingleTemtemLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTemtemLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTemtemLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
