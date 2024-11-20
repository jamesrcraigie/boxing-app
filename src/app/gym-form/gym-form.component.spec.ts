import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymFormComponent } from './gym-form.component';

describe('GymFormComponent', () => {
  let component: GymFormComponent;
  let fixture: ComponentFixture<GymFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
