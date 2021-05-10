import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombateComponent } from './combate.component';

describe('CombateComponent', () => {
  let component: CombateComponent;
  let fixture: ComponentFixture<CombateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
