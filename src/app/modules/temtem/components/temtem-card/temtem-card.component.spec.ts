import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemCardComponent } from './temtem-card.component';

describe('TemtemCardComponent', () => {
  let component: TemtemCardComponent;
  let fixture: ComponentFixture<TemtemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
