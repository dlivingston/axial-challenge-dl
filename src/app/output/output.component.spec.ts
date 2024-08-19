import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { OutputComponent } from './output.component';
import { By } from '@angular/platform-browser';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        OutputComponent, // Import the standalone component
        MatButtonModule, // Import MatButtonModule for the button
        BrowserAnimationsModule, // Add BrowserAnimationsModule to imports
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ number: '123456.789' }) // Mock the params observable
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the converted number', () => {
    const numberElement = fixture.nativeElement.querySelector('p');
    expect(numberElement.textContent).toContain('123,456.789');
  });

  it('should call goBack method when button is clicked', () => {
    spyOn(component, 'goBack');
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.click();
    fixture.detectChanges();

    expect(component.goBack).toHaveBeenCalled();
  });
});
