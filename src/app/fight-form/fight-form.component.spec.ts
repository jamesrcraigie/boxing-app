import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightFormComponent } from './fight-form.component';

describe('FightFormComponent', () => {
  let component: FightFormComponent;
  let fixture: ComponentFixture<FightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
