import { Component } from '@angular/core';
import {faPenToSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  faPenToSquare=faPenToSquare;

}
