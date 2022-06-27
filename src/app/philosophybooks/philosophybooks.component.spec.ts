import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosophybooksComponent } from './philosophybooks.component';

describe('PhilosophybooksComponent', () => {
  let component: PhilosophybooksComponent;
  let fixture: ComponentFixture<PhilosophybooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilosophybooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilosophybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
