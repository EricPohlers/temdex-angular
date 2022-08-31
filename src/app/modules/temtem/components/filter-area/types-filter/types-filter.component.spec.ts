import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesFilterComponent } from './types-filter.component';

describe('TypesFilterComponent', () => {
  let component: TypesFilterComponent;
  let fixture: ComponentFixture<TypesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
