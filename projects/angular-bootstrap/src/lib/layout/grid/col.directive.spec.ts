import { ColDirective } from './col.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
      <bs-col size="12"></bs-col>
      <bs-col sizeSm="12"></bs-col>
      <bs-col sizeMd="10"></bs-col>
      <bs-col sizeLg="6"></bs-col>
      <bs-col sizeXl="4"></bs-col>
      <bs-col sizeXxl="3"></bs-col>
      <bs-col size="12" sizeSm="6" sizeXxl="2"></bs-col>
    `
})
class TestColDirectiveComponent {}

describe('ColDirective', () => {
  let cols: DebugElement[];

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [ColDirective, TestColDirectiveComponent]
    })
    .createComponent(TestColDirectiveComponent);

    fixture.detectChanges();

    cols = fixture.debugElement.queryAll(By.directive(ColDirective));
  });

  it('should create an instance', () => {
    const directive = new ColDirective();
    expect(directive).toBeTruthy();
  });

  it('first element should have a class .col-12', () => {
    const compiled: HTMLElement = cols[0].nativeElement;
    expect(compiled.classList).toContain('col-12');
  });

  it('second element should have a class .col-sm-12', () => {
    const compiled: HTMLElement = cols[1].nativeElement;
    expect(compiled.classList).toContain('col-sm-12');
  });

  it('third element should have a class .col-md-10', () => {
    const compiled: HTMLElement = cols[2].nativeElement;
    expect(compiled.classList).toContain('col-md-10');
  });

  it('fourth element should have a class .col-lg-6', () => {
    const compiled: HTMLElement = cols[3].nativeElement;
    expect(compiled.classList).toContain('col-lg-6');
  });

  it('fifth element should have a class .col-xl-4', () => {
    const compiled: HTMLElement = cols[4].nativeElement;
    expect(compiled.classList).toContain('col-xl-4');
  });

  it('seventh element should have a class .col-xxl-3', () => {
    const compiled: HTMLElement = cols[5].nativeElement;
    expect(compiled.classList).toContain('col-xxl-3');
  });

  it('mixed element should have classes .col-12 .col-sm-6 .col-xxl-2', () => {
    const compiled: HTMLElement = cols[6].nativeElement;
    const classListArray = Array.from(compiled.classList);
    expect(classListArray).toEqual(jasmine.arrayContaining(['col-12', 'col-sm-6', 'col-xxl-2']));
  });
});
