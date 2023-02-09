import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTemtemDescriptionComponent } from './single-temtem-description.component';

describe('SingleTemtemDescriptionComponent', () => {
  let component: SingleTemtemDescriptionComponent;
  let fixture: ComponentFixture<SingleTemtemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTemtemDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTemtemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
