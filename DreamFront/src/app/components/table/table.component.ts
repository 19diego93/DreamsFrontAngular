import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  proyectList: any;
  constructor(private datosPorfolio: PorfolioService) {}
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      console.log(data)
      this.proyectList = data.proyectList;
    });
  }
}
