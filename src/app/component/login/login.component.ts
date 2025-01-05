import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
// import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,FormsModule, MatIconModule,MatSelectModule, MatRadioModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  inputValue: string = ''; // Holds the input field value
  readonly hideRequiredControl = new FormControl(false);
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  readonly options = inject(FormBuilder).group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>
  ) {}

  onSave(): void {
    console.log('Input value:', this.inputValue); // Log the input value
    this.dialogRef.close(this.inputValue); // Close the dialog and return the input value
  }

  onCancel(): void {
    this.dialogRef.close(); // Close without returning any value
  }
}