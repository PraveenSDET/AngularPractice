import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionalbooksComponent } from './fictionalbooks.component';

describe('FictionalbooksComponent', () => {
  let component: FictionalbooksComponent;
  let fixture: ComponentFixture<FictionalbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FictionalbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FictionalbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
