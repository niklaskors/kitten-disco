import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenBlockComponent } from './kitten-block.component';

describe('KittenBlockComponent', () => {
  let component: KittenBlockComponent;
  let fixture: ComponentFixture<KittenBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
