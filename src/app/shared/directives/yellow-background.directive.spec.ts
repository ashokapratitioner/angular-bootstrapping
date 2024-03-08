import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { YellowBackgroundDirective } from './yellow-background.directive';

@Component({
  template: '<div appYellowBackground></div>',
})
class TestComponent {}

describe('YellowBackgroundDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, YellowBackgroundDirective],
    });
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const div = fixture.nativeElement.querySelector('div');
    expect(div).toHaveClass('yellow-background');
  });
});
