import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  financialForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.financialForm = this.fb.group({
      financialInput: ['', [Validators.required, this.financialValidator]]
    });
  }

  financialValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    const valid = /^(\d+(\.\d+)?|\.\d+)[kKmMbBtT]?$/.test(value);
    return valid ? null : { invalidFinancialInput: true };
  }

  convert() {
    if (this.financialForm.valid) {
      const value = this.financialForm.get('financialInput')?.value;
      this.router.navigate(['/output', { number: this.convertToNumber(value) }]);
    }
  }

  convertToNumber(input: string) {
    const suffix = input.slice(-1).toLowerCase();
    const number = parseFloat(input.slice(0, -1));

    switch (suffix) {
      case 'k':
        return number * 1e3;
      case 'm':
        return number * 1e6;
      case 'b':
        return number * 1e9;
      case 't':
        return number * 1e12;
      default:
        return parseFloat(input);
    }
  }
}
