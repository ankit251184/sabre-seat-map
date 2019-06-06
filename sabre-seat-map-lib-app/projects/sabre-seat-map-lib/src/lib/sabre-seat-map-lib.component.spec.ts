import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabreSeatMapLibComponent } from './sabre-seat-map-lib.component';

describe('SabreSeatMapLibComponent', () => {
  let component: SabreSeatMapLibComponent;
  let fixture: ComponentFixture<SabreSeatMapLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabreSeatMapLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabreSeatMapLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
