import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalbooksComponent } from './historicalbooks.component';

describe('HistoricalbooksComponent', () => {
  let component: HistoricalbooksComponent;
  let fixture: ComponentFixture<HistoricalbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
