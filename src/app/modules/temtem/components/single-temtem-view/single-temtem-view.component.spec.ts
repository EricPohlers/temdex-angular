import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTemtemViewComponent } from './single-temtem-view.component';

describe('SingleTemtemViewComponent', () => {
  let component: SingleTemtemViewComponent;
  let fixture: ComponentFixture<SingleTemtemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTemtemViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTemtemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
