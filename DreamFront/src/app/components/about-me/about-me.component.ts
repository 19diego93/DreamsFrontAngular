import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  miPorfolio: any;
  constructor(private datosPorfolio: PorfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
       this.miPorfolio = data;
    });
  }
}
