import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTemtemEvolutionComponent } from './single-temtem-evolution.component';

describe('SingleTemtemEvolutionComponent', () => {
  let component: SingleTemtemEvolutionComponent;
  let fixture: ComponentFixture<SingleTemtemEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTemtemEvolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTemtemEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
