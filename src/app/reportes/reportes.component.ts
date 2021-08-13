import { Component, OnInit } from '@angular/core';
import { Categoria } from '../domain/Categoria';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  public categorias : Categoria[] = [];
  readonly tituloDetalle = "Selecciona una categoría para ver los reportes";
  public tituloDetalleMostrado = "Selecciona una categoría para ver los reportes";

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      let categoria = new Categoria(
          {
            id: i,
            nombre: "categoria  " + i, 
            icono: "folder" + i, 
            iconoSeleccionado: "folder" + "-seleccionado",
            iconoMostrado: "folder" + i, 
        } );
      this.categorias.push(categoria);
    }
  }

  seleccionarCategoria(categoria : Categoria) {
    console.log("dasd");
    this.categorias.forEach(cat => { 
      if (categoria.getId() != cat.getId()) 
      {
        cat.setIconoMostrado(cat.getIcono())
      }
    })
    if (categoria.getIconoMostrado().includes("seleccionado")) {
      categoria.setIconoMostrado(categoria.getIcono());
      this.tituloDetalleMostrado = this.tituloDetalle;
    }else {
      categoria.setIconoMostrado(categoria.getIconoSeleccionado());
      this.tituloDetalleMostrado = "Por desarrollar"
    }
    
  }

}
