import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  inputValue: string = ''; // Holds the input field value

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