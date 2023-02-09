import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTemtemDetailsComponent } from './single-temtem-details.component';

describe('SingleTemtemDetailsComponent', () => {
  let component: SingleTemtemDetailsComponent;
  let fixture: ComponentFixture<SingleTemtemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTemtemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTemtemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
