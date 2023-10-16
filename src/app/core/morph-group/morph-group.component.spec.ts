import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphGroupComponent } from './morph-group.component';

describe('MorphGroupComponent', () => {
  let component: MorphGroupComponent;
  let fixture: ComponentFixture<MorphGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorphGroupComponent]
    });
    fixture = TestBed.createComponent(MorphGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
