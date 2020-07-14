import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBootstrapComponent } from './angular-bootstrap.component';

describe('AngularBootstrapComponent', () => {
  let component: AngularBootstrapComponent;
  let fixture: ComponentFixture<AngularBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
