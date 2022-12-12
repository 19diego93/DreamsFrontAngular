import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
constructor(private datosPorfolio:PorfolioService){}

ngOnInit(): void {
  this.datosPorfolio.obtenerDatos();
}
}
