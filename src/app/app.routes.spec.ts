import { TestBed } from '@angular/core/testing';
import { routes } from './app.routes';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

describe('App Routes', () => {
  it('should have a route for "" that redirects to "input"', () => {
    const route = routes.find(r => r.path === '');
    expect(route).toBeDefined();
    expect(route?.redirectTo).toBe('input');
  });

  it('should have a route for "input" that uses InputComponent', () => {
    const route = routes.find(r => r.path === 'input');
    expect(route).toBeDefined();
    expect(route?.component).toBe(InputComponent);
  });

  it('should have a route for "output" that uses OutputComponent', () => {
    const route = routes.find(r => r.path === 'output');
    expect(route).toBeDefined();
    expect(route?.component).toBe(OutputComponent);
  });
});
