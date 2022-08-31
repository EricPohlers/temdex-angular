import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemComponent } from './temtem.component';

describe('TemtemComponent', () => {
  let component: TemtemComponent;
  let fixture: ComponentFixture<TemtemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
