import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px' // Set the width of the dialog
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Saved input value:', result); // Print the input value after dialog close
      } else {
        console.log('Dialog closed without saving');
      }
    });
  }
}