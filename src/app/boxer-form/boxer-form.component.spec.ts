import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxerFormComponent } from './boxer-form.component';

describe('BoxerFormComponent', () => {
  let component: BoxerFormComponent;
  let fixture: ComponentFixture<BoxerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
