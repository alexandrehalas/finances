import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `
    <div class="text-danger">
      {{ errorMessage }}
    </div>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input() fControl: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  public get errorMessage(): string | null {
    if (this.mustShowErrorMessage()) {
      return this.getErrorMessage();
    }
  }

  private mustShowErrorMessage(): boolean {
    return this.fControl != null && this.fControl.invalid && this.fControl.touched;
  }

  private getErrorMessage(): string | null {
    if (this.fControl.errors.required) {
      return 'Campo obrigatório';
    }

    if (this.fControl.errors.minlength) {
      const requiredLength = this.fControl.errors.minlength.requiredLength;
      return `O campo deve ter no mínimo ${requiredLength} caracteres`;
    }

    if (this.fControl.errors.email) {
      return 'O formato do e-mail está incorreto';
    }

    return null;
  }

}
