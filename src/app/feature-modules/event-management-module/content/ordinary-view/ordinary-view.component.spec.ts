import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryViewComponent } from './ordinary-view.component';

describe('OrdinaryViewComponent', () => {
  let component: OrdinaryViewComponent;
  let fixture: ComponentFixture<OrdinaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
