import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsbooksComponent } from './kidsbooks.component';

describe('KidsbooksComponent', () => {
  let component: KidsbooksComponent;
  let fixture: ComponentFixture<KidsbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
