import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from './primer/primer.component';
import { ComprasComponent } from './compras/compras.component';
import { ItemComponent } from './item/item.component';
import { ProductoComponent } from './producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    ComprasComponent,
    ItemComponent,
    ProductoComponent,
    InicioComponent,
    ContactoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
