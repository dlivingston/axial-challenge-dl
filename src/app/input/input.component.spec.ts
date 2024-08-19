import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InputComponent, // Import the standalone component
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule // Add BrowserAnimationsModule to imports
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable the convert button when form is valid', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = '250k';
    inputElement.dispatchEvent(new Event('input'));
    component.financialForm.controls['financialInput'].markAsTouched();
    component.financialForm.controls['financialInput'].markAsDirty();
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.disabled).toBeFalse();
  });
});
