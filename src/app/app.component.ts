import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appcompras';
  productos: any[] = [
    {
      titulo: 'Escritorio',
      detalle: '',
      estado: true,
      imagen: 'assets/angular.png',
    },
    {
      titulo: 'Mesa',
      detalle: 'Mesa de madera',
      estado: true,
      imagen: 'assets/javascript.png',
    },
    {
      titulo: 'Silla',
      detalle: 'Silla de Madera',
      estado: true,
      imagen: 'assets/laravel.png',
    },
  ];

  categorias: string[] = ['Muebles', 'Juguetes', 'Electronico'];
}
