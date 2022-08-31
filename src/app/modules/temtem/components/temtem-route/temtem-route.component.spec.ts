import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemRouteComponent } from './temtem-route.component';

describe('TemtemRouteComponent', () => {
  let component: TemtemRouteComponent;
  let fixture: ComponentFixture<TemtemRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
