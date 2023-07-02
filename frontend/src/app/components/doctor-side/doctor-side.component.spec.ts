import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSideComponent } from './doctor-side.component';

describe('DoctorSideComponent', () => {
  let component: DoctorSideComponent;
  let fixture: ComponentFixture<DoctorSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorSideComponent]
    });
    fixture = TestBed.createComponent(DoctorSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
