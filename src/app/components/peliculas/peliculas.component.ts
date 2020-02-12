import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  
  public titulo: string;
  public peliculas: Pelicula[];
  
  //Asigna un valor a diferentes propiedades de clase(pero no tiene lógica)
  constructor() { 
    this.titulo = "Componente peliculas";
    this.peliculas =[
      new Pelicula("Akira",2019,"https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_.jpg"),
      new Pelicula("Los vengadores",2018, "https://i.kinja-img.com/gawker-media/image/upload/s--LzPwyqfc--/c_scale,f_auto,fl_progressive,q_80,w_800/zhytoc8m51v2shw5trik.jpg"),
      new Pelicula("Batman vs Superman",2015,"https://images-na.ssl-images-amazon.com/images/I/911RR0tzL2L._SL1500_.jpg"),
     
     /*Otra forma de hacerlo*/ 
     /*
      {year: 2019,title: "Akira", image: "https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_.jpg"},
      {year: 2018,title: "Los vengadores", image: "https://i.kinja-img.com/gawker-media/image/upload/s--LzPwyqfc--/c_scale,f_auto,fl_progressive,q_80,w_800/zhytoc8m51v2shw5trik.jpg"},
      {year: 2015,title:  "Batman vs Superman", image: "https://images-na.ssl-images-amazon.com/images/I/911RR0tzL2L._SL1500_.jpg"},
      {year: 2011,title:  "Batman vs Superman 2", image: "https://images-na.ssl-images-amazon.com/images/I/911RR0tzL2L._SL1500_.jpg"}
    */
    ];
  }

  //Aqui se puede meter logica
  ngOnInit() {
    console.log(this.peliculas);
    console.log("Componente iniciado!!");
  }
  //
  ngDoCheck(){
    console.log("DoCheck lanzado!!");
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnDestroy(){
    console.log("EL COMPONENTE SE VA A ELIMINAR");
  }

}
