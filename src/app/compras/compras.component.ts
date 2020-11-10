import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
})
export class ComprasComponent implements OnInit {
  productoForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    detalle: new FormControl('', Validators.required),
    estado: new FormControl(true),
    imagen: new FormControl('assets/angular.png'),
  });

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

  lista_compras: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  addCompra(prod: any) {
    //alert(prod.titulo);
    this.lista_compras.push(prod);
  }

  guadarProducto() {
    this.productos.push(this.productoForm.value);
  }
}
