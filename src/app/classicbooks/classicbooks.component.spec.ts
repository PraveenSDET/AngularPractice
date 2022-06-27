import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicbooksComponent } from './classicbooks.component';

describe('ClassicbooksComponent', () => {
  let component: ClassicbooksComponent;
  let fixture: ComponentFixture<ClassicbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
