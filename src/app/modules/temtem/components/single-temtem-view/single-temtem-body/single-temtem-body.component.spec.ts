import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTemtemBodyComponent } from './single-temtem-body.component';

describe('SingleTemtemBodyComponent', () => {
  let component: SingleTemtemBodyComponent;
  let fixture: ComponentFixture<SingleTemtemBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTemtemBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTemtemBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
