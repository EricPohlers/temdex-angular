import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTemtemImageComponent } from './single-temtem-image.component';

describe('SingleTemtemImageComponent', () => {
  let component: SingleTemtemImageComponent;
  let fixture: ComponentFixture<SingleTemtemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTemtemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTemtemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
