import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSnapshotComponent } from './career-snapshot.component';

describe('CareerSnapshotComponent', () => {
  let component: CareerSnapshotComponent;
  let fixture: ComponentFixture<CareerSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerSnapshotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
