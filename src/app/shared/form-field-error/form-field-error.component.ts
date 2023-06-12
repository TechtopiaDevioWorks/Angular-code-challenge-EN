import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.css'],
})
export class FormFieldErrorComponent {
  @Input() errorTitle: string | null = null;
  @Input() errorMessage: string | null = null;
  constructor() {}
}
