import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxerTableComponent } from './boxer-table.component';

describe('BoxerTableComponent', () => {
  let component: BoxerTableComponent;
  let fixture: ComponentFixture<BoxerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxerTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
