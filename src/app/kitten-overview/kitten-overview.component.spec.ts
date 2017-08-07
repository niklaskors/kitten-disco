import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenOverviewComponent } from './kitten-overview.component';

describe('KittenOverviewComponent', () => {
  let component: KittenOverviewComponent;
  let fixture: ComponentFixture<KittenOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
