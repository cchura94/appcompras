import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() producto: any = {
    titulo: 'Computadora HP',
    detalle: 'Marca HP, ram 16, i7',
    estado: true,
    imagen: '',
  };

  constructor() {}

  cambiar() {
    //alert(this.producto.titulo);
    this.producto.estado = false;
  }
}
