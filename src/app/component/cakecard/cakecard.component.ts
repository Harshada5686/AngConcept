import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-cakecard',
  standalone: true,
  imports: [],
  templateUrl: './cakecard.component.html',
  styleUrl: './cakecard.component.scss'
})
export class CakecardComponent {
  @Input() ME:any;
}
